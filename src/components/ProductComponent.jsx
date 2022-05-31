import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea, IconButton, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh",padding:30 }}
        >
          {Object.keys(products).length === 0 ? (
            <>
              {skeleton.map((curVal, ind) => {
                return (
                  <Grid item key={ind} xs={12} sm={6} md={3}>
                    <Skeleton variant="rectangular" height={218} />
                    <Skeleton />
                    <Skeleton width="80%" />
                  </Grid>
                );
              })}
            </>
          ) : (
            <>
              {products.map((product) => {
                return (
                  <Grid item key={product.id} xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea
                        component={Link}
                        to={`/products/${product.id}`}
                      >
                        <CardHeader
                          title={product.title}
                          subheader={`
                          ⭐Rating ${product.rating.rate}`}
                        />
                        <CardMedia
                          style={{
                            alignItem: "center",
                            width: "auto",
                            maxHeight: "150px",
                          }}
                          component="img"
                          image={product.image}
                          alt={product.title}
                        />
                        <CardContent
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="body2" color="text.secondary">
                            Price: {product.price}$
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions sx={{display: 'flex',
    justifyContent: 'flex-end',}}>
                        <IconButton aria-label="Add to cart">
                          <AddShoppingCartIcon />
                        </IconButton>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
    </>
  );
};

export default ProductComponent;
