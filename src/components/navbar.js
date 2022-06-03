import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import '../scss_files/Components.scss';
import mainlogo from'./../assets/mainlogo.png';
import searchlogo from './../assets/search.png';


const Navbar=(props)=>{
   
    return (
        <Box  sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='navbar'>
            <IconButton
              className='icon'
            >
              <MenuIcon />
            </IconButton>
            <img className='mainlogo' src={mainlogo}/>
            <img  src={searchlogo}/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Epicure
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      )
}

export default Navbar;