import { Repository, getRepository } from "typeorm";

import { ICarsImageRepository } from "../../../repositories/ICarsImageRepository";
import { CarImage } from "../entities/CarImage";

class CarsImageRepository implements ICarsImageRepository {
    private repository: Repository<CarImage>;
    constructor() {
        this.repository = getRepository(CarImage);
    }

    async create(carId: string, imageName: string): Promise<CarImage> {
        const carImage = this.repository.create({ carId, imageName });
        await this.repository.save(carImage);
        return carImage;
    }
}
export { CarsImageRepository };
