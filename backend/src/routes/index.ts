import { Router } from "express";

import FlightRouter from "./flight";

const router = Router();

router.use("/flight-stream", FlightRouter);

export default router;