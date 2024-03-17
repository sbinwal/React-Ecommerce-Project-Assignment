import React, { useState } from 'react';
import Modal from 'react-modal';

const PaymentModal = ({onClose,placeOrder,handleUpdate }) => {
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleUpdate(name,value)

   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    placeOrder();
    // onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 py-4 sm:p-6 sm:pb-4">
                <div className="flex justify-end">
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-3 text-center sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Enter Your Details</h3>
                  <div className="mt-5">
                    <form>
                      <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          autoComplete="fullName"
                          className="mt-1 p-2 border border-gray-300 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          type="number"
                          id="phoneNumber"
                          name="phoneNumber"
                          autoComplete="phoneNumber"
                          className="mt-1 p-2 border border-gray-300 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          autoComplete="pincode"
                          className="mt-1 p-2 border border-gray-300 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                        <textarea
                          id="address"
                          name="address"
                          rows="3"
                          className="mt-1 p-2 border border-gray-300 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleSubmit}
                >
                  Place Order
                </button>
                <button
                  onClick={onClose}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default PaymentModal;
