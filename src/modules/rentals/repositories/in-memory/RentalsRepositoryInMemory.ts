import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
    rentals: Rental[] = [];

    async findOpenRentalByCar(carId: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.carId === carId && rental.endDate === null,
        );
    }
    async findOpenRentalByUser(userId: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.userId === userId && rental.endDate === null,
        );
    }
}

export { RentalsRepositoryInMemory };
