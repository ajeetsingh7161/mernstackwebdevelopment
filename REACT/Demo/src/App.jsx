import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import About from'./page/about';
import Contact from'./page/contact';
import Product from'./page/product';

function App(){
   

    return (
        <>
        
       <BrowserRouter>
       <Header/>
       <Routes>

        <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
              <Route path='/product' element={<Product/>} />

        </Routes>


       <Footer/>

      </BrowserRouter>

        
       
        </>
    );
}
export default App;
