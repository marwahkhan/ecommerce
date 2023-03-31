import { createContext, useState } from 'react';

import PRODUCTS from '../Api/productApi';
import SHOPDATA from '../Api/shopApi.json';

export const ProductsContext = createContext({
  products: [],
  shopData:[],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [shopData, setShopData] = useState(SHOPDATA);
  const value = { products ,shopData };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};