import express from "express";
import ScoreServices from "../services/scores.services.js";

const scoreService = new ScoreServices();
const scoresRouter = express.Router();

scoresRouter.get("/", async (req, res) => {
	try {
		const scores = await scoreService.getAllScores();

		res.status(200).json(scores);
	} catch (error) {}
});

scoresRouter.post("/", async (req, res) => {
	try {
		const { record } = req.body;

		const recordedScore = await scoreService.createScore(record);

		res.status(201).json({
			success: true,
			recordedScore,
		});
	} catch (error) {}
});

export default scoresRouter;
