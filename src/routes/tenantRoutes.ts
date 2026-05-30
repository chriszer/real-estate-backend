import Express from "express";
import {
  getTenant,
  createTenant,
  updateTenant,
} from "../controllers/tenantControllers";

const router = Express.Router();

router.get("/:cognitoId", getTenant);
router.put("/:coognitoId", updateTenant);
router.post("/", createTenant);

export default router;
