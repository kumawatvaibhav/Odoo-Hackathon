import { Router } from "express";
import { PaymentUser, paymentVerification } from "../controllers/payment.controller.js";
const router=Router();

//secured routes
router.route("/payment").post(PaymentUser)
router.route("/paymentverification").post(paymentVerification)


export default router;