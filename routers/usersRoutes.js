import express from "express";
import * as User from "../data/user.js";

const router = express.Router();

router.get("/", (req, res) => {
  const user = db.getUserById(req.params.id);
  if (!user) {
    res.status(404).json({ message: "User not found!" });
  }
  res.json(user);
});

router.get("/", (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    res.status(400).json({ message: "Invalid data" });
  }
  const salt = bcrypt.genSalt();
  const hashedPw = bcrypt.hash(password, salt);
  const saved = db.saveUser(email, hashedPw);

  const user = db.getUserById(saved.lastInsertRowid);

  res.json(user);
});

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    res.status(400).json({ message: "Invalid data" });
  }
  const salt = bcrypt.genSalt();
  const hashedPw = bcrypt.hash(password, salt);
  const saved = db.saveUser(email, hashedPw);

  const user = db.getUserById(saved.lastInsertRowid);

  res.json(user);
});

router.put("/", (req, res) => {});
const userId = db.getUserById(req.params.id);
if (!userId) {
  res.status(404).json({ message: "User not found!" });
}

const { name, email, password } = req.body;
if ((!name, !email, !password)) {
  res.status(400).json({ message: "Invalid data" });
}
const salt = bcrypt.genSalt();
const hashedPw = bcrypt.hash(password, salt);
const saved = db.saveUser(email, hashedPw);

const user = db.getUserById(saved.lastInsertRowid);

res.json(user);

router.delete("/", (req, res) => {

    const userId = db.getUserById(req.params.id);
if (!userId) {
  res.status(404).json({ message: "User not found!" });
}
});
export default router;
