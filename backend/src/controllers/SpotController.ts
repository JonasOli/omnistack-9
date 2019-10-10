import { Request, Response } from "express";
import { Spot } from "../models/Spot";
import { User } from "../models/User";

export const index = async (req: Request, res: Response) => {
	const { tech } = req.query;

	const spots = await Spot.find({ techs: tech });

	res.json(spots);
};

export const store = async (req: Request, res: Response) => {
	const { filename } = req.file;
	const { company, techs, price } = req.body;
	const { user_id } = req.headers;

	const user = await User.findById(user_id);

	if (!user) {
		return res.status(400).json({ error: "user does not exist" });
	}

	const spot = await Spot.create({
		user: user_id,
		thumbnail: filename,
		company,
		price,
		techs: techs.split(",").map((tech: any) => tech.trim())
	});

	return res.json(spot);
};
