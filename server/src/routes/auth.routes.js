import { Router } from "express";

const router = Router();

router.post("/login", login);
router.post("/register", login);

export default router;
