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
     <div className='md:ml-32 md:mr-32 flex justify-center flex-col items-center md:items-stretch pb-6 pt-4 md:pt '>
    
<h1 className='font-sans text-xl md:text-left text-center md:text-3xl font-bold tracking-wide pb-4 md:pb-12'>Search For Your Favourite Movies Here!!</h1>

         <form onSubmit={(e)=> e.preventDefault()}>
         <input className=" css bg-background focus:outline-none w-84  br border-gray-600 rounded-sm py-2 px-4 block md:w-full appearance-none leading-normal placeholder-gray-600 focus:placeholder-gray-900 transform focus:-translate-y-1 focus:scale-y-150 transition duration-500 ease-in-out" type="text" placeholder="Search Here" 
         onChange={doSearch} value={state}/>
</form>
     </div>
    </>

)
    }
export default SearchBar;