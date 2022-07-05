import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as db from "../services/db.services";

type User = {
  name: string;
  age: number;
};

const userController = {
  getUsers: (req: Request, res: Response) => {
    const users: User[] = [];

    db.getDb()
      .db()
      .collection("users")
      // this returns cursor
      .find()
      // iterate cursor with forEach
      .forEach((userDoc) => {
        // FIXME
        users.push(userDoc as any);
      })
      .then((result) => {
        console.log("result", result);
        res.json(users);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },

  getUser: (req: Request, res: Response) => {
    const { userId } = req.params;

    db.getDb()
      .db()
      .collection("users")
      .findOne({ _id: new ObjectId(userId) })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  },

  createUser: (req: Request, res: Response) => {
    const newUser = req.body;

    db.getDb()
      .db()
      .collection("users")
      .insertOne(newUser)
      .then((result) => {
        res
          .status(201)
          .json({ message: "created user", userId: result.insertedId });
      })
      .catch((err) => {
        res.status(500).json({ message: "error in create user" });
      });
  },

  updateUser: (req: Request, res: Response) => {
    const updatedUser = req.body;
    const { userId } = req.params;

    db.getDb()
      .db()
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: updatedUser })
      .then((result) => {
        res.status(201).json({ message: "updated user", userId });
      })
      .catch((err) => {
        res.status(500).json({ message: "error in update user" });
      });
  },

  deleteUser: (req: Request, res: Response) => {
    const { userId } = req.params;

    db.getDb()
      .db()
      .collection("users")
      .deleteOne({ _id: new ObjectId(userId) })
      .then((result) => {
        res.status(201).json({ message: "deleted user", userId });
      })
      .catch((err) => {
        res.status(500).json({ message: "error in delete user" });
      });
  },
};

export default userController;
