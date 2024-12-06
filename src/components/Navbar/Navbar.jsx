import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import logo from "../../assets/logo2.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div className='sticky top-0 z-50'>
      <nav className="bg-white">
      <div className="max-w-[100%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="">
            <img src={logo} alt="" className=''/>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 mx-auto items-center ">
            <Link to="/" className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/about" className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link to="/services" className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link to="/contact" className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
          </div>
          <div className='hidden space-x-4 items-center md:flex lg:flex'>
            <Link className='text-[28px]' to=''>
            <IoIosSearch />

            </Link>
            <Link className='text-[28px]' to=''>
            <CgProfile />
            </Link>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-white bg-gray-700 px-3 py-1 rounded-md text-sm font-medium">
              Menu
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMenu} className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" onClick={toggleMenu} className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/services" onClick={toggleMenu} className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link to="/contact" onClick={toggleMenu} className="transition:all duration-300 ease-in-out text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  


    </div>
  )
}

export default Navbar
