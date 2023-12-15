import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });

    it("Should be able to list all avaliable cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CarTest",
            description: "TestCar",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f54",
            fine_amount: 10,
            brand: "CarBrand",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listCarsUseCase.execute({});
        console.log(cars);

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all avaliable cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CarTest",
            description: "TestCar",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f54",
            fine_amount: 10,
            brand: "CarBrand_test",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listCarsUseCase.execute({
            brand: "CarBrand_test",
        });
        expect(cars).toEqual([car]);
    });
});
