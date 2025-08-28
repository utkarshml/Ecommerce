import express from "express";
import { registerUser  , allUsers , SingleUser , loginUser, logoutUser , resetPassword , passwordUpdate , userProfile , updatePassword , updateUserProfile , deleteUser , roleUpdate}   from "../controllers/UserController.js";
import cookieCheck, {authorizeRoles} from "../middlewares/cookieCheck.js";


const router = express.Router();

router.route("/register").post(registerUser);   
router.route("/login").post(loginUser);
router.route("/admin/users").get(cookieCheck,authorizeRoles("admin"), allUsers);
router.route("/logout").get(logoutUser);
router.route("/resetpassword").post(resetPassword)
router.route("/resetpassword/:token").put(passwordUpdate)
router.route("/user/profile").get(cookieCheck, userProfile);
router.route("/user/password").put(cookieCheck, updatePassword);
router.route("/user/Update").put(cookieCheck, updateUserProfile);
router.route("/admin/user/:id").get(cookieCheck,authorizeRoles("admin"), SingleUser).delete(cookieCheck,authorizeRoles("admin"), deleteUser).put(cookieCheck,authorizeRoles("admin"), roleUpdate);

export default router;