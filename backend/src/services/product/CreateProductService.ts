import prismaClient from "../../prisma";

interface IProductRequest {
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService {
  async execute({
    name,
    price,
    description,
    banner,
    category_id,
  }: IProductRequest) {
    return { ok: true };
  }
}

export { CreateProductService };
