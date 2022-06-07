import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import searchLogo from '../../assets/search.png';

function TextFieldComp(props) {
  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 2, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    //   <TextField focused defaultValue={props.text}></TextField>
    // </Box>
    // <TextField focused >
    //   <img className='TextFieldComp_searchLogo' src={searchLogo}/>
    // </TextField>

    <form>
      <label>
        <input type="text" name="name" >
          {/* <div>
            <img className='TextFieldComp_searchLogo' src={searchLogo}/>
          </div> */}
        </input>
      </label>
    </form>
  );
}
export default TextFieldComp;
