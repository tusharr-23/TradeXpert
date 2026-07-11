const { Signup, Login } = require("../controllers/AuthController");
const { userVerification } = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

//SIGNUP Route
router.post("/signup", Signup);

//LOGIN Route
router.post("/login", Login);

// USER VERIFICATION Route
router.post("/", userVerification);

module.exports = router;
