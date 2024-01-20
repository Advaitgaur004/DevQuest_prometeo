import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Loader from "./component/Loader";

import { useState } from "react";
import Search from "./pages/Search";
import Team from "./pages/Team";
import Searchreasult from "./pages/Searchreasult";
import Eror from "./pages/Eror";

function App() {
  const [loader, setloader] = useState(true);
  const [minloader, setminloader] = useState(false);

  setTimeout(() => {
    setloader(false);
  }, 5800);
  const [texts, settexts] = useState("");
  const [dataes, setdataes] = useState("");

  const onhandle = (e) => {
    //  console.log(texts)
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="*" element={<Eror />} />
            <Route
              path="/search"
              element={
                <Search
                  onhandle={onhandle}
                  settexts={settexts}
                  setminloader={setminloader}
                  setdataes={setdataes}
                />
              }
            />
            <Route
              path="/searchreasult"
              element={<Searchreasult texts={texts}  dataes={dataes} />}
            />
            <Route path="/teams" element={<Team />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
