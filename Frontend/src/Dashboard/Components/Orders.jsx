import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { ordersRefresh } = useContext(GeneralContext);
  // console.log("ordersRefresh =", ordersRefresh);

  useEffect(() => {
    console.log("fetching orders...");
    axios
      .get("http://localhost:3002/allOrders")
      .then((res) => {
        // console.log(res.data);
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ordersRefresh]);

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Orders ({allOrders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map(({ name, qty, price, mode }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{qty}</td>
                <td>{price}</td>
                <td>{mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
