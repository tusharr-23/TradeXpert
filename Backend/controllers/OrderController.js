const { OrdersModel } = require("../models/OrdersModel");
const { HoldingsModel } = require("../models/HoldingsModel");

module.exports.getAllOrders = async (req, res) => {
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
};

module.exports.createOrder = async (req, res) => {
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
};
