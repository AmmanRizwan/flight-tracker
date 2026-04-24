import express, { Request, Response } from "express"
import env from "./config/env";

import Route from "./routes";
import { handleError } from "./middleware/error";

const PORT = env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({ message: "Server is ready!" });
})

app.use("/v1/api", Route);

app.use(handleError);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})