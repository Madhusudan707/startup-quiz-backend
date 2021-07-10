const express = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config()
const { initializeDBConnection } = require("./dbConfig");
const cors = require("cors");
const PORT = process.env.PORT || 3002
const app = express();


app.use(cors());
initializeDBConnection();
app.use(express.json({ extended: false }))
const user  = require("./routes/user.router")
const quiz = require("./routes/quiz.router")
const details = require("./routes/details.router")
const answer = require("./routes/answer.router")
const score = require("./routes/score.router")

app.use("/user",user)
app.use("/quiz",quiz)
app.use("/details",details)
app.use("/answer",answer)
app.use("/score",score)

app.get("/", (request, response) => {
  response.json({ hello: "Welcome to Startup Quiz" });
  // response.sendFile(__dirname+"/welcome.html");
});

/**
 * 404 Route Handler
 * Note: DO not MOVE. This should be the last route
 */
app.use((req, res) => {
  res
    .status(404)
    .json({
      success: false,
      message: "route not found on server, please check",
    });
});

/**
 * Error Handler
 * Don't move
 */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({
      success: false,
      message: "error occurred, see the errMessage key for more details",
      errorMessage: err.message,
    });
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
