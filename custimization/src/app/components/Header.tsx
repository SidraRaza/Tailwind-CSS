import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    
      
      <div className="bg-green p-5 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col-1 lg:flex-row lg:items-center justify-between">
          <h1 className="text-black text-3xl font-bold lg:text-3xl font-['Geist_Sans']">Portfolio</h1>
          
          <div className="lg:mt-0 flex lg:space-x-4 space-x-2">
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="text-red-500 text-3xl cursor-pointer md:hidden absolute right-6 top-6"
        >
          &#9776;
        </label>
        <ul className="flex-col list-none md:flex md:flex-row md:static absolute right-0 top-[70px] bg-yellow md:bg-transparent w-32 p-1 md:w-auto md:p-0 hidden peer-checked:flex z-10 rounded-md shadow-lg md:shadow-none">
          <li className="md:ml-6">
            <Link href="/home" className="text-black block lg:py-2 lg:px-4 px-2 py-2 hover:bg-yellow border border-yellow hover:text-green ">
              Home
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/About" className="text-black block lg:py-2 lg:px-4 px-2 py-2 hover:bg-yellow border border-yellow  hover:text-green ">
              About
            </Link>
          </li>
          <li className="md:ml-6 mt-2 md:mt-0">
            <Link href="/Project" className="text-black block lg:py-2 lg:px-4 px-2 py-2 hover:bg-yellow border border-yellow hover:text-green  ">
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
