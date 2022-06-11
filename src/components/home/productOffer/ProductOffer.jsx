import React from "react";
import "./product__offer.css";
import clothing from "../img/clothing.png";
import necklace from "../img/necklace.png";
import electronics from "../img/electronics.png";
const ProductOffer = () => {
  return (
    <div className="product__offer">
      <div className="product__offe__heading"> Why choose us?</div>
      <div className="product__offer__box__container">
        <div className="product__offer__box">
          <div className="product__offer__box__header">
            <div className="product__offer__box__icon">
              <img
                src={clothing}
                alt="clothing"
                style={{ width: "auto", height: "100px", padding: "5px" }}
              />
            </div>
            <div className="product__offer__box__icon__h2">
              <h2>Quantity</h2>
            </div>
          </div>
          <div className="product__offer__box__text">
            <p>
              We have the quantity of a variety of products, especially clothing
              and jewelry.
            </p>
          </div>
        </div>
        <div className="product__offer__box">
          <div className="product__offer__box__header">
            <div className="product__offer__box__icon">
              <img
                src={necklace}
                alt="clothing"
                style={{ width: "auto", height: "100px", padding: "5px" }}
              />
            </div>
            <div className="product__offer__box__icon__h2">
              <h2>Quality</h2>
            </div>
          </div>
          <div className="product__offer__box__text">
            <p>
              We have very premium and high-quality products, especially in
              jewelry and electronics
            </p>
          </div>
        </div>
        <div className="product__offer__box">
          <div className="product__offer__box__header">
            <div className="product__offer__box__icon">
              <img
                src={electronics}
                alt="clothing"
                style={{ width: "auto", height: "100px", padding: "5px" }}
              />
            </div>
            <div className="product__offer__box__icon__h2">
              <h2>Efficiency</h2>
            </div>
          </div>
          <div className="product__offer__box__text">
            <p>
              Our store's user interface and delivery are very efficient, in
              terms of speed and accuracy of products you ordered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOffer;
