import React from 'react'

const Product = ({product}) => {
  return (
    <div>
         <img src={product.image} alt={product.name} className="w-full h-60 object-cover mb-2" />
                        <h3 className="text-lg font-bold">{product.name}</h3>
                        <p className="text-gray-600">₹{product.price}</p>
                        <button className="bg-blue-500  px-4 py-2 mt-2 hover:bg-blue-600 text-white">View Details</button>
    </div>
  )
}

export default Product