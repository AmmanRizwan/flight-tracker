import { Router } from "express";

import { flightStreamV1 } from "../../controller/flight";

const router = Router();

router.route("/").get(flightStreamV1);

export default router;