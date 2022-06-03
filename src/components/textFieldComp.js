import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../scss_files/Components.scss';

function TextFieldComp(){
    return( <Box
        component="form"
        sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField focused />
        </Box>);
}
export default TextFieldComp;