import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const createCategoryService = new CreateCategoryService(
        categoriesRepository,
    );
    createCategoryService.execute({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categoriesRoutes };
