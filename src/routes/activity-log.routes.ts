import { Router } from "express"
import { ActivityLogController } from "../controllers/activity-log.controller"

const router = Router()
const controller = new ActivityLogController()

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router