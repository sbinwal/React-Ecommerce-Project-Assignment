// App.js

import React from 'react';

import { products } from '../utils/constants';
import ProductList from '../components/Product/ProductList';
const Product = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Product;
