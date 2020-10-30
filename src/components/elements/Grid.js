import React from 'react';


const Grid = ({header , children}) => {
return(
        <div className='md:m-auto flex justify-center max-w-screen-xl w-11/12 mx-auto flex-col items-center md:items-stretch mt-8'>
        <h1 className='font-sans mt-8 text-3xl font-bold tracking-wide pb-12 '>{header}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 ml:grid-cols-3 lg:grid-cols-4 mxl:grid-cols-4 justify-items-auto  m-auto gap-10  xxxl:gap-16">
            {children}
        </div>


        </div>
)
}


export default Grid;