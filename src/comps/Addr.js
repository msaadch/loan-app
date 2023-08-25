import React from 'react';
import { Link } from 'react-router-dom';

const Addr = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        What is your current address?
      </h2>
      <div className='flex justify-center items-center my-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
          />
        </svg>

        <input
          className='shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='Address'
        />
      </div>
      <div className='flex justify-center items-center my-3'>
        <div className='px-2'>
          <Link to='/'>
            <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
              Back
            </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/resid'>
            <button className='bg-black text-white border-2 border-black px-3 py-2 rounded-lg'>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Addr;
