import express from "express";
import {
  createTransaction,
  getDetails,
  updateBalance,
  getTransactions,
} from "../controllers/conuser.js";
const router = express.Router();

router.get("/", getDetails);
router.patch("/:senderaccno/:recieveraccno", updateBalance);
router.post("/transactions/:senderid", createTransaction);
router.get("/transactions", getTransactions);

export default router;
