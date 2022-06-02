import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import axios from "axios";
import Logo from "./Logo.png";
const NavBar = () => {
  const [categories, setcategories] = useState([]);
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const openMenu = Boolean(anchorMenu);
  const handleMenuClick = (event) => {
    setAnchorMenu(event.currentTarget);
    fetchProductCategories();
  };
  const handleMenuClose = () => {
    setAnchorMenu(null);
  };

  const fetchProductCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((err) => {
        console.log("error", err);
      });
    setcategories(response.data);
  };

  const skeleton = [1, 2, 3, 4];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ background: "black", marginBottom: 50}}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorMenu}
              open={openMenu}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {Object.keys(categories).length === 0 ? (
                <div>
                  {skeleton.map((curVal, ind) => {
                    return (
                      <MenuItem key={ind}>
                        <Skeleton width={150} height={30} />
                      </MenuItem>
                    );
                  })}
                </div>
              ) : (
                <div>
                  {categories.map((product, index) => {
                    return (
                      <MenuItem
                        key={index}
                        component={Link}
                        to={`products/category/${product}`}
                        onClick={handleMenuClose}
                      >
                        {product}
                      </MenuItem>
                    );
                  })}
                </div>
              )}
            </Menu>
            <Typography align="center" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">
                <img alt ="Logo" src={Logo} width="auto" height="70"></img>
              </Link>
            </Typography>
            <Button component={Link} to={"/login"} color="inherit">
              Login
            </Button>

            <IconButton
              aria-label="Show cart items"
              size="large"
              edge="end"
              color="inherit"
              component={Link} to= {"/cart"}
            >
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
