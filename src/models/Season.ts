import mongoose, { Schema, model, Document } from 'mongoose';

export type FactionKey = 'neon' | 'quantum' | 'iron';

export type FactionPerkType =
    | 'shop_discount'
    | 'bp_xp_boost'
    | 'casino_cashback'
    | 'work_boost'
    | 'msg_stars_boost'
    | 'voice_stars_boost';

export interface IFactionConfig {
    name: string;
    emoji: string;
    color: number;
    description: string;
    perkType: FactionPerkType;
    perkValue: number;
}

export interface ISeasonReward {
    level: number;
    type: 'item' | 'stars';
    amount: number;
    itemId?: string | null;
}

export interface ISeason extends Document {
    seasonId: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    themeColor: string;
    isActive: boolean;
    freeRewards: ISeasonReward[];
    premiumRewards: ISeasonReward[];
    announcementChannelId: string | null;
    rewardPreset?: string;
    factions: {
        neon: IFactionConfig;
        quantum: IFactionConfig;
        iron: IFactionConfig;
    };
}

export const PERK_LABELS: Record<FactionPerkType, (val: number) => string> = {
    shop_discount: (val) => `-${Math.round(val * 100)}% на все товары в /shop`,
    bp_xp_boost: (val) => `+${Math.round(val * 100)}% ко всему получаемому опыту БП`,
    casino_cashback: (val) => `+${Math.round(val * 100)}% кэшбек при поражении в /casino и /tower`,
    work_boost: (val) => `+${Math.round(val * 100)}% к зарплате на сменах в /work`,
    msg_stars_boost: (val) => `+${val} ⭐ дополнительно за сообщения в чате`,
    voice_stars_boost: (val) => `+${val} ⭐ дополнительно за каждую минуту в войсе`
};

export const DEFAULT_FACTIONS: Record<FactionKey, IFactionConfig> = {
    neon: {
        name: 'Эскиз',
        emoji: '✏️',
        color: 0x9b59b6,
        description: 'Мастера быстрых зарисовок, стрит-арта и концепт-дизайна',
        perkType: 'shop_discount',
        perkValue: 0.05
    },
    quantum: {
        name: 'Палитра',
        emoji: '🎨',
        color: 0x3498db,
        description: 'Классическая живопись, идеальная работа с цветом и тенями',
        perkType: 'bp_xp_boost',
        perkValue: 0.15
    },
    iron: {
        name: 'Холст',
        emoji: '🖼️',
        color: 0xe74c3c,
        description: 'Авангард и экспрессия. Те, кто не боится испачкать руки в краске',
        perkType: 'casino_cashback',
        perkValue: 0.05
    }
};

export function getSeasonFactions(season?: any): Record<FactionKey, IFactionConfig> {
    if (!season || !season.factions) return DEFAULT_FACTIONS;
    return {
        neon: season.factions.neon?.name ? season.factions.neon : DEFAULT_FACTIONS.neon,
        quantum: season.factions.quantum?.name ? season.factions.quantum : DEFAULT_FACTIONS.quantum,
        iron: season.factions.iron?.name ? season.factions.iron : DEFAULT_FACTIONS.iron
    };
}

export function getTotalSeasonXP(level: number, currentXp: number): number {
    const safeLevel = Math.max(1, level || 1);
    const completedLevels = Math.min(safeLevel - 1, 99);
    const levelsXp = completedLevels * 500 + 100 * ((completedLevels * (completedLevels + 1)) / 2);
    return levelsXp + (currentXp || 0);
}

const factionConfigSchema = new Schema<IFactionConfig>({
    name: { type: String, required: true },
    emoji: { type: String, default: '🚩' },
    color: { type: Number, default: 0x5865F2 },
    description: { type: String, default: '' },
    perkType: { type: String, default: 'bp_xp_boost' },
    perkValue: { type: Number, default: 0.1 }
}, { _id: false });

const seasonRewardSchema = new Schema<ISeasonReward>({
    level: { type: Number, required: true },
    type: { type: String, required: true },
    amount: { type: Number, required: true },
    itemId: { type: String, default: null }
}, { _id: false });

const seasonSchema = new Schema<ISeason>({
    seasonId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, default: '' },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    themeColor: { type: String, default: '#5865F2' },
    isActive: { type: Boolean, default: false },
    freeRewards: { type: [seasonRewardSchema], default: [] },
    premiumRewards: { type: [seasonRewardSchema], default: [] },
    announcementChannelId: { type: String, default: null },
    rewardPreset: { type: String, default: 'classic' },
    factions: {
        neon: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.neon }) },
        quantum: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.quantum }) },
        iron: { type: factionConfigSchema, default: () => ({ ...DEFAULT_FACTIONS.iron }) }
    }
});

export const Season = (mongoose.models.Season as mongoose.Model<ISeason>) || model<ISeason>('Season', seasonSchema);
export default Season;
