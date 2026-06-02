import Express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import {
  createApplication,
  listApplications,
  updateApplicationStatus,
} from "../controllers/applicationControlers";

const router = Express.Router();

router.post("/", authMiddleware(["tenant"]), createApplication);
router.put("/:id", authMiddleware(["manager"]), updateApplicationStatus);
router.get("/", authMiddleware(["manager", "tenant"]), listApplications);

export default router;
