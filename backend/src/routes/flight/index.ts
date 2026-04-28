import { Router } from "express";

import { flightStreamV2 } from "../../controller/flight";

const router = Router();

router.route("/").get(flightStreamV2);

export default router;