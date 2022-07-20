const express = require("express");

const authController = require("../controller/authController");
const usersController = require("../controller/usersController");

const router = express.Router();
//*********** AUTHENTICATIONS ************

// SIGN UP
router.route("/signup").post(authController.signup);
// LOG IN
router.route("/login").post(authController.login);
// FORGOT PASSWORD
router.route("/forgotPassword").post(authController.forgotPassword);
// RESET PASSWORD
router.route("/resetPassword/:resetToken").patch(authController.resetPassword);

// UPDATE EXISTING PASSWORD
router.patch(
  "/updateMyPassword",
  // authController.protect,
  authController.updateMyPassword
);
//****************OTHERS*******************
// GET USERS
router.route("/").get(usersController.getUsers);
router.route("/:id").get(usersController.getUser);
// UPDATE USER DATA
router.route("/updateMe").patch(
  // authController.protect,
  usersController.updateUserImage,
  usersController.updateMe
);
// DELETE USER

router.patch(
  "/deactivateMe",
  authController.protect,
  usersController.deactivateMe
);

module.exports = router;
