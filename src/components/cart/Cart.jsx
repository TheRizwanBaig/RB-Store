import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import "./cart.css";
const Cart = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [cartProducts, setCartProducts] = useState([]);
  const fetchProductCart = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/3")
      .catch((err) => {
        console.log("error", err);
      });
    setCartProducts(response.data);
  };
  useEffect(() => {
    fetchProductCart();
  });
  return (
    <>
      <div className="cart__h">
        <h1>Cart</h1>
      </div>
      <div className="cart__container">
        <div className="cart__details">
          <div className="cart__image">
            <img src={cartProducts.image} />
          </div>
          <div className="cart__box">
            <h3>{cartProducts.title}</h3>
            <div className="cart__row">
              <div className="btn__container">
                <div className="inc__dec__btn">
                  <button
                    onClick={() => setProductQuantity(productQuantity - 1)}
                  >
                    -
                  </button>
                  <div className="product__quantity">
                    <h3>{productQuantity}</h3>
                  </div>
                  <button
                    onClick={() => setProductQuantity(productQuantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="del__btn">
                <button onClick={() => setProductQuantity(0)}>
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
          <span>${cartProducts.price}</span>
        </div>
      </div>
      <div className="total">
        <h2>SubTotal ${productQuantity * cartProducts.price}</h2>
      </div>
    </>
  );
};

export default Cart;
