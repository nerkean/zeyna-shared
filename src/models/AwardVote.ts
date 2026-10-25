import mongoose from 'mongoose';

const awardVoteSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'AwardCategory', required: true, index: true },
    nomineeId: { type: String, required: true },
    userId: { type: String, required: true, index: true },
    username: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now }
});

awardVoteSchema.index({ guildId: 1, categoryId: 1, userId: 1 }, { unique: true });

export const AwardVote = mongoose.models.AwardVote || mongoose.model('AwardVote', awardVoteSchema);
export default AwardVote;
