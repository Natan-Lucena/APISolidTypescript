import { Entity } from "typeorm";

@Entity("cars")
class Car {
    id: string;
    name: string;
    description: string;
    daily_Rate: number;
    available: boolean;
    license_plate: string;
    fine_amount: number;
    brand: string;
    categoryId: string;
    created_at: Date;
}
export { Car };
