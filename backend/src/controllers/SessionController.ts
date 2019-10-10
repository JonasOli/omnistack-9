import { Request, Response } from "express";
import { User } from "../models/User";

export const store = async (req: Request, res: Response) => {
	const { email } = req.body;

	let user: any = await User.findOne({ email });

	if (!user) {
		user = await User.create({ email });
	}

	return res.send(user);
};
