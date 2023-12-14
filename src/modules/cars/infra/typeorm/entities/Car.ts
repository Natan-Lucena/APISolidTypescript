import { Entity } from "typeorm";
import { v4 as uuid } from "uuid";

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

    constructor() {
        if (!this.id) {
            this.id = uuid();
            this.available = true;
            this.created_at = new Date();
        }
    }
}
export { Car };
