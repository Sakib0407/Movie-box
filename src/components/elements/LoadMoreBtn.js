import React from 'react';

const LoadMoreBtn = ({text, callBack}) => (
   <div className=' flex justify-center items-center '>
     <button className="bg-black mb-6 hover:bg-white hover:text-gray-900 cursor-pointer tracking-wider font-bold text-xl hover:shadow-md text-white border-solid border-2 border-gray-900 hover:outline-black focus:outline-none   py-4 px-12 rounded-full"type='button' onClick={callBack} >
         {text}
     </button>
    </div>
)
export default LoadMoreBtn;