import React, { useState , useRef}  from 'react';
import './SearchBar.css'

const SearchBar = ({callBack}) =>{
    const [state , setState] = useState('')
    const  timeOut = useRef(null)

    const doSearch = (e) => {
        const value = e.target.value
        
        clearTimeout(timeOut.current)
        setState(value)
        console.log(value)
        timeOut.current = setTimeout(() => {
            callBack(value) }, 500)
        

    }

    return(
    <>
     <div className='  max-w-screen-xl w-11/12 mx-auto flex justify-center flex-col items-center md:items-stretch pb-2 mt-16  pl-2 '>
    
<h1 className='font-sans  m-0 md:px-0 text-xl text-left  md:text-3xl font-bold tracking-wide pb-4 md:pb-12'>Search For Your Favourite Movies Here!!</h1>

         <form onSubmit={(e)=> e.preventDefault()}>
         <input className=" css bg-background focus:outline-none w-96   br border-black rounded-sm py-2  block md:w-full appearance-none leading-normal placeholder-gray-600 focus:placeholder-gray-800 transform focus:-translate-y-1 focus:scale-y-10 transition duration-500 ease-in-out " type="text" placeholder="Search Here" 
         onChange={doSearch} value={state}/>
</form>
     </div>
    </>

)
    }
export default SearchBar;