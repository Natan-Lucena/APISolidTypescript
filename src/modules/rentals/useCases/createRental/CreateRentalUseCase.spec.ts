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
        await createRentalUseCase.execute({
            userId: "12345",
            carId: "121212",
            expectedReturnDate: new Date(),
        });
    });
});
