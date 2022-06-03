import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


function SelectComp(props){
    const [searchItem, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value); 
    };
    return(<Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">search by</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={searchItem}
            label="Age"
            onChange={handleChange}
            >
            <MenuItem value={'Restaurant'}>{props.arr[0]}</MenuItem>
            <MenuItem value={'Shef'}>{props.arr[1]}</MenuItem>
            </Select>
        </FormControl>
        </Box>);

}

export default SelectComp;