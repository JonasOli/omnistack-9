import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

const app = express();

mongoose.connect(
	"mongodb+srv://jonasfissicaro:ddGhe39ERej6lpbn@cluster0-oilsa.mongodb.net/semana09?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
);

app.use(express.json());
app.use(routes);

app.listen(5000);
