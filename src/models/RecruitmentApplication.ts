import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
    questionId: { type: String, required: true },
    questionLabel: { type: String, required: true },
    value: { type: String, required: true }
}, { _id: false });

const recruitmentApplicationSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'RecruitmentForm', required: true, index: true },
    formTitle: { type: String, required: true },
    targetStaffRole: { type: String, default: '' },
    isAuthenticated: { type: Boolean, default: true },
    userId: { type: String, default: null, index: true },
    username: { type: String, required: true },
    avatar: { type: String, default: null },
    discordContact: { type: String, default: '' },
    userStatsSnapshot: {
        level: { type: Number, default: 1 },
        stars: { type: Number, default: 0 },
        totalMessages: { type: Number, default: 0 },
        totalVoiceMinutes: { type: Number, default: 0 },
        mutesIssued: { type: Number, default: 0 },
        warningsReceived: { type: Number, default: 0 }
    },
    answers: [answerSchema],
    status: {
        type: String,
        enum: ['PENDING', 'INTERVIEW', 'ACCEPTED', 'REJECTED'],
        default: 'PENDING',
        index: true
    },
    reviewedBy: {
        id: { type: String, default: null },
        username: { type: String, default: null },
        role: { type: String, default: null }
    },
    reviewComment: { type: String, default: '' },
    reviewedAt: { type: Date, default: null },
    createdAt: { type: Date, default: Date.now, index: true }
});

export const RecruitmentApplication = mongoose.models.RecruitmentApplication || mongoose.model('RecruitmentApplication', recruitmentApplicationSchema);
export default RecruitmentApplication;
