import React from 'react'

export const Card = ({headphone}) => {
 

    return (
        

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
        <img className="rounded-t-lg p-3" src={headphone.poster} alt="" />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{headphone.name}</h5>
            <div className='flex justify-center'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${headphone.price}</h5>
            <button className="items-center mx-10 px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add to Cart
            </button>
            </div>
    </div>
</div>

  )
}
