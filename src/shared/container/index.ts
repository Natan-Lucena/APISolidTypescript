import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementantions/CategoryRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementantions/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository,
);
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationsRepository,
);
