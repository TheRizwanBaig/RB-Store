import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(`Login with ${state.email}`);
    alert(email);
    setState({
      email: "",
      password: "",
    });
  };
  return (
    <>
        <Box sx={{ textAlign: "center", marginTop: 20 , minHeight: "48vh"}}>
      <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <Grid>
            <TextField
              style={{ width: "280px", color: "black" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <br />
            <br />
            <TextField
              style={{ width: "280px" }}
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={state.password}
              onChange={handleChange}
            />{" "}
            <br />
            <br />
            <Button
              style={{ width: 100, background: "black", color: "white" }}
              variant="outlined"
              type="submit"
            >
              Login
            </Button>
         
          </Grid>
      </form>
        </Box>
    </>
  );
};

export default Login;
