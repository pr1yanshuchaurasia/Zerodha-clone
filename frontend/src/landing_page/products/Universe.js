import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mt-5">
        <h1 >The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="Product" />
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" alt="Product" style={{width:"35%"}} />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" alt="Product"  style={{width:"35%"}}  />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" alt="Product"  style={{width:"50%"}}/>
          <p className="text-small text-muted mt-2">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" alt="Product" style={{width:"35%"}} />
          <p className="text-small text-muted mt-2">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" alt="Product"  style={{width:"25%"}}  />
          <p className="text-small text-muted mt-2">Options trading platform</p>
        </div>
        <button className="p-2 btn btn-primary fs-5 mt-3 mb-3" style={{width:"20%", margin: "0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
