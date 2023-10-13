// eslint-disable-next-line import/no-extraneous-dependencies
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}
export { Category };
