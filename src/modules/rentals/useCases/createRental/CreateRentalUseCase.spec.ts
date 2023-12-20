// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from "dayjs";

import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";
import { DayJsDateProvider } from "../../../../shared/container/providers/dateProvider/implementations/DayJsDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;
let dateProvider: IDateProvider;

describe("Create a Rental", () => {
    const dayAdd24Hours = dayjs().add(1, "day").toDate();
    beforeEach(() => {
        rentalRepositoryInMemory = new RentalsRepositoryInMemory();
        dateProvider = new DayJsDateProvider();
        createRentalUseCase = new CreateRentalUseCase(
            rentalRepositoryInMemory,
            dateProvider,
        );
    });

    it("Should be able to create a new rental", async () => {
        const rental = await createRentalUseCase.execute({
            userId: "12345",
            carId: "121212",
            expectedReturnDate: dayAdd24Hours,
        });
        expect(rental).toHaveProperty("id");
        expect(rental).toHaveProperty("startDate");
    });

    it("Should not be able to create a new rental if car already have a open rental", async () => {
        await createRentalUseCase.execute({
            userId: "12345",
            carId: "121212",
            expectedReturnDate: dayAdd24Hours,
        });

        try {
            await createRentalUseCase.execute({
                userId: "12345678",
                carId: "121212",
                expectedReturnDate: dayAdd24Hours,
            });
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });

    it("Should not be able to create a new rental if user already have a open rental", async () => {
        await createRentalUseCase.execute({
            userId: "12345",
            carId: "121212",
            expectedReturnDate: dayAdd24Hours,
        });

        try {
            await createRentalUseCase.execute({
                userId: "12345",
                carId: "123456",
                expectedReturnDate: dayAdd24Hours,
            });
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });

    it("Should not be able to create a new rental with invalid return date", async () => {
        try {
            await createRentalUseCase.execute({
                userId: "12345",
                carId: "123456",
                expectedReturnDate: dayjs().toDate(),
            });
        } catch (error) {
            expect(error).toBeInstanceOf(AppError);
        }
    });
});
