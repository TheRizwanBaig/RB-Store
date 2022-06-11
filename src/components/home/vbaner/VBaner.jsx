import React from "react";
import "./vbaner.css";
import ClothingStore from "../img/ClothingStore.mp4";

const VBaner = () => {
  return (
    <div className="vbaner">
      <div className="video__container">
        <video src={ClothingStore} width="100%" height="100%" autoPlay muted loop  />
      </div>
    </div>
  );
};

export default VBaner;
