import { Router } from "express";

import { CreateCarController } from "../../../../modules/cars/useCases/createCar/CreateCarController";

const carsRoutes = Router();

const createCarContoler = new CreateCarController();

carsRoutes.post("/", createCarContoler.handle);

export { carsRoutes };
