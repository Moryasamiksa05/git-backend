import express from "express";
import {
	getLikes,
	getUserProfileAndRepos,
	likeProfile
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

// Public route to get profile & GitHub repos
router.get("/profile/:username", getUserProfileAndRepos);

// Protected routes (only for logged-in users)
router.get("/likes", ensureAuthenticated, getLikes);
router.post("/like/:username", ensureAuthenticated, likeProfile);

export default router;
