import express from "express";
import userList from "../api/user/list.js";
import authenticatieToken from "../middlewares/authMiddleware.js";
import userDelete from "../api/user/delete.js";


const router = express.Router();

router.route('/list').get(userList)
router.route('/delete').post(authenticatieToken, userDelete)

export default router;