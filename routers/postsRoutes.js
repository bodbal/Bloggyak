import express from "express";
import * as Post from "../data/post.js";

const router = express.Router();

router.get("/", (req, res) => {
  const post = db.getPostById(req.params.id);
  if (!post) {
    res.status(404).json({ message: "Post not found!" });
  }
  res.json(post);
});

router.get("/", (req, res) => {
  const { userId, title, content } = req.body;
  if ((!userId, !title, !content)) {
    res.status(400).json({ message: "Invalid data" });
  }
  const post = db.getPotById(saved.lastInsertRowid);

  res.json(user);
});

router.post("/", (req, res) => {
  const { userId, title, content } = req.body;
  if ((!userId, !title, !content)) {
    res.status(400).json({ message: "Invalid data" });
  }
  const post = db.getPostById(saved.lastInsertRowid);

  res.json(post);
});

router.put("/", (req, res) => {
  const postId = db.getPostById(req.params.id);
  if (!postId) {
    res.status(404).json({ message: "Pos not found!" });
  }

  const { userId, title, content } = req.body;
  if ((!userId, !title, !content)) {
    res.status(400).json({ message: "Invalid data" });
  }
  const post = db.getPostById(saved.lastInsertRowid);

  res.json(post);
});

router.delete("/", (req, res) => {
    const { userId, title, content } = req.body;
  if ((!userId, !title, !content)) {
    res.status(400).json({ message: "Invalid data" });
  }
});
export default router;
