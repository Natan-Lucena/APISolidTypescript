import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoryInMemory } from "../../repositories/in-memory/UserRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        authenticateUserUseCase = new AuthenticateUserUseCase(
            userRepositoryInMemory,
        );
        createUserUseCase = new CreateUserUseCase(userRepositoryInMemory);
    });
    it("Should be able to authenticate a user", async () => {
        const user: ICreateUserDTO = {
            name: "UserTest",
            password: "12345",
            email: "user@test.com",
            driver_license: "0123456",
        };
        await createUserUseCase.execute(user);
        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
        expect(result).toHaveProperty("token");
    });
    it("Should not be able to authenticate a non exist user", async () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "false@email.com",
                password: "falsePassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("Should not validate a user with the wrong password", async () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                name: "UserTest",
                password: "12345",
                email: "user@test.com",
                driver_license: "0123456",
            };
            await createUserUseCase.execute(user);
            await authenticateUserUseCase.execute({
                email: user.email,
                password: "WrongPassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
