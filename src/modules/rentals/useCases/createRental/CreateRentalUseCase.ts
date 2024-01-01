import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../repositories/IRentalsRepository";

interface IRequest {
    userId: string;
    carId: string;
    expectedReturnDate: Date;
}

@injectable()
class CreateRentalUseCase {
    constructor(
        @inject("RentalsRepository")
        private rentalsRepository: IRentalsRepository,
        @inject("DateProvider")
        private dateProvider: IDateProvider,
    ) {}

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

        const minimumHours = 24;
        const dateNow = this.dateProvider.dateNow();

        const compare = this.dateProvider.compareInHours(
            dateNow,
            expectedReturnDate,
        );

        if (compare < minimumHours) {
            throw new AppError("Invalid return date");
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
