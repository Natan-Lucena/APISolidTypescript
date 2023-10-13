import { CategoryRepository } from "../../repositories/implementantions/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoryRepository();
    const createCategoryUseCase = new CreateCategoryUseCase(
        categoriesRepository,
    );
    const createCategoryController = new CreateCategoryController(
        createCategoryUseCase,
    );
    return createCategoryController;
};
