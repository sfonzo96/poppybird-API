import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
	name: {
		type: String,
		default: "Anónimo",
		min: 2,
		max: 20,
	},
	score: {
		type: Number,
		required: true,
		min: 0,
	},
});

const ScoreModel = mongoose.model("Scores", scoreSchema);
export default ScoreModel;
