import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./card/card.css";
import { addToCart } from "../redux/actions/productActions";
import {
  filterProduct,
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

const ProductCategorie = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);

  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(products);

  const fetchProductCategory = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(filterProduct(response.data));
  };
  useEffect(() => {
    if (category && category !== "") fetchProductCategory();
    return () => dispatch(removeSelectedProduct());
  }, [category]);

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
        {category}
      </h1>
      <Paper
          className="search__bar"

        component="form"
      
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
             <MenuItem value="AZ">A-Z</MenuItem>
          <MenuItem value="ZA">Z-A</MenuItem>
          <MenuItem value="priceLowHigh">Price low-high</MenuItem>
          <MenuItem value="priceHighLow">Price high-low</MenuItem>
          <MenuItem value="ratingHighLow">Rating high-low</MenuItem>
          <MenuItem value="ratingLowHigh">Rating low-high</MenuItem>
          </Select>
        </FormControl>
      </Paper>

      <div className="container">
        {Object.keys(products).length === 0 ? (
          <>
            {skeleton.map((curVal, ind) => {
              return (
                <div key={ind} className="skeleton">
                  <Skeleton variant="rectangular" className="skeleton" />
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
              } else if (sorted === "AZ" && a.title > b.title) {
                return 1;
              } else if (sorted === "ZA" && a.title < b.title) {
                return 1;
              } else if (sorted === "priceLowHigh" && a.price > b.price) {
                return 1;
              } else if (sorted === "priceHighLow" && a.price < b.price) {
                return 1;
              } else if (
                sorted === "ratingHighLow" &&
                a.rating.rate < b.rating.rate
              ) {
                return 1;
              } else if (
                sorted === "ratingLowHigh" &&
                a.rating.rate > b.rating.rate
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
                        />
                      </div>

                      <div className="title">{product.title}</div>
                      <div className="pr__cantainer">
                        <p className="price">${product.price}</p>
                        <p className="rating">⭐ {product.rating.rate}</p>
                      </div>
                    </div>
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
                  </div>
                );
              })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCategorie;
