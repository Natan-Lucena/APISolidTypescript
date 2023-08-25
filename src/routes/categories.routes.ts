import { Router } from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const category = {
        name,
        description,
        id: uuidv4(),
    };
    console.log(category);
    categories.push(category);
    return res.status(201).send();
});

export { categoriesRoutes };
