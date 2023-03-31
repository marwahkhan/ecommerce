import { useContext } from 'react';
import { ProductsContext } from '../../context/productProvider';

import ProductCard from '../product-card/product_card';


import './shopx.styles.scss';

const Shopx = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shopx;