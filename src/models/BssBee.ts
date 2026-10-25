import mongoose from "mongoose";

const bssBeeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameRu: { type: String, default: "" },
  color: { type: String, enum: ["blue", "red", "white", "colorless"], default: "colorless" },
  rarity: {
    type: String,
    enum: ["common", "rare", "epic", "legendary", "mythic", "event"],
    default: "mythic",
  },
  imageUrl: { type: String, required: true },
  giftedBonus: { type: String, default: "" },
  roleTag: { type: String, default: "" },
  order: { type: Number, default: 0 },
});

export const BssBee = mongoose.models.BssBee || mongoose.model("BssBee", bssBeeSchema);
export default BssBee;
