import React from 'react';

export const CartCard = ({ headphone }) => {
  return (
    <div className="mx-60 grid grid-cols-1 md:grid-cols-3 gap-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4">
      <img className="object-cover w-full h-40 m-5 md:h-auto md:rounded-l-lg" src={headphone.poster} alt="" />
      <div className="col-span-2 flex items-center justify-between p-4 leading-normal">
        <div className="flex flex-row">
          <h5 className="m-5 p-5 text-lg font-bold text-gray-900 dark:text-white">{headphone.brand}</h5>
          <p className="m-5 p-5 text-sm text-gray-700 dark:text-gray-400 mb-1">{headphone.name}</p>
          <span className="m-5 p-5 text-lg font-medium text-gray-700 dark:text-gray-400">${headphone.price}</span>
        </div>
        <button className="px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Remove
        </button>
      </div>
    </div>
  );
};
