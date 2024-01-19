import { useState } from "react";
import "../Style/navbar.css";
import { Link } from "react-router-dom";
import linksData from "./data";
import logo from "../image/logo (1).png";

function Navbar() {
  return (
    <>
      <div className="header">
        <div className="logo bounce_img">
          <Link to='/'>

          <img  src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="glass bounce">
          <div className="app_link">
            {linksData.map((link, index) => (
              <Link
                key={index}
                to={link.url}
                className="neon"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
