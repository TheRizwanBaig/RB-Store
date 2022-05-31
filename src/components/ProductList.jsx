import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProduct } from "../redux/actions/productActions";

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
      <ProductComponent />
    </>
  );
};

export default ProductList;
