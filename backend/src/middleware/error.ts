import { NextFunction, Request, Response } from "express";
import { showError } from "../util/error";

const handleError = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    showError(err, res);
}

export { 
    handleError
}