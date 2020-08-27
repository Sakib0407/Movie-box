import React from 'react';


import { StyledGrid, StyledGridContent } from './StyledGrid';

const GridActor = ({ header, children }) => (
  <StyledGrid className='max-w-screen-xl'>
    <h1 className='py-4'>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
)


export default GridActor;