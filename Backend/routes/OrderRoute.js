const router = require("express").Router();

const { getAllOrders, createOrder } = require("../controllers/OrderController");

const { verifyUser } = require("../middlewares/AuthMiddleware");

router.get("/allOrders", verifyUser, getAllOrders);

router.post("/newOrder", verifyUser, createOrder);

module.exports = router;
