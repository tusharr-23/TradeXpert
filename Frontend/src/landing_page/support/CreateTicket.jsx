import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-4 mt-5 mb-3">
        <h3 className="text-muted mb-4">
          To create a ticket, select a relevant topic
        </h3>
        <div className="col-4 p-4 mt-3">
          <h5>Account Opening</h5>
          <a href="#">Resident individual</a>
          <a href="#">Minor</a>
          <a href="#">Non Resident Indian (NRI)</a>
          <a href="#">Company, Partnership, HUF and LLP</a>
          <a href="#">Glossary</a>
        </div>

        <div className="col-4 p-4 mt-3">
          <h5>Your TradeXpert Account </h5>
          <a href="#">Your Profile</a>
          <a href="#">Account modification</a>
          <a href="#">
            Client Master Report (CMR) and Depository Participant (DP)
          </a>
          <a href="#">Nomination</a>
          <a href="#">Transfer and conversion of securities</a>
        </div>

        <div className="col-4 p-4 mt-3">
          <h5>Kite</h5>
          <a href="#">IPO</a>
          <a href="#">Trading FAQs</a>
          <a href="#">Margin Trading Facility (MTF) and Margins</a>
          <a href="#">Charts and orders</a>
          <a href="#">Alerts and Nudges</a>
        </div>

        <div className="col-4 p-4 mt-3 mb-3">
          <h5>Funds</h5>
          <a href="#">Add money</a>
          <a href="#">Withdraw money</a>
          <a href="#">Add bank accounts</a>
          <a href="#">eMandates</a>
        </div>

        <div className="col-4 p-4 mt-3 mb-3">
          <h5>Console</h5>
          <a href="#">Portfolio</a>
          <a href="#">Corporate actions</a>
          <a href="#">Funds statement</a>
          <a href="#">Reports</a>
          <a href="#">Profile</a>
        </div>

        <div className="col-4 p-4 mt-3 mb-3">
          <h5>Coin</h5>
          <a href="#">Understanding mutual funds and Coin</a>
          <a href="#">Coin app</a>
          <a href="#">Coin web</a>
          <a href="#">Transactions and reports</a>
          <a href="#">National Pension Scheme (NPS)</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
