import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../context/productProvider";
const ShopBanner = ( ) =>{
    return(
        <div id="page-content">
    	
    	<div className="collection-header">
			<div className="collection-hero">
        		<div className="collection-hero__image"><img className="blur-up lazyload" data-src="images/cat-women2.jpg" src="images/cat-women2.jpg" alt="Women" title="Women" /></div>
        		<div className="collection-hero__title-wrapper"><h1 className="collection-hero__title page-width">Shop Fullwidth</h1></div>
      		</div>
		</div>
        </div>
    );
}
export default ShopBanner;