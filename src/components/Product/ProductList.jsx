import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
    return (
        <div className="mx-4 my-24 ">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                      <Link to={`/product/${product.urlSlug}`} state = {product} key={product.id} className="border p-4">
                       <Product product={product}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
