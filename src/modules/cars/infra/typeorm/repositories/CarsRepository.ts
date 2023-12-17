import { Repository, getRepository } from "typeorm";

import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/ICarsRepository";
import { Car } from "../entities/Car";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create({
        name,
        description,
        daily_Rate,
        license_plate,
        fine_amount,
        brand,
        categoryId,
        specifications,
        id,
    }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name,
            description,
            daily_Rate,
            license_plate,
            fine_amount,
            brand,
            categoryId,
            specifications,
            id,
        });
        await this.repository.save(car);
        return car;
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({ license_plate });
        return car;
    }

    async findAvaliable(
        brand?: string,
        categoryId?: string,
        name?: string,
    ): Promise<Car[]> {
        const carsQuery = await this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });
        if (brand) {
            carsQuery.andWhere("brand = :brand", { brand });
        }
        if (categoryId) {
            carsQuery.andWhere("categoryId = :categoryId", { categoryId });
        }
        if (name) {
            carsQuery.andWhere("name = :name", { name });
        }
        const cars = carsQuery.getMany();
        return cars;
    }

    async findById(id: string): Promise<Car> {
        const car = this.repository.findOne({ id });
        return car;
    }
}

export { CarsRepository };
