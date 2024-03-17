// components/ProductDetails.jsx

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addCartInfo } from '../Slice/CartSlice';


const ProductDescription = () => {
   
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = location.state
    // Getting existing cart items from local storage or initializing an empty array
    const existingCartItems = useSelector(state => state.cartInfo.cartDetails) || []
    const[isInCart,setIsInCart] = useState(existingCartItems.some(item => item.productInfo.id === product.id))


    const storeItem = () => {

        if(isInCart)
        {
        navigate("/viewcart")
        return
        }
        // Creating a new array with the existing cart items and the new product
        const updatedCartItems = [...existingCartItems, {productInfo : {...product},quantity : 1}];

        //Storing cartItems to local storage and redux store
        dispatch(addCartInfo(updatedCartItems))
        setIsInCart(true)
    }

    return (
        <div className="mt-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
                <div className="max-w-md ms-auto w-full h-full ">
                    <img src={product.image} alt={product.name} className="w-full h-auto" />
                </div>
                <div className="p-4 self-center">
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <p className="text-md font-medium mb-2"><span className='font-bold text-lg '>Price: </span>${product.price}</p>
                    <p className="mb-4">{product.description}</p>
                    <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600" onClick={storeItem}>{isInCart ? "Go to Cart" : "Add to Cart"}</button>
                    <div className="mt-4">
                        <h3 className="text-xl font-bold mb-2">Product Specifications</h3>
                        <ul>
                            <li>Specification 1: Value 1</li>
                            <li>Specification 2: Value 2</li>
                            <li>Specification 3: Value 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;
