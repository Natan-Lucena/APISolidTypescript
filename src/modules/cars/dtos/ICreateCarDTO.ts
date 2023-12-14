interface ICreateCarDTO {
    name: string;
    description: string;
    daily_Rate: number;
    license_plate: string;
    fine_amount: number;
    brand: string;
    categoryId: string;
}

export { ICreateCarDTO };
