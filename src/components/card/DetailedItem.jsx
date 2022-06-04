import React from "react";
import { useSelector } from "react-redux";
import "./detailed__item.css";

const DetailedItem = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className="detailed__container">
      <div className="detailed__card">
        <div className="detailed__pr__cantainer">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "auto", height: "390px", padding: "5px" }}
          />
          <div className="description">
            <h1>{product.title}</h1>
            <p className="detailed__price">Category: {product.category}</p>
            <p className="detailed__price">
              Quantity: <input className="input"></input>
            </p>
            <p className="detailed__price">
              Size:
              <select id="cars" name="cars">
                <option value="volvo">S</option>
                <option value="saab">M</option>
                <option value="mercedes">L</option>
                <option value="audi">XL</option>
              </select>
            </p>

            <div class="product-color">
              <span>Color</span>

              <div class="color-choose">
                <div>
                  <input
                    data-image="red"
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                  />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="blue"
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="black"
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                  />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
            <p className="detailed__price">Price ${product.price}</p>
            <br />
            <button>Add to Cart</button>
          </div>
        </div>
        <p className="detailed__price">Description: {product.description}</p>
      </div>
    </div>
  );
};

export default DetailedItem;
