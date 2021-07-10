const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScoreSchema = new mongoose.Schema(
  {
    quiz: { type: Schema.Types.ObjectId, ref: "Quizes" },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    score: [
      {
        attempted: Number,
        skipped: Number,
        right: Number,
        wrong: Number,
        negativePoint: { type: Number, default: -2 },
        postivePoint: { type: Number, default: 5 },
      },
    ],
  },
  { timestamps: true }
);

const Score = mongoose.model("Score", ScoreSchema);
module.exports = { Score };
