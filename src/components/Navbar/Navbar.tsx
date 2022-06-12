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

export const Navbar = (props: any) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [popup, setPopUp] = useState(null);

  // function handlePopUpOpen(selectedPopUp: string) {
  //   setIsOpen(!isOpen);
  //   if (isOpen || selectedPopUp.localeCompare(popup) != 0) {
  //     setPopUp(selectedPopUp);
  //   } else setPopUp(null);
  // }
  var isOpen = props.isOpen;
  var popup = props.popup;
  return (
    <div>
      <div className="Navbar_conteiner">
        <div className="Navbar_leftside">
          <IconButton
            className="Navbar_icon"
            onClick={() => props.onClick("menu")}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="Navbar_center">
          <img src={mainlogo} />
        </div>
        <div className="Navbar_rightSide">
          <img src={searchlogo} onClick={() => props.onClick("search")} />
          <img src={conactUsLogo}  />
          <img src={bagLogo} onClick={() => props.onClick("bag")} />
        </div>
        {{ isOpen } && (
          <PopUpComp selectedPopUp={props.popup} onClick={props.onClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
