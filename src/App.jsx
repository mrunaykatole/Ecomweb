import React, { useEffect,useState } from "react";
import {   Route, Routes } from "react-router-dom";
import "./App.css"
import { useLocation } from "react-router-dom";

import Product from "./Components/Product"
import Filter from "./Components/Filter"
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import Landing from "./Components/Landing";
import Signup from "./Components/Signup"
import ProtectedRoute from "./Components/ProtectedRoute"
import Footer from "./Components/Footer"


function App(){
  const [data,setData]=useState([])
  const [fill,setFill]=useState([])
  const [category,setCategory]=useState([])
  const [cart,setCart]=useState([])
  const location = useLocation();

 useEffect(()=>{
     async function fetchdata(){
    try{
        const res=await fetch("https://fakestoreapi.com/products");
        const result=await res.json();
        setData(result)
        setFill(result)
        setCategory(result)
       
        console.log(result)
    } 
    catch(error){ 
        console.log(error)
    }
  }fetchdata()
 },[])
  const addtocart = (item) => {
    setCart((prevCart)=>[...prevCart, item]);
  };
    return(
        <>
       
    
    <Routes>
      <Route path={"/Signup"} element={<Signup/>}/>
  
      {/* <Route element={<Home/>} path="/" /> */}
      <Route path="/" 
      element={
        <ProtectedRoute>
          <Home />
          </ProtectedRoute>} 
          >
          <Route index element={<Landing/>}/>
      <Route element={<Product data={data} addtoCart={addtocart}/>} path="Products"/>
      <Route element={ <Filter fill={fill}  addtoCart={addtocart}/>} path="Category"/>
      <Route element={<Cart cart={cart} setCart={setCart}/>} path="Cart"/>
      {/* <Route element={<FormStorage/>} path="FormStorage"/> */}
      </Route>
      
      
    </Routes>
        {location.pathname !== "/Signup" && <Footer />}

    
       
        
        </>
        
    )
}
export default App