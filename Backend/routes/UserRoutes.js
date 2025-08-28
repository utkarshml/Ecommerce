import express from "express";
import { registerUser  , allUsers , SingleUser , loginUser, logoutUser , resetPassword , passwordUpdate , userProfile , updatePassword , updateUserProfile , deleteUser , roleUpdate}   from "../controllers/UserController.js";
import cookieCheck, {isAutherizedByAdmin} from "../middlewares/cookieCheck.js";


const router = express.Router();

router.route("/register").post(registerUser);   
router.route("/login").post(loginUser);
router.route("/admin/users").get(cookieCheck,isAutherizedByAdmin("admin"), allUsers);
router.route("/logout").get(logoutUser);
router.route("/resetpassword").post(resetPassword)
router.route("/resetpassword/:token").put(passwordUpdate)
router.route("/user/profile").get(cookieCheck, userProfile);
router.route("/user/password").put(cookieCheck, updatePassword);
router.route("/user/Update").put(cookieCheck, updateUserProfile);
router.route("/admin/user/:id").get(cookieCheck,isAutherizedByAdmin("admin"), SingleUser).delete(cookieCheck,isAutherizedByAdmin("admin"), deleteUser).put(cookieCheck,isAutherizedByAdmin("admin"), roleUpdate);

export default router;