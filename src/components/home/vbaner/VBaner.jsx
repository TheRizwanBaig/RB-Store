import React from "react";
import "./vbaner.css";
import ClothingStore from "../img/ClothingStore.mp4";

const VBaner = () => {
  return (
      <div className="video__container">
        <video src={ClothingStore}  autoPlay muted loop  />
    </div>
  );
};

export default VBaner;
