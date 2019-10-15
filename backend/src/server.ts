import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

dotenv.config();

const app = express();

mongoose.connect(
	`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0-oilsa.mongodb.net/semana09?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

app.use(express.json());
app.use(routes);

app.listen(5000);
