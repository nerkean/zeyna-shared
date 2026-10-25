import mongoose, { Schema, model, Document } from 'mongoose';

export interface IInventoryItem {
    itemId: string;
    amount: number;
    acquiredAt: Date;
}

export interface IActiveExpedition {
    zoneId: string | null;
    startedAt: Date | null;
    endsAt: Date | null;
}

export interface ISupplyContract {
    id: string;
    itemId: string;
    requiredAmount: number;
    rewardStars: number;
    rewardXP: number;
    completed: boolean;
}

export interface IWalletTransaction {
    type: 'in' | 'out';
    amount: number;
    reason: string;
    date: Date;
}

export interface IAwardBadge {
    categoryTitle: string;
    year: number;
    awardName: string;
    icon: string;
}

export interface IUserProfile extends Document {
    userId: string;
    guildId: string;
    username: string;
    avatar?: string | null;
    staffRole: string;
    joinedAt: Date;
    mutesIssued: number;
    isBanned: boolean;
    banReason?: string | null;
    deviceTokens: string[];
    ips: string[];
    isVerified: boolean;
    firstLoginAt?: Date;
    stars: number;
    inventory: IInventoryItem[];
    activeBackground?: string | null;
    activeFrame?: string | null;
    skipLootboxAnimation: boolean;
    xpMultiplier: number;
    xpMultiplierExpiresAt?: Date | null;
    starsMultiplier: number;
    starsMultiplierExpiresAt?: Date | null;
    luckMultiplier: number;
    luckMultiplierExpiresAt?: Date | null;
    antiMuteShields: number;
    lastDailyAt?: Date | null;
    dailyStreak: number;
    totalMessages: number;
    totalVoiceMinutes: number;
    muteNotificationsDisabled: boolean;
    transferNotifDisabled: boolean;
    dailyNotifEnabled: boolean;
    inflationNotifDisabled: boolean;
    questNotifDisabled: boolean;
    bpNotifDisabled: boolean;
    totalEarned: number;
    totalSpent: number;
    gamesPlayedToday: number;
    lastGameAt: Date | null;

    // Мини-игра "Апгрейд" (Веб-сайт)
    lastUpgraderDate?: Date | null;
    upgraderPlaysToday: number;
    upgraderTotalPlays: number;
    upgraderTotalProfit: number;

    reputation: number;
    lastReputationGivenAt?: Date | null;
    isWikiEditor: boolean;
    lastWorkAt?: Date | null;
    workShifts: number;
    lastRobAt?: Date | null;
    unlockedAchievements: string[];
    activeTitle?: string | null;
    patreonSince?: Date | null;
    lastPatreonRewardAt?: Date | null;
    lastShieldUsedAt?: Date | null;

    // Модерация комментариев и награды Dacha Awards (Веб-сайт)
    commentStrikes: number;
    commentBannedUntil?: Date | null;
    awardBadges: IAwardBadge[];

    // Личные лимиты покупок (Бот)
    personalShopLimits: Map<string, { amountBought: number; resetAt: Date }>;

    // Экспедиции, Контракты и Чековая книжка (Бот)
    activeExpedition?: IActiveExpedition;
    supplyContracts: ISupplyContract[];
    lastContractsGeneratedAt?: Date | null;
    transactions: IWalletTransaction[];
}

const inventoryItemSchema = new Schema<IInventoryItem>({
    itemId: { type: String, required: true },
    amount: { type: Number, default: 1 },
    acquiredAt: { type: Date, default: Date.now }
}, { _id: false });

const supplyContractSchema = new Schema<ISupplyContract>({
    id: { type: String, required: true },
    itemId: { type: String, required: true },
    requiredAmount: { type: Number, required: true },
    rewardStars: { type: Number, required: true },
    rewardXP: { type: Number, required: true },
    completed: { type: Boolean, default: false }
}, { _id: false });

const walletTransactionSchema = new Schema<IWalletTransaction>({
    type: { type: String, enum: ['in', 'out'], required: true },
    amount: { type: Number, required: true },
    reason: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { _id: false });

const userProfileSchema = new Schema<IUserProfile>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    username: { type: String, default: 'Игрок' },
    avatar: { type: String, default: null },
    staffRole: { type: String, default: 'Игрок' },
    joinedAt: { type: Date, default: Date.now },
    mutesIssued: { type: Number, default: 0 },
    isBanned: { type: Boolean, default: false },
    banReason: { type: String, default: null },
    deviceTokens: { type: [String], default: [] },
    ips: { type: [String], default: [] },
    isVerified: { type: Boolean, default: false },
    firstLoginAt: { type: Date },
    stars: { type: Number, default: 0 },
    inventory: { type: [inventoryItemSchema], default: [] },
    activeBackground: { type: String, default: null },
    activeFrame: { type: String, default: null },
    skipLootboxAnimation: { type: Boolean, default: false },
    xpMultiplier: { type: Number, default: 1 },
    xpMultiplierExpiresAt: { type: Date, default: null },
    starsMultiplier: { type: Number, default: 1 },
    starsMultiplierExpiresAt: { type: Date, default: null },
    luckMultiplier: { type: Number, default: 1 },
    luckMultiplierExpiresAt: { type: Date, default: null },
    antiMuteShields: { type: Number, default: 0 },
    lastDailyAt: { type: Date, default: null },
    dailyStreak: { type: Number, default: 0 },
    totalMessages: { type: Number, default: 0 },
    totalVoiceMinutes: { type: Number, default: 0 },
    muteNotificationsDisabled: { type: Boolean, default: false },
    transferNotifDisabled: { type: Boolean, default: false },
    dailyNotifEnabled: { type: Boolean, default: false },
    inflationNotifDisabled: { type: Boolean, default: false },
    questNotifDisabled: { type: Boolean, default: false },
    bpNotifDisabled: { type: Boolean, default: false },
    totalEarned: { type: Number, default: 0 },
    totalSpent: { type: Number, default: 0 },
    gamesPlayedToday: { type: Number, default: 0 },
    lastGameAt: { type: Date, default: null },
    lastUpgraderDate: { type: Date, default: null },
    upgraderPlaysToday: { type: Number, default: 0 },
    upgraderTotalPlays: { type: Number, default: 0 },
    upgraderTotalProfit: { type: Number, default: 0 },
    reputation: { type: Number, default: 0 },
    lastReputationGivenAt: { type: Date, default: null },
    isWikiEditor: { type: Boolean, default: false },
    lastWorkAt: { type: Date, default: null },
    workShifts: { type: Number, default: 0 },
    lastRobAt: { type: Date, default: null },
    unlockedAchievements: { type: [String], default: [] },
    activeTitle: { type: String, default: null },
    patreonSince: { type: Date, default: null },
    lastPatreonRewardAt: { type: Date, default: null },
    lastShieldUsedAt: { type: Date, default: null },
    commentStrikes: { type: Number, default: 0 },
    commentBannedUntil: { type: Date, default: null },
    awardBadges: [
        {
            categoryTitle: { type: String, required: true },
            year: { type: Number, default: 2026 },
            awardName: { type: String, default: 'Золотой Веник' },
            icon: { type: String, default: 'fa-broom' }
        }
    ],
    personalShopLimits: {
        type: Map,
        of: new Schema({
            amountBought: { type: Number, default: 0 },
            resetAt: { type: Date, required: true }
        }, { _id: false }),
        default: {}
    },
    activeExpedition: {
        zoneId: { type: String, default: null },
        startedAt: { type: Date, default: null },
        endsAt: { type: Date, default: null }
    },
    supplyContracts: { type: [supplyContractSchema], default: [] },
    lastContractsGeneratedAt: { type: Date, default: null },
    transactions: { type: [walletTransactionSchema], default: [] }
}, { timestamps: true });

userProfileSchema.index({ userId: 1, guildId: 1 }, { unique: true });
userProfileSchema.index({ guildId: 1, stars: -1 });
userProfileSchema.index({ guildId: 1, totalMessages: -1 });
userProfileSchema.index({ guildId: 1, totalVoiceMinutes: -1 });
userProfileSchema.index({ guildId: 1, reputation: -1 });

export const UserProfile = (mongoose.models.UserProfile as mongoose.Model<IUserProfile>) || model<IUserProfile>('UserProfile', userProfileSchema, 'user_profiles');
export default UserProfile;
