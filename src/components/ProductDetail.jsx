import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ClotheDetail from "./card/ClotheDetail";
import "./product__detail.css"

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => dispatch(removeSelectedProduct());
  }, [productId]);

  return (
    <div className="product__detailed">
      {Object.keys(product).length === 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <>
        <ClotheDetail />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
