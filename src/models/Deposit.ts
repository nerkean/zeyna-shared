import mongoose, { Schema, model, Document } from 'mongoose';

export interface IDeposit extends Document {
    depositId: string;
    userId: string;
    guildId: string;
    amount: number;
    planId: string;
    createdAt: Date;
    endTime: Date;
}

const depositSchema = new Schema<IDeposit>({
    depositId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    amount: { type: Number, required: true },
    planId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    endTime: { type: Date, required: true }
});

export const Deposit = (mongoose.models.Deposit as mongoose.Model<IDeposit>) || model<IDeposit>('Deposit', depositSchema);
export default Deposit;
