import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <>
    <div className="bg-green p-5 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
        {/* Header Title */}
        <h1 className="text-black text-3xl font-bold lg:text-3xl font-['Geist_Sans']">
          Portfolio
        </h1>

        {/* Menu Section */}
        <div className="lg:mt-0 flex lg:space-x-4 space-x-2 relative">
          {/* Checkbox for menu toggle */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />

          {/* Hamburger Menu Icon (Visible on small screens) */}
          <label
            htmlFor="menu-toggle"
            className="text-red-500 text-3xl cursor-pointer absolute right-6 lg:-top-5  md:-top-5 -top-10 bottom-2"
          >
            &#9776; {/* Hamburger icon */}
          </label>

          {/* Navigation Menu */}
          <ul className=" flex-col list-none lg:bg-transparent w-full bg-yellow text-black absolute right-0 top-[70px] sm:w-[600px] md:w[800px] lg:w-[1200px] mx-auto p-1 lg:p-0 rounded-md lg:rounded-none shadow-lg lg:shadow-none hidden peer-checked:flex">
  <li className="pl-2 lg:pl-0">
    <Link href="/home" className="block text-black px-2 lg:px-4 lg:py-10 py-6 hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      Home
    </Link>
  </li>
  <li className="pl-2 lg:pl-0">
    <Link href="/About" className="block text-black px-2 lg:px-4 lg:py-10 py-6 hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      About
    </Link>
  </li>
  <li className="pl-2 lg:pl-0">
    <Link href="/Project" className="block text-black px-2 lg:px-4 lg:py-10 py-6 hover:bg-yellowLight hover:border hover:border-green hover:text-black rounded-lg">
      Projects
    </Link>
  </li>
</ul>

        </div>
      </div>
    </div>
    <div className='bg-yellow lg:h-[550px] sm:h-[650px]'>

    </div>
    </>
    

  );
};

export default Header;
