import React from 'react';
import { Link } from 'react-router-dom';
import StyledDropzone from './dropzone/StyledDropzone';

const LastMonth = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        Please upload the last month paystubs/tax returns
      </h2>
      <div className='my-5 mx-3'>
        <StyledDropzone />
      </div>
      <div className='flex justify-center items-center my-3'>
        <div className='px-2'>
          <Link to='/income'>
            <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
              Back
            </button>
          </Link>
        </div>
        <div className='px-2'>
          <Link to='/srcincome'>
            <button className='bg-black text-white border-2 border-black px-3 py-2 rounded-lg'>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LastMonth;
