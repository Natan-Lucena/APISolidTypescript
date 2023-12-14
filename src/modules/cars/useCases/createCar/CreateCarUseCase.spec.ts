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
        await createCarUseCase.execute({
            name: "nameCar",
            description: "descriptionCar",
            daily_Rate: 100,
            license_plate: "ABC-12345",
            fine_amount: 60,
            brand: "brandCar",
            categoryId: "categoryId",
        });
    });
});
