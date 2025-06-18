import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Cart1 from "../assets/Cart1.png";
import User1 from "../assets/User1.png"
import Hamburger from "../assets/hamburger-icon.png";
import Footer from "./Footer"

function Home() {
  const [open,setOpen]=useState(false)
  function toggleMenu(){
    setOpen(!open);
  }
  return (
    <>
      <div id="container">
        <div id="logo">
          <img src={Logo} alt="logo" />
          
        </div>
        <div id="main">
          <ul>
            {/* <li><Link to={"/"}>Home</Link></li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Products">Products</Link>
            </li>
            <li>
              <Link to="/Category">Category</Link>
            </li>
            <li>
            <Link to="/Cart">
              <img src={Cart1} alt="cart" />
            </Link>
            </li>
            <li>
              <Link to="Signup">
              <img src={User1} alt="user"/>
              </Link>
            </li>
          </ul>
        </div>
        <div id="hamburg">
            <img src={Hamburger} alt="nav" id="img2" onClick={toggleMenu}/>
        </div>
        {
          open &&(
            <div className="dropdown">
              <Link to={"/"} onClick={()=>setOpen(false)}>Home</Link>
              <Link to={"Products"} onClick={()=>setOpen(false)}>Products</Link>
              <Link to={"Category"} onClick={()=>setOpen(false)}>Category</Link>
              <Link to={"Cart"} onClick={()=>setOpen(false)}><img src={Cart1} alt="cart" width="30px"/></Link>
              <Link to={"Signup"} onClick={()=>setOpen(false)}><img src={User1} alt="user"  width="30px"/></Link>
            </div>
          )
        }
      </div>
      <section>
        <Outlet />
        
      </section>
      
    </>
  );
}
export default Home;
