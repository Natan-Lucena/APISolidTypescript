import { Repository, getRepository } from "typeorm";

import { ICreateRentalDTO } from "../../../dtos/ICreateRentalDTO";
import { IRentalsRepository } from "../../../repositories/IRentalsRepository";
import { Rental } from "../entities/Rental";

class RentalsRepository implements IRentalsRepository {
    private repository: Repository<Rental>;
    constructor() {
        this.repository = getRepository(Rental);
    }

    async create({
        userId,
        carId,
        expectedReturnDate,
    }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
            userId,
            carId,
            expectedReturnDate,
        });
        await this.repository.save(rental);

        return rental;
    }
    async findOpenRentalByCar(carId: string): Promise<Rental> {
        const openByCar = await this.repository.findOne({ carId });
        return openByCar;
    }
    async findOpenRentalByUser(userId: string): Promise<Rental> {
        const openByUser = await this.repository.findOne({
            userId,
        });
        return openByUser;
    }
}

export { RentalsRepository };
