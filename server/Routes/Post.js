import Express  from "express";
import { createPost, getPost } from "../Controllers/Post.js";

const router=Express.Router();

router.get("/", getPost);
router.get("/", createPost);

export default router;