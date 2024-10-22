'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

 
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

  
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [menuOpen]);

  return (
    <div className="bg-green p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
     
        <h1 className="text-black text-3xl font-bold lg:text-3xl font-['Geist_Sans']">
          Portfolio
        </h1>

        <div className="lg:mt-0 flex lg:space-x-4 space-x-2 relative">
       
          <div
            onClick={() => setMenuOpen(true)}
            className="text-red-500 text-3xl cursor-pointer -top-12 absolute right-6 lg:hidden float-right"
          >
            &#9776;
          </div>

        
          <ul
            className={`flex-col list-none lg:bg-transparent w-full h-[900px] lg:h-auto bg-white text-black fixed right-0 top-0 left-6 sm:w-[300px] mx-auto p-2 lg:p-0 rounded-md lg:rounded-none lg:flex lg:static lg:flex-row lg:space-x-4 transition-transform z-50 duration-300 ease-in-out ${
              menuOpen ? 'flex' : 'hidden lg:flex'
            } max-h-[100vh] overflow-y-auto`}
          >
         
            <li className="w-full text-right pr-10 mt-4 lg:hidden">
              <MdOutlineCancel
                className="text-3xl cursor-pointer float-right"
                onClick={() => setMenuOpen(false)}
              />
            </li>

           
            <li className="pl-2 lg:pl-0">
              <Link
                href="/"
                className="block text-black px-2 lg:px-4 py-2 lg:py-2 mt-[50px] lg:mt-0 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg"
              >
                Home
              </Link>
            </li>
            <li className="pl-2 lg:pl-0">
              <Link
                href="/About"
                className="block text-black px-2 lg:px-4 py-2 lg:py-2 lg:my-0 my-6 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg"
              >
                About
              </Link>
            </li>
            <li className="pl-2 lg:pl-0">
              <Link
                href="/Project"
                className="block text-black px-2 lg:px-4 lg:py-2 lg:mb-0 lg:hover:bg-yellowLight hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
