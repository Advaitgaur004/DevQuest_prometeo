import React, { useEffect, useState } from "react";
import "../Style/serachreasult.css";
import MinLoader from "./MinLoader";
import Card from "../component/Card";
import image from "../image/logo (1).png";
import axios from "axios";
const Searchreasult = ({ texts }) => {
  const [load, setload] = useState(true);
  setTimeout(() => {
    setload(false);
  }, 2000);

  const [data, setData] = useState([]);
  const [price, setPrice] = useState(true);
  const [rating, setrating] = useState(true);

  const handleprice = (e) => {
    setPrice(e.target.checked);
    console.log(price);
  };
  const handlerating = (e) => {
    setrating(e.target.checked);
  };
  const Arrayamazone = JSON.parse(data[0].amazon.replace(/'/g, '"'));
  // console.log(yourArray);
  // const Arrayamazone= [
  //   {
  //     price : 'a500',
  //     rating: 'a3'
  //   },
  //   {
  //     price : 'a200',
  //     rating: 'a2'
  //   }
  // ]
  const filteredItems = price
    ? Arrayamazone.sort((a, b) => a.price.slice(1) - b.price.slice(1))
    : Arrayamazone;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/ProductFinder/`
        );
        setData(response.data);
        // console.log(data[0].search)
      } catch (error) {
        console.error("Error fetching data:thux", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {load ? (
        <MinLoader />
      ) : (
        <div className="searchreasultpage">
          <div className="webside_card">
            {/* <div>
             
            {data[0].search}
            </div>  */}
            <div>
              price{" "}
              <input type="checkbox" name={price} onChange={handleprice} />
              rating{" "}
              <input type="checkbox" name={rating} onChange={handlerating} />
            </div>
            <div className="head_card">
              <h1>Amazone</h1>
              <div className="cards">
                {filteredItems.map((data) => (
                  <Card
                    className="card"
                    image={data.image}
                    // name={data.title}
                    rating={data.rating}
                    price={data.price}
                    // link={data.url}
                    // website="flipcard"
                  />
                ))}
              </div>
            </div>
            <div className="head_card">
              <h1>Flipcard</h1>

              <div className="cards">
                <Card
                  className="card"
                  image={image}
                  name="ashu"
                  rating="3"
                  price="300"
                  link="/"
                  website="flipcard"
                />
                <Card
                  className="card"
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
