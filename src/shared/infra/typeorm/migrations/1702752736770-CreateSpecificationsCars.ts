import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateSpecificationsCars1702752736770
    implements MigrationInterface
{
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "specificationsCars",
                columns: [
                    {
                        name: "carId",
                        type: "uuid",
                    },
                    {
                        name: "specificationId",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
            }),
        );
        await queryRunner.createForeignKey(
            "specificationsCars",
            new TableForeignKey({
                name: "FKSpecificationCar",
                referencedTableName: "specifications",
                referencedColumnNames: ["id"],
                columnNames: ["specificationId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }),
        );

        await queryRunner.createForeignKey(
            "specificationsCars",
            new TableForeignKey({
                name: "FKCarSpecification",
                referencedTableName: "cars",
                referencedColumnNames: ["id"],
                columnNames: ["carId"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "specificationsCars",
            "FKCarSpecification",
        );
        await queryRunner.dropForeignKey(
            "specificationsCars",
            "FKSpecificationCar",
        );
        await queryRunner.dropTable("specificationsCars");
    }
}
