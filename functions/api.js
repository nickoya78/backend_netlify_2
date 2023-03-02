const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    users: [
      "userTwo: Will Smith",
      "userThree: Sara Pain",
      "userFour: Mike Tyson",
      "userFive: Bratt Pitt",
    ],
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
