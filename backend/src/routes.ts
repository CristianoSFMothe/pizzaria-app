import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateCategoryController } from "./controllers/catgegory/CreateCategoryController";
import { ListCategoryController } from "./controllers/catgegory/ListCategoryController";

const router = Router();

// --- ROTAS USERS --

router.post("/users", new CreateUserController().handle);

// --- ROTAS AUTH ---
router.post("/session", new AuthUserController().handler);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

// ___ ROTAS CATEGORY ___
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle,
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

export { router };
