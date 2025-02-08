import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// --- ROTAS USERS --

router.post("/users", new CreateUserController().handle);

// --- ROTAS AUTH ---
router.post("/session", new AuthUserController().handler);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

export { router };
