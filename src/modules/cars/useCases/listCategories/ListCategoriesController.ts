import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoryUseCase";

class ListCategoriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoryUseCase);
        const all = await listCategoriesUseCase.execute();
        return res.json(all);
    }
}

export { ListCategoriesController };
