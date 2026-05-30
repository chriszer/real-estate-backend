import Express from "express";
import {
  getManager,
  createManager,
  updateManager,
} from "../controllers/managerControllers";

const router = Express.Router();

router.get("/:cognitoId", getManager);
router.put("/:cognitoId", updateManager);
router.post("/", createManager);

export default router;
