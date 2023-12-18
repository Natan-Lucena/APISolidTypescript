import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("carsImage")
class CarImage {
    @PrimaryColumn()
    id: string;
    @Column()
    carId: string;
    @Column()
    imageName: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { CarImage };
