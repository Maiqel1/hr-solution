import { Mail, Phone, MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='bg-slate-800 text-white py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <h4 className='text-xl font-bold mb-4'>HR Solutions</h4>
              <p className='text-slate-400'>
                Transforming workplaces through innovative HR solutions.
              </p>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Contact Us</h4>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Mail size={16} />
                  <span>info@hrsolutions.com</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Phone size={16} />
                  <span>+23400000000</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <MapPin size={16} />
                  <span>123 Hire me now avenue</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className='text-xl font-bold mb-4'>Quick Links</h4>
              <div className='space-y-2'>
                <a href='#home' className='block hover:text-blue-400'>
                  Home
                </a>
                <a href='#about' className='block hover:text-blue-400'>
                  About
                </a>
                <a href='#services' className='block hover:text-blue-400'>
                  Services
                </a>
                <a href='#contact' className='block hover:text-blue-400'>
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className='border-t border-slate-700 mt-8 pt-8 text-center'>
            <p className='text-slate-400'>
              © 2024 HR Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
