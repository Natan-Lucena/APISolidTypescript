import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.user;

        const avatarFile = req.file.filename;
        const updateUserAvatarUseCase = container.resolve(
            UpdateUserAvatarUseCase,
        );

        await updateUserAvatarUseCase.execute({ userID: id, avatarFile });

        return res.status(204).send();
    }
}

export { UpdateUserAvatarController };
