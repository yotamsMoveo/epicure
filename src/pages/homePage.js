import * as React from 'react';
import '../scss_files/HomePage.scss';
import ButtonComp from '../components/buttonComp';
import SelectComp from '../components/selectComp';
import TextFieldComp from '../components/textFieldComp';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import '../scss_files/Components.scss';


function HomePage(){
    const selectByItem=['Chef','Restaurant'];
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
  
 return(
    <div className="App-header ">
         <Card className='card' >
            <CardContent>
                <h1 className='header'>Epicure works with the top chef restaurants in Tel Aviv</h1>
                {/* <SelectComp arr={selectByItem}/> */}
                <TextFieldComp/>
                <ButtonComp buttonName='search'/>
            </CardContent>
         </Card>
    </div>
 );
}
//sx={{m:2, minWidth: 275 }}
export default HomePage;
