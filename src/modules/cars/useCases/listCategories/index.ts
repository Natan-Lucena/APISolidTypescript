import { CategoryRepository } from "../../infra/typeorm/repositories/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = null;
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
);
export { listCategoriesController };
