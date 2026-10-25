import mongoose from "mongoose";

const awardSuggestionSchema = new mongoose.Schema({
  guildId: { type: String, required: true, index: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "AwardCategory", required: true, index: true },
  categoryTitle: { type: String, default: "" },
  suggestedByUserId: { type: String, required: true },
  suggestedByUsername: { type: String, default: "" },
  candidateName: { type: String, required: true },
  candidateDiscordId: { type: String, default: "" },
  reason: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

awardSuggestionSchema.index({ guildId: 1, categoryId: 1, suggestedByUserId: 1 }, { unique: true });

export const AwardSuggestion = mongoose.models.AwardSuggestion || mongoose.model("AwardSuggestion", awardSuggestionSchema);
export default AwardSuggestion;
