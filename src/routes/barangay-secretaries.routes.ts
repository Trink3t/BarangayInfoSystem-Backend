import { Router } from "express"
import { BarangaySecretaryController } from "../controllers/barangay-secretary.controller"
import { validateCreateBarangaySecretary } from "../middlewares/validators"
import { validateUpdateBarangaySecretary } from "../middlewares/validators/validateUpdateBarangaySecretary"

const router = Router()
const controller = new BarangaySecretaryController()

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", [validateCreateBarangaySecretary], controller.create);
router.patch("/:id", [validateUpdateBarangaySecretary], controller.update);
router.put("/:id", [validateUpdateBarangaySecretary],controller.update);
router.delete("/:id", controller.delete);

export default router