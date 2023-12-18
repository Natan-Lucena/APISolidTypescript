import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImageRepository {
    create(carId: string, imageName: string): Promise<CarImage>;
}
export { ICarsImageRepository };
