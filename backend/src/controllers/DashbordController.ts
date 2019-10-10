import { Request, Response } from "express";
import { Spot } from "../models/Spot";

export const show = async (req: Request, res: Response) => {
	const { user_id } = req.headers;

	const spots = await Spot.find({ user: user_id });

	return res.json(spots);
};
