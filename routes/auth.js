import express from "express";

import { login, registeradmin, registeruser } from "../controllers/auth.js";

const router = express.Router();
router.post("/registeradmin",registeradmin);
router.post("/registeruser",registeruser);
router.post("/login",login);

export default router;


