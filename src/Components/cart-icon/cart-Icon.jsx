import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../Components/cart-icon/carticonImage/shopping-bag.svg';

import { CartContext } from '../../context/cartContext';

import './cart-icon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  console.log(cartCount)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;