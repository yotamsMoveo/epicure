import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../../components/Navbar/Navbar.scss';
import mainlogo from'../../assets/mainlogo.png';
import searchlogo from '../../assets/search.png';
import bagLogo from '../../assets/bagLogo.png';
import conactUsLogo from '../../assets/conactUsLogo.png';
import drawerComp from '../Drawer/DrawerComp.tsx';


const Navbar=(props:any)=>{
  function openHamborg(){
    console.log('hamborg open');
    // open(drawerComp);
    return(<div><drawerComp/></div>);
  }
   
    return (
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='Navbar_navbar'>
            <IconButton
              className='icon'
              onClick={openHamborg}
            >
              <MenuIcon />
            </IconButton>
            <img className='mainlogo' src={mainlogo}/>
            {/* <img className='searchLogo' src={searchlogo}/> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Epicure
            </Typography>
            <Button color="inherit" >Login</Button>
            <img className='Navbar_searchLogo' src={searchlogo}/>
            <img className='Navbar_bagLogo' src={bagLogo}/>
            <img className='Navbar_conactUsLogo' src={conactUsLogo}/>
          </Toolbar>
        </AppBar>
      </Box>
      )
}

export default Navbar;