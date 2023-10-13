import { Response, Request } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;
        await this.createCategoryUseCase.execute({ name, description });
        return res.status(201).send();
    }
}

export { CreateCategoryController };
