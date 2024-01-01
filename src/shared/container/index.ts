import { container } from "tsyringe";

import "./providers";
import { UserRepository } from "../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { CarsImageRepository } from "../../modules/cars/infra/typeorm/repositories/CarsImageRepository";
import { CarsRepository } from "../../modules/cars/infra/typeorm/repositories/CarsRepository";
import { CategoryRepository } from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/typeorm/repositories/SpecificationsRepository";
import { ICarsImageRepository } from "../../modules/cars/repositories/ICarsImageRepository";
import { ICarsRepository } from "../../modules/cars/repositories/ICarsRepository";
import { ICategoryRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { RentalsRepository } from "../../modules/rentals/infra/typeorm/repositories/RentalsRepository";
import { IRentalsRepository } from "../../modules/rentals/repositories/IRentalsRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository,
);
container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationsRepository,
);
container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsImageRepository>(
    "CarsImageRepository",
    CarsImageRepository,
);
container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",
    RentalsRepository,
);
