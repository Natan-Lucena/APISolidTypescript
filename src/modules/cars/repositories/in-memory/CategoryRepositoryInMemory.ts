import { Category } from "../../infra/typeorm/entities/Category";
import {
    ICategoryRepository,
    ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(
            (category) => category.name === name,
        );
        return category;
    }
    async list(): Promise<Category[]> {
        return this.categories;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = new Category();
        Object.assign(category, { name, description });
        this.categories.push(category);
    }
}
export { CategoryRepositoryInMemory };
