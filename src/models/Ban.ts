import mongoose, { Schema, model, Document } from 'mongoose';

export interface IBan extends Document {
    userId: string;
    guildId: string;
    moderatorId: string;
    reason: string;
    expiresAt: Date;
}

const banSchema = new Schema<IBan>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    moderatorId: { type: String, required: true },
    reason: { type: String, default: 'Причина не указана' },
    expiresAt: { type: Date, required: true }
});

banSchema.index({ expiresAt: 1 });

export const Ban = (mongoose.models.Ban as mongoose.Model<IBan>) || model<IBan>('Ban', banSchema);
export default Ban;
