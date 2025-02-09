import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/category/UpdateCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("../tmp"));

// --- ROTAS USERS --

router.post("/users", new CreateUserController().handle);

// --- ROTAS AUTH ---
router.post("/session", new AuthUserController().handler);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

// --- ROTAS CATEGORY ---
router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle,
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);
router.delete(
  "/category/:id",
  isAuthenticated,
  new DeleteCategoryController().handle,
);
router.put(
  "/category/:id",
  isAuthenticated,
  new UpdateCategoryController().handle,
);

// --- ROTAS PRODUCT ---
router.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  new CreateProductController().handle,
);

export { router };
