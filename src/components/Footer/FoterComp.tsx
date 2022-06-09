import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import PopUpComp from "../PopUp/PopUpComp.tsx";

const FooterPage = () => {
  function openPopUp(selectedPopUp:string){
    return<PopUpComp selectedPopUp={selectedPopUp}/>

  }

  return (
    <div className="FooterPage_footer">
      <p onClick={openPopUp} className="FooterPage_footer_href">
        Contact Us
      </p>
      <br />
      <p onClick={openPopUp}  className="FooterPage_footer_href">
        Term of Use
      </p>
      <br />
      <p onClick={openPopUp}  className="FooterPage_footer_href">
        Privacy Policy
      </p>
    </div>
  );
};

export default FooterPage;
