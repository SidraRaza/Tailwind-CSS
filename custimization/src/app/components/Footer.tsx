import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='bg-green p-6'>
    <Link href="/"><FaArrowUp className=' text-right justify-end float-right animate-bounce mt-4 fixed bottom-0 text-green right-4  bg-yellow p-3 rounded-full' size={50} /></Link>
        <h2 className='text-center text-black'>Created by Sidra Raza</h2>
        <p className='text-center text-black'>Copyright &copy; 2023. All rights reserved</p>
       
    </div>
  
    </>
  )
}

export default Footer