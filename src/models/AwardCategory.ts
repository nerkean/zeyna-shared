import mongoose from "mongoose";

const nomineeSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    subtitle: { type: String, default: "" },
    discordUserId: { type: String, default: "" },
    imageUrl: { type: String, default: "/assets/img/avatars/default_avatar.png" },
  },
  { _id: false },
);

const awardCategorySchema = new mongoose.Schema({
  guildId: { type: String, required: true, index: true },
  title: { type: String, required: true },
  description: { type: String, default: "" },
  icon: { type: String, default: "fa-broom" },
  order: { type: Number, default: 0 },
  unlockDay: { type: Number, default: 1, min: 1, max: 7 },
  nominees: [nomineeSchema],
  winnerNomineeId: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
});

export const AwardCategory = mongoose.models.AwardCategory || mongoose.model("AwardCategory", awardCategorySchema);
export default AwardCategory;
