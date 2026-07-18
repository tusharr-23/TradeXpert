const router = require("express").Router();
const { getAllWatchlist } = require("../controllers/WatchListController");

router.get("/allWatchlist", getAllWatchlist);

module.exports = router;
