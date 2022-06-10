import React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import "./checkout.css";
const Checkout = () => {
  return (
    <>
    <div className="checkout__container">
      <h1> Checkout</h1>
      <div>
        <TextField
          className="TextField"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Address 2 Optional"
          variant="outlined"
        />
      </div>
      <div>
        <FormControl className="TextField">
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem>Ten</MenuItem>
            <MenuItem>Twenty</MenuItem>
            <MenuItem>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          className="TextField"
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
        />
      </div>
    </div>
    <div className="confirm">
      <Button  variant="contained" size="large" >
              Confirm!
            </Button>
        
    </div>
            </>
  );
};

export default Checkout;
