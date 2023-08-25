import React from 'react';
import { Link } from 'react-router-dom';
import home from './imgs/home.svg';
const Home = () => {
  return (
    <div className='pt-20'>
      {/* <div className='h-32'>&nbsp;</div> */}
      <div className='flex justify-center'>
        <img src={home} alt='...' />
      </div>
      <div className='flex justify-center md:w-1/2 m-auto text-center'>
        <h2 className='text-xl font-bold font-sans my-3'>
          Discover the
          <span className='text-green-400'> best rates </span>
          approved by
          <span className='text-orange-400'> financial experts </span>&
          recommended by people at
          <span className='text-green-400'> Oqvest </span> for your
          <span className='text-orange-400'> mortgage needs.</span>
        </h2>
      </div>

      <div className='flex justify-center md:w-2/5 m-auto text-center'>
        <h4 className='text-sm font-sans'>
          Get the best of both worlds - unbeatable rates and exceptional service
          - with our pre-approved mortgage options for a hassle-free home buying
          experience.
        </h4>
      </div>
      <div className='text-center my-3'>
        <Link to='/addr'>
          <button className='bg-black text-white border-2 border-black px-3 py-2 rounded-lg'>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
