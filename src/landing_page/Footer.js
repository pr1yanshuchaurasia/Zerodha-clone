import React from "react";

function Footer() {
  return (
    <footer className="" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="/media/logo.svg" style={{ width: "50%" }} />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a className="text-muted text-decoration-none d-block" href="#">
              About
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Products
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Pricing
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Referral programme
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Careers
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Zerodha.tech
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Press & media
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <p>Support</p>
            <a className="text-muted text-decoration-none d-block" href="#">
              Contact
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Products
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Support Portal
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Z-Conect portal
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Z-connect blog
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              List of charges
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Download & resources
            </a>
            <br />
          </div>
          <div className="col">
            <p>Account</p>
            <a className="text-muted text-decoration-none d-block" href="#">
              Open an account
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              Fund transfer
            </a>
            <br />
            <a className="text-muted text-decoration-none d-block" href="#">
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div
          className="mt-5 text-small text-muted"
          style={{ fontSize: "12px" }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-4 mt-3">
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              NSE
            </a>
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              BSE
            </a>
             <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              MCX
            </a>
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              Terms & Conditions
            </a>
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              Policies & procedures
            </a>
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              Privacy policy
            </a>
            <a className="text-muted text-decoration-none mb-2" style={{fontSize:"15px"}} href="#">
              Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
