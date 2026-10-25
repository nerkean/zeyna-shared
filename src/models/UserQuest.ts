import mongoose, { Document, Schema } from 'mongoose';

export type QuestActionType = 'messages' | 'voice' | 'daily' | 'shop_buy' | 'craft' | 'lootbox' | 'inventory_use' | 'casino' | 'work' | 'rob';
export type QuestPeriod = 'daily' | 'weekly' | 'monthly' | 'season';

export interface IQuest {
    id: string;
    type: QuestActionType;
    target: number;
    progress: number;
    rewardStars: number;
    rewardXP: number;
    completed: boolean;
    description: string;
    period: QuestPeriod;
}

export interface IUserQuest extends Document {
    userId: string;
    guildId: string;
    quests: IQuest[];
    lastDailyGenerated: Date;
    lastWeeklyGenerated: Date;
    lastMonthlyGenerated: Date;
    lastDailyReroll?: Date;
    dailyAllBonusClaimed?: boolean;
}

const QuestSchema = new Schema<IQuest>({
    id: { type: String, required: true },
    type: { type: String, required: true },
    target: { type: Number, required: true },
    progress: { type: Number, default: 0 },
    rewardStars: { type: Number, default: 0 },
    rewardXP: { type: Number, default: 0 },
    completed: { type: Boolean, default: false },
    description: { type: String, required: true },
    period: { type: String, enum: ['daily', 'weekly', 'monthly', 'season'], required: true }
});

const UserQuestSchema = new Schema<IUserQuest>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    quests: [QuestSchema],
    lastDailyGenerated: { type: Date, default: () => new Date(0) },
    lastWeeklyGenerated: { type: Date, default: () => new Date(0) },
    lastMonthlyGenerated: { type: Date, default: () => new Date(0) },
    lastDailyReroll: { type: Date, default: () => new Date(0) },
    dailyAllBonusClaimed: { type: Boolean, default: false }
});

UserQuestSchema.index({ userId: 1, guildId: 1 }, { unique: true });

export const UserQuest = (mongoose.models.UserQuest as mongoose.Model<IUserQuest>) || mongoose.model<IUserQuest>('UserQuest', UserQuestSchema);
export default UserQuest;
