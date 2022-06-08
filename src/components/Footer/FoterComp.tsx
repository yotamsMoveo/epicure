import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  function navigateToConact(){

  }
  return (
    <div className="FooterPage_footer">
      <p onClick={navigateToConact} className="FooterPage_footer_href">
        Contact Us
      </p>
      <br />
      <p onClick={navigateToConact}  className="FooterPage_footer_href">
        Term of Use
      </p>
      <br />
      <p onClick={navigateToConact}  className="FooterPage_footer_href">
        Privacy Policy
      </p>
    </div>
  );
};

export default FooterPage;
