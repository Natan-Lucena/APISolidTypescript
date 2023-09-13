import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/implementantions/SpecificationsRepository";
import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createSpecificationService = new CreateCategoryService(
        specificationsRepository,
    );
    createSpecificationService.execute({ name, description });
    return res.status(201).send();
});

export { specificationRoutes };
