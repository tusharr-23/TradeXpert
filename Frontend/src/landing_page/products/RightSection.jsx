import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h2 className="mb-4">{productName}</h2>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More →
            </a>
          </div>
        </div>
        <div className="col-6 p-3">
          <img src={imageURL} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
