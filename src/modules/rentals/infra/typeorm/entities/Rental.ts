import { Entity } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("rentals")
class Rental {
    id: string;

    carId: string;

    userId: string;

    startDate: Date;

    endDate: Date;

    expectedReturnDate: Date;

    total: number;

    created_at: Date;

    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}
export { Rental };
