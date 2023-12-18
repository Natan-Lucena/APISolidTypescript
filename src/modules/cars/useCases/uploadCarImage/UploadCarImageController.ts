import { Request, Response } from "express";
import { container } from "tsyringe";

import { UploadCarImageUseCase } from "./UploadCarImageUseCase";

interface IFiles {
    filename: string;
}

class UploadCarImageController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const images = req.files as IFiles[];

        const imagesName = images.map((file) => file.filename);

        const uploadCarImageUseCase = container.resolve(UploadCarImageUseCase);

        await uploadCarImageUseCase.execute({ cardId: id, imagesName });

        return res.status(201).send();
    }
}

export { UploadCarImageController };
