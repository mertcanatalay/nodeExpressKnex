import express from "express";
import authenticatieToken from "../middlewares/authMiddleware.js";
import listCities from "../api/address/listCites.js";
import listCounties from "../api/address/listCounties.js";


const router = express.Router();

router.route('/cities').post(listCities)
router.route('/counties').post(listCounties)

export default router;