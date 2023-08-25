import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const category = new Category();
    Object.assign(category, {
        name,
        description,
        create_at: new Date(),
    });

    console.log(category);
    categories.push(category);
    return res.status(201).send({ category });
});

export { categoriesRoutes };
