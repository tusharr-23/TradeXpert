import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (stock) => {},
  closeBuyWindow: () => {},
  openSellWindow: (stock) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  // const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [windowType, setWindowType] = useState(null); // "BUY" | "SELL | null"

  const [ordersRefresh, setOrdersRefresh] = useState(0);
  const refreshOrders = () => {
    setOrdersRefresh((prev) => prev + 1);
  };

  const handleOpenBuyWindow = (stock) => {
    setSelectedStock(stock);
    setWindowType("BUY");
  };

  const handleCloseBuyWindow = () => {
    setWindowType(null);
    setSelectedStock(null);
  };

  const handleOpenSellWindow = (stock) => {
    setSelectedStock(stock);
    setWindowType("SELL");
  };

  const handleCloseSellWindow = () => {
    setWindowType(null);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        ordersRefresh,
        refreshOrders,
      }}
    >
      {props.children}

      {windowType === "BUY" && <BuyActionWindow stock={selectedStock} />}

      {windowType === "SELL" && <SellActionWindow stock={selectedStock} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
