import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const { specificationId } = req.body;
        const createCarSpecificationUseCase = container.resolve(
            CreateCarSpecificationUseCase,
        );
        const cars = await createCarSpecificationUseCase.execute({
            carId: id,
            specificationId,
        });
        return res.json(cars);
    }
}
export { CreateCarSpecificationController };
