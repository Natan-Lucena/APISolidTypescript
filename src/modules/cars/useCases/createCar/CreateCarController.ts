import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {
            name,
            description,
            daily_Rate,
            license_plate,
            fine_amount,
            brand,
            categoryId,
        } = req.body;
        const createCarUseCase = container.resolve(CreateCarUseCase);
        const car = await createCarUseCase.execute({
            name,
            description,
            daily_Rate,
            license_plate,
            fine_amount,
            brand,
            categoryId,
        });
        return res.status(201).json(car);
    }
}
export { CreateCarController };
