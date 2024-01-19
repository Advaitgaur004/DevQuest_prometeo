import React, { useEffect, useState } from "react";
import "../Style/serachreasult.css";
import MinLoader from "./MinLoader";
import Card from "../component/Card";
import image from "../image/logo (1).png";
const Searchreasult = ({ texts }) => {
  const [load, setload] = useState(true);

  setTimeout(() => {
    setload(false);
  }, 2000);

  return (
    <>
      {load ? (
        <MinLoader />
      ) : (
        <div className="searchreasultpage">
            <div className="webside_card">

          <div className="head_card">
            <h1>Flipcard</h1>
            <div className="cards">

            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
             <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            </div>
          </div>
          <div className="head_card">
            <h1>Amazone</h1>
            <div className="cards">

            <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
             <Card
            className='card'
              image={image}
              name="ashu"
              rating="3"
              price="300"
              link="/"
              website="flipcard"
            />
            </div>
          </div>
         
            </div>
        </div>
      )}
    </>
  );
};

export default Searchreasult;
