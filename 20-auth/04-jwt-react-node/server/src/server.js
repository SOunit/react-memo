const express = require("express");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.json({ test: "hello" });
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
