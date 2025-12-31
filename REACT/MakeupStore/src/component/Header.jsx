import React from 'react'
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <div className='flex justify-between px-6 py-2 bg-amber-300 ' >
     <div> MakeupStore</div>
   <div className='flex gap-5 '>
     <Link to={"/"} className='flex text-decoration-none text-light'> <FaHome />Home</Link>
      <Link to={"/about"} className='text-decoration-none text-light'>About</Link>
       <Link to={"/product"} className='text-decoration-none text-light'>Product</Link>
        <Link to={"/contact"} className='text-decoration-none text-light'>Contact</Link>
         <Link to={"/login"} className='text-decoration-none text-light'>Login</Link>
        
    </div>
    </div>

    </>
  );
};

export default Header;