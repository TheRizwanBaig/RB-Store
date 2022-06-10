import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import "./featured__products.css";
import Card from "../../card/Card";
import { setProduct } from "../../../redux/actions/productActions";

const FeaturedProducts = () => {
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/category/men's%20clothing")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProduct();
  });
  return (
    <div className="featured__products__container">
      <div className="fp__h1">
        <h1> Featured Products</h1>
      </div>
      <div className="product__container">
        <Card />
      </div>
    </div>
  );
};

export default FeaturedProducts;
