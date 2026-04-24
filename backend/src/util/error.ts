import { Response } from "express"

interface CustomError extends Error {
    statusCode: number
}

const customError = (message: string, statusCode: number) => {
    const error = new Error(message) as CustomError;
    error.statusCode = statusCode;

    throw error;
}

const showError = (err: unknown, res: Response) => {
    if (typeof err === "object" && err !== null && "message" in err) {
        const error = err as CustomError;
        const statusCode = error.statusCode || 500;

        return res.status(statusCode).json({ error: error });
    }

    return res.status(500).json({ error: "Internal Server Error!" });
}

export {
    customError,
    showError
}