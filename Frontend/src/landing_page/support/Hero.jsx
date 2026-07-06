import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="" id="supportWrapper">
        <h5 className="mt-4 ">Support Portal</h5>
        <a href="" className="mt-2 p-3">
          Track tickets
        </a>
      </div>
      <div className="row p-4" id="supportCont">
        <div className="col-6 p-2 mb-4">
          <h5 className="mb-4">
            Search for an answer or browse help topics to create a ticket
          </h5>
          <input
            className="mb-4"
            type="text"
            placeholder="Eg. how do I activate F&O..."
          />{" "}
          <br />
          <a href="">Track account opening </a>
          <a href="" style={{ paddingLeft: "0.75rem" }}>
            Track segment activation{" "}
          </a>
          <a href="" style={{ paddingLeft: "0.75rem" }}>
            Intraday margins
          </a>{" "}
          <br />
          <a href="" style={{ paddingTop: "0.75rem" }}>
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-5">
          <h5>Featured</h5>
          <p>
            Users will not be able to add funds to the equity segment from 8 PM
            to 12 AM due to the upcoming quarterly settlement.{" "}
            <a href="">Read more.</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
