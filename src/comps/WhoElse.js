import React from 'react';
import { Link } from 'react-router-dom';

const WhoElse = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Who else will be on the loan?
      </h2>
      <div className='flex justify-center items-center my-5'>
        <input
          className='shadow appearance-none border shadow-lg rounded w-1/5 py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='First Name'
        />
        <input
          className='shadow appearance-none border shadow-lg rounded w-16 py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='M.I.'
        />
        <input
          className='shadow appearance-none border shadow-lg rounded w-1/5 py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='Last Name'
        />
        <input
          className='shadow appearance-none border shadow-lg rounded w-1/5 py-2 px-3 mx-2 text-gray-700 leading-tight focus:outline focus:shadow-outline'
          type='text'
          placeholder='Suffix'
        />
      </div>

      <div className='flex justify-center items-center my-3'>
        <div className='px-2'>
          <Link to='/else'>
            <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
              Back
            </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/coemail'>
            <button className='bg-black text-white border-2 border-black px-3 py-2 rounded-lg'>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoElse;
