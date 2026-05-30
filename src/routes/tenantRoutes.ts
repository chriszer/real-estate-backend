import Express from "express";
import { getTenant, createTenant } from "../controllers/tenantControllers";

const router = Express.Router();

router.get("/:cognitoId", getTenant);
router.post('/',createTenant);

export default router;