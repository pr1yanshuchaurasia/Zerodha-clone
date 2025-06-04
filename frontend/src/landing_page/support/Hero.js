import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4 className="me-5">Support Portal</h4>
        <a href="">Track tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3 ps-5" style={{ marginTop: "-80px" }}>
          <h1 className="fs-4 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do i activate f&O, why is my order getting rejected.." />
          <br />
          <div className="d-flex flex-row gap-2 mt-5" id="supportLinks">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5" style={{ marginBottom: "20px" }}>
          <h1 className="fs-3">Featured</h1>
          <ol style={{ lineHeight: "2.8" }}>
            <li>
              <a href="">
                Introduction of new F&O contracts on 9 individual securities
              </a>
            </li>
            <li>
              {" "}
              <a href="">Rights Entitlements listing in May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
