import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

class AuthUserController {
  async handler(req: Request, res: Response) {
    const { email, password } = req.body;

    const authUserServer = new AuthUserService();

    const auth = await authUserServer.execute({
      email,
      password,
    });

    return res.json(auth);
  }
}

export { AuthUserController };
