import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';


function App()  {
  return (
    <>
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;