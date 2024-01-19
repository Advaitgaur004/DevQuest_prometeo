import React from "react";
import "../Style/Loader.css";
import part from "../image/part.png";
import logoparta from "../image/logoparta.png";
import logopartn from "../image/logopartn.png";
import logopartp from "../image/logopartp.png";
const Loader = () => {
  return (
    <div className="comp_loader">
        
    <div className="loader">
      
      <div>
          <img src={logoparta} alt="" className="logoparta" />
        </div>
        <img src={logopartp} alt="" className="logoparta" />
        <img src={logopartn} alt="" className="logoparta" />
        <img src={logoparta} alt="" className="logoparta" />
        <div className="logopart1">
         
          <img src={part} alt="" />
        </div>
    </div>
    <div className="wait">please wait.... 7s</div>
      </div>
  );
};

export default Loader;
