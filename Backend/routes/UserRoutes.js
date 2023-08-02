import express from "express";
import { registerUser  , allUsers , loginUser} from "../controllers/UserController.js";


const router = express.Router();

router.route("/register").post(registerUser);   
router.route("/login").post(loginUser);
router.route("/user").get(allUsers)


export default router;