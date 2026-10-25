import mongoose, { Schema, model, Document } from 'mongoose';

export interface IMarriage extends Document {
    guildId: string;
    partner1Id: string;
    partner2Id: string;
    marriedAt: Date;
    familyBalance: number;
    lovePoints: number;
    level: number;
    lastDateAt?: Date | null;
}

const marriageSchema = new Schema<IMarriage>({
    guildId: { type: String, required: true },
    partner1Id: { type: String, required: true },
    partner2Id: { type: String, required: true },
    marriedAt: { type: Date, default: Date.now },
    familyBalance: { type: Number, default: 0 },
    lovePoints: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    lastDateAt: { type: Date, default: null }
});

marriageSchema.index({ guildId: 1, partner1Id: 1 });
marriageSchema.index({ guildId: 1, partner2Id: 1 });

export const Marriage = (mongoose.models.Marriage as mongoose.Model<IMarriage>) || model<IMarriage>('Marriage', marriageSchema);
export default Marriage;
