import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCartItem, incrementCartItem, removeCartItem } from '../Slice/CartSlice';

const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    const handleIncrement = (id) => {
       dispatch(incrementCartItem(id))
    };
    
    const handleDecrement = (id) => {
        dispatch(decrementCartItem(id))
    };

    const handleRemove = (id) => {
        dispatch(removeCartItem(id))
    };
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img src={item.productInfo.image} alt={item.productInfo.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                    <h3 className="text-lg font-semibold">{item.productInfo.name}</h3>
                    <p className="text-gray-500">Price: ${item.productInfo.price * item?.quantity}</p>
                </div>
            </div>
            <div className="flex items-center">
                <button onClick={() => handleDecrement(item.productInfo.id)} className="text-gray-500 hover:text-gray-700">
                    -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button onClick={() => handleIncrement(item.productInfo.id)} className="text-gray-500 hover:text-gray-700">
                    +
                </button>
                <button onClick={() => handleRemove(item.productInfo.id)} className="text-red-500 hover:text-red-600  ml-6">
                    REMOVE
                </button>
            </div>
        </div>
    )
}

export default CartItem
