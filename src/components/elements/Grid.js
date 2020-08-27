import React from 'react';


const Grid = ({header , children}) => {
return(
        <div className='md:ml-32 md:mr-32 flex justify-center flex-col items-center md:items-stretch mt-8'>
        <h1 className='font-sans text-3xl font-bold tracking-wide pb-12 '>{header}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  xxxl:grid-cols-5 m-auto gap-10  xxxl:gap-16">
            {children}
        </div>


        </div>
)
}


export default Grid;