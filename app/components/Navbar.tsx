import { X, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className='bg-white shadow-md fixed w-full z-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16 items-center'>
            <div className='flex-shrink-0'>
              <span className='text-2xl font-bold text-blue-600'>
                HR Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex space-x-8'>
              <a href='#home' className='text-slate-600 hover:text-blue-600'>
                Home
              </a>
              <a href='#about' className='text-slate-600 hover:text-blue-600'>
                About
              </a>
              <a
                href='#services'
                className='text-slate-600 hover:text-blue-600'
              >
                Services
              </a>
              <a href='#contact' className='text-slate-600 hover:text-blue-600'>
                Contact
              </a>
            </div>

            {/* Mobile Navigation Button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='text-slate-600 hover:text-blue-600'
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <a
                href='#home'
                className='block px-3 py-2 text-slate-600 hover:text-blue-600'
              >
                Home
              </a>
              <a
                href='#about'
                className='block px-3 py-2 text-slate-600 hover:text-blue-600'
              >
                About
              </a>
              <a
                href='#services'
                className='block px-3 py-2 text-slate-600 hover:text-blue-600'
              >
                Services
              </a>
              <a
                href='#contact'
                className='block px-3 py-2 text-slate-600 hover:text-blue-600'
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
