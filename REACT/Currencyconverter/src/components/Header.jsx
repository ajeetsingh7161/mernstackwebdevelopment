import React from 'react'
import { AiFillDollarCircle } from "react-icons/ai";
import { HiCurrencyRupee } from "react-icons/hi2";
import { HiCurrencyEuro } from "react-icons/hi2";
import { AiFillPoundCircle } from "react-icons/ai";
const Header = () => {
  return (
    <>
    <div className='bg-blue-500 px-4 py-2 text-3xl text-white text-center flex-justify' >Currenct Converter
   <HiCurrencyRupee  className='animate-bounce'/>
   <AiFillDollarCircle className='animate spin' />




    </div>
    </>
  )
}

export default Header