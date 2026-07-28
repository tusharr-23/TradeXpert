# TradeXpert

> A full-stack stock trading platform inspired by Zerodha, featuring live market data, secure per-user order execution, and holdings tracking.

## Overview

This is a full-stack MERN application that simulates a real stock brokerage platform — allowing authenticated users to browse a live market watchlist, place buy/sell orders, and track their personal holdings with real-time profit/loss calculation. It was built to practice production-style backend concepts like JWT authentication, per-user data scoping, transactional order logic, and third-party API integration, paired with a multi-page React frontend (landing site + trading dashboard) inspired by Zerodha's Kite platform, and deployed as separate live services on Render.

**Live Demo:** [tradexpert-l8cd.onrender.com](https://tradexpert-l8cd.onrender.com)

---

## Features

- JWT-Based Authentication (httpOnly Cookies)
- Password Hashing (bcrypt)
- Per-User Protected Routes & Data Scoping
- Live Market Watchlist (Yahoo Finance API)
- Buy/Sell Order Execution with Weighted-Average Holdings
- Real-Time Holdings & P&L Calculation
- Order History Tracking
- Responsive Multi-Page Frontend (Landing + Dashboard)
- RESTful API with 404 Handling
- Input Validation & Error Handling

---

## Tech Stack

### Frontend
- React 19
- React Router
- Axios
- Material UI (MUI)
- Chart.js / react-chartjs-2
- React Toastify
- React Cookie

### Backend
- Node.js (v20.18.0)
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcrypt
- Yahoo Finance API (`yahoo-finance2`)

### Tools
- Git
- GitHub
- Postman
- VS Code
- Render (Deployment — separate Frontend & Backend services)

---

## Architecture

```text
Client (React + Vite)  ──▶  Deployed on Render (Static Site)
       │
       ▼  (Axios, withCredentials: true)
Express REST API  ──▶  Deployed on Render (Web Service)
       │
       ├──▶ CORS Origin Whitelist (localhost + production frontend URL)
       ├──▶ AuthMiddleware (JWT verify via httpOnly cookie)
       │
       ├──▶ MongoDB Database (Users, Orders, Holdings, Watchlist)
       │        └── Orders/Holdings scoped to req.user._id
       │
       └──▶ Yahoo Finance API (Live Market Prices)
```

---

## Project Structure

```text
TradeXpert/
│
├── Backend/
│   ├── controllers/
│   │   ├── AuthController.js
│   │   ├── HoldingController.js
│   │   ├── OrderController.js
│   │   └── WatchListController.js
│   ├── middlewares/
│   │   └── AuthMiddleware.js
│   ├── models/
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   ├── UserModel.js
│   │   └── WatchListModel.js
│   ├── routes/
│   │   ├── AuthRoute.js
│   │   ├── HoldingRoute.js
│   │   ├── OrderRoute.js
│   │   └── WatchListRoute.js
│   ├── schemas/
│   │   ├── HoldingsSchema.js
│   │   ├── OrdersSchema.js
│   │   ├── UserSchema.js
│   │   └── WatchListSchema.js
│   ├── util/
│   │   └── SecretToken.js
│   ├── index.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   │   └── media/
│   │       └── images/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── utils/
│   │   │   └── toast.jsx
│   │   ├── landing_page/
│   │   │   ├── about/
│   │   │   │   └── AboutPage.jsx
│   │   │   ├── home/
│   │   │   │   ├── Features.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── HomePage.jsx
│   │   │   │   ├── OpenAccount.jsx
│   │   │   │   └── WhyProject.jsx
│   │   │   ├── pricing/
│   │   │   │   └── PricingPage.jsx
│   │   │   ├── support/
│   │   │   │   ├── CreateTicket.jsx
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── SupportPage.jsx
│   │   │   ├── user/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Signup.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── NotFound.jsx
│   │   ├── Dashboard/
│   │   │   ├── Components/
│   │   │   │   ├── BuyActionWindow.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── DoughnutChart.jsx
│   │   │   │   ├── Funds.jsx
│   │   │   │   ├── GeneralContext.jsx
│   │   │   │   ├── Holdings.jsx
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── Menu.jsx
│   │   │   │   ├── Orders.jsx
│   │   │   │   ├── Positions.jsx
│   │   │   │   ├── SellActionWindow.jsx
│   │   │   │   ├── Summary.jsx
│   │   │   │   └── VerticalGraph.jsx
│   │   │   ├── data/
│   │   │   │   └── data.js
│   │   │   └── dashboard.css
│   │   ├── layouts/
│   │   │   └── LandingLayout.jsx
│   │   ├── App.jsx
│   │   ├── environment.jsx
│   │   ├── main.jsx
│   │   └── ProtectedRoute.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js v20+
- npm
- MongoDB (local or Atlas)

### Installation
```bash
git clone https://github.com/username/TradeXpert.git
cd TradeXpert

# Backend
cd Backend
npm install

# Frontend
cd ../Frontend
npm install
```

### Environment Variables
Create a `.env` file inside the `Backend/` directory.
API KEY for Yahoo Finance API 
```env
MONGO_URL=
TOKEN_KEY=
API_KEY=
```

For the frontend, update `src/environment.jsx` to toggle between local and production backend URLs (`IS_PROD` flag).

### Run the Project
Backend
```bash
cd Backend
npm start
```
Frontend
```bash
cd Frontend
npm run dev
```

---

## API Documentation

| Method | Endpoint | Auth Required | Description |
|---------|----------|:---:|-------------|
| POST | /signup | No | Register a new user |
| POST | /login | No | Authenticate user, sets JWT cookie |
| GET | /verify | Yes | Verify current logged-in user |
| POST | /logout | No | Clear auth cookie |
| GET | /allWatchlist | No | Get live watchlist with current prices |
| GET | /allHoldings | Yes | Get authenticated user's holdings with live P&L |
| GET | /allOrders | Yes | Get authenticated user's order history |
| POST | /newOrder | Yes | Place a buy/sell order |

---

## Security

- JWT Authentication with httpOnly, sameSite Cookies
- Password Hashing (bcrypt)
- Route-Level Middleware Verifying Token + Attaching `req.user`
- All Orders/Holdings Queries Scoped to Authenticated User
- Strict CORS Origin Whitelisting (only approved frontend URLs, credentials enabled)
- Environment Variables for Sensitive Config

---

## Performance Optimizations

- Parallelized live price fetching for watchlist/holdings using `Promise.all`
- Weighted-average recalculation on holdings to avoid redundant DB writes
- Graceful fallback when a live quote fails (filtered out instead of crashing the request)
- Auto-cleanup of holdings when a position is fully sold off (qty reaches 0)

---

## Deployment

- **Frontend:** Deployed as a static site on Render at [tradexpert-l8cd.onrender.com](https://tradexpert-l8cd.onrender.com)
- **Backend:** Deployed as a separate web service on Render, with environment-based configuration (`IS_PROD` flag) switching the API base URL between local development and production automatically.
- **CORS:** Backend restricts cross-origin requests to an explicit allowlist (localhost for dev, the live frontend URL for production), with credentials enabled for cookie-based auth.

---

## Screenshots

### Landing Page
<img width="1360" height="635" alt="TradeXpert1" src="https://github.com/user-attachments/assets/cc401ea5-c058-4101-9b83-88d4d2fab071" />


### Trading Dashboard
<img width="1351" height="630" alt="TradeXpert2" src="https://github.com/user-attachments/assets/4e64dd8f-ecb0-488f-9efd-cbe1725e1ffe" />


---

## Challenges Faced

- Implementing JWT-based route protection and ensuring every Order/Holding query was correctly scoped to the authenticated user.
- Designing order execution logic that correctly recalculates weighted-average holding price on repeated buys and validates quantity on sells.
- Integrating a third-party live market data API and handling inconsistent/failed responses gracefully.
- Configuring CORS correctly across separate frontend/backend deployments without breaking cookie-based authentication.

---

## Future Improvements

- Per-user personalized watchlists (currently a shared/global watchlist)
- Live position tracking tied to real order data
- WebSocket-based real-time price streaming
- Refresh token rotation for longer, safer sessions
- Unit & Integration Testing
- Docker Support
- CI/CD Pipeline

---
