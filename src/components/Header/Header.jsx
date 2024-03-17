// components/Header.jsx
import React from 'react';
import { useSelector } from 'react-redux'; // Assuming you're using Redux for state management
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const cartItems = useSelector(state => state.cartInfo.cartDetails) || []
  const token = localStorage.getItem("token")
  const navigate = useNavigate()
  const Logout = () =>{
    //On logout token will be removed from local storage and user will be redirected to homepage
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/"><img src="https://www.zarla.com/images/zarla-shop-stock-1x1-2400x2400-20220124-jyf4xp648jqxjqcjj9dc.png?crop=1:1,smart&width=250&dpr=2" alt="Logo" className="h-12 w-16" /></Link>
        <nav className="flex space-x-4 items-center">
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            {token ?
               <li><a href="/login" className="hover:underline" onClick={Logout}>Logout</a></li>
            :
            <li><a href="/login" className="hover:underline">Login</a></li>
}
          </ul>
          <Link className="relative" to = "/viewcart">
            <FontAwesomeIcon icon={faShoppingCart} className="text-white text-2xl cursor-pointer" />
            <span className="ml-[2px]">Cart</span>
            {cartItems?.length > 0 && (
              <span className="absolute -top-3 right-3 md:right-6 bg-red-500 text-white text-xs rounded-full px-2">
                {cartItems.length}
              </span>
            )}
            
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
