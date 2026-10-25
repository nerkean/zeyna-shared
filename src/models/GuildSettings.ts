import mongoose, { Document, Schema } from 'mongoose';

export interface IGuildSettings extends Document {
    guildId: string;
    prefix: string;
    muteRoleId: string | null;
    moderatorRoleIds: string[];
    supporterRoleId: string | null;
    goldplayerRoleId: string | null;
    finalbossRoleId: string | null;
    vipRoleId: string | null;
    verifyRoleId: string | null;
    auditChannelId?: string | null;
    globalShopLimits: Map<string, { amountBought: number; resetAt: Date }>;
}

const GuildSettingsSchema = new Schema<IGuildSettings>({
    guildId: { type: String, required: true, unique: true },
    prefix: { type: String, default: '!' },
    muteRoleId: { type: String, default: null },
    moderatorRoleIds: { type: [String], default: [] },
    supporterRoleId: { type: String, default: null },
    goldplayerRoleId: { type: String, default: null },
    finalbossRoleId: { type: String, default: null },
    vipRoleId: { type: String, default: null },
    verifyRoleId: { type: String, default: null },
    auditChannelId: { type: String, default: null },
    globalShopLimits: {
        type: Map,
        of: new Schema({
            amountBought: { type: Number, default: 0 },
            resetAt: { type: Date, required: true }
        }, { _id: false }),
        default: {}
    }
});

export const GuildSettings = (mongoose.models.GuildSettings as mongoose.Model<IGuildSettings>) || mongoose.model<IGuildSettings>('GuildSettings', GuildSettingsSchema);
export default GuildSettings;
