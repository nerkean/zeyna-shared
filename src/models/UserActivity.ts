import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUserActivity extends Document {
    userId: string;
    guildId: string;
    date: Date;
    messages: number;
    voiceMinutes: number;
    starsEarned: number;
}

const userActivitySchema = new Schema<IUserActivity>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    date: { type: Date, required: true },
    messages: { type: Number, default: 0 },
    voiceMinutes: { type: Number, default: 0 },
    starsEarned: { type: Number, default: 0 }
});

userActivitySchema.index({ userId: 1, guildId: 1, date: 1 }, { unique: true });
userActivitySchema.index({ date: 1 }, { expireAfterSeconds: 7776000 });

export const UserActivity = (mongoose.models.UserActivity as mongoose.Model<IUserActivity>) || model<IUserActivity>('UserActivity', userActivitySchema);
export default UserActivity;
