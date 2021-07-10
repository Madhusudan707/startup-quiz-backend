const express = require("express");
const router = express.Router();
const { Score } = require("../models/score.model");
const _ = require("lodash");

/* 1. Normal Get and Post */
router
  .route("/")


  .post(async (req, res) => {
    try {
      const Scores = req.body;
      const NewScore = new Score(Scores);
      const savedScore= await NewScore.save();
      res.json({ success: true, UserActivity: savedScore });
    } catch (err) {
      res
        .status(500)
        .json({
          success: false,
          message: "unable to user activity",
          errorMessage: err.message,
        });
    }
  });

module.exports = router;
