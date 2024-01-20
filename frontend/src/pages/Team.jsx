import React, { useEffect } from "react";
import aboutuspage from "../image/Aboutuspage.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import '../Style/team.css'
import Profile from "../component/Profile";
import ashu from '../image/ashu.jpg'

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
      <div className="profiles">
        <div className="prof">
          <Profile image={ashu} fullname="Ashutosh"  creativity='frontend and backend devloper' />
          <Profile image={ashu} fullname="Ashutosh"  creativity='frontend and backend devloper' />

        </div>
        <div className="prof">
          <Profile image={ashu} fullname="Ashutosh"  creativity='frontend and backend devloper' />

          <Profile image={ashu} fullname="Ashutosh"  creativity='frontend and backend devloper' />
        </div>
        
       
      </div>
    </div>
  );
}
// flip-right
// fade-top
// zoom-in
