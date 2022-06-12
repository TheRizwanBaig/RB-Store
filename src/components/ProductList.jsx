import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./card/card.css";
import { addToCart } from "../redux/actions/productActions";
import {
  setProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
    return () => dispatch(removeSelectedProduct());

  });
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState("");
  return (
    <div>
    <h1
      style={{
        textAlign: "center",
        textTransform: "uppercase",
        marginTop: "90px",
      }}
    >
      All Products
    </h1>
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        maxWidth: "670px" ,
        minWidth: "5px" ,
        marginBottom: 5,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Product"
        inputProps={{ "aria-label": "search google maps" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 38, m: 1 }} orientation="vertical" />
      <FormControl variant="standard" style={{ width: "20%" }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sorted}
          label="Age"
          onChange={(e) => setSorted(e.target.value)}
        >
          <MenuItem value="title">A-Z</MenuItem>
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="rating.rate">Rating</MenuItem>
        </Select>
      </FormControl>
    </Paper>

    <div className="container">
      {Object.keys(products).length === 0 ? (
        <>
          {skeleton.map((curVal, ind) => {
            return (
              <div key={ind} className="skeleton">
                <Skeleton variant="rectangular" height={290} width={280} />
                <Skeleton />
                <Skeleton />
              </div>
            );
          })}
        </>
      ) : (
        <>
          {products
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .sort((a, b) => {
              if (sorted === "") {
                return a;
              } else if (sorted === "title" && a.title > b.title) {
                return 1;
              } else if (sorted === "price" && a.price > b.price) {
                return 1;
              } else if (
                sorted === "rating.rate" &&
                a.rating.rate < b.rating.rate
              ) {
                return 1;
              } else return -1;
            })
            .map((product) => {
              return (
                <div key={product.id} className="card">
                  <div onClick={() => navigate(`/products/${product.id}`)}>
                    <div className="img">
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "auto",
                          height: "200px",
                          padding: "5px",
                        }}
                      />
                    </div>

                    <div className="title">{product.title}</div>
                    <div className="pr__cantainer">
                      <p className="price">${product.price}</p>
                      <p className="rating">⭐ {product.rating.rate}</p>
                    </div>
                  </div>
                  <p>
                    <button
                      onClick={() => {
                        const prod = {
                          id: product.id,
                          image: product.image,
                          price: product.price,
                          title: product.title,
                          quantity: 1,
                        };
                        if (cartProducts.length !== 0) {
                          const dupe = cartProducts.find(
                            (obj) => obj.id === prod.id
                          );
                          return dupe
                            ? cartProducts
                            : dispatch(addToCart([...cartProducts, prod]));
                        } else {
                          dispatch(addToCart([...cartProducts, prod]));
                        }
                      }}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              );
            })}
        </>
      )}
    </div>
  </div>
  );
};

export default ProductList;
