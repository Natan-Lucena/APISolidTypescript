import { inject, injectable } from "tsyringe";

import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

@injectable()
class ListCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoriesRepository: ICategoryRepository,
    ) {}

    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list();
        return categories;
    }
}

export { ListCategoryUseCase };
