const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const { HoldingsModel } = require("../models/HoldingsModel");

module.exports.getAllHoldings = async (req, res) => {
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
};
