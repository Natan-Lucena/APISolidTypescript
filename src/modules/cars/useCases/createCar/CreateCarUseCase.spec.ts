import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: ICarsRepository;

describe("Create a car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it("Should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "nameCar",
            description: "descriptionCar",
            daily_Rate: 100,
            license_plate: "ABC-12345",
            fine_amount: 60,
            brand: "brandCar",
            categoryId: "categoryId",
        });
        expect(car).toHaveProperty("id");
    });
    it("Should not be able to create a duplicate license plate car", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "nameCar",
                description: "descriptionCar",
                daily_Rate: 100,
                license_plate: "ABC-12345",
                fine_amount: 60,
                brand: "brandCar",
                categoryId: "categoryId",
            });
            await createCarUseCase.execute({
                name: "nameCar2",
                description: "descriptionCar2",
                daily_Rate: 100,
                license_plate: "ABC-12345",
                fine_amount: 60,
                brand: "brandCar",
                categoryId: "categoryId",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("Should be able to create a car with avaliable true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car Avaliable",
            description: "descriptionCar2",
            daily_Rate: 100,
            license_plate: "ABC-12345",
            fine_amount: 60,
            brand: "brandCar",
            categoryId: "categoryId",
        });
        expect(car.available).toBe(true);
    });
});
