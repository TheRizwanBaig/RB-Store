import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

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
    <>
      {Object.keys(product).length === 0 ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card elevation={2} sx={{ maxWidth: 945 }}>
              <CardHeader
                  title={product.title}
                  subheader={`
                          ⭐Rating ${product.rating.rate}`}
                />
                <CardActions>

                <CardMedia
                  style={{
                    alignItem: "center",
                    width: "auto",
                    maxHeight: "300px",
                    alignItems:"center",
                  }}

                  component="img"
                  image={product.image}
                  alt={product.title}
                />
               
                <CardContent>
                  <Typography paragraph>Price: {product.price}</Typography>
                  <Typography paragraph>
                    Category: {product.category}
                  </Typography>
                </CardContent>
</CardActions>
                <CardContent>

                  <Typography paragraph>
                    description:{product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      )}
    </>
  );
};

export default ProductDetail;
