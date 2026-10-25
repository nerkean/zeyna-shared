import mongoose from 'mongoose';

const wallMessageSchema = new mongoose.Schema({
    targetUserId: { type: String, required: true, index: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
    authorAvatar: { type: String, default: '/assets/img/avatars/default_avatar.png' },
    text: { type: String, required: true, maxlength: 200 }
}, {
    timestamps: true
});

export const WallMessage = mongoose.models.WallMessage || mongoose.model('WallMessage', wallMessageSchema);
export default WallMessage;
