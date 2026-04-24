import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Homepage from './components/homePage';
import ProductsPage from './components/productsPage';
import AboutPage from './components/aboutPage';
import RoadWorksPage from './components/roadworksPage';

import logo from './assets/Frame 920_page-0001.jpg'; // update path to your actual logo file

function App() {
  return (
    <BrowserRouter>
    {/* <nav className='navbarContainer'>
      <img src={logo} alt="Company Logo" className='navbarLogo' />
      <Link to='/' className='navbarText'>Home</Link>
      <Link to='/products' className='navbarText'>Products</Link>
      <Link to='/about' className='navbarText'>About</Link>
      <Link to='/road-works' className='navbarText'>Road Works</Link>
    </nav> */}
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/products' element={<ProductsPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/road-works' element={<RoadWorksPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
