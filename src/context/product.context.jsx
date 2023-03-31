// import { createContext, useState } from 'react';

// import productApi from '../Api/productApi';
// import data from './../Api/shopApi.json';

// export const ProductsContext = createContext({
//   products: [],
//   data:[],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState(productApi);
//   const [shopdata,setshopdata]=useState(data);
//   const value = { products,shopdata };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };