import React from "react";
import './SliderHome.css';
const  Slider = ()=>  {

return(
<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img.freepik.com/premium-photo/beautiful-happy-young-woman-red-background_246930-618.jpg?w=900" alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5 style={{color:"#ffffff",fontFamily:"Roboto Slab,Helvetica,Tahoma,Arial,serif", fontWeight:"700",fontSize:"66px",texttransform: "uppercase",lineheight: "1.1"   , textshadow: "1px 1px 7px rgb(0 0 0 / 0%)"}}>Shop Our New Collection</h5>
    <p style={{color:"#ffffff",fontFamily:"Poppins,Helvetica,Tahoma,Arial,serif", fontWeight:"400",fontSize:"22px",texttransform: "uppercase",lineheight: "1.2"   , textshadow: "1px 1px 4px rgb(0 0 0 / 0%)", display:'block',marginTop:"20px"}}>From Hight to low, classNameic or modern. We have you covered</p>
   <a href="/shop"> <span className="btn" >Shop now</span> </a>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.freepik.com/premium-photo/portrait-beautiful-successful-smiling-woman-doing-selfie-yellow-wall_70216-4546.jpg?w=900" alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
    <h5 style={{color:"#ffffff",fontFamily:"Roboto Slab,Helvetica,Tahoma,Arial,serif", fontWeight:"700",fontSize:"66px",texttransform: "uppercase",lineheight: "1.1"   , textshadow: "1px 1px 7px rgb(0 0 0 / 0%)"}}>Shop Our New Collection</h5>
    <p style={{color:"#ffffff",fontFamily:"Poppins,Helvetica,Tahoma,Arial,serif", fontWeight:"400",fontSize:"22px",texttransform: "uppercase",lineheight: "1.2"   , textshadow: "1px 1px 4px rgb(0 0 0 / 0%)", display:'block',marginTop:"20px"}}>From Hight to low, classNameic or modern. We have you covered</p>
    <a href="/shop"> <span className="btn" >Shop now</span> </a>
  </div>
    </div>
  </div>

  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 
                          
);


}
export default Slider;