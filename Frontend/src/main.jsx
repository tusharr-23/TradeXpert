// // import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import "react-toastify/dist/ReactToastify.css";

// import "./index.css";
// import HomePage from "./landing_page/home/HomePage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductPage";
// import Signup from "./landing_page/user/Signup";
// import Login from "./landing_page/user/Login";
// import SupportPage from "./landing_page/support/SupportPage";
// import Navbar from "./landing_page/Navbar";
// import Footer from "./landing_page/Footer";
// import NotFound from "./landing_page/NotFound";

// import Dashboard from "./Dashboard/Components/Dashboard";

// createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <Navbar />
//     <Routes>
//       <Route path="/" element={<HomePage />}></Route>
//       <Route path="/signup" element={<Signup />}></Route>
//       <Route path="/login" element={<Login />}></Route>
//       <Route path="/about" element={<AboutPage />}></Route>
//       <Route path="/product" element={<ProductPage />}></Route>
//       <Route path="/pricing" element={<PricingPage />}></Route>
//       <Route path="/support" element={<SupportPage />}></Route>
//       <Route path="/dashboard" element={<Dashboard />}></Route>
//       <Route path="*" element={<NotFound />}></Route>
//     </Routes>
//     <Footer />
//   </BrowserRouter>,
// );

import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

// Landing Pages
import LandingLayout from "./layouts/LandingLayout";
import HomePage from "./landing_page/home/HomePage";
import PricingPage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import Signup from "./landing_page/user/Signup";
import Login from "./landing_page/user/Login";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

// Dashboard
import Home from "./Dashboard/Components/Home";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Landing Pages */}
      <Route element={<LandingLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>

      {/* Dashboard */}
      <Route path="/dashboard/*" element={<Home />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);
