import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
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
        if (user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        user.avatar = avatarFile;
        await this.userRepository.create(user);
    }
}
export { UpdateUserAvatarUseCase };
