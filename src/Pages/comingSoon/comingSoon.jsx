import React,{useEffect,useState} from "react";
import Clock from "./clock";
import "./clocktimer.css";

const ComeingSoon = ( ) =>{
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let interval;
  
    const startTimer = () => {
      const countDownDate = new Date("sep 30,2022 ").getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          // Stop Timer
  
          clearInterval(interval.current);
        } else {
          // Update Timer
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      });
    };
  
    useEffect(() => {
      startTimer();
    });
    return(
        <div id="page-content" class="shopify-section">        
        <div class="password-table">
            <div class="password-cell"></div>
            <div class="password-page password-cell	text-center">
                <div class="password-main text-center" role="main">
                    <div class="password-main__inner"> 
                       
                        <a >
                        	<h5>Well Come Soon Stay With Us!</h5>
                         </a>
                        <h2 class="password__title"><b>Our new store is coming soon</b>
                        <Clock
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
                        </h2>
                        <form method="post" action="#" id="contact_form" accept-charset="UTF-8" class="contact-form">
                          <p class="password__form-heading h4"style={{paddingTop :'10px',color:"black"}}> Follow us for update now! </p>
                          <div class="input-group password__input-group">
                            <input type="email" name="contact[email]" id="Email" class="input-group__field" placeholder="Email address"/>
                            <span class="input-group__btn">
                            <button type="submit" name="commit" class="btn"> <span>Notify me</span> </button>
                            </span> </div>
                        </form>
                        <div class="password-social-sharing">
                        	<div class="social-sharing">
                          		<ul class="list--inline site-footer__social-icons social-icons">
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Facebook"><i class="icon icon-facebook"></i></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Twitter"><i class="icon icon-twitter"></i> <span class="icon__fallback-text">Twitter</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Pinterest"><i class="icon icon-pinterest"></i> <span class="icon__fallback-text">Pinterest</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Instagram"><i class="icon icon-instagram"></i> <span class="icon__fallback-text">Instagram</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Tumblr"><i class="icon icon-tumblr-alt"></i> <span class="icon__fallback-text">Tumblr</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on YouTube"><i class="icon icon-youtube"></i> <span class="icon__fallback-text">YouTube</span></a></li>
                                    <li><a class="social-icons__link" href="#" target="_blank" title="Belle Multipurpose Bootstrap 4 Template on Vimeo"><i class="icon icon-vimeo-alt"></i> <span class="icon__fallback-text">Vimeo</span></a></li>
                                </ul>
                          	</div>
                    	</div>
                 
                    
                    </div>
            	</div>
                <div id="LoginModal" class="modal">
              <div class="modal__inner">
                <div class="modal__centered password-modal__content page-width text-center">
                  <p class="password__form-heading h4">Enter store using password</p>
                  <form method="post" action="http://annimexweb.com/password" id="login_form" accept-charset="UTF-8" class="storefront-password-form">
                    <input type="hidden" name="form_type" value="storefront_password"/>
                    <input type="hidden" name="utf8" value="✓"/>
                    <label class="label--hidden">Password</label>
                    <div class="input-group password__input-group">
                      <input type="password" name="password" id="Password" class="input-group__field input--content-color" placeholder="Your password"/>
                      <span class="input-group__btn">
                      <button type="submit" name="commit" class="btn btn--narrow">Enter</button>
                      </span> </div>
                  </form>
                  <p>Are you the store owner? <a href="http://annimexweb.com/admin" class="text-link">Log in here</a></p>
                </div>
              </div>
              <button type="button" class="modal__close js-modal-close text-link"> <i class="anm anm-times-l"></i> <span class="icon__fallback-text">"Close (esc)"</span> </button>
            </div>
            </div>
        </div>

    </div>
    );
}
export default ComeingSoon;