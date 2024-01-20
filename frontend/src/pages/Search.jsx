import React, { useEffect, useState } from "react";
import "../Style/search.css";
import Typewriter from "typewriter-effect";
import Alert from "react-bootstrap/Alert";
import Searchreasult from "./Searchreasult";
import { Link } from "react-router-dom";
import axios from 'axios';
const Search = ({onhandle,settexts,setminloader,setdataes}) => {
  const [text, settext] = useState("");
  const [alert, setalert] = useState(false);
  const datas = {input : ''}
  const [inputdata,setinputdata] = useState(datas);
  
  const handleonchange = (e) => {
    settext(e.target.value);
    settexts(e.target.value)
    setalert(false);
    setinputdata(e.target.value);
    // console.log(inputdata);
    // console.log(text);
  };
 
  const handleonclick = (e) => {
    //  e.preventDefault();
    //  axios.post("http://127.0.0.1:8000/ProductFinder/",inputdata)
    //  .then((response)=>{
    //   console.log(response);
    //  })
    const fetchData = async () => {
    console.log(inputdata);
    console.log('ashutosh1')

      try {
    console.log('ashutosh2')

        const response = await axios.post(
          'http://127.0.0.1:8000/ProductCreator/',
          {
            search : inputdata
          }
        );
    console.log('ashutosh3')

        setinputdata(response.data);
        setdataes(response.data)
        // console.log('Data:', response.data);
        }catch (error) {
          console.error('Error fetching data:', error);
          if (error.response) {
            // The request was made, but the server responded with a status code
            // that falls out of the range of 2xx
            console.error('Response data:', error.response.inputdata);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error setting up the request:', error.message);
          }
        }
    };

    fetchData();
    

    if (text == 0) {
      setalert(true);
    } else {
      setalert(false);
      setminloader(true);
    }
  };
  useEffect(() => {
    onhandle();
  }, [text]);
  
    
  const urlreasult = !text ? '#' : "/searchreasult"
  return (
    <div className="searchpage">
      <div className="search_text">
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div class="search-box">
        <input
          type="text"
          placeholder="Search anything"
          class="search-input"
          onChange={handleonchange}
          value={text}
          name= 'search'
        />
        <Link to={urlreasult} class="search-btn" onClick={handleonclick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </Link>
      </div>
      <div className="bottom_alert">
        {alert ? (
          <alert className="alert">
            <Alert variant="info">please fill input</Alert>
          </alert>
        ) :
        
        null
        }
      </div>
      
    </div>
  );
};

export default Search;