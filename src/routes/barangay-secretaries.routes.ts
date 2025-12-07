import { Router } from "express"
import { BarangaySecretaryController } from "../controllers/barangay-secretary.controller"

const router = Router()
const controller = new BarangaySecretaryController()

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router