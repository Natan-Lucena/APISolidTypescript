import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

const userRoutes = Router();

const upload = multer({ dest: "./avatar" });

userRoutes.post("/", createUserController.handle);
userRoutes.patch(
    "/avatar",
    upload.single("file"),
    updateUserAvatarController.handle,
);

export { userRoutes };
