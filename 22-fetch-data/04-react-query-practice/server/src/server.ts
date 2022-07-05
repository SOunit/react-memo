import express from "express";
import * as db from "./services/db.services";
import userRouter from "./routes/userRouter";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello from express!" });
});

app.use("/users", userRouter);

db.initDb((err, db) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`listen on ${PORT}`);
    });
  }
});
