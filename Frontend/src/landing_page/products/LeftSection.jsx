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
          <img src={imageURL} alt={productName} className="img-responsive" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h2 className="mb-4">{productName}</h2>
          <p className="mb-4">{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo}>Try Demo →</a>
            <a href={learnMore} style={{ marginLeft: "var(--spacing-2xl)" }}>
              Learn More →
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-responsive"
                style={{ maxWidth: "150px" }}
              />
            </a>
            <a href={appStore} style={{ marginLeft: "var(--spacing-2xl)" }}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-responsive"
                style={{ maxWidth: "150px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
