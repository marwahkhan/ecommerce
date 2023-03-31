import { useContext } from 'react';
import { ProductsContext } from '../../context/productProvider';
import { useState,useEffect } from 'react';
import WomenProductCard from './shop-product/women-product-card';


import './shopx.styles.scss';

const WomenProductComponent = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('https://moda-database-f714e-default-rtdb.asia-southeast1.firebasedatabase.app/women.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
       
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div class="grid-products grid--view-items">
    <div class="row">
      {
        
      data && data.map((item) => (
 
        <WomenProductCard key={item.id} item={item}/>
        
      ))
      
      }
    </div>
    </div>
  );
};

export default WomenProductComponent;