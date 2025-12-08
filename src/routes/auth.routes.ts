import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { validateLogin, validateRegistration } from "../middlewares/validators";
import { authenticateJWT } from "../middlewares/auth"

const router = Router();
const controller = new AuthController();

router.post("/login", [validateLogin], controller.login);
router.post("/register", [validateRegistration], controller.register);

router.use(authenticateJWT)
router.post("/logout", controller.logout);
router.get("/user", controller.getUser);

export default router