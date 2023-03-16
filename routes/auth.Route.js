import express from "express";
import { createUser } from "../controller/user.Control";
const router = express.Router({ mergeParams: true });

router.post("/register", createUser);

export default router;
