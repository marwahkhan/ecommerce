import { useContext } from 'react';

import { ReactComponent as WishlistIconx } from '../wishlist_icon/add-to-wishlist-icon.svg';

import { CartContext } from '../../context/cartContext';


const WishlistIcon = () => {
  const { isCartOpen, setIsCartOpen,cartCount } = useContext(CartContext);
  console.log(cartCount)
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <WishlistIconx className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default WishlistIcon;