import Express from "express";
import { getManager } from "../controllers/managerControllers";
import { getLeasePayments } from "../controllers/leaseControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Express.Router();

router.get("/:cognitoId", getManager);
router.get(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments,
);

export default router;
