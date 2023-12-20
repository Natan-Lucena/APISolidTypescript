import { AppError } from "../../../../shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create a Rental", () => {
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalsRepositoryInMemory();
        createRentalUseCase = new CreateRentalUseCase(rentalRepositoryInMemory);
    });

    it("Should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            userId: "12345",
            carId: "121212",
            expectedReturnDate: new Date(),
        });
        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("startDate");
    });

    it("Should not be able to create a new rental if car already have a open rental", async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                userId: "12345",
                carId: "121212",
                expectedReturnDate: new Date(),
            });

            await createRentalUseCase.execute({
                userId: "12345678",
                carId: "121212",
                expectedReturnDate: new Date(),
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("Should not be able to create a new rental if user already have a open rental", async () => {
        expect(async () => {
            await createRentalUseCase.execute({
                userId: "12345",
                carId: "121212",
                expectedReturnDate: new Date(),
            });

            await createRentalUseCase.execute({
                userId: "12345",
                carId: "123456",
                expectedReturnDate: new Date(),
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
