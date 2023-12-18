import { inject, injectable } from "tsyringe";

import { ICarsImageRepository } from "../../repositories/ICarsImageRepository";

interface IRequest {
    cardId: string;
    imagesName: string[];
}

@injectable()
class UploadCarImageUseCase {
    constructor(
        @inject("CarsImageRepository")
        private carsImageRepository: ICarsImageRepository,
    ) {}
    async execute({ cardId, imagesName }: IRequest): Promise<void> {
        imagesName.map(async (image) => {
            await this.carsImageRepository.create(cardId, image);
        });
    }
}

export { UploadCarImageUseCase };
