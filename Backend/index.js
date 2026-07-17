require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");

//MODELS
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { WatchListModel } = require("./models/WatchListModel");

//ROUTES
const authRoute = require("./routes/AuthRoute");

//MIDDLEWARE
const { verifyUser } = require("./middlewares/AuthMiddleware");

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

//Adding holdings data to DB
// app.get("/addHoldings", async (req, res) => {
//   const temp = [
//     {
//       symbol: "BHARTIARTL.NS",
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//     },
//     {
//       symbol: "HDFCBANK.NS",
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//     },
//     {
//       symbol: "HINDUNILVR.NS",
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//     },
//     {
//       symbol: "INFY.NS",
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//     },
//     {
//       symbol: "ITC.NS",
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//     },
//     {
//       symbol: "KPITTECH.NS",
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//     },
//     {
//       symbol: "M&M.NS",
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//     },
//     {
//       symbol: "RELIANCE.NS",
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//     },
//     {
//       symbol: "SBIN.NS",
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//     },
//     {
//       symbol: "TATAPOWER.NS",
//       name: "TATAPOWER",
//       qty: 2,
//       avg: 104.2,
//     },
//   ];

//   temp.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       symbol: item.symbol,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//     });

//     newHolding.save();
//   });
//   res.send("Holdings add successfully");
// });

//Adding positions data to DB
// app.get("/addPositions", async (req, res) => {
//   const temp = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   temp.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Positions is added successfully");
// });

//Adding watchlist data to DB
// app.get("/addWatchList", async (req, res) => {
//   const temp = [
//     { symbol: "INFY.NS" },
//     { symbol: "ONGC.NS" },
//     { symbol: "TCS.NS" },
//     { symbol: "KPITTECH.NS" },
//     { symbol: "QUICKHEAL.NS" },
//     { symbol: "WIPRO.NS" },
//     { symbol: "M&M.NS" },
//     { symbol: "RELIANCE.NS" },
//     { symbol: "HINDUNILVR.NS" },
//   ];
//   temp.forEach((item) => {
//     let newWatchList = new WatchListModel({
//       symbol: item.symbol,
//     });
//     newWatchList.save();
//   });
//   res.send("Watchlist is added successfully");
// });

app.use(cookieParser());

// Middleware to parse JSON data from requests
app.use(express.json());

app.get("/allWatchlist", async (req, res) => {
  const stocks = await WatchListModel.find();
  const result = await Promise.all(
    stocks.map(async (stock) => {
      try {
        const data = await yahooFinance.quote(stock.symbol);

        return {
          symbol: stock.symbol,
          name: stock.symbol.replace(".NS", ""),
          price: Number(data.regularMarketPrice?.toFixed(2) || 0),
          percent: `${Number(data.regularMarketChangePercent || 0).toFixed(
            2,
          )}%`,
          isDown: (data.regularMarketChangePercent || 0) < 0,
        };
      } catch {
        return null;
      }
    }),
  );

  res.json(result.filter(Boolean));
});

//Show All Holdings
// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });
app.get("/allHoldings", verifyUser, async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({ user: req.user._id });

    const holdingsData = await Promise.all(
      allHoldings.map(async (holding) => {
        try {
          const quote = await yahooFinance.quote(holding.symbol);

          const marketPrice = Number(quote.regularMarketPrice || 0);

          const investmentValue = holding.avg * holding.qty;
          const currentValue = marketPrice * holding.qty;
          const pnl = currentValue - investmentValue;

          const netPercent =
            investmentValue === 0 ? 0 : (pnl / investmentValue) * 100;

          return {
            name: holding.name,
            symbol: holding.symbol,
            qty: holding.qty,
            avg: holding.avg,

            // Live market price
            price: marketPrice,

            // Overall profit/loss %
            net: `${netPercent.toFixed(2)}%`,

            // Today's market movement
            day: `${Number(quote.regularMarketChangePercent || 0).toFixed(2)}%`,

            // Used for text color in React
            isLoss: (quote.regularMarketChangePercent || 0) < 0,
          };
        } catch (err) {
          console.log(`Failed to fetch ${holding.symbol} : ${err.message}`);

          return null;
        }
      }),
    );

    res.status(200).json({
      success: true,
      holdings: holdingsData.filter(Boolean),
    });
  } catch (err) {
    // console.log(err);
    res.status(500).json({
      success: false,
      message: "Unable to fetch holdings",
    });
  }
});

//Show All Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

//Place new order
// app.post("/newOrder", async (req, res) => {
//   try {
//     const { symbol, name, qty, price, mode } = req.body;

//     // ---------------- Save Order ----------------
//     const newOrder = new OrdersModel({
//       user: req.user._id,
//       symbol,
//       name,
//       qty,
//       price,
//       mode,
//     });

//     await newOrder.save();

//     // ---------------- BUY ----------------
//     if (mode === "BUY") {
//       let holding = await HoldingsModel.findOne({ symbol });

//       if (holding) {
//         const totalQty = holding.qty + qty;

//         const newAvg = (holding.avg * holding.qty + price * qty) / totalQty;

//         holding.qty = totalQty;
//         holding.avg = Number(newAvg.toFixed(2));

//         await holding.save();
//       } else {
//         holding = new HoldingsModel({
//           symbol,
//           name,
//           qty,
//           avg: price,
//         });

//         await holding.save();
//       }
//     }

//     // ---------------- SELL ----------------
//     else if (mode === "SELL") {
//       const holding = await HoldingsModel.findOne({ symbol });

//       if (!holding) {
//         return res.status(404).json({
//           message: "You don't own this stock.",
//         });
//       }

//       if (holding.qty < qty) {
//         return res.status(400).json({
//           message: "Not enough shares to sell.",
//         });
//       }

//       holding.qty -= qty;

//       if (holding.qty === 0) {
//         await HoldingsModel.deleteOne({ symbol });
//       } else {
//         await holding.save();
//       }
//     }

//     res.status(200).json({
//       success: true,
//       message: "Order placed successfully",
//     });
//   } catch (err) {
//     console.log(err);

//     res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//     });
//   }
// });
app.post("/newOrder", verifyUser, async (req, res) => {
  try {
    const { symbol, name, qty, price, mode } = req.body;

    // ---------------- Validation ----------------
    if (!symbol || !name || !qty || !price || !mode) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (!["BUY", "SELL"].includes(mode)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order type.",
      });
    }

    if (qty <= 0) {
      return res.status(400).json({
        success: false,
        message: "Quantity must be greater than 0.",
      });
    }

    if (price <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be greater than 0.",
      });
    }

    // ---------------- Save Order ----------------
    const newOrder = new OrdersModel({
      user: req.user._id,
      symbol,
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();

    // ---------------- BUY ----------------
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({
        user: req.user._id,
        symbol,
      });

      if (holding) {
        const totalQty = holding.qty + qty;

        const newAvg = (holding.avg * holding.qty + price * qty) / totalQty;

        holding.qty = totalQty;
        holding.avg = Number(newAvg.toFixed(2));

        await holding.save();
      } else {
        holding = new HoldingsModel({
          user: req.user._id,
          symbol,
          name,
          qty,
          avg: price,
        });

        await holding.save();
      }
    }

    // ---------------- SELL ----------------
    else if (mode === "SELL") {
      const holding = await HoldingsModel.findOne({
        user: req.user._id,
        symbol,
      });

      if (!holding) {
        return res.status(404).json({
          success: false,
          message: "You don't own this stock.",
        });
      }

      if (holding.qty < qty) {
        return res.status(400).json({
          success: false,
          message: "Not enough shares to sell.",
        });
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({
          user: req.user._id,
          symbol,
        });
      } else {
        await holding.save();
      }
    }

    return res.status(200).json({
      success: true,
      message: "Order placed successfully.",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
});

//Show all orders
// app.get("/allOrders", async (req, res) => {
//   let allOrders = await OrdersModel.find({ user: req.user._id });
//   res.json(allOrders);
// });
app.get("/allOrders", verifyUser, async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      orders: allOrders,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Unable to fetch orders.",
    });
  }
});

//Signup
app.use("/", authRoute);

app.get("/", (req, res) => {
  res.send("working on port 3002");
});

app.listen(PORT, () => {
  console.log("App is listen to the port 3002");

  //For DB connection
  mongoose.connect(uri);
  console.log("DB connected successfully");
});
