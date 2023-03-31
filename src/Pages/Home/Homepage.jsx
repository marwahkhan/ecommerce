import React from "react";
import Slider from "../../Components/SliderHome/slider";
import StoreFeatures from "../../Components/StoreFeatures/storeFeatures";
import FeatureCollection from "../../Components/FeatureCollection/FeatureCollection";
import Blog from "../../Components/Blog/Blog";
import Shopx from "../../Components/shop.component/shopx";

const  Homepage = ()=>  {

return(
    <div>
        <Slider/>
        <Shopx/>
        <FeatureCollection/>
        <Blog/>
        <StoreFeatures/>
       
    </div>
 
                          
);


}
export default Homepage;