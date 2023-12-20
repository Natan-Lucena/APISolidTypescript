import { injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    userId: string;
    carId: string;
    expectedReturnDate: Date;
}

// @injectable()
class CreateRentalUseCase {
    constructor(private rentalsRepository: IRentalsRepository) {}

    async execute({
        userId,
        carId,
        expectedReturnDate,
    }: IRequest): Promise<Rental> {
        const carUnavailable =
            await this.rentalsRepository.findOpenRentalByCar(carId);
        if (carUnavailable) {
            throw new AppError("Car is unavailable");
        }
        const rentalOpenToUser =
            await this.rentalsRepository.findOpenRentalByUser(userId);
        if (rentalOpenToUser) {
            throw new AppError("User already have a open rental");
        }

        const rental = await this.rentalsRepository.create({
            userId,
            carId,
            expectedReturnDate,
        });
        return rental;
    }
}
export { CreateRentalUseCase };
