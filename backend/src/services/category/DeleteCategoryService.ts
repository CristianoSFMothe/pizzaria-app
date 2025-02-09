import prismaClient from "../../prisma";

class DeleteCategoryService {
  async execute(id: string) {
    if (!id) {
      throw new Error("ID is required");
    }

    const categoryExists = await prismaClient.category.findUnique({
      where: { id },
    });

    if (!categoryExists) {
      throw new Error("Category not found");
    }

    await prismaClient.category.delete({
      where: { id },
    });

    return { message: "Category deleted successfully" };
  }
}

export { DeleteCategoryService };
