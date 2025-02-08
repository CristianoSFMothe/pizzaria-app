import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";

const router = Router();

// --- ROTAS USERS --

router.post("/users", new CreateUserController().handle);

// --- ROTAS AUTH ---
router.post("/session", new AuthUserController().handler);

export { router };
