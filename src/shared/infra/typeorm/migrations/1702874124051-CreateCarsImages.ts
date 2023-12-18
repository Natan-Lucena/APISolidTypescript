import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCarsImages1702874124051 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "carsImage",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "carId",
                        type: "uuid",
                    },
                    {
                        name: "imageName",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCarImage",
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        columnNames: ["carId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("carsImage");
    }
}
