import React from "react";
import "./Product.css"
import Cart2 from "../assets/Cart2.png"
function Product({data ,addtoCart}){
return(
    <>
    <div id="main-product">
    {
        
        data.map((item,ind)=>{
            return(
                <div id="product">
                     <button onClick={()=>addtoCart(item)} ><img src={Cart2} alt="cart2" id="cart-heart"/></button>
           <div key={item.id}>
             <h1>{item.title}</h1>
             <img src={item.image} width={100}/>
             <h3>Category:-<strong>{item.category}</strong></h3>
            <h4>Price:<mark>${item.price}</mark></h4>
            
            
            <div id="btn">
                
            <button className="button">Buy Now</button>
            </div>
           
           </div>
           
           </div>
            )
            
        })
    }
    </div>
    </>
);
}
export default Product;