import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/navbar.css';
// const [activeLink, setActiveLink] = useState(

// );

const Navbar = () => {
  // useEffect(() => {
  //   setActiveLink(window.location.pathname);
  // }, []);
  // const handleClick = (event) => {
  //   setActiveLink(event.target.pathname);
  // };
  return (
   <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/search'>Search</Link>

   </div>
  )
}

export default Navbar