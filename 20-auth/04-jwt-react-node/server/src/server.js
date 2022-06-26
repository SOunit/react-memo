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

  console.log("newUser", newUser);

  // check data
  if (!newUser.name || !newUser.email || !newUser.password) {
    throw new Error("name, email, password is required");
  }

  // check db
  const hasUser = users.find((user) => user.email === newUser.email);
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
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });
}

app.post("/login", (req, res) => {
  const loginUser = req.body;

  // check db
  const hasUser = users.find((user) => user.email === loginUser.email);
  if (!hasUser) {
    throw new Error("User not exists");
  }

  // generate token
  const accessToken = generateAccessToken(loginUser);
  const refreshToken = jwt.sign(loginUser, process.env.REFRESH_TOKEN_SECRET);

  res.json({ accessToken, refreshToken });
});

app.get("/", (req, res) => {
  res.json({ test: "hello" });
});

app.get("/user", authenticateToken, (req, res) => {
  console.log("req.user", req.user);
  res.json({ user: req.user });
});

function authenticateToken(req, res, next) {
  // Bearer TOKEN
  const authHeader = req.headers["authorization"];

  // token = undefined or token
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // no token
    return res.sendStatus(401);
  }

  // verify token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, userFromToken) => {
    if (err) {
      // you have token, but it is invalid
      return res.sendStatus(403);
    }

    const userData = users.find((user) => user.email === userFromToken.email);

    req.user = userData;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
