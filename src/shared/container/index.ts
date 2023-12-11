import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository,
);
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationsRepository,
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
