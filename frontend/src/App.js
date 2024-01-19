import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./component/Navbar";
import Loader from "./component/Loader";

import { useState } from "react";
import Search from "./pages/Search";

function App() {
  const [loader,setloader] = useState(true);
  setTimeout(() => {
    setloader(false);
}, 5000);
  return (
    <div>
{loader ? 
<Loader/>
:
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/aboutus" element={<About/>} />
      <Route path="/search" element={<Search/>} />

     
    </Routes>
  </BrowserRouter>
  }
    </div>
    


    
  );
}

export default App;
