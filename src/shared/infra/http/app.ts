import "reflect-metadata";
import express, { Response, Request, NextFunction } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import "express-async-errors";
// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUi from "swagger-ui-express";

import "../../container";
import swaggerFile from "../../../swagger.json";
import { AppError } from "../../errors/AppError";
import createConnection from "../typeorm";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({
        status: "error",
        message: `Internal Server Error - ${err.message}`,
    });
});

export { app };
