import React from 'react';
import { Link } from 'react-router-dom';
import yes from './imgs/yes.svg';
import no from './imgs/no.svg';

const FirstTimeBuy = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Are you a first-time homebuyer?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md px-6 py-4 mx-4'>
          <img src={yes} alt='...' className='h-9 mx-auto my-2' />
          <h2 className='text-sm font-medium'>Yes</h2>
        </div>
        <div className='border rounded shadow-md px-6 py-4 mx-4'>
          <img src={no} alt='...' className='h-9 mx-auto my-2' />
          <h2 className='text-sm font-medium'>No</h2>
        </div>
      </div>
      <div className='flex justify-center items-center my-3'>
        <div className='px-2'>
          <Link to='/cophone'>
            <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
              Back
            </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/'>
            <button className='bg-emerald-500 text-white border-2 border-emerald-500 px-3 py-2 rounded-lg'>
              Get my Quote
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FirstTimeBuy;
