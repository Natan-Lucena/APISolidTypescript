import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();
const authenticateUserControler = new AuthenticateUserController();

authenticateRoutes.post("/session", authenticateUserControler.handle);

export { authenticateRoutes };
