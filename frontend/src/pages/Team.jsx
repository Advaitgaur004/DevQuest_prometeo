import React, { useEffect } from "react";
import aboutuspage from "../image/Aboutuspage.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Style/team.css'

export default function Team() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);
  return (
    <div className="teampage">
      <h1 data-aos="flip-right" className="aboutpageheading">
        {" "}
        <span
          style={{ color: "rgb(31, 173, 33)", textDecoration: "underLine" }}
        >
          Teams
        </span>{" "}
        
      </h1>
      <div className="about_image_and_text">
        
        <div data-aos="fade-right">
          {/* <img src={aboutuspage} alt="" /> */}
        </div>
        <div data-aos=" flip-right">
         
        </div>
      </div>
    </div>
  );
}
// flip-right
// fade-top
// zoom-in
