const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;

const app = express();

// json req.body
app.use(express.json());
app.use(cors());

// FIXME: change to mongodb
const users = [];

app.post("/signup", (req, res) => {
  const newUser = req.body;

  // check db
  const hasUser = users.find((user) => user.name === newUser.name);
  if (hasUser) {
    throw new Error("User exists");
  }

  // update db
  newUser._id = Math.random();
  users.push(newUser);

  // generate token
  const accessToken = generateAccessToken(newUser);
  const refreshToken = jwt.sign(newUser, process.env.REFRESH_TOKEN_SECRET);

  res.json({ accessToken, refreshToken });
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" });
}

app.post("/login", () => {});

app.get("/", (req, res) => {
  res.json({ test: "hello" });
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
