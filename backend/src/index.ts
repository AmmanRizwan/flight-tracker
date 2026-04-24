import express, { Request, Response } from "express"
import env from "./config/env";
import cors from "cors";

import Route from "./routes";
import { handleError } from "./middleware/error";

const PORT = env.PORT;

const app = express();


app.use(cors({
    origin: env.CORS.ORIGIN as string,
    methods: env.CORS.METHODS.split(","),
    credentials: Boolean(env.CORS.CREDENTIAL as string),
    maxAge: parseInt(env.CORS.AGE as string)
}))
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