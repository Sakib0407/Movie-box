import React, { useState , useRef}  from 'react';
import './SearchBar.css'

const SearchBar = () =>(
    <>
     <div className='md:ml-32 md:mr-32 flex justify-center flex-col items-center md:items-stretch pb-6 '>
         <h1 className='font-sans text-xl md:text-left text-center md:text-3xl font-bold tracking-wide pb-12'>Search For Your Favourite Movies Here!!</h1>
         <form>
         <input class=" css bg-background focus:outline-none   border-b-1 border-gray-900 rounded-sm py-2 px-4 block w-full appearance-none leading-normal placeholder-gray-600 focus:placeholder-gray-900 transform focus:-translate-y-1 focus:scale-y-150 transition duration-500 ease-in-out" type="email" placeholder="Search Here" />
</form>
     </div>
    </>

)
export default SearchBar;