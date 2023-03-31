
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Homepage from "./Pages/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import WishList from "./Components/WishList/wishList";
import CartPage from "./Pages/cart/cartPage";
import CheckoutPage from "./Pages/checkout/checkout";
import AboutUs from "./Pages/About_us/aboutUs";
import ContactUs from "./Pages/contact_us/contact_Us";
import PageNotFound from "./Pages/pageNotFound";
import Shop from "./Pages/Home/shop";

import './App.css';
import FAQ from "./Pages/FAQ/faq";
import ComeingSoon from "./Pages/comingSoon/comingSoon";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <div>
      <Header/>
    <div className="App">
      <Routes>
      {/* <Route path='/' element={<Header />}> */}
        <Route path="/"  element={<Homepage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/wishlist" element={<WishList/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cartpage" element={<CartPage/>}/>
        <Route path="/checkout" element={<CheckoutPage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/faqs" element={<FAQ/>}/>
        <Route path="/pagenotfound" element={<PageNotFound/>}/>
        <Route path="/comingsoon" element={<ComeingSoon/>}/>
        <Route path="/blog" element={<Blog/>}/>
        {/* </Route> */}
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
