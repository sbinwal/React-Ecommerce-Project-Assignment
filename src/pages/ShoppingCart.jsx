import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem/CartItem';
import { clearCart } from '../components/Slice/CartSlice';
import PaymentModal from '../components/Modal/Modal';
import { toast } from 'react-toastify';
import { addPrice } from '../components/Slice/TotalPrice';
import { useNavigate } from 'react-router-dom';
import { SendPurchaseData } from '../components/services/api';

const ShoppingCart = () => {
    const cartItems = useSelector(state => state.cartInfo.cartDetails) || [];
    const token = localStorage.getItem("token")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [modal, setModal] = useState(false)
    const [userDetails, setUserDetails] = useState({
        fullName: '',
        address: '',
        pincode: '',
        phoneNumber: ''
    });

    // Function to calculate total price
    const calculateTotal = (cartItems) => {
        const totalPrice = cartItems.reduce((total, item) => total + (item.productInfo.price * item.quantity), 0).toFixed(2);
        dispatch(addPrice(totalPrice))
        return totalPrice
    };



    // Function to place order
    const placeOrder = async () => {
        // validation 
        if (userDetails.fullName === "" || userDetails.address === "" || userDetails.pincode === "" || userDetails.phoneNumber === "") {
            return toast.error("All fields are required", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }

        const addressInfo = {
            fullName: userDetails.fullName,
            address: userDetails.address,
            pincode: userDetails.pincode,
            phoneNumber: userDetails.phoneNumber,
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                    timeZone: "Asia/Kolkata"
                }
            )
        }

        var options = {
            key: "rzp_test_lZuMyt5It1AvIl",
            key_secret: "bH9PYFjTTYLSahLGoxgs2qwz",
            amount: parseInt(calculateTotal(cartItems) * 100),
            currency: "INR",
            order_receipt: 'order_rcptid_' + userDetails.fullName,
            name: "E-Bharat",
            description: "for testing purpose",
            handler: function (response) {
                if (response.error) {
                    toast.error('Payment Failed')
                    alert(response.error)
                }
                else{
                console.log(response)
                toast.success('Payment Successful')
                const paymentId = response.razorpay_payment_id
                const orderInfo = {
                    cartItems,
                    addressInfo,
                    price: parseInt(calculateTotal(cartItems)),
                    date: new Date().toLocaleString(
                        "en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                            hour12: false,
                            timeZone: "Asia/Kolkata"
                        }
                    ),
                    paymentId
                }
                alert("Order Placed successfully")
                dispatch(clearCart());
                // Sending purchase data to server using webhook URL
                   SendPurchaseData(orderInfo)
            }
            },

            theme: {
                color: "#3399cc"
            }
        };
        
        var pay = new window.Razorpay(options);
        pay.open();
        CloseModal()
    }

    //function to update values of buying details
    const handleChange = (name, value) => {
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    }

    const buyNow = () => {
        if(!token)
        {
            navigate("/login")
        }
        setModal(true)
    }


    // Function to clear cart items
    const removeCart = () => {

        dispatch(clearCart()); // Clearing cart from store
    };

    const CloseModal = () => {
        setModal(false)
    }

    return (
        <div className=" mt-8 mx-4">
            {modal &&
                <PaymentModal onClose={CloseModal} placeOrder={placeOrder} handleUpdate={handleChange} />
            }
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.productInfo.id} className="border-b border-gray-200 py-4">
                                <CartItem item={item} />
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end mt-8">
                        <div className="border-t border-gray-200 w-full">
                            <div className="flex justify-between py-2">
                                <span className="font-semibold">Total:</span>
                                <span className="font-semibold">₹{calculateTotal(cartItems)}</span>
                            </div>
                            <button className="bg-red-500 text-white px-4 py-2 hover:bg-red-600 mr-4" onClick={removeCart}>CLEAR CART</button>
                            <button className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600" onClick={buyNow}>BUY NOW</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p className='text-bold'>Your cart is empty</p>
            )}
        </div>
    );
};

export default ShoppingCart;
