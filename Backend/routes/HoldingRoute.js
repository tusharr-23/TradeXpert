const router = require("express").Router();
const { getAllHoldings } = require("../controllers/HoldingController");

const { verifyUser } = require("../middlewares/AuthMiddleware");

router.get("/allHoldings", verifyUser, getAllHoldings);

module.exports = router;
