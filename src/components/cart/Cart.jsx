import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  removeAllCart,
  deleltCart,
  incCart,
  decCart,
} from "../../redux/actions/productActions";
import "./cart.css";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalAmount = 0;

  const total = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      totalAmount =
        totalAmount + cartProducts[i].quantity * cartProducts[i].price;
    }
    return totalAmount;
  };

  return (
    <div className="cart">
      <div className="cart__h">
        <h1>Cart</h1>
      </div>
      {cartProducts.map((product, ind) => {
        return (
          <div key={ind} className="cart__container">
            <div className="cart__details">
              <div className="cart__image" onClick={() => navigate(`/products/${product.id}`)}>
                <img src={product.image} alt={product.title} />
              </div>
              <div className="cart__box">
                <h3>{product.title}</h3>
                <div className="cart__row">
                  <div className="btn__container">
                    <div className="inc__dec__btn">
                      <button onClick={() => dispatch(decCart(product.id))}>
                        -
                      </button>
                      <div className="product__quantity">
                        <h3>{product.quantity}</h3>
                      </div>
                      <button onClick={() => dispatch(incCart(product.id))}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="del__btn">
                    <button onClick={() => dispatch(deleltCart(product.id))}>
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
              </div>
              <span>${product.price}</span>
            </div>
          </div>
        );
      })}
      {Object.keys(cartProducts).length === 0 ? (
        <h2 className="cart__h"> No product added</h2>
      ) : (
        <>
        <div className="total">
          <h2>SubTotal $ {total()}</h2>
          <button onClick={() => dispatch(removeAllCart({}))}>
            Remove All
          </button>
        </div>
        <div className="checkout">
      <Button component={Link} to={"/checkout"} variant="contained" size="large" >
              <ShoppingCartCheckoutIcon/>Checkout
            </Button>
      </div>
        </>
      )}
     
    </div>
  );
};

export default Cart;
