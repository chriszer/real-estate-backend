import Express from "express";
import { getLeases, getLeasePayments } from "../controllers/leaseControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Express.Router();

router.get("/", authMiddleware(["manager", "tenant"]), getLeases);
router.get(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments,
);

export default router;
