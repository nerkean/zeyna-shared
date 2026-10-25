import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const auditLogSchema = new Schema({
    adminId: { type: String, required: true },
    adminName: { type: String, required: true },
    action: { type: String, required: true },
    targetId: { type: String, default: null },
    details: { type: String, required: true }
}, { timestamps: true });

auditLogSchema.index({ createdAt: -1 });

export const AuditLog = mongoose.models.AuditLog || model('AuditLog', auditLogSchema, 'audit_logs');
export default AuditLog;
