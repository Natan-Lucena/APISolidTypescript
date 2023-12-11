import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
    users: User[] = [];
    async create({
        name,
        password,
        email,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign(user, {
            name,
            password,
            email,
            driver_license,
        });
        this.users.push(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.users.find((user) => user.email === email);
        return user;
    }
    async findById(id: string): Promise<User> {
        const user = this.users.find((user) => user.id === id);
        return user;
    }
}
export { UserRepositoryInMemory };
