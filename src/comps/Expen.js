import React from 'react';
import { Link } from 'react-router-dom';
import yes from './imgs/yes.svg';
import no from './imgs/no.svg';

const Expen = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Do you have any other signicant expenses?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md px-6 py-4 mx-4'>
          <Link to='/sigexp'>
            <img src={yes} alt='...' className='h-9 mx-auto my-2' />
            <h2 className='text-sm font-medium'>Yes</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md px-6 py-4 mx-4'>
          <Link to='/sigexp'>
            <img src={no} alt='...' className='h-9 mx-auto my-2' />
            <h2 className='text-sm font-medium'>No</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/curdebt'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Expen;
