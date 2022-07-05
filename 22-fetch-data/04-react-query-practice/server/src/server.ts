import express from "express";
import * as db from "./services/db.services";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({ hello: "hello" });
});

db.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`listen on ${PORT}`);
    });
  }
});
