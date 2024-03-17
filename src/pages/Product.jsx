// App.js

import React from 'react';

import { products } from '../utils/constants';
import ProductList from '../components/Product/ProductList';
const Product = () => {
  return (
    <div>
        {/* Calling Product List components  */}
      <ProductList products={products} />  
    </div>
  );
};

export default Product;
