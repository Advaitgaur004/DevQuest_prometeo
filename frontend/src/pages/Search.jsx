import React, { useEffect, useState } from "react";
import "../Style/search.css";
import Typewriter from "typewriter-effect";
import Alert from "react-bootstrap/Alert";
import Searchreasult from "./Searchreasult";
import { Link } from "react-router-dom";

const Search = ({onhandle,settexts,setminloader}) => {
  const [text, settext] = useState("");
  const [alert, setalert] = useState(false);
  const handleonchange = (e) => {
    settext(e.target.value);
    settexts(e.target.value)
    setalert(false);
    // console.log(text);
  };
  const handleonclick = () => {
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