import prismaClient from "../../prisma";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: IUserRequest) {
    // verificar se preencheu os campos
    if (!name) {
      throw new Error("Enter The Name");
    }

    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!password) {
      throw new Error("Enter The Password");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User Already Existing");
    }

    const user = await prismaClient.user.create({
      data: {
        name,
        email,
        password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
