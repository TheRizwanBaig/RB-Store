import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./card/Card";
import {
  filterProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductCategorie = () => {
  const product = useSelector((state) => state.product);
  const { category } = useParams();
  const dispatch = useDispatch();
  console.log(product);

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

  return (
    <>
      <h1
        style={{
          color: "red",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {category}
      </h1>

      <Card />
    </>
  );
};

export default ProductCategorie;
