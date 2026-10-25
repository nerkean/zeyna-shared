import mongoose, { Document, Schema } from 'mongoose';

export type FactionType = 'neon' | 'quantum' | 'iron' | null;

export interface IBattlePass extends Document {
    userId: string;
    guildId: string;
    seasonId: string;
    xp: number;
    level: number;
    isPremium: boolean;
    claimedFreeLevels: number[];
    claimedPremiumLevels: number[];
    faction: FactionType;
}

const BattlePassSchema = new Schema<IBattlePass>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    seasonId: { type: String, required: true },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    isPremium: { type: Boolean, default: false },
    claimedFreeLevels: { type: [Number], default: [] },
    claimedPremiumLevels: { type: [Number], default: [] },
    faction: { type: String, enum: ['neon', 'quantum', 'iron', null], default: null }
});

BattlePassSchema.index({ userId: 1, guildId: 1, seasonId: 1 }, { unique: true });

export const BattlePass = (mongoose.models.BattlePass as mongoose.Model<IBattlePass>) || mongoose.model<IBattlePass>('BattlePass', BattlePassSchema);
export default BattlePass;
