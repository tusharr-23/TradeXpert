import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" style={{ width: "100%" }} />
        </div>
        <div className="col-6 p-5 mt-5 ml-2">
          <h2 className="mb-4">{productName}</h2>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
