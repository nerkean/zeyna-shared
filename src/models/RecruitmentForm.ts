import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, default: '' },
    type: { 
        type: String, 
        enum: ['short_text', 'paragraph', 'number', 'select', 'checkbox'], 
        default: 'paragraph' 
    },
    options: [{ type: String }],
    required: { type: Boolean, default: true },
    minLength: { type: Number, default: 0 },
    maxLength: { type: Number, default: 1000 }
}, { _id: false });

const recruitmentFormSchema = new mongoose.Schema({
    guildId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, index: true },
    targetStaffRole: { type: String, default: 'Модератор' },
    shortDescription: { type: String, default: '' },
    requirements: [{ type: String }],
    icon: { type: String, default: 'fa-user-shield' },
    accentColor: { type: String, default: '#d946ef' },
    isOpen: { type: Boolean, default: true },
    deadline: { type: Date, default: null },
    maxSlots: { type: Number, default: 0 },
    requireAuth: { type: Boolean, default: true },
    minLevel: { type: Number, default: 0 },
    minMessages: { type: Number, default: 0 },
    cooldownDays: { type: Number, default: 7 },
    reviewerRoles: {
        type: [String],
        default: ['Зейн', 'Тех админ', 'Админ', 'Старший модератор']
    },
    questions: [questionSchema],
    createdBy: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const RecruitmentForm = mongoose.models.RecruitmentForm || mongoose.model('RecruitmentForm', recruitmentFormSchema);
export default RecruitmentForm;
