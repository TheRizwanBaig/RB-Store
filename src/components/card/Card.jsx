import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import Skeleton from "@mui/material/Skeleton";

import "./card.css";
const Card = () => {
  const products = useSelector((state) => state.allProducts.products);
  const navigate = useNavigate()
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="container   ">
    {Object.keys(products).length === 0 ? (
          <>
            {skeleton.map((curVal, ind) => {
              return (
                <div key={ind} className="skeleton">
                  <Skeleton variant="rectangular" height={399} width={350} />
                  <Skeleton />
                  <Skeleton />
                </div>
              );
            })}
          </>
        ) :(

        <>
      {products.map((product) => {
        return (
          <div key={product.id} className="card" >
            <div onClick={() => navigate(`/products/${product.id}` )}>
            <div className="img">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "auto" , height : '250px' ,padding: "5px" }}
            />
            </div>
            
            <h4 className="title">{product.title}</h4>
            <div className="pr__cantainer">
            <p className="price">${product.price}</p>
            <p className="rating">
            ⭐Rating{product.rating.rate}
            </p>

            </div>
            </div>
            <p>
              <button>Add to Cart</button>
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
