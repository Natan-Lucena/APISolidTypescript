import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            create_at: new Date(),
        });

        console.log(category);
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name,
        );
        return category;
    }
}
export { CategoryRepository };
