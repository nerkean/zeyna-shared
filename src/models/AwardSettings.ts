import mongoose from "mongoose";

const awardSettingsSchema = new mongoose.Schema({
  guildId: { type: String, required: true, unique: true },
  eventTitle: { type: String, default: "DACHA AWARDS 2026" },
  eventSubtitle: {
    type: String,
    default: "Ежегодная премия «Золотой Веник» — 7 дней голосования за лучших людей и события года",
  },
  votingOpen: { type: Boolean, default: true },
  minDaysOnServer: { type: Number, default: 30 },
  resultsRevealed: { type: Boolean, default: false },
  startTime: { type: Date, default: null },
  endTime: { type: Date, default: null },
  streamTime: { type: Date, default: null },
  streamUrl: { type: String, default: "https://discord.gg/bandazeyna" },
  updatedAt: { type: Date, default: Date.now },
});

export const AwardSettings = mongoose.models.AwardSettings || mongoose.model("AwardSettings", awardSettingsSchema);
export default AwardSettings;
