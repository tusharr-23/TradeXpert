import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import api from "../../api/axios";

import GeneralContext from "./GeneralContext";

import "../OrderWindow.css";

const SellActionWindow = ({ stock }) => {
  if (!stock) {
    return null;
  }
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(stock.price);

  const generalContext = useContext(GeneralContext);

  const handleSellClick = () => {
    api
      .post("/newOrder", {
        symbol: stock.symbol,
        name: stock.name,
        qty: stockQuantity,
        price: stockPrice,
        mode: "SELL",
      })
      .then((res) => {
        // console.log("Calling refreshOrders...");
        toast.success(res.data.message);
        generalContext.refreshOrders();
        generalContext.closeSellWindow();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };

  return (
    <div className="order-window-container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value) || 0)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value) || 0)}
            />
          </fieldset>
        </div>
      </div>

      <div className="order-window-buttons">
        <span>Order Value ₹{(stockQuantity * stockPrice).toFixed(2)}</span>

        <div>
          <Link className="order-window-btn btn-blue" onClick={handleSellClick}>
            Sell
          </Link>

          <Link
            to=""
            className="order-window-btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
