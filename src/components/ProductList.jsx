import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "../redux/actions/productActions";
import Card from "./card/Card";

const ProductList = () => {
  const dispatch = useDispatch();

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
  });
  return (
    <>
      <Card />
    </>
  );
};

export default ProductList;
