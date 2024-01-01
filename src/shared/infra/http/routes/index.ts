import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { carsRoutes } from "./cars.routes";
import { categoriesRoutes } from "./categories.routes";
import { rentalRoutes } from "./rental.routes";
import { specificationRoutes } from "./specifications.routes";
import { userRoutes } from "./user.routes";

const router = Router();

router.use("/user", userRoutes);
router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationRoutes);
router.use("/cars", carsRoutes);
router.use("/rentals", rentalRoutes);
router.use(authenticateRoutes);

export { router };
