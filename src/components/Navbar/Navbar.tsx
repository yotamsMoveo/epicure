import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "../../components/Navbar/Navbar.scss";
import mainlogo from "../../assets/images/mainlogo.png";
import searchlogo from "../../assets/images/search.png";
import bagLogo from "../../assets/images/bagLogo.png";
import conactUsLogo from "../../assets/images/conactUsLogo.png";
import drawerComp from "../Drawer/DrawerComp.tsx";
import PopUpComp from "../PopUp/PopUpComp.tsx";
import { useState } from "react";

const Navbar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopUp] = useState(null);
  function handlePopUpOpen(selectedPopUp: string) {
    setIsOpen(!isOpen);
    if (isOpen || selectedPopUp.localeCompare(popup) != 0) {
      setPopUp(selectedPopUp);
    } else setPopUp(null);
  }

  return (
    <div>
      <div className="Navbar_conteiner">
        {/* <ul> */}
          <div className="Navbar_leftside">
          {/* <li> */}
            <IconButton
              className="Navbar_icon"
              onClick={() => handlePopUpOpen("menu")}
            >
              <MenuIcon />
            </IconButton>
          {/* </li> */}
          </div>
          <div className="Navbar_center">
            {/* <li className="Navbar_mainlogo"> */}
              <img src={mainlogo} />
            {/* </li> */}
          </div>
          <div className="Navbar_rightSide">
            {/* <li className="Navbar_searchLogo"> */}
              <img src={searchlogo} onClick={() => handlePopUpOpen("search")} />
            {/* </li> */}
            {/* <li className="Navbar_conactUsLogo"> */}
              <img
                src={conactUsLogo}
                onClick={() => handlePopUpOpen("conact")}
              />
            {/* </li> */}
            {/* <li className="Navbar_bagLogo"> */}
              <img src={bagLogo} onClick={() => handlePopUpOpen("bag")} />
            {/* </li> */}
          </div>
        {/* </ul> */}
        {{ isOpen } && <PopUpComp selectedPopUp={popup} />}
      </div>
    </div>
  );
};

export default Navbar;
