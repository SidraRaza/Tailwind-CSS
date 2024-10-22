'use client';
import { useState } from 'react';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Button to toggle the dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            Menu
          </button>

          {/* Dropdown Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} mt-2 md:block`}>
            <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4 text-white">
              <li>
                <a href="#home" className="block py-2 px-4 hover:bg-gray-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-4 hover:bg-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-4 hover:bg-gray-700">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
