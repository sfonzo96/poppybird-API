import scoreModel from "../models/score.model.js";

export default class ScoreServices {
	async getAllScores() {
		return await scoreModel.find().lean();
	}

	async createScore(score) {
		const newRecord = await scoreModel.create(score);
		return newRecord;
	}
}
