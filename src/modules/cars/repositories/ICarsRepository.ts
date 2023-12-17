import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    findAvaliable(
        brand?: string,
        categoryId?: string,
        name?: string,
    ): Promise<Car[]>;
    findById(id: string): Promise<Car>;
}
export { ICarsRepository };
