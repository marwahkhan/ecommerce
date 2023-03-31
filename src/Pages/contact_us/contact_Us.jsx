import React from "react";

const ContactUs = ( ) =>{
    return(
        <div id="page-content">

    	<div className="page section-header text-center">
			<div className="page-title">
        		<div className="wrapper"><h1 className="page-width">Contact Us</h1></div>
      		</div>
		</div>
    
        <div className="map-section map">
        	<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.072959837244!2d73.12256021505432!3d33.55148065139996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedd68fcc8be9%3A0x4fedca642b8ad98b!2sDigital%20Code%20(Pvt)%20Limited!5e0!3m2!1sen!2s!4v1662364984113!5m2!1sen!2s" height="350" allowfullscreen></iframe>
            <div className="container">
            	<div className="row">
                	<div className="map-section__overlay-wrapper">
                        <div className="map-section__overlay">
                            <h3 className="h4">Our store</h3>
                            <div className="rte-setting">
                                <p>Plaza 57 office 203.<br/>phase 4 Bharia Town , Rawalpindi pakistan</p>
                                <p>Mon - Fri, 10am - 9pm<br/>Saturday, 11am - 9pm<br/>Sunday, 11am - 5pm</p>
                            </div>
                            <p><a href="https://goo.gl/maps/58qy6YKaAEx6b5NK7" className="btn btn--secondary btn--small" target="_blank">Get directions</a></p>
                        </div>
                   	</div>
                </div>
            </div>
        </div>
        <div className="bredcrumbWrap">
            <div className="container breadcrumbs">
                <a href="index.html" title="Back to the home page">Home</a><span aria-hidden="true">›</span><span>Contact Us</span>
            </div>
        </div>
        
        <div className="container">
            <div className="row">
            	<div className="col-12 col-sm-12 col-md-8 col-lg-8 mb-4">
                	<h2>Drop Us A Line</h2>
                    <p>Our customer care are available for you 27/4 feel free to contact with us ! </p>
                	<div className="formFeilds contact-form form-vertical">
                      <form action="http://annimexweb.com/items/belle/assets/php/mail.php" method="post"  id="contact_form" className="contact-form">	
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div className="form-group">
                          	<input type="text" id="ContactFormName" name="name" placeholder="Name" value="" required=""/>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        	<div className="form-group">
							<input type="email" id="ContactFormEmail" name="email" placeholder="Email" value="" required=""/>                        	
                            </div>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          	<div className="form-group">
                            <input required="" type="tel" id="ContactFormPhone" name="phone" pattern="[0-9\-]*" placeholder="Phone Number" value=""/>
                            </div>
                          </div>
                          <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                          	<div className="form-group">
                            <input required="" type="text" id="ContactSubject" name="subject" placeholder="Subject" value=""/>
                            </div>
                          </div>
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                        	<div className="form-group">
                            <textarea required="" rows="10" id="ContactFormMessage" name="message" placeholder="Your Message"></textarea>
                            </div>
                        </div>  
                      </div>
                      <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <input type="submit" className="btn" value="Send Message"/>
                        </div>
                     </div>
                     </form>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                	<div className="open-hours">
                    	<strong>Opening Hours</strong><br/>
						Mon - Sat : 9am - 11pm<br/>
						Sunday: 11am - 5pm
                    </div>
                	<hr />
                    <ul className="addressFooter">
                        <li><i className="icon anm anm-map-marker-al"></i><p>plaza 57 office 203 phase 4 bharia town islamabad</p></li>
                        <li className="phone"><i className="icon anm anm-phone-s"></i><p>0900 78601</p></li>
                        <li className="email"><i className="icon anm anm-envelope-l"></i><p>sales@moda.com</p></li>
                    </ul>
                    <hr />
                    <ul className="list--inline site-footer__social-icons social-icons">
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i className="icon icon-facebook"></i></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i className="icon icon-twitter"></i> <span className="icon__fallback-text">Twitter</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i className="icon icon-pinterest"></i> <span className="icon__fallback-text">Pinterest</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i className="icon icon-instagram"></i> <span className="icon__fallback-text">Instagram</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i className="icon icon-tumblr-alt"></i> <span className="icon__fallback-text">Tumblr</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i className="icon icon-youtube"></i> <span className="icon__fallback-text">YouTube</span></a></li>
                        <li><a className="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i className="icon icon-vimeo-alt"></i> <span className="icon__fallback-text">Vimeo</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    );
}
export default ContactUs;