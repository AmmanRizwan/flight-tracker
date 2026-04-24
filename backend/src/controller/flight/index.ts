import { NextFunction, Request, Response } from "express";

const flightStreamV1 = async (req: Request, res: Response, next: NextFunction) => {
    try {

    }
    catch (err) {
        next(err);
    }
}

export {
    flightStreamV1
}