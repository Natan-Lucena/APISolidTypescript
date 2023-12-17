import { AppError } from "../../../../shared/errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryReposityInMemory: CategoryRepositoryInMemory;

describe("Create Category", () => {
    beforeEach(() => {
        categoryReposityInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryReposityInMemory,
        );
    });
    it("Should be able to create a new category", async () => {
        const category = {
            name: "categoryTest",
            description: "CategoryDescriptionTest",
        };

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });
        const categoryCreated = await categoryReposityInMemory.findByName(
            category.name,
        );
        expect(categoryCreated).toHaveProperty("id");
    });

    it("Should not be able to create a new category with same name", async () => {
        const category = {
            name: "categoryTest",
            description: "CategoryDescriptionTest",
        };
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });
        try {
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});
