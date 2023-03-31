import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
const CheckoutPage = ( ) =>{
    const {cartItems,addItemToCart,removeItemToCart,clearItemFromCart,cartTotal,cartDiscount}=useContext(CartContext);

    return(
        <div id="page-content">
    
    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Checkout</h1></div>
      		</div>
		</div>
       
        
        <div className="container">
        	<div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                    <div className="customer-box returning-customer">
                        <h3><i className="icon anm anm-user-al"></i> Returning customer? <a href="#customer-login" id="customer" className="text-white text-decoration-underline" data-toggle="collapse">Click here to login</a></h3>
                        <div id="customer-login" className="collapse customer-content">
                            <div className="customer-info">
                                <p className="coupon-text">If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing &amp; Shipping section.</p>
                                <form>
                                    <div className="row">
                                        <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <label for="exampleInputEmail1">Email address <span className="required-f">*</span></label>
                                            <input type="email" className="no-margin" id="exampleInputEmail1"/>
                                        </div>
                                        <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <label for="exampleInputPassword1">Password <span className="required-f">*</span></label>
                                            <input type="password" id="exampleInputPassword1"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-check width-100 margin-20px-bottom">
                                                <label className="form-check-label">
                                                    <input type="checkbox" className="form-check-input" value=""/> Remember me!
                                                </label>
                                                <a href="#" className="float-right">Forgot your password?</a>
                                            </div>
                                            <button type="submit" className="btn btn-primary mt-3">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                    <div className="customer-box customer-coupon">
                        <h3 className="font-15 xs-font-13"><i className="icon anm anm-gift-l"></i> Have a coupon? <a href="#have-coupon" className="text-white text-decoration-underline" data-toggle="collapse">Click here to enter your code</a></h3>
                        <div id="have-coupon" className="collapse coupon-checkout-content">
                            <div className="discount-coupon">
                                <div id="coupon" className="coupon-dec tab-pane active">
                                    <p className="margin-10px-bottom">Enter your coupon code if you have one.</p>
                                    <label className="required get" for="coupon-code"><span className="required-f">*</span> Coupon</label>
                                    <input id="coupon-code" required="" type="text" className="mb-3"/>
                                    <button className="coupon-btn btn" type="submit">Apply Coupon</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row billing-fields">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 sm-margin-30px-bottom">
                    <div className="create-ac-content bg-light-gray padding-20px-all">
                        <form>
                            <fieldset>
                                <h2 className="login-title mb-3">Billing details</h2>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-firstname">First Name <span className="required-f">*</span></label>
                                        <input name="firstname" value="" id="input-firstname" type="text"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-lastname">Last Name <span className="required-f">*</span></label>
                                        <input name="lastname" value="" id="input-lastname" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-email">E-Mail <span className="required-f">*</span></label>
                                        <input name="email" value="" id="input-email" type="email"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-telephone">Telephone <span className="required-f">*</span></label>
                                        <input name="telephone" value="" id="input-telephone" type="tel"/>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label for="input-company">Company</label>
                                        <input name="company" value="" id="input-company" type="text"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-address-1">Address <span className="required-f">*</span></label>
                                        <input name="address_1" value="" id="input-address-1" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6">
                                        <label for="input-address-2">Apartment <span className="required-f">*</span></label>
                                        <input name="address_2" value="" id="input-address-2" type="text"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-city">City <span className="required-f">*</span></label>
                                        <input name="city" value="" id="input-city" type="text"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-postcode">Post Code <span className="required-f">*</span></label>
                                        <input name="postcode" value="" id="input-postcode" type="text"/>
                                    </div>
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-country">Country <span className="required-f">*</span></label>
                                        <select name="country_id" id="input-country">
                                            <option value=""> --- Please Select --- </option>
                                            <option value="244">Aaland Islands</option>
                                            <option value="1">Afghanistan</option>
                                            <option value="2">Albania</option>
                                            <option value="3">Algeria</option>
                                            <option value="4">American Samoa</option>
                                            <option value="5">Andorra</option>
                                            <option value="6">Angola</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                        <label for="input-zone">Region / State <span className="required-f">*</span></label>
                                        <select name="zone_id" id="input-zone">
                                            <option value=""> --- Please Select --- </option>
                                            <option value="3513">Aberdeen</option>
                                            <option value="3514">Aberdeenshire</option>
                                            <option value="3515">Anglesey</option>
                                            <option value="3516">Angus</option>
                                        </select>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="row">
                                    <div className="form-group form-check col-md-12 col-lg-12 col-xl-12">
                                        <label className="form-check-label padding-15px-left">
                                            <input type="checkbox" className="form-check-input" value=""/><strong>Create an account ?</strong>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset>
                                <div className="row">
                                    <div className="form-group col-md-12 col-lg-12 col-xl-12">
                                        <label for="input-company">Order Notes <span className="required-f">*</span></label>
                                        <textarea className="form-control resize-both" rows="3"></textarea>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div className="your-order-payment">
                        <div className="your-order">
                            <h2 className="order-title mb-4">Your Order</h2>

                            <div className="table-responsive-sm order-table"> 
                                <table className="bg-white table table-bordered table-hover text-center">
                                    <thead>
                                        <tr>
                                            <th className="text-left">Product Name</th>
                                            <th>Price</th>
                                            <th>Size</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        
                                   
                                   cartItems.map((cartItem)=>
                               
                               
                                   {
                                    const {id,title,quantity,product_price,image}=cartItem;
                                    console.log(cartItem);
                                    return(
                                        <tr>
                                            <td className="text-left">{title}</td>
                                            <td>{product_price}</td>
                                            <td></td>
                                            <td>{quantity}</td>
                                            <td></td>
                                        </tr>
                                            ) 
                                        })
                                       
                                       }
                                    </tbody>
                                    <tfoot className="font-weight-600">
                                        <tr>
                                            <td colspan="4" className="text-right">discount </td>
                                            <td>{cartDiscount}</td>
                                        </tr>
                                        <tr>
                                            <td colspan="4" className="text-right">Total</td>
                                            <td>{cartTotal}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                        
                        <hr />

                        <div className="your-payment">
                            <h2 className="payment-title mb-3">payment method</h2>
                            <div className="payment-method">
                                <div className="payment-accordion">
                                    <div id="accordion" className="payment-section">
                                        <div className="card mb-2">
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#collapseOne">Direct Bank Transfer </a>
                                            </div>
                                            <div id="collapseOne" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="no-margin font-15">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">Cheque Payment</a>
                                            </div>
                                            <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="no-margin font-15">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card margin-15px-bottom border-radius-none">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree"> PayPal </a>
                                            </div>
                                            <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <p className="no-margin font-15">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mb-2">
                                            <div className="card-header">
                                                <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour"> Payment Information </a>
                                            </div>
                                            <div id="collapseFour" className="collapse" data-parent="#accordion">
                                                <div className="card-body">
                                                    <fieldset>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label for="input-cardname">Name on Card <span className="required-f">*</span></label>
                                                                <input name="cardname" value="" placeholder="Card Name" id="input-cardname" className="form-control" type="text"/>
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label for="input-country">Credit Card Type <span className="required-f">*</span></label>
                                                                <select name="country_id" className="form-control">
                                                                    <option value=""> --- Please Select --- </option>
                                                                    <option value="1">American Express</option>
                                                                    <option value="2">Visa Card</option>
                                                                    <option value="3">Master Card</option>
                                                                    <option value="4">Discover Card</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label for="input-cardno">Credit Card Number  <span className="required-f">*</span></label>
                                                                <input name="cardno" value="" placeholder="Credit Card Number" id="input-cardno" className="form-control" type="text"/>
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label for="input-cvv">CVV Code <span className="required-f">*</span></label>
                                                                <input name="cvv" value="" placeholder="Card Verification Number" id="input-cvv" className="form-control" type="text"/>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <label>Expiration Date <span className="required-f">*</span></label>
                                                                <input type="date" name="exdate" className="form-control"/>
                                                            </div>
                                                            <div className="form-group col-md-6 col-lg-6 col-xl-6 required">
                                                                <img className="padding-25px-top xs-padding-5px-top" src="images/payment-img.jpg" alt="card" title="card" />
                                                            </div>
                                                        </div>
                                                    </fieldset>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="order-button-payment">
                                    <button className="btn" value="Place order" type="submit">Place order</button>
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
export default CheckoutPage;