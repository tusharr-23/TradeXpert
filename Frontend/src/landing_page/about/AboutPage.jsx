import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <h1
            className="fw-bold mb-4"
            style={{ fontSize: "3rem", lineHeight: "1.3" }}
          >
            Experience Modern Stock Trading
            <br />
            with <span style={{ color: "#387ed1" }}>TradeXpert</span>
          </h1>

          <p
            className="text-muted mx-auto"
            style={{
              maxWidth: "850px",
              fontSize: "1.15rem",
              lineHeight: "1.9",
            }}
          >
            TradeXpert is a full-stack stock trading platform built to simulate
            the experience of modern online trading. It enables users to create
            an account, securely log in, monitor live market prices, and place
            virtual buy or sell orders through an intuitive dashboard.
          </p>

          <p
            className="text-muted mx-auto mt-4"
            style={{
              maxWidth: "850px",
              fontSize: "1.15rem",
              lineHeight: "1.9",
            }}
          >
            Developed using the MERN stack, the platform features JWT-based
            authentication, user-specific portfolios, and real-time stock market
            integration. Every user's orders and holdings are managed
            independently, providing a personalized and secure trading
            experience.
          </p>

          <p
            className="text-muted mx-auto mt-4"
            style={{
              maxWidth: "850px",
              fontSize: "1.15rem",
              lineHeight: "1.9",
            }}
          >
            TradeXpert demonstrates modern web development practices including a
            structured MVC backend architecture, RESTful APIs, React Context for
            state management, and MongoDB data modeling. Live market prices are
            fetched using the Yahoo Finance API to provide realistic portfolio
            tracking and profit/loss calculations.
          </p>

          <p
            className="text-muted mx-auto mt-4"
            style={{
              maxWidth: "850px",
              fontSize: "1.15rem",
              lineHeight: "1.9",
            }}
          >
            Built as a learning-focused project, TradeXpert showcases full-stack
            development skills while delivering an interface and workflow
            inspired by modern stock trading platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
