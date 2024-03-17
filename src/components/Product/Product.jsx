import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  return (
    <div>
        <Link to={`/product/${product.urlSlug}`} state = {product}>
         <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
         </Link>
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-gray-600">₹{product.price}</p>
                        <Link to={`/product/${product.urlSlug}`} state = {product}>
                        <button className="bg-blue-500  px-4 py-2 mt-2 hover:bg-blue-600 text-white">View Details</button>
                        </Link>
    </div>
  )
}

export default Product