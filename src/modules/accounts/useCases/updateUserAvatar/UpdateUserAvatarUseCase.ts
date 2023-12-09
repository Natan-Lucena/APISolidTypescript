import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
    userID: string;
    avatarFile: string;
}
@injectable()
class UpdateUserAvatarUseCase {
    constructor(
        @inject("UserRepository") private userRepository: IUserRepository,
    ) {}
    async execute({ userID, avatarFile }: IRequest): Promise<void> {
        const user = await this.userRepository.findById(userID);
        user.avatar = avatarFile;
        await this.userRepository.create(user);
    }
}
export { UpdateUserAvatarUseCase };
