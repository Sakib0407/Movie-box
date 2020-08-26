import React, {useState} from 'react';
import {Link} from '@reach/router'

const Header = () => {

  
    
    return(
    <>
<div className=' pt-4 md:mx-24 md:py-10 flex justify-between items-center md:px-6  flex-col md:flex-row'> 

    <div className="flex justify-evenly items-center">
    <Link to='/'>
        <div className="flex justify-evenly items-center">
    <svg viewBox="0 0 20 20" fill="currentColor" className="play  w-16 h-16 text-xl "><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
    <h1 className='font-sans   bg-background text-3xl font-bold tracking-wide'>Movie-Box</h1>
    </div>
    </Link>
    </div>
    <div>
        <Link to='/'>
    <a className='text-gray-500 font-semibold text-xl  font-sans hover:text-gray-900 transform ease-in-outgittransition hover:-translate-y-1 pr-4' > Popular Movies </a>
    </Link>
    <Link to='/latest'>
    <a className='text-gray-500 font-semibold text-xl  font-sans hover:text-gray-900 transform ease-in-outgittransition hover:-translate-y-1 pr-4' > Top Rated Movies</a>
    </Link>
    <Link to='/upcoming'>
    <a className='text-gray-500 font-semibold text-xl  font-sans hover:text-gray-900 transform ease-in-outgittransition hover:-translate-y-1 pr-4' > Upcoming Movies </a>
    </Link>
    <a className='text-gray-500 font-semibold text-xl  font-sans hover:text-gray-900 transform ease-in-outgittransition hover:-translate-y-1 'href='https://github.com/Sakib0407/Movie-box'> Github </a>
    </div>
</div>


</>
)
    }
export default Header;