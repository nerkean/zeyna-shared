import mongoose from 'mongoose';

const staffBlacklistSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    userId: { type: String, required: true, index: true },
    username: { type: String, default: 'Пользователь' },
    avatar: { type: String, default: null },
    reason: { type: String, required: true },
    addedBy: {
        id: { type: String, required: true },
        username: { type: String, required: true }
    },
    expiresAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now }
});

staffBlacklistSchema.index({ guildId: 1, userId: 1 }, { unique: true });

export const StaffBlacklist = mongoose.models.StaffBlacklist || mongoose.model('StaffBlacklist', staffBlacklistSchema);
export default StaffBlacklist;
