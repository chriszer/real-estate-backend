import Express from "express";
import { getManager, createManager } from "../controllers/managerControllers";

const router = Express.Router();

router.get("/:cognitoId", getManager);
router.post('/',createManager);

export default router;