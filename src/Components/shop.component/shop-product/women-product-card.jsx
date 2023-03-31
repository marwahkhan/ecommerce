import React from "react";
import { CartContext } from "../../../context/cartContext";
import { useContext } from "react";
const WomenProductCard =({item})=>{
    const { title, product_price, image,product_discount } = item;
    const { addItemToCart } = useContext(CartContext);
  
    const addProductToCart = () => addItemToCart(item);
    console.log(item)
    return(

        <div className="col-6 col-sm-6 col-md-4 col-lg-3 grid-view-item style2 item">

                                	<div className="grid-view_image">
                                        
                                        
                                        <a href="product-accordion.html" className="grid-view-item__link" >
                                       
                                       
                                            <img className="grid-view-item__image primary blur-up lazyload" data-src={image} src={image} alt="image" title={`${title}`}/>
                                      
                                      
                                            <img className="grid-view-item__image hover blur-up lazyload" data-src={image} src={image} title={`${title}`}/>
                                           
                                           
                                            <div className="product-labels rectangular"><span className="lbl on-sale">RS: {product_discount}</span> <span className="lbl pr-label1">new</span></div>
                                        
                                        
                                        </a>
                                     


                                       
                                        <div className="product-details hoverDetails text-center mobile" >
                                       
                                       
                                            <div className="product-name">
                                                <a href="#">{`${title}`}</a>
                                            </div>
                                            
                                            
                                      
                                      
                                            <div className="product-price">
                                            
                                                <span className="price">RS: {product_price}</span>
                                            </div>
                                     
                                     
                                            <div className="product-review">
                                                <i className="font-13 fa fa-star"></i>
                                                <i className="font-13 fa fa-star"></i>
                                                <i className="font-13 fa fa-star"></i>
                                                <i className="font-13 fa fa-star-o"></i>
                                                <i className="font-13 fa fa-star-o"></i>
                                            </div>


                                   
                                        
                                            <div className="button-set">
                                                <a href="#content_quickview" title="Quick View" className="quick-view-popup quick-view" tabindex="0">
                                                	<i className="icon anm anm-search-plus-r"></i>
                                            	</a>
                                          
                                                <form action="#" method="post">
                                                    <button className="btn btn--secondary cartIcon btn-addto-cart" type="button" onClick={addProductToCart}><i className="icon anm anm-bag-l"></i></button>
                                                </form>
                                                <div className="wishlist-btn">
                                                    <a className="wishlist add-to-wishlist" href="#" title="Add to Wishlist">
                                                        <i className="icon anm anm-heart-l"></i>
                                                    </a>
                                                </div>
                                                <div className="compare-btn">
                                                    <a className="compare add-to-compare" href="compare.html" title="Add to Compare">
                                                        <i className="icon anm anm-random-r"></i>
                                                    </a>
                                                </div>
                                            </div>
                                              
                                        </div>
                                   
                                    </div>
                                    </div>
          
                               
                          
    );

}
export default WomenProductCard;