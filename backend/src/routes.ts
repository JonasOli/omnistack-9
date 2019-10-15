import express from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import { show } from "./controllers/DashbordController";
import { store as sessionControllerStore } from "./controllers/SessionController";
import { index, store as spotControllerStore } from "./controllers/SpotController";
import { store as bookingControllerStore } from "./controllers/BookingController";

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", sessionControllerStore);

routes.get("/spots", index);
routes.post("/spots", upload.single("thumbnail"), spotControllerStore);

routes.get("/dashboard", show);

routes.post("/spots/:spot_id/bookings", bookingControllerStore);

export default routes;
