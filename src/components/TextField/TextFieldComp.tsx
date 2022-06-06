import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
      <TextField focused defaultValue={props.text}></TextField>
   
  );
}
export default TextFieldComp;
