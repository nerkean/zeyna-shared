import mongoose, { Schema, model, Document } from 'mongoose';

export interface ISubscription extends Document {
    userId: string;
    guildId: string;
    roleId: string;
    tier: string;
    expiresAt: Date;
}

const subscriptionSchema = new Schema<ISubscription>({
    userId: { type: String, required: true },
    guildId: { type: String, required: true },
    roleId: { type: String, required: true },
    tier: { type: String, default: 'VIP' },
    expiresAt: { type: Date, required: true }
});

subscriptionSchema.index({ expiresAt: 1 });

export const Subscription = (mongoose.models.Subscription as mongoose.Model<ISubscription>) || model<ISubscription>('Subscription', subscriptionSchema);
export default Subscription;
