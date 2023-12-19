import { injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    userId: string;
    carId: string;
    expectedReturnDate: Date;
}

// @injectable()
class CreateRentalUseCase {
    constructor(private rentalsRepository: IRentalsRepository) {}

    async execute({ userId, carId, expectedReturnDate }: IRequest) {
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
    }
}
export { CreateRentalUseCase };
