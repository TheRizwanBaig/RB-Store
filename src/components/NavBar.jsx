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
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Logo from "./Logo.png";
import { removeSelectedProduct } from "../redux/actions/productActions";

const NavBar = () => {
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);

  const dispatch = useDispatch;
  const [categories, setcategories] = useState([]);
  const [anchorMenu, setAnchorMenu] = React.useState(null);
  const openMenu = Boolean(anchorMenu);
  const handleMenuClick = (event) => {
    setAnchorMenu(event.currentTarget);
    fetchProductCategories();
  };
  const handleMenuClose = () => {
    setAnchorMenu(null);
    dispatch(removeSelectedProduct());
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
          position="fixed"
          color="transparent"
          sx={{ backdropFilter: "blur(30px)" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              aria-controls={openMenu ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? "true" : undefined}
              onClick={handleMenuClick}
              style={{ color: "red" }}
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
              }}
              PaperProps={{
                style: {
                  width: 330,
                  padding: "20px",
                },
              }}
            >
              <Divider />
              <Divider />
              <Divider />
              <Typography variant="h5">Products</Typography>
              <Divider />
              <Divider />
              <Divider />
              <div>
                <MenuItem
                  component={Link}
                  to={`/productlist`}
                  onClick={handleMenuClose}
                  sx={{ m: 1 }}
                >
                  All Products
                </MenuItem>
              </div>
              <Divider />
              <Divider />
              <Divider />

              <Typography variant="h5"> categories</Typography>
              <Divider />
              <Divider />
              <Divider />

              {Object.keys(categories).length === 0 ? (
                <div>
                  {skeleton.map((curVal, ind) => {
                    return (
                      <MenuItem key={ind} sx={{ m: 1 }}>
                        <Skeleton width={300} height={30} />
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
                        sx={{ m: 1 }}
                      >
                        {product}
                      </MenuItem>
                    );
                  })}
                </div>
              )}
              <Divider />
              <Divider />
              <Divider />

              <Typography variant="h5"> About</Typography>
              <Divider />
              <Divider />
              <Divider />
              <MenuItem sx={{ m: 1 }}>
                <FacebookOutlinedIcon /> Facebook{" "}
              </MenuItem>
              <MenuItem sx={{ m: 1 }}>
                <InstagramIcon /> instagram
              </MenuItem>
              <MenuItem sx={{ m: 1 }}>
                <LinkedInIcon /> LinkedIn
              </MenuItem>
              <Divider />
            </Menu>
            <Typography
              align="center"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <Link to="/">
                <img alt="Logo" src={Logo} width="auto" height="70"></img>
              </Link>
            </Typography>
            <Button
              style={{ color: "red" }}
              component={Link}
              to="/login"
              color="inherit"
            >
              Login
            </Button>

            <IconButton
              aria-label="Show cart items"
              size="large"
              edge="end"
              component={Link}
              to="/productCart"
              style={{ color: "red" }}
            >
              <Badge badgeContent={cartProducts.length} color="secondary">
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
