import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import "./home.css";
import ProductList from './ProductList';
import image1 from "./img/image1.jpg"
import image2 from "./img/image2.png"
import image3 from "./img/image3.jpg"

const slideImages = [
  image1,
  image2,
  image3,
  
];
const Home = () => {
  return (
    <>
        <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
              
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
            </div>
          </div>
        </Slide>
      </div>
      <ProductList/>
    </>
  )
}

export default Home