import React from "react";

import './cartItem.style.scss';
const  CartItem = ({cartItem}) =>{
    const { title,image, product_price,  quantity } = cartItem;
    return(

<div className='cart-item-container'>
      <img src={image} alt={`${title}`} />
      <div className='item-details'>
        <span className='name'>{title}</span>
        <span className='price'>
          {quantity} x ${product_price}
        </span>
      </div>
    </div>

    );
}
export default CartItem;