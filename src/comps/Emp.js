import React from 'react';
import { Link } from 'react-router-dom';
import emp from './imgs/emp.svg';
import notemp from './imgs/not-emp.svg';
import selfemp from './imgs/selfemp.svg';
import military from './imgs/military.svg';
import other from './imgs/other.svg';

const Emp = () => {
  return (
    <div className='text-center pt-20'>
      <h2 className='text-xl font-bold font-sans my-3'>
        What is your employment status?
      </h2>
      <div className='flex justify-center my-5'>
        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/income'>
            <img src={emp} alt='...' className='m-auto h-10' />
            <h2 className='text-sm font-medium'>Employed</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/income'>
            <img src={notemp} alt='...' className='m-auto h-10' />
            <h2 className='text-sm font-medium'>Not Employed</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/income'>
            <img src={selfemp} alt='...' className='m-auto h-10' />
            <h2 className='text-sm font-medium'>Self Employed</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/income'>
            <img src={military} alt='...' className='m-auto' />
            <h2 className='text-sm font-medium'>Military</h2>
          </Link>
        </div>

        <div className='border rounded shadow-md p-5 mx-4'>
          <Link to='/income'>
            <img src={other} alt='...' className='mx-auto my-1' />
            <h2 className='text-sm font-medium'>Other</h2>
          </Link>
        </div>
      </div>
      <div className='text-center my-3'>
        <Link to='/resid'>
          <button className='bg-transparent text-black border-2 border-black px-4 py-2 rounded-lg'>
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Emp;
