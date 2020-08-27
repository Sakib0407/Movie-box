import React from 'react';
import Header from './elements/Header.js'
import Home from './Home.jsx'
import { Router } from '@reach/router'
import Movie from './Movie.jsx';
import Latest from './Latest'
import Upcoming from './Upcoming'

const App = () =>(
<div className='bg-background mx-auto '>
 <Header />
 <Router primary={false}>
  <Home path='/'/>
  <Latest path='/latest' />
  <Upcoming path='/upcoming' />
  <Movie  path='/m/:movieId'/>
  
  </Router>
  </div>
)
export default App;
