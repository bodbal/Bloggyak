import express from "express"
import * as User from "../data/user.js"

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Users");
})

export default router;