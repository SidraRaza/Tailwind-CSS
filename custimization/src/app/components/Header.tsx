import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    
      
      <div className="bg-green p-5 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col-1 lg:flex-row lg:items-center justify-between">
          <h1 className="text-black text-3xl font-bold lg:text-3xl font-['Geist_Sans']">Portfolio</h1>
          
          <div className="lg:mt-0 flex lg:space-x-4 space-x-2">
            <Link href="/" className="text-black text-lg rounded-lg hover:bg-yellow hover:text-black border border-yellow lg:px-4 lg:py-2  px-1 py-1 transition duration-300">
              Home
            </Link>
            <Link href="/About" className="text-black text-lg rounded-lg hover:bg-yellow hover:text-black border border-yellow lg:px-4 lg:py-2  px-1 py-1 transition duration-300">
              About
            </Link>
            <Link href="/Project" className="text-black text-lg rounded-lg hover:bg-yellow hover:text-black border border-yellow lg:px-4 lg:py-2  px-1 py-1 transition duration-300">
              Porjects
            </Link>
          </div>
        </div>
      </div>
  
  );
};

export default Header;
