import mongoose from 'mongoose';

const violationEvidenceSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    violatorId: { type: String, required: true, index: true },
    violatorName: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['voice', 'chat', 'cheats', 'scam', 'ban_evasion', 'other'], 
        default: 'voice' 
    },
    punishment: {
        type: String,
        enum: ['ban', 'mute', 'pending'],
        default: 'mute'
    },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    timecodes: { type: String, default: '' },
    videoUrl: { type: String, required: true },
    videoSource: { type: String, enum: ['local', 'external'], default: 'local' },
    fileSize: { type: Number, default: 0 },
    staffId: { type: String, required: true },
    staffName: { type: String, required: true },
    staffRole: { type: String, default: 'Админ' },
    createdAt: { type: Date, default: Date.now }
});

export const ViolationEvidence = mongoose.models.ViolationEvidence || mongoose.model('ViolationEvidence', violationEvidenceSchema);
export default ViolationEvidence;
