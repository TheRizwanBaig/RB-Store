import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/productActions";
import "./clothes__detailed.css";

const ClotheDetail = () => {
  const [size, setSize] = React.useState("");
  const product = useSelector((state) => state.product);
  const cartProducts = useSelector((state) => state.cartProduct.cartProducts);

  const dispatch = useDispatch();

  console.log(size);
  return (
    <div className="clothes__container">
      <div className="details">
        <div className="img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="box">
          <div className="row">
            <h2>{product.title}</h2>
          </div>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <div className="sizes__container">
            <div
              className={size === "small" ? "active" : "size"}
              onClick={() => {
                setSize("small");
              }}
            >
              <h3>S</h3>
            </div>
            <div
              className={size === "medium" ? "active" : "size"}
              onClick={() => {
                setSize("medium");
              }}
            >
              <h3>M</h3>
            </div>
            <div
              className={size === "large" ? "active" : "size"}
              onClick={() => {
                setSize("large");
              }}
            >
              <h3>L</h3>
            </div>
            <div
              className={size === "Xlarge" ? "active" : "size"}
              onClick={() => {
                setSize("Xlarge");
              }}
            >
              <h3>XL</h3>
            </div>
          </div>
          <button
            className="add_btn"
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
            Add to cart
          </button>
        </div>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ClotheDetail;
