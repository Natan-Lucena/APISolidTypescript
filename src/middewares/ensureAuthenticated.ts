import { Response, Request, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error("Token missing");
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: userID } = verify(
            token,
            "923aea88786448f4a8840c30f0327f8f",
        ) as IPayload;

        const userRepository = new UserRepository();
        const user = userRepository.findById(userID);
        if (!user) {
            throw new Error("User does not exists");
        }

        next();
    } catch {
        throw new Error("Invalid token");
    }
}
