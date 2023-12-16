import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

class ListAvailableCarsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { brand, name, categoryId } = req.query;

        const listAvailableCarsUseCase = container.resolve(
            ListAvailableCarsUseCase,
        );
        const cars = await listAvailableCarsUseCase.execute({
            brand: brand as string,
            name: name as string,
            categoryId: categoryId as string,
        });
        return res.json(cars);
    }
}
export { ListAvailableCarsController };
