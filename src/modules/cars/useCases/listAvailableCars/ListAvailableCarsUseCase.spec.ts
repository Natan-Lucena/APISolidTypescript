import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory,
        );
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

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("Should be able to list all avaliable cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CarTest",
            description: "TestCar",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f54",
            fine_amount: 10,
            brand: "CarBrand_test",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "CarBrand_test",
        });
        expect(cars).toEqual([car]);
    });

    it("Should be able to list all avaliable cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CarTest3",
            description: "TestCar3",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f545",
            fine_amount: 10,
            brand: "CarBrand_test",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "CarTest3",
        });
        expect(cars).toEqual([car]);
    });

    it("Should be able to list all avaliable cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "CarTest",
            description: "TestCar",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f54",
            fine_amount: 10,
            brand: "CarBrand_test",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listAvailableCarsUseCase.execute({
            categoryId: car.categoryId,
        });
        expect(cars).toEqual([car]);
    });

    it("Should be able to list more than 1 car", async () => {
        await carsRepositoryInMemory.create({
            name: "CarTest",
            description: "TestCar",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f54",
            fine_amount: 10,
            brand: "CarBrand_test",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        await carsRepositoryInMemory.create({
            name: "CarTest2",
            description: "TestCar2",
            daily_Rate: 100,
            license_plate: "ABC-12v2358545f542",
            fine_amount: 10,
            brand: "CarBrand_test2",
            categoryId: "dbf77356-b24c-42fa-a60c-f17ad6171b07",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "CarBrand_test",
            name: "CarTest2",
        });

        expect(cars.length).toBe(2);
    });
});
