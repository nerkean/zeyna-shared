import mongoose, { Schema, model, Document } from 'mongoose';

export interface IRecruitment extends Document {
    guildId: string;
    recruitmentId: string;
    title: string;
    description?: string;
    roleId: string;
    publicChannelId: string;
    adminChannelId: string;
    messageId: string;
    questions: string[];
    applicants: string[];
    status: 'active' | 'ended';
}

const recruitmentSchema = new Schema<IRecruitment>({
    guildId: { type: String, required: true },
    recruitmentId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    roleId: { type: String, required: true },
    publicChannelId: { type: String, required: true },
    adminChannelId: { type: String, required: true },
    messageId: { type: String, required: true },
    questions: { type: [String], required: true },
    applicants: { type: [String], default: [] },
    status: { type: String, default: 'active' }
});

export const Recruitment = (mongoose.models.Recruitment as mongoose.Model<IRecruitment>) || model<IRecruitment>('Recruitment', recruitmentSchema);
export default Recruitment;
