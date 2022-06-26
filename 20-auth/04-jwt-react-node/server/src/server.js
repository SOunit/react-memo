const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

const app = express();

// json req.body
app.use(express.json());
app.use(cors());

// FIXME: change to mongodb
const users = [];

app.post("/signup", (req, res) => {
  const user = req.body;
  console.log(user);
});

app.post("/login", () => {});

app.get("/", (req, res) => {
  res.json({ test: "hello" });
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
