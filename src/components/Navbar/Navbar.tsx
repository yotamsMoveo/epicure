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

const Navbar = (props: any) => {
  function openHamborg() {
    console.log("hamborg open");
    // open(drawerComp);
    // return(<div><drawerComp/></div>);
  }

  return (
    // <Box  sx={{ flex: 1 }}>
    <AppBar position="static">
      <Toolbar className="Navbar_navbar">
        <div>
          <IconButton className="Navbar_icon" onClick={openHamborg}>
            <MenuIcon />
          </IconButton>
          <img className="Navbar_mainlogo" src={mainlogo} />
        </div>
        {/* <img className='searchLogo' src={searchlogo}/> */}
        {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Epicure
            </Typography>
            <Button color="inherit" >Login</Button> */}
        <div>
          <img className="Navbar_searchLogo" src={searchlogo} />
          <img className="Navbar_bagLogo" src={bagLogo} />
          <img className="Navbar_conactUsLogo" src={conactUsLogo} />
        </div>
      </Toolbar>
    </AppBar>
    // </Box>
  );
};

export default Navbar;
