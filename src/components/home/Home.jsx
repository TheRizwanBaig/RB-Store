import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./home.css";
import FeaturedProducts from "./featured products/FeaturedProducts";
import ProductsAndServices from "./p&S/ProductsAndServices";
import VBaner from "./vbaner/VBaner";
import ProductOffer from "./productOffer/ProductOffer";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";
import image4 from "./img/image4.jpg";
import image5 from "./img/image5.jpg";

const slideImages = [image1, image2, image3, image4, image5];
const Home = () => {
  return (
    <>
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div
            className="banner__image"
              style={{
                backgroundImage: `url(${slideImages[0]})`,
              }}
            ></div>
          </div>

          <div className="each-slide">
            <div             className="banner__image" 
            style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
          </div>

          <div className="each-slide">
            <div className="banner__image" style={{ backgroundImage: `url(${slideImages[2]})` }}></div>
          </div>

          <div className="each-slide">
            <div className="banner__image" style={{ backgroundImage: `url(${slideImages[3]})` }}></div>
          </div>

          <div className="each-slide">
            <div className="banner__image" style={{ backgroundImage: `url(${slideImages[4]})` }}></div>
          </div>
        </Slide>
      </div>
      <FeaturedProducts />
      <VBaner />
      <ProductsAndServices />
      <ProductOffer />
    </>
  );
};

export default Home;
