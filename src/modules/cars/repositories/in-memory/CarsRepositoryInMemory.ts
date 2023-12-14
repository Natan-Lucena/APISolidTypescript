import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    async create({
        brand,
        categoryId,
        daily_Rate,
        description,
        fine_amount,
        name,
        license_plate,
    }: ICreateCarDTO): Promise<void> {
        const car = new Car();

        Object.assign(car, {
            brand,
            categoryId,
            daily_Rate,
            description,
            fine_amount,
            name,
            license_plate,
        });
        this.cars.push(car);
    }
}
export { CarsRepositoryInMemory };
