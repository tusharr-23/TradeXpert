const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

const { WatchListModel } = require("../models/WatchListModel");

module.exports.getAllWatchlist = async (req, res) => {
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
};
