import { CategoryRepository } from "../../repositories/implementantions/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase,
);
export { listCategoriesController };