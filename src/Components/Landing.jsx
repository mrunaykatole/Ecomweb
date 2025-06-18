import React from "react";
import Mainimg from "../assets/Hero section.png"
import Video from "../assets/Main_video.mp4"
import Brands from "../assets/Brands.png"
import Fillimg1 from "../assets/Filter-img.jpg"
import Fillimg2 from "../assets/Filter-img2.jpg"
import Fillimg3 from "../assets/Filter-img3.jpg"
import Fillimg4 from "../assets/Filter-img4.jpg"
import Fillimg5 from "../assets/Filter-img5.jpg"
import Fillimg6 from "../assets/Filter-img6.webp"
import Fillimg7 from "../assets/Filter-img7.jpg"
import Fillimg8 from "../assets/Filter-img8.jpg"
import Fillimg9 from "../assets/Filter-img9.jpg"
import Fillimg10 from "../assets/Filter-img10.webp"


function Landing(){
    return(
        <>
         <section>
             <video  autoPlay loop muted  className="main-video">
                 <source src={Video} type="video/mp4"/>
                 </video>
            <div id="head-img">
                <img src={Brands} alt="brands" width="90%" id="brand-img"/>
                 <img src={Mainimg} alt="img"/>
                 </div>
                 
                 <div className="filter-container">
                <div className="filter-container-img" >
                    <div className="filter-container-img1">
                        <div className="filter-container-img1-a">
                            <img src={Fillimg1} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        
                        <div className="filter-container-img1-a">
                            <img src={Fillimg2} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg3} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg4} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                         <div className="filter-container-img1-a">
                            <img src={Fillimg5} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg6} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg7} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg8} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg9} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                        <div className="filter-container-img1-a">
                            <img src={Fillimg10} alt="img1"/>
                            <div id="text-img">
                            <h3 style={{width:"500px"}}> Solid mix of trendy and classic pieces; Comfortable, quality fabrics that last; Easy-to-use filters to find what you <br/>Wants to Explore--</h3>
                            <button>Explore</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                 </div>
                 </section>
                
        </>
    );
}
export default Landing