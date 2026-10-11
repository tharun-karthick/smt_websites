import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homePage';
import ProductsPage from './pages/productsPage';
import AboutPage from './pages/aboutPage';
import ContactPage from './pages/contactPage';
import Privacy from './pages/privacy';
import TermsAndConditions from './pages/tearmsAndCondition';
import WhatsAppButton from './components/whatsAppButton';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
