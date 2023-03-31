import React from "react";
const  SliderHome = ()=>  {

return(
    <div>
    	<div className="slideshow slideshow-wrapper pb-section sliderFull">
        	<div className="home-slideshow">
            	<div className="slide">
                	<div className="blur-up lazyload bg-size">
                        <img className="blur-up lazyload bg-img" data-src="images/slideshow-banners/belle-banner1.jpg" src="images/slideshow-banners/belle-banner1.jpg" alt="Shop Our New Collection" title="Shop Our New Collection" />
                        <div className="slideshow__text-wrap slideshow__overlay classNameic bottom">
                            <div className="slideshow__text-content bottom">
                                <div className="wrap-caption center">
                                        <h2 className="h1 mega-title slideshow__title">Shop Our New Collection</h2>
                                        <span className="mega-subtitle slideshow__subtitle">From Hight to low, classNameic or modern. We have you covered</span>
                                        <span className="btn">Shop now</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                	<div className="blur-up lazyload bg-size">
                        <img className="blur-up lazyload bg-img" data-src="images/slideshow-banners/belle-banner2.jpg" src="images/slideshow-banners/belle-banner2.jpg" alt="Summer Bikini Collection" title="Summer Bikini Collection" />
                        <div className="slideshow__text-wrap slideshow__overlay classNameic bottom">
                            <div className="slideshow__text-content bottom">
                                <div className="wrap-caption center">
                                    <h2 className="h1 mega-title slideshow__title">Summer Bikini Collection</h2>
                                    <span className="mega-subtitle slideshow__subtitle">Save up to 50% off this weekend only</span>
                                    <span className="btn">Shop now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
 
                          
);


}
export default SliderHome;