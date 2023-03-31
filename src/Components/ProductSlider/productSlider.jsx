import React, { useContext } from "react";
import './productSlider.css';
import { useState } from "react";

import { CartContext } from "../../context/cartContext";
import { ProductsContext } from "../../context/productProvider";




const ProductSlider = ( {product}) =>{
	

	
	const {addItemToCart}=useContext(CartContext);
	const addProductToCart = () => addItemToCart(products);
	const {products} =useContext(ProductsContext);
	const { id,  product_price,image } = products;
	console.log(products)
	const [toggleState,setToggleState] = useState(1);
const toggleTab = (index) =>{
    setToggleState(index);
	
}  


    return(
		
      <section className="section-products">
	
		<div className="container">
		
	
				<div className="row justify-content-center text-center">
						<div className="col-md-8 col-lg-6">
								<div className="header">
										<h3>Featured Product</h3>
										<h2>Popular Products</h2>
								</div>
						</div>
				</div>
				
				
        <div className="tabs-listing"   >
                            <ul className="tabs clearfix">
                                <button className={toggleState ===1 ? "tabs active" : "tabs"} onClick={()=>toggleTab(1)}>Women</button>
                                <button className={toggleState ===2 ? "tabs active" : "tabs"} onClick={()=>toggleTab(2)}>Men</button>
                                <button className={toggleState ===3 ? "tabs active" : "tabs"} onClick={()=>toggleTab(3)}>childern</button>
                            </ul>
            {toggleState==1?<div  id="tab1" className={toggleState ===1 ? "tab_container" : "content"}>  
		               
				<div className="row"> 
								{
										products.map((data,key)=> 
										
										<div className="col-md-6 col-lg-4 col-xl-3" key={data.id}>
											
						
								<div    className="single-product" >
							 
										<div className="part-1" style={{ background: `url("${data.image}") no-repeat center`}}>
										<span className="discount">{data.product_discount}%</span>
											
												<ul>
														<li><a buttonType='inverted' onClick={addProductToCart}><i className="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i className="fas fa-heart"></i></a></li>
														<li><a href="#"><i className="fas fa-plus"></i></a></li>
														<li><a href="#"><i className="fas fa-expand"></i></a></li>
												</ul>
											
										</div>
										
										<div  className="part-2"  >
											
												<h3 className="product-title">{data.title}</h3>
												<h4 className="product-old-price">{data.old_price}</h4>
											  <h4 className="product-price">{data.product_price}</h4>
										
				
										</div>
											
								
								</div>
								
							
							
								
							
						</div>)}
					
						
						
						
						

				
						
						
					
						
			
        </div>
		
        </div>:null}
		{/*  */}
		{toggleState==2?<div  id="tab2" className={toggleState ===2 ? "tab_container" : "content"}>                   
				<div className="row">
				{
					products.map((data,key)=>

					
						<div className="col-md-6 col-lg-4 col-xl-3" key={data.id}>
								<div id="product-1"  className="single-product">

										<div className="part-1" style={{ background: `url("${data.image}") no-repeat center`}}>
										<span className="discount">{data.product_discount}%</span>
											
												<ul>
														<li><a onClick={addProductToCart}><i className="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i className="fas fa-heart"></i></a></li>
														<li><a href="#"><i className="fas fa-plus"></i></a></li>
														<li><a href="#"><i className="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div className="part-2">
												<h3 className="product-title">{data.title}</h3>
												<h4 className="product-old-price">{data.old_price}</h4>
												<h4 className="product-price">{data.product_price}</h4>
										</div>
								</div>
						</div>
						
						)
					}
				
						
					
						
		
					
					
			
        </div>
        </div>:null}
		{toggleState==3?<div  id="tab3" className={toggleState ===3 ? "tab_container" : "content"}>                   
				<div className="row">
				              {
								products.map((data,key)=>
							
						<div className="col-md-6 col-lg-4 col-xl-3" key={data.id}>
								<div id="product-1"  className="single-product">
										<div className="part-1" style={{ background: `url("${data.image}") no-repeat center`}}>
										<span className="discount">{data.product_discount}%</span>
												<ul>
														<li><a onClick={addProductToCart}><i className="fas fa-shopping-cart"></i></a></li>
														<li><a href="#"><i className="fas fa-heart"></i></a></li>
														<li><a href="#"><i className="fas fa-plus"></i></a></li>
														<li><a href="#"><i className="fas fa-expand"></i></a></li>
												</ul>
										</div>
										<div className="part-2">
												<h3 className="product-title">{data.title}</h3>
												<h4 className="product-old-price">{data.old_price}</h4>
												<h4 className="product-price">{data.product_price}</h4>
										</div>
								</div>
						</div>
							)
						}
				
						
        </div>
        </div>:null}
       
  
    </div>

    </div>
</section>

  
    );
		
}
export default ProductSlider;