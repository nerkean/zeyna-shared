import mongoose, { Document, Schema } from 'mongoose';

export interface IGiveaway extends Document {
    messageId: string;
    channelId: string;
    guildId: string;
    title: string;
    description: string;
    prize: string;
    winnersCount: number;
    endTime: Date;
    participants: string[];
    forcedWinners: string[];
    ended: boolean;
    requiredRoleId: string | null;
    rewardItemId: string | null;
    rewardStars: number;
    minMessages: number;
}

const GiveawaySchema = new Schema<IGiveaway>({
    messageId: { type: String, required: true, unique: true },
    channelId: { type: String, required: true },
    guildId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    prize: { type: String, required: true },
    winnersCount: { type: Number, required: true, min: 1 },
    endTime: { type: Date, required: true },
    participants: { type: [String], default: [] },
    forcedWinners: { type: [String], default: [] },
    ended: { type: Boolean, default: false },
    requiredRoleId: { type: String, default: null },
    rewardItemId: { type: String, default: null },
    rewardStars: { type: Number, default: 0 },
    minMessages: { type: Number, default: 0 }
});

export const Giveaway = (mongoose.models.Giveaway as mongoose.Model<IGiveaway>) || mongoose.model<IGiveaway>('Giveaway', GiveawaySchema);
export default Giveaway;
