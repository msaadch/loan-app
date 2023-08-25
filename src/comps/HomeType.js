import React from 'react';
import { Link } from 'react-router-dom';
import home2 from './imgs/home2.svg';
import building from './imgs/building.svg';
import townhouse from './imgs/townhouse.svg';
import multifamily from './imgs/multifamily.svg';

const HomeType = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        What type of home is this?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/onloan'>
            <img src={home2} alt='...' className='m-auto h-12' />
            <h2 className='text-sm font-medium mt-2'>Single Family Home</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/onloan'>
            <img src={building} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Condominium</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/onloan'>
            <img src={townhouse} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Townhome</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/onloan'>
            <img src={multifamily} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Multi-Family Home</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/propprice'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeType;
