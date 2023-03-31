
import { React, useContext } from "react";
import shopdata from './../../Api/shopApi.json';
import { CartContext } from "../../context/cartContext";
import WomenProductComponent from "./women-product-component";

const ShopFullWidth = ( ) =>{
    const { addItemToCart } = useContext(CartContext);
    
    return(
 

<div className="container-fluid">
        	<div className="row" style={{marginTop:'20px'}}>
          
            	<div className="col-12 col-sm-12 col-md-3 col-lg-2 sidebar filterbar" >
                	<div className="closeFilter d-block d-md-none d-lg-none"><i className="icon icon anm anm-times-l"></i></div>
                	<div className="sidebar_tags">
                     
						<div className="sidebar_widget">
                        	<div className="widget-title"><h2>Popular Products</h2></div>
							<div className="widget-content">
                                <div className="list list-sidebar-products">
                                  <div className="grid">
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image">
                                            <a className="grid-view-item__link" href="#">
                                                <img className="grid-view-item__image" src="images/product-images/mini-product-img.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Cena Skirt</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$173.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img1.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Block Button Up</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$378.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img2.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Balda Button Pant</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$278.60</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="grid__item">
                                      <div className="mini-list-item">
                                        <div className="mini-view_image"> <a className="grid-view-item__link" href="#"><img className="grid-view-item__image" src="images/product-images/mini-product-img3.jpg" alt="" /></a> </div>
                                        <div className="details"> <a className="grid-view-item__title" href="#">Border Dress in Black/Silver</a>
                                          <div className="grid-view-item__meta"><span className="product-price__price"><span className="money">$228.00</span></span></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                          	</div>
						</div>
                    
                        <div className="sidebar_widget static-banner">
                        	<img src="assets/images/side-banner-2.jpg" alt="" />
                        </div>
                    
                        <div className="sidebar_widget">
                            <div className="widget-title"><h2>Information</h2></div>
                            <div className="widget-content"><p>Use this text to share information about your brand with your customers. Describe a product, share announcements, or welcome customers to your store.</p></div>
                        </div>
                  
                        <div className="sidebar_widget">
                        </div>
                  
                    </div>
                </div>
            
                <div className="col-12 col-sm-12 col-md-9 col-lg-10 main-col">
                	<div className="productList">
                   
                        <button type="button" className="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
                    	<div className="toolbar">
                        	<div className="filters-toolbar-wrapper">
                            	<div className="row">
                                	<div className="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                                    	<a href="shop-left-sidebar.html" title="Grid View" className="change-view change-view--active">
                                        	<img src="images/grid.jpg" alt="Grid" />
                                        </a>
                                        <a href="shop-listview.html" title="List View" className="change-view">
                                        	<img src="images/list.jpg" alt="List" />
                                        </a>
                                    </div>
                                    <div className="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                                    	<span className="filters-toolbar__product-count">Showing: 22</span>
                                    </div>
                                    <div className="col-4 col-md-4 col-lg-4 text-right">
                                    	<div className="filters-toolbar__item">
                                      		<label for="SortBy" className="hidden">Sort</label>
                                      		<select name="SortBy" id="SortBy" className="filters-toolbar__input filters-toolbar__input--sort">
                                                <option value="title-ascending" selected="selected"> Women </option>
                                                <option>Childern</option>
                                                <option>Men</option>
                                      		</select>
                                      		<input className="collection-header__default-sort" type="hidden" value="manual"/>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>


                                <WomenProductComponent/>
                                </div>
                            

                        
                                 
                  
                
            
            </div>
           
    
        </div>
        
    </div> 
    );
    
}
export default ShopFullWidth;
