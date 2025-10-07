import db from "./data.js"

db.prepare(`CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    name TEXT,
    email TEXT,
    password TEXT
    )`).run();

export const getUsers = () => db.prepare("SELECT * FROM users").get();
export const getUserById = (id) =>
  db.prepare(`SELECT * FROM users WHERE id = ${id}`).get(id);
export const saveUser = (name,email, password) =>
  db
    .prepare(`INSERT INTO users (name = ?, email = ?, password = ?), values = (?,?)`)
    .run(name,email, password);
export const updateUser = (id, email, password) =>
  db
    .prepare(`UPDATE users (SET name = ?, email = ?, password = ?), WHERE id = ${id}`)
    .run(id, name, email, password);
export const deleteUser = (id) =>
  db.prepare(`DELETE FROM users WHERE id = ${id}`).run(id);
export const getUserByEmail = (email) =>
  db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);