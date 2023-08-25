import React from 'react';
import { Link } from 'react-router-dom';
import rentin from './imgs/rentin.svg';
import invest from './imgs/invest.svg';
import dollar from './imgs/dollar.svg';
import none from './imgs/none.svg';

const SrcIncome = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Do you have any other sources of income?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/credscr'>
            <img src={rentin} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Rental Income</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/credscr'>
            <img src={invest} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Investment</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/credscr'>
            <img src={dollar} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Others</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/credscr'>
            <img src={none} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>I don't have any</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/lastmonth'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SrcIncome;
