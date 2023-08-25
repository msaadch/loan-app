import React from 'react';
import mainLogo from './imgs/mainlogo1.svg';
const Nav = () => {
  return (
    <div>
      <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded'>
        <div className='container flex flex-wrap items-center justify-between mx-auto'>
          <a href='/' className='flex items-center'>
            <img src={mainLogo} className='h-8 mr-3 sm:h-9' alt='Oqvest' />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
