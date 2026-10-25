import mongoose, { Schema, model, Document } from 'mongoose';

export interface IModActionLog extends Document {
    moderatorId: string;
    guildId: string;
    actionType: string;
    targetId: string;
    date: Date;
}

const modActionLogSchema = new Schema<IModActionLog>({
    moderatorId: { type: String, required: true },
    guildId: { type: String, required: true },
    actionType: { type: String, required: true },
    targetId: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

modActionLogSchema.index({ moderatorId: 1, guildId: 1, actionType: 1, date: -1 });

export const ModActionLog = (mongoose.models.ModActionLog as mongoose.Model<IModActionLog>) || model<IModActionLog>('ModActionLog', modActionLogSchema);
export default ModActionLog;
