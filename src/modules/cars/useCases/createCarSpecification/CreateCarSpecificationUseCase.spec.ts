import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationsRepositoryInMemory } from "../../repositories/in-memory/SpecificationRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let specificationRepository: SpecificationsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create Car Specification", () => {
    beforeEach(() => {
        specificationRepository = new SpecificationsRepositoryInMemory();
        carsRepository = new CarsRepositoryInMemory();
        createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
            carsRepository,
            specificationRepository,
        );
    });

    it("Should  not be able to add a new specification to a no existent car", async () => {
        const carId = "12345";
        const specificationId = ["54321"];

        try {
            await createCarSpecificationUseCase.execute({
                carId,
                specificationId,
            });
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
            expect(error.message).toBe("Car does not exists!");
        }
    });

    it("Should be able to add a new specification to a car", async () => {
        const car = await carsRepository.create({
            name: "nameCar",
            description: "descriptionCar",
            daily_Rate: 100,
            license_plate: "ABC-12345",
            fine_amount: 60,
            brand: "brandCar",
            categoryId: "categoryId",
        });
        const specification = await specificationRepository.create({
            description: "Specficiation desc",
            name: "specification",
        });
        const specificationId = [specification.id];
        const specificationCar = await createCarSpecificationUseCase.execute({
            carId: car.id,
            specificationId,
        });
        expect(specificationCar).toHaveProperty("specifications");
        expect(specificationCar.specifications.length).toBe(1);
    });
});
