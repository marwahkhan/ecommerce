import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

import CartItem from '../cart-Item/cartItem.component';
import { Navigate, useNavigate } from 'react-router';
import './cartDropdown.scss';
const CartDropdown = () => {
  const {cartItems} = useContext(CartContext);
 const navigate=useNavigate();
 const GoToCheckOut=()=>{
  navigate('/cartpage');
 }

  return(
  <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
        
      {/* <span className='empty-message'>Your cart is empty</span> */}
       
   
      <button onClick={GoToCheckOut}>GO TO CHECKOUT</button>
    </div>
);
  }

export default CartDropdown;