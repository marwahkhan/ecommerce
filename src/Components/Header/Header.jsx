import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import CartDropdown from "../CartDropDown/cartDropDown";
import CartIcon from "../cart-icon/cart-Icon";
import WishlistIconx from "../wishlist_icon/wishlist_icon";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../Utils/firebase/firebase";



const  Header = () =>{
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler =async()=>{
   const res = await signOutUser(); 
   setCurrentUser(null);
  }
  
  
    return(
        <div>

    <div className="top-header">
        <div className="container-fluid">
            <div className="row">
            	<div className="col-10 col-sm-8 col-md-5 col-lg-4">
                    {/* <div className="currency-picker">
                        <span className="selected-currency">USD</span>
                        <ul id="currencies">
                            <li data-currency="INR" className="">INR</li>
                            <li data-currency="GBP" className="">GBP</li>
                            <li data-currency="CAD" className="">CAD</li>
                            <li data-currency="USD" className="selected">USD</li>
                            <li data-currency="AUD" className="">AUD</li>
                            <li data-currency="EUR" className="">EUR</li>
                            <li data-currency="JPY" className="">JPY</li>
                        </ul>
                    </div> */}
                    <div className="language-dropdown">
                        <span className="language-dd">English</span>
                    </div>
                    <p className="phone-no"><i className="anm anm-phone-s"></i> +92-123456789</p>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 d-none d-lg-none d-md-block d-lg-block">
                	<div className="text-center"><p className="top-header_middle-text"> Free Shipping in Islamabad</p></div>
                </div>
                <div className="col-2 col-sm-4 col-md-3 col-lg-4 text-right">
                	<span className="user-menu d-block d-lg-none"><i className="anm anm-user-al" aria-hidden="true"></i></span>
                    <ul className="customer-links list-inline">
                      {currentUser ? (
                        
                        <li className="customer-links list-inline" onClick={signOutHandler}>LogOut</li>
                      ) : (
                        <li><a href="/login">LogIn</a></li>
                      )}
                      {console.log(currentUser)}
                        
                        <li><a href="/signup">Create Account</a></li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div className="header-wrap classNameicHeader animated d-flex">
    	<div className="container-fluid">        
            <div className="row align-items-center">
        
                {/* <div className="logo col-md-2 col-lg-2 d-none d-lg-block">
                    <a href="index.html">
                    	<img src="images/logo.svg" alt="Belle Multipurpose Html Template" title="Belle Multipurpose Html Template" />
                    </a>
                </div> */}
           
                <div className="col-2 col-sm-3 col-md-3 col-lg-8">
                	<div className="d-block d-lg-none">
                        <button type="button" className="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open">
                        	<i className="icon anm anm-times-l"></i>
                            <i className="anm anm-bars-r"></i>
                        </button>
                    </div>
    
                	<nav className="grid__item" id="AccessibleNav">
                        <ul id="siteNav" className="site-nav medium center hidearrow">
                            <li className="lvl1 parent megamenu"><a href="/">Home <i className="anm anm-angle-down-l"></i></a>
                            </li>
                            <li className="lvl1 parent megamenu"><a href="/shop">Shop <i className="anm anm-angle-down-l"></i></a>
                            	
                            </li>
                        <li className="lvl1 parent dropdown"><a href="#">Pages <i className="anm anm-angle-down-l"></i></a>
                          <ul className="dropdown">
                          	<li><a href="/cartpage" className="site-nav">Cart Page </a>
                            </li>
							<li><a href="/checkout" className="site-nav">Checkout</a></li>
                            {/* <li><a href="/aboutus" className="site-nav">About Us <span className="lbl nm_label1">New</span> </a></li> */}
                            {/* <li><a href="/contactus" className="site-nav">Contact Us</a></li>
                            <li><a href="/faqs" className="site-nav">FAQs</a></li> */}
                            {/* <li><a href="lookbook1.html" className="site-nav">Lookbook<i className="anm anm-angle-right-l"></i></a>
                              <ul>
                                <li><a href="lookbook1.html" className="site-nav">Style 1</a></li>
                                <li><a href="lookbook2.html" className="site-nav">Style 2</a></li>
                              </ul>
                            </li> */}
                            {/* <li><a href="/pagenotfound" className="site-nav">404</a></li>
                            <li><a href="/comingsoon" className="site-nav">Coming soon <span className="lbl nm_label1">New</span> </a></li> */}
                          </ul>
                        </li>
                        {/* <li className="lvl1 parent dropdown"><a href="#">Blog <i className="anm anm-angle-down-l"></i></a>
                        </li> */}
                        
                      </ul>
                    </nav>
           
                </div>
         
                <div className="col-6 col-sm-6 col-md-6 col-lg-2 d-block d-lg-none mobile-logo">
                	<div className="logo">
                        <a href="index.html">
                          
                            
                        </a>
                    </div>
                </div>
          
                <div className="col-4 col-sm-3 col-md-3 col-lg-2">
                  <div>
                  <CartIcon/>
              
              {isCartOpen && <CartDropdown />}
                  </div>

                {/* <div style={{marginLeft:'100px',marginBottom:'50px'}}>
                <WishlistIconx/>
                </div> */}
              
                
                	<div className="site-cart">
                    
                  
       
                        
                        
                        <div  id="header-cart" className="block block-cart">
                        	<ul className="mini-products-list">
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="images/product-images/cape-dress-1.jpg" alt="3/4 Sleeve Kimono Dress" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Sleeve Kimono Dress</a>
                                        <div className="variant-cart">Black / XL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="priceRow">
                                        	<div className="product-price">
                                            	<span className="money">$59.00</span>
                                            </div>
                                         </div>
                        
									</div>
                        
                                </li>
                                <li className="item">
                                	<a className="product-image" href="#">
                                    	<img src="images/product-images/cape-dress-2.jpg" alt="Elastic Waist Dress - Black / Small" title="" />
                                    </a>
                                    <div className="product-details">
                                    	<a href="#" className="remove"><i className="anm anm-times-l" aria-hidden="true"></i></a>
                                        <a href="#" className="edit-i remove"><i className="anm anm-edit" aria-hidden="true"></i></a>
                                        <a className="pName" href="cart.html">Elastic Waist Dress</a>
                                        <div className="variant-cart">Gray / XXL</div>
                                        <div className="wrapQtyBtn">
                                            <div className="qtyField">
                                            	<span className="label">Qty:</span>
                                                <a className="qtyBtn minus" href="javascript:void(0);"><i className="fa anm anm-minus-r" aria-hidden="true"></i></a>
                                                <input type="text" id="Quantity" name="quantity" value="1" className="product-form__input qty"/>
                                                <a className="qtyBtn plus" href="javascript:void(0);"><i className="fa anm anm-plus-r" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                       	<div className="priceRow">
                                            <div className="product-price">
                                                <span className="money">$99.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="total">
                            	<div className="total-in">
                                	<span className="label">Cart Subtotal:</span><span className="product-price"><span className="money">$748.00</span></span>
                                </div>
                                 <div className="buttonSet text-center">
                                    <a href="cart.html" className="btn btn-secondary btn--small">View Cart</a>
                                    <a href="checkout.html" className="btn btn-secondary btn--small">Checkout</a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                  
                </div>
       
        	</div>
        </div>
    </div>

    <div className="mobile-nav-wrapper" role="navigation">
		<div className="closemobileMenu"><i className="icon anm anm-times-l pull-right"></i> Close Menu</div>
        <ul id="MobileNav" className="mobile-nav">
        	<li className="lvl1 parent megamenu"><a href="index.html">Home <i className="anm anm-plus-l"></i></a>
          <ul>
            <li><a href="#" className="site-nav">Home Group 1<i className="anm anm-plus-l"></i></a>
    
            </li>
            <li><a href="#" className="site-nav">Home Group 2<i className="anm anm-plus-l"></i></a>
      
            </li>
            <li><a href="#" className="site-nav">New Sections<i className="anm anm-plus-l"></i></a>
           
            </li>
            <li><a href="#" className="site-nav">New Features<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="home13-auto-parts.html" className="site-nav">Top Information Bar </a></li>
                <li><a href="#" className="site-nav">Age Varification </a></li>
                <li><a href="#" className="site-nav">Footer Blocks</a></li>
                <li><a href="#" className="site-nav">2 New Megamenu style</a></li>
                <li><a href="#" className="site-nav">Show Total Savings </a></li>
                <li><a href="#" className="site-nav">New Custom Icons</a></li>
                <li><a href="#" className="site-nav last">Auto Currency</a></li>
              </ul>
            </li>
          </ul>
        </li>
        	<li className="lvl1 parent megamenu"><a href="#">Shop <i className="anm anm-plus-l"></i></a>
          <ul>
            <li><a href="#" className="site-nav">Shop Pages<i className="anm anm-plus-l"></i></a>
            </li>
            <li><a href="#" className="site-nav">Shop Features<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="shop-left-sidebar.html" className="site-nav">Product Countdown </a></li>
                <li><a href="shop-right-sidebar.html" className="site-nav">Infinite Scrolling</a></li>
                <li><a href="shop-grid-3.html" className="site-nav">Pagination - Classic</a></li>
                <li><a href="shop-grid-6.html" className="site-nav">Pagination - Load More</a></li>
                <li><a href="product-labels.html" className="site-nav">Dynamic Product Labels</a></li>
                <li><a href="product-swatches-style.html" className="site-nav">Product Swatches </a></li>
                <li><a href="product-hover-info.html" className="site-nav">Product Hover Info</a></li>
                <li><a href="shop-grid-3.html" className="site-nav">Product Reviews</a></li>
                <li><a href="shop-left-sidebar.html" className="site-nav last">Discount Label </a></li>
              </ul>
            </li>
          </ul>
        </li>
        	<li className="lvl1 parent megamenu"><a href="product-layout-1.html">Product <i className="anm anm-plus-l"></i></a>
          <ul>
            <li><a href="product-layout-1.html" className="site-nav">Product Page<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="product-layout-1.html" className="site-nav">Product Layout 1</a></li>
                <li><a href="product-layout-2.html" className="site-nav">Product Layout 2</a></li>
                <li><a href="product-layout-3.html" className="site-nav">Product Layout 3</a></li>
                <li><a href="product-with-left-thumbs.html" className="site-nav">Product With Left Thumbs</a></li>
                <li><a href="product-with-right-thumbs.html" className="site-nav">Product With Right Thumbs</a></li>
                <li><a href="product-with-bottom-thumbs.html" className="site-nav last">Product With Bottom Thumbs</a></li>
              </ul>
            </li>
            <li><a href="short-description.html" className="site-nav">Product Features<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="short-description.html" className="site-nav">Short Description</a></li>
                <li><a href="product-countdown.html" className="site-nav">Product Countdown</a></li>
                <li><a href="product-video.html" className="site-nav">Product Video</a></li>
                <li><a href="product-quantity-message.html" className="site-nav">Product Quantity Message</a></li>
                <li><a href="product-visitor-sold-count.html" className="site-nav">Product Visitor/Sold Count </a></li>
                <li><a href="product-zoom-lightbox.html" className="site-nav last">Product Zoom/Lightbox </a></li>
              </ul>
            </li>
            <li><a href="#" className="site-nav">Product Features<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="product-with-variant-image.html" className="site-nav">Product with Variant Image</a></li>
                <li><a href="product-with-color-swatch.html" className="site-nav">Product with Color Swatch</a></li>
                <li><a href="product-with-image-swatch.html" className="site-nav">Product with Image Swatch</a></li>
                <li><a href="product-with-dropdown.html" className="site-nav">Product with Dropdown</a></li>
                <li><a href="product-with-rounded-square.html" className="site-nav">Product with Rounded Square</a></li>
                <li><a href="swatches-style.html" className="site-nav last">Product Swatches All Style</a></li>
              </ul>
            </li>
            <li><a href="#" className="site-nav">Product Features<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="product-accordion.html" className="site-nav">Product Accordion</a></li>
                <li><a href="product-pre-orders.html" className="site-nav">Product Pre-orders </a></li>
                <li><a href="product-labels-detail.html" className="site-nav">Product Labels</a></li>
                <li><a href="product-discount.html" className="site-nav">Product Discount In %</a></li>
                <li><a href="product-shipping-message.html" className="site-nav">Product Shipping Message</a></li>
                <li><a href="product-shipping-message.html" className="site-nav last">Size Guide </a></li>
              </ul>
            </li>
          </ul>
        </li>
        	<li className="lvl1 parent megamenu"><a href="about-us.html">Pages <i className="anm anm-plus-l"></i></a>
          <ul>
          	<li><a href="/cartpage" className="site-nav">Cart Page <i className="anm anm-plus-l"></i></a>
                <ul className="dropdown">
                    <li><a href="/cartpage" className="site-nav">Cart Variant1</a></li>
                    <li><a href="/cartpage" className="site-nav">Cart Variant2</a></li>
                 </ul>
            </li>
            <li><a href="compare-variant1.html" className="site-nav">Compare Product <i className="anm anm-plus-l"></i></a>
                <ul className="dropdown">
                    <li><a href="compare-variant1.html" className="site-nav">Compare Variant1</a></li>
                    <li><a href="compare-variant2.html" className="site-nav">Compare Variant2</a></li>
                 </ul>
            </li>
			<li><a href="/checkout" className="site-nav">Checkout</a></li>
            <li><a href="/checkout" className="site-nav">Checkout</a></li>
            <li><a href="/aboutus" className="site-nav">About Us<span className="lbl nm_label1">New</span></a></li>
            <li><a href="/contactus" className="site-nav">Contact Us</a></li>
            <li><a href="/faqs" className="site-nav">FAQs</a></li>
            <li><a href="lookbook1.html" className="site-nav">Lookbook<i className="anm anm-plus-l"></i></a>
              <ul>
                <li><a href="lookbook1.html" className="site-nav">Style 1</a></li>
                <li><a href="lookbook2.html" className="site-nav last">Style 2</a></li>
              </ul>
            </li>
            <li><a href="/pagenotfound" className="site-nav">404</a></li>
            <li><a href="/comingsoon" className="site-nav">Coming soon<span className="lbl nm_label1">New</span></a></li>
          </ul>
        </li>
        	<li className="lvl1 parent megamenu"><a href="blog-left-sidebar.html">Blog <i className="anm anm-plus-l"></i></a>
          <ul>
            <li><a href="blog-left-sidebar.html" className="site-nav">Left Sidebar</a></li>
            <li><a href="blog-right-sidebar.html" className="site-nav">Right Sidebar</a></li>
            <li><a href="blog-fullwidth.html" className="site-nav">Fullwidth</a></li>
            <li><a href="blog-grid-view.html" className="site-nav">Gridview</a></li>
            <li><a href="blog-article.html" className="site-nav">Article</a></li>
          </ul>
        </li>
        	<li className="lvl1"><a href="#"><b>Buy Now!</b></a>
        </li>
      </ul>
	</div>
    </div>
    );
    
}
export default Header;