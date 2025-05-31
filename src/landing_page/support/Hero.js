import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mb-5 mt-5">
        <h1 className="fs-2 ">To create a ticket, select a relevant topic</h1>
      </div>
      <div className="Col-4 p-5 mb-5 mt-5">
        <h4 className="">
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
        </h4>
        <a href="" style={{textDecoration:"none",lineHeight:"2"}}> Resident individual</a> <br/>
        <a href="" style={{textDecoration:"none",lineHeight:"2"}}> Minor</a><br/>
        <a href="" style={{textDecoration:"none",lineHeight:"2"}}> Non Resident Indian (NRI)</a><br/>
        <a href="" style={{textDecoration:"none",lineHeight:"2"}}> Company, Partnership, HUF and LLP</a><br/>
        <a href="" style={{textDecoration:"none",lineHeight:"2"}}> Glossary</a>
      </div>
      
    </div>
  );
}

export default Hero;
