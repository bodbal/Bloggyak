import db from "./data.js"

db.prepare(`CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT,
    content TEXT,
    FOREIGN KEY (userId) REFERENCES users(id))`).run();

    export const getPost = () => db.prepare("SELECT * FROM posts").get();
export const getPostById = (id) =>
  db.prepare(`SELECT * FROM posts WHERE id = ${id}`).get(id);s
export const savePost = (userId, title, content) =>
  db
    .prepare(`INSERT INTO posts (userId = ?, title = ?, content = ?), values = (?,?)`)
    .run(userId, title, content);
export const updatePost = (id, userId,title, content) =>
  db
    .prepare(`UPDATE posts (SET userId = ?, email = ?, password = ?), WHERE id = ${id}`)
    .run(id,userId, title, content);
export const deletePost = (id) =>
  db.prepare(`DELETE FROM posts WHERE id = ${id}`).run(id);
export const getPostByEmail = (email) =>
  db.prepare(`SELECT * FROM posts WHERE email = ?`).get(email);