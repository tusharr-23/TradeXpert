const router = require("express").Router();
const {
  Signup,
  Login,
  Logout,
  Verify,
} = require("../controllers/AuthController");
const { verifyUser } = require("../middlewares/AuthMiddleware");

//SIGNUP Route
router.post("/signup", Signup);

//LOGIN Route
router.post("/login", Login);

router.get("/verify", verifyUser, Verify);

//LOGOUT Route
router.post("/logout", Logout);

module.exports = router;
