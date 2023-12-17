import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    carId: string;
    specificationId: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
    constructor(
        @inject("CarsRepository") private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationsRepository,
    ) {}

    async execute({ carId, specificationId }: IRequest): Promise<Car> {
        const carExists = await this.carsRepository.findById(carId);

        if (!carExists) {
            throw new AppError("Car does not exists!");
        }
        const specifications =
            await this.specificationRepository.findByIds(specificationId);
        carExists.specifications = specifications;
        await this.carsRepository.create(carExists);

        return carExists;
    }
}

export { CreateCarSpecificationUseCase };
