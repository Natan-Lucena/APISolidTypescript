import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", (req, res) => {
    return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    return importCategoryController.handle(req, res);
});

export { categoriesRoutes };
