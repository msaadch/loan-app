import React from 'react';
import { Link } from 'react-router-dom';
import own from './imgs/own.svg';
import rent from './imgs/rent.svg';
import rentfree from './imgs/rentfree.svg';

const Resid = () => {
  return (
    <div className='text-center pt20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Do you own or rent your current residence?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/emp'>
            <img src={own} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Own</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/emp'>
            <img src={rent} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Rent</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/emp'>
            <img src={rentfree} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Using Rent Free</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/addr'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Resid;
