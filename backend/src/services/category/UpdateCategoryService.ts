import prismaClient from "../../prisma";

interface IUpdateCategoryRequest {
  id: string;
  name: string;
}

class UpdateCategoryService {
  async execute({ id, name }: IUpdateCategoryRequest) {
    if (!id) {
      throw new Error("ID is required");
    }

    if (!name || name.trim() === "") {
      throw new Error("Name is required");
    }

    const categoryExists = await prismaClient.category.findUnique({
      where: { id },
    });

    if (!categoryExists) {
      throw new Error("Category not found");
    }

    const updatedCategory = await prismaClient.category.update({
      where: { id },
      data: { name },
      select: {
        id: true,
        name: true,
      },
    });

    return updatedCategory;
  }
}

export { UpdateCategoryService };
