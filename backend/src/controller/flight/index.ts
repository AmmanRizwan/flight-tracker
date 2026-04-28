import { NextFunction, Request, Response } from "express";
import { getFlights } from "../../service/flight";
import { logger } from "../../util/logger";

interface IFlightData {
    times: number,
    states: any[][]
}

const flightStreamV2 = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
        res.setHeader("X-Accel-Buffering", "no");
        
        const fetch = async () => {
            try {
                const flights: IFlightData = await getFlights();
                const data = flights.states;
                logger.info("API is fetching from the server");
                res.write(`data: ${JSON.stringify(data)}\n\n`);
            }
            catch (err: any) {
                console.log(err);
                logger.warn("Fetching Error:", err);
            }
        }

        fetch();
        const intervalId = setInterval(await fetch, 15000);

        req.on('close', () => clearInterval(intervalId));
    }
    catch (err: any) {
        // next(err);
        console.log(err);
        logger.warn(`Fetching Error: ${err}`)
    }
}

// Not working for recursive
const flightStreamV1 = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");
        
        const fetch = async () => {
            try {
                const flights: IFlightData = await getFlights();
                const data = flights.states;
                res.write(`data: ${JSON.stringify(data)}\n\n`);
            }
            catch (err) {
                next(err);
            }
        }

        fetch();
        const intervalId = setInterval(await fetch, 15000);

        req.on('close', () => clearInterval(intervalId));
    }
    catch (err) {
        next(err);
    }
}

export {
    flightStreamV1,
    flightStreamV2
}