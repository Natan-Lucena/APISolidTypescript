// eslint-disable-next-line import/no-extraneous-dependencies
import { compare } from "bcrypt";
// eslint-disable-next-line import/no-extraneous-dependencies
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IResponse {
    user: {
        name: string;
        email: string;
    };
    token: string;
}

interface IRequest {
    email: string;
    password: string;
}
@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new AppError("Email Or Password incorrect");
        }
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new AppError("Email Or Password incorrect");
        }
        const token = sign({}, "923aea88786448f4a8840c30f0327f8f", {
            subject: user.id,
            expiresIn: "1d",
        });
        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email,
            },
        };

        return tokenReturn;
    }
}
export { AuthenticateUserUseCase };
