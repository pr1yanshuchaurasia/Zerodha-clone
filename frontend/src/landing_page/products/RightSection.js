import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row p-5">
        <div className="col-6 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt="Product" />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
