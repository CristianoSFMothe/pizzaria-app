import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Recebe token
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;

    // Recupera o id e do token e colocar dentro de uma variável user_id dentro do req
    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
