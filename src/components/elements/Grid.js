import React from 'react';

const Grid = ({header , children}) => {
return(
        <div className='md:ml-32 md:mr-24 flex justify-center flex-col items-center md:items-stretch'>
        <h1 className='font-sans text-3xl font-bold tracking-wide pb-12'>{header}</h1>
        <div className="grid lg:grid-cols-4">
            {children}
        </div>


        </div>
)
}


export default Grid;