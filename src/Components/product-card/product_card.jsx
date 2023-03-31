import { useContext } from 'react';

import { CartContext } from '../../context/cartContext';

import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { title, product_price, image,product_discount } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);


  return (
    <div className='column'>

   
    <div className='product-card-container'>
      <img src={image} alt={`${title}`} />
      <div className="product-labels rectangular"><span className="lbl on-sale">RS: {product_discount}</span> <span className="lbl pr-label1">new</span></div>
      <div className='footer'>
        <span className='name'>{title}</span>
        <span className='price'>PKR:{product_price}</span>

      </div>
      <button className='shopButton' id='shopButton' onClick={addProductToCart} >
     
      {/* <div className="btn cartIcon btn-addto-cart">
                                            <a className="wishlist add-to-wishlist" onClick={addItemToCart}>
                                                <i className="icon anm anm-bag-l"></i>
                                            </a>
                                        </div>
                                      
                                        <div className="wishlist-btn" >
                                            <a className="wishlist add-to-wishlist">
                                                <i className="icon anm anm-heart-l"></i>
                                            </a>
                                        </div> */}
                                    
     add to card
      </button>
    </div>
    </div>
  );
};

export default ProductCard;