import { inject, injectable } from "tsyringe";

import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoriesRepository: ICategoryRepository,
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists =
            await this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists!");
        }
        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
