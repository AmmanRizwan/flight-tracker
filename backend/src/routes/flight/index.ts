import { Router } from "express";

import { flightStreamV2, flightStreamV3 } from "../../controller/flight";

const router = Router();

router.route("/").get(flightStreamV3);

export default router;