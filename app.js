import express from "express";
import mongoose from "mongoose";
import scoresRouter from "./routes/score.routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/scores", scoresRouter);

startConnection()
	.then(() => {
		console.log("Connected to database");
		app.listen(process.env.PORT, () => {
			console.log(`Server running on port ${process.env.PORT}`);
		});
	})
	.catch((err) => console.log(err));

async function startConnection() {
	await mongoose.connect(process.env.DB_URL);
}
