import React from "react";
import "./p&s.css";
import products from "../img/products.jpg";
const ProductsAndServices = () => {
  return (
    <div className="ps">
      <div className="ps__h1">
        <h1>Products and Services</h1>
      </div>
      <div className="ps__container">
        <div className="ps__detailes__container">
          <div className="ps__image">
            <img src={products} alt="products" />
          </div>
          <div className="ps__detailes">
            <h2>What We Offer?</h2>
            <p>
              Since its founding in 1964, ORIX has developed a dynamic and
              diversified portfolio offering a broad range of services. ORIX is
              a leader in numerous domains including leasing, corporate finance,
              industrial/ICT equipment, environment and energy,
              automobile-related, real estate-related, private equity investment
              and concession, banking and life insurance businesses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAndServices;
