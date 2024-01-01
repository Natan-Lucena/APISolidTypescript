import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRentals1702957654473 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rentals",
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
                        name: "userId",
                        type: "uuid",
                    },
                    {
                        name: "startDate",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "endDate",
                        type: "timestamp",
                        isNullable: true,
                    },
                    {
                        name: "expectedReturnDate",
                        type: "timestamp",
                    },
                    {
                        name: "total",
                        type: "numeric",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKCarRental",
                        referencedTableName: "cars",
                        referencedColumnNames: ["id"],
                        columnNames: ["carId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FKUserRental",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["userId"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rentals");
    }
}
