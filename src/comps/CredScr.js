import React from 'react';
import { Link } from 'react-router-dom';
import excellent from './imgs/excellent.svg';
import good from './imgs/good.svg';
import fair from './imgs/fair.svg';
import poor from './imgs/poor.svg';

const CredScr = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Estimate your credit score:
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/debt'>
            <img src={excellent} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Excellent 740+</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/debt'>
            <img src={good} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Good 700-739</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/debt'>
            <img src={fair} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Fair 600-699</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/debt'>
            <img src={poor} alt='...' className='mx-auto my-2' />
            <h2 className='text-sm font-medium'>Poor &lt;600</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/srcincome'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CredScr;
