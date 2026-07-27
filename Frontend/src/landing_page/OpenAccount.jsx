// import React from "react";

// function OpenAccount() {
//   return (
//     <div className="container section-hero">
//       <div className="row text-center">
//         <h1 className="mt-5">Open a TradeXpert account</h1>
//         <p>
//           All features are available free of cost, allowing you to explore{" "}
//           <br />
//           trading concepts and portfolio management without any brokerage fees.
//         </p>
//         <div className="flex-center mb-5" style={{ minHeight: "60px" }}>
//           <button className="btn btn-primary">Sign up Now</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default OpenAccount;
import React from "react";

function OpenAccount() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3">Ready to experience TradeXpert?</h2>

            <p className="text-muted mb-4">
              Create your free account and explore a realistic stock trading
              dashboard with portfolio tracking, watchlists, and secure
              authentication—all in a simulated trading environment.
            </p>

            <a href="/" className="btn btn-primary btn-lg px-5">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OpenAccount;
