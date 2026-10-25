import mongoose, { Schema, model, Document } from 'mongoose';

export interface ICustomRole extends Document {
    userId: string;
    guildId: string;
    roleId: string;
    expiresAt: Date;
}

const customRoleSchema = new Schema<ICustomRole>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    roleId: { type: String, required: true },
    expiresAt: { type: Date, required: true }
}, { timestamps: true });

export const CustomRole = (mongoose.models.CustomRole as mongoose.Model<ICustomRole>) || model<ICustomRole>('CustomRole', customRoleSchema);
export default CustomRole;
