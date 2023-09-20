import express from "express";
import login from "../api/auth/login.js";
import register from "../api/auth/register.js";
import me from "../api/auth/me.js";
import logout from "../api/auth/logout.js";
import authenticatieToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route('/login').post(login)
router.route('/register').post(authenticatieToken, register)
router.route('/me').post(me)
router.route('/logout').post(logout)


export default router;