require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");

//MODELS
const { PositionsModel } = require("./models/PositionsModel");

//ROUTES
const authRoute = require("./routes/AuthRoute");
const holdingsRoute = require("./routes/HoldingRoute");
const watchlistRoute = require("./routes/WatchListRoute");
const ordersRoute = require("./routes/OrderRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

//not a secure setup -- error occurred when we don't include cors
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", //Only requests coming from this origin are allowed
    credentials: true, //I allow cookies (or other credentials) to be sent with cross-origin requests.
  }),
);
//failed to parse data -- error occurred due to body parser
app.use(bodyParser.json());

app.use(cookieParser());

// Middleware to parse JSON data from requests
app.use(express.json());

//Authentication routes
app.use("/", authRoute);

//Show All Watchlist
app.use("/", watchlistRoute);

//Place new order & Show all orders
app.use("/", ordersRoute);

//Show All Holdings
app.use("/", holdingsRoute);

//Show All Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/", (req, res) => {
  res.send("working on port 3002");
});

//404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
