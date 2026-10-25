import mongoose, { Schema, model, Document } from 'mongoose';

export interface IMute extends Document {
    userId: string;
    guildId: string;
    moderatorId: string;
    reason: string;
    expiresAt: Date | null;
    hasAppealed: boolean;
}

const muteSchema = new Schema<IMute>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    moderatorId: { type: String, required: true },
    reason: { type: String, default: 'Причина не указана' },
    expiresAt: { type: Date, default: null },
    hasAppealed: { type: Boolean, default: false }
}, { timestamps: true });

muteSchema.index({ userId: 1, guildId: 1 });
muteSchema.index({ expiresAt: 1 });

export const Mute = (mongoose.models.Mute as mongoose.Model<IMute>) || model<IMute>('Mute', muteSchema);
export default Mute;
