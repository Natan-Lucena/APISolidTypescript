import { inject, injectable } from "tsyringe";

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
    }: IRequest): Promise<void> {
        this.carsRepository.create({
            name,
            description,
            daily_Rate,
            license_plate,
            fine_amount,
            brand,
            categoryId,
        });
    }
}

export { CreateCarUseCase };
