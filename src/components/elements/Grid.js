import React from 'react';

const Grid = ({header , children}) => {
return(
        <div className='ml-32 mr-24'>
        <h1 className='font-sans text-2xl font-bold tracking-wide pb-12'>{header}</h1>
        <div className="grid lg:grid-cols-4">
            {children}
        </div>


        </div>
)
}


export default Grid;