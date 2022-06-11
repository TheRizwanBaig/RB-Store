import React from "react";
import "./p&s.css";
import products from "../img/products.jpg";
const ProductsAndServices = () => {
  return (
    <div className="ps">
      <div className="ps__h1"></div>
      <div className="ps__container">
        <div className="ps__detailes__container">
          <div className="ps__image">
            <img src={products} alt="products" />
          </div>
          <div className="ps__detailes">
            <div className="ps__text">What We Offer?</div>
            <p>
              RB Digital has developed a dynamic and diversified store offering
              a broad range of products. RB Digital is providing a very
              user-friendly user interface in which you can easily find your
              desired fulfilled products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
