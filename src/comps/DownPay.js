import React from 'react';
import { Link } from 'react-router-dom';

const DownPay = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        What is the estimated amount you have saved for down payment?
      </h2>
      <div className='flex justify-center items-center my-5'>
        <input
          className='shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='Enter amount here'
        />
      </div>
      <div className='flex justify-center items-center my-3'>
        <div className='px-2'>
          <Link to='/sigexp'>
            <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
              Back
            </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/propprice'>
            <button className='bg-black text-white border-2 border-black px-3 py-2 rounded-lg'>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownPay;
