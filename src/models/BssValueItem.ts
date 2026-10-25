import mongoose from "mongoose";

const bssValueItemSchema = new mongoose.Schema({
  itemId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  nameRu: { type: String, default: "" },
  category: {
    type: String,
    enum: ["vouchers", "cubs", "signs", "stamps", "stickers", "hives", "beequips"],
    default: "stickers",
  },
  stackBoost: { type: String, default: "" },
  imageUrl: { type: String, required: true },
  valueSigns: { type: Number, required: true, default: 1.0 },
  demand: { type: String, enum: ["high", "mid", "low"], default: "mid" },
  trend: { type: String, enum: ["rising", "stable", "falling"], default: "stable" },
  order: { type: Number, default: 0 },
  updatedBy: { type: String, default: "Система" },
  updatedAt: { type: Date, default: Date.now },
});

export const BssValueItem = mongoose.models.BssValueItem || mongoose.model("BssValueItem", bssValueItemSchema);
export default BssValueItem;
