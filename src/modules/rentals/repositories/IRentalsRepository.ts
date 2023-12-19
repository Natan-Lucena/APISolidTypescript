import { Rental } from "../infra/typeorm/entities/Rental";

interface IRentalsRepository {
    findOpenRentalByCar(carId: string): Promise<Rental>;
    findOpenRentalByUser(userId: string): Promise<Rental>;
}
export { IRentalsRepository };
