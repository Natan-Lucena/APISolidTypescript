// eslint-disable-next-line import/no-extraneous-dependencies
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}
    async execute({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);
        if (userAlreadyExists) {
            throw new Error("User Already Exists");
        }

        const passwordHash = await hash(password, 10);
        await this.userRepository.create({
            name,
            password: passwordHash,
            email,
            driver_license,
        });
    }
}
export { CreateUserUseCase };
