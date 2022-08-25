import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import { ToastContainer, toast } from "react-toastify";
import validator from 'validator';
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./checkout.css";

const Checkout = () => {
  const navigate = useNavigate();
  const [shipActive, setShipActive] = useState("");
  const [payActive, setPayActive] = useState("");
  const [state, setState] = useState({
    email: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    zipCode: "",
    city: "",
  });

  const notifySuccess = () => {
    toast.success("Order placed", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyWarn = (msg) => {
    toast.warn(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !state.email ||
      !state.firstName ||
      !state.lastName ||
      !state.contact ||
      !state.address ||
      !state.zipCode ||
      !state.city 
    ) {
      notifyWarn("Fill the data first!");
      return;
    }
    else if (!validator.isEmail(state.email)){
      notifyWarn("Incorrect Email!");
      return;
    }
    else if (!validator.isMobilePhone(state.contact)){
      notifyWarn("Incorrect Mobile no!");
      return;
    }
    else if (!shipActive){
      notifyWarn("Please select Shipping Charges");
      return;
    }
    else if (!payActive){
      notifyWarn("Please select Payment Method");
      return;
    }
    notifySuccess();
    setState({
      email: "",
      firstName: "",
      lastName: "",
      contact: "",
      address: "",
      zipCode: "",
      city: "",
    });
    setShipActive("");
    setPayActive("");
     
    setTimeout(() => {
      navigate('/') 
    }, 1000);
  };
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <div className="checkout__container">
          <h3> Email</h3>
          <div className="textField__container">
            <div>
              <TextField
                className="TextField__long"
                id="outlined-basic"
                label="Email"
                required
                variant="outlined"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="check__email">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Email me with news and offers"
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="checkout__container">
          <h3> Contact information</h3>
          <div className="textField__container">
            <div>
              <TextField
                className="TextField"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                required
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
              <TextField
                className="TextField"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                required
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <TextField
                className="TextField"
                id="outlined-basic"
                label="Mobile no"
                variant="outlined"
                inputProps={{ minLength: 11 ,maxLength: 11  }}
                required
                name="contact"
                value={state.contact}
                onChange={handleChange}
              />
              <TextField
                className="TextField"
                id="outlined-basic"
                label="Mobile no optional"
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                className="TextField__long"
                id="outlined-basic"
                label="Full Address"
                variant="outlined"
                required
                name="address"
                value={state.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <FormControl className="TextField">
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="city"
                  name="city"
                  value={state.city}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                >
                  <MenuItem value="Karachi">Karachi</MenuItem>
                  <MenuItem value="Lahore">Lahore</MenuItem>
                  <MenuItem value="Islamabad">Islamabad</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="TextField"
                id="outlined-basic"
                label="Zip Code"
                variant="outlined"
                name="zipCode"
                value={state.zipCode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="check__email">
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Save this information for next time"
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="checkout__container">
          <h3> Shipping Details</h3>
          <div className="textField__container">
            <div className="shiping__method">
              <div
                className={shipActive === "15days" ? "radio__active" : "radio"}
                onClick={() => setShipActive("15days")}
              >
                <div>15 days Delivery Charges</div>
                <div>500 Rs</div>
              </div>
              <div
                className={shipActive === "10days" ? "radio__active" : "radio"}
                onClick={() => setShipActive("10days")}
              >
                <div>10 days Delivery Charges</div>
                <div>300 Rs</div>
              </div>
              <div
                className={shipActive === "week" ? "radio__active" : "radio"}
                onClick={() => setShipActive("week")}
              >
                <div>7 days Delivery Charges</div>
                <div>800 Rs</div>
              </div>
              <div
                className={shipActive === "3days" ? "radio__active" : "radio"}
                onClick={() => setShipActive("3days")}
              >
                <div>3 days Delivery Charges</div>
                <div>1000 Rs</div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__container">
          <h3> Payment Methods</h3>
          <div className="textField__container">
            <div className="shiping__method">
              <div
                className={payActive === "card" ? "radio__active" : "radio"}
                onClick={() => setPayActive("card")}
              >
                <div>Debit/Credit/EasyPaisa/Account</div>
                <div>
                  <CreditCardTwoToneIcon />
                </div>
              </div>
              <div
                className={payActive === "cod" ? "radio__active" : "radio"}
                onClick={() => setPayActive("cod")}
              >
                <div>Cash on Delivery </div>
                <div>
                  <LocalShippingTwoToneIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="confirm">
          <Button type="submit" variant="contained" size="large">
            Confirm
          </Button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
