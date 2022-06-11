import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import "./card.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productActions";

const Card = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
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
          {products.map((product) => {
            return (
              <div key={product.id} className="card">
                <div onClick={() => navigate(`/products/${product.id}`)}>
                  <div className="img">
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "auto", height: "200px", padding: "5px" }}
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
                        const dupe = cartProducts.find(obj => obj.id === prod.id);
                        return dupe ? cartProducts : dispatch(addToCart([...cartProducts, prod]));
                      } else {dispatch(addToCart([...cartProducts, prod]));}
                      
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
  );
};

export default Card;
