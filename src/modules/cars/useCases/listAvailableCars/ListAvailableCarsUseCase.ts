import { inject, injectable } from "tsyringe";

import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    categoryId?: string;
    brand?: string;
    name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
    constructor(
        @inject("CarsRepository") private carsRepository: ICarsRepository,
    ) {}

    async execute({ categoryId, brand, name }: IRequest): Promise<Car[]> {
        const cars = await this.carsRepository.findAvaliable(
            brand,
            categoryId,
            name,
        );
        return cars;
    }
}

export { ListAvailableCarsUseCase };
