import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";

interface IRequest {
    name: string;
    description: string;
    daily_Rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    categoryId: string;
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository") private carsRepository: ICarsRepository,
    ) {}

    async execute({
        name,
        description,
        daily_Rate,
        license_plate,
        fine_amount,
        brand,
        categoryId,
    }: IRequest): Promise<Car> {
        const carAlreadyExists =
            await this.carsRepository.findByLicensePlate(license_plate);
        if (carAlreadyExists) {
            throw new AppError("Car already exists!");
        }

        const car = await this.carsRepository.create({
            name,
            description,
            daily_Rate,
            license_plate,
            fine_amount,
            brand,
            categoryId,
        });
        return car;
    }
}

export { CreateCarUseCase };
