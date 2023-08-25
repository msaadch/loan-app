import React from 'react';
import { Link } from 'react-router-dom';
import home2 from './imgs/home2.svg';
import car from './imgs/car.svg';
import card from './imgs/card.svg';
import invest from './imgs/invest.svg';
import dollar from './imgs/dollar.svg';
import none from './imgs/none.svg';

const Debt = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        What debt do you currently have?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border border-black rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={home2} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Home Loan</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={card} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Credit Card Loan</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={car} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Car Loan</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={invest} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Student Loan</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={dollar} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Other</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/curdebt'>
            <img src={none} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>I don't have any</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/credscr'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Debt;
