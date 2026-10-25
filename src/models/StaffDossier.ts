import mongoose from 'mongoose';

const staffLogEntrySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['INCIDENT', 'COMMENDATION', 'PROMOTION', 'DEMOTION', 'HIRED', 'DISMISSED', 'LOA'],
        default: 'INCIDENT'
    },
    title: { type: String, required: true },
    description: { type: String, default: '' },
    pointsDelta: { type: Number, default: 0 },
    pointsAfter: { type: Number, default: 10 },
    evidenceUrls: [{ type: String }],
    adminId: { type: String, required: true },
    adminName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const staffDossierSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    userId: { type: String, required: true, index: true },
    competenceScore: { type: Number, default: 10, min: 0, max: 10 },
    appointedAt: { type: Date, default: Date.now },
    appointedBy: { type: String, default: 'Администрация' },
    initialRole: { type: String, default: '' },
    adminNotes: { type: String, default: '' },
    leaveOfAbsence: {
        active: { type: Boolean, default: false },
        reason: { type: String, default: '' },
        until: { type: Date, default: null }
    },
    history: [staffLogEntrySchema],
    updatedAt: { type: Date, default: Date.now }
});

staffDossierSchema.index({ guildId: 1, userId: 1 }, { unique: true });

export const StaffDossier = mongoose.models.StaffDossier || mongoose.model('StaffDossier', staffDossierSchema);
export default StaffDossier;
