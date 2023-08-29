import { CategoryRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesRepository: CategoryRepository) {}

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryService };
