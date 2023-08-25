import { Router } from "express";

import { CategoryRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return res
            .status(400)
            .json({ message: "Error: Category Already Exists" })
            .send();
    }
    categoriesRepository.create({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});

export { categoriesRoutes };
