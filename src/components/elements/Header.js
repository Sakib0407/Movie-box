import React from 'react';

const Header = () => (
<div className='mx-24 py-10 flex justify-between items-center px-6 '> 
    <div className="flex justify-evenly items-center">
    <svg viewBox="0 0 20 20" fill="currentColor" className="play w-16 h-16 text-xl "><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
    <h1 className='font-sans text-3xl font-bold tracking-wide'>Movie-Box</h1>
    </div>
    <a className='text-gray-500 font-semibold text-lg  font-sans' href='/'> Github </a>
</div>
)
export default Header;