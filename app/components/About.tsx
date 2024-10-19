import React from "react";

const About = () => {
  return (
    <div>
      <section id='about' className='py-20 bg-slate-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
              About Us
            </h2>
            <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
          </div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-2xl font-bold text-slate-800 mb-4'>
                Our Mission
              </h3>
              <p className='text-slate-600 mb-6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                id possimus. Beatae excepturi dolorum molestias quos, recusandae
                ad deserunt porro est consectetur? Tenetur ipsum vero voluptate
                ipsa, non excepturi animi?
              </p>
              <h3 className='text-2xl font-bold text-slate-800 mb-4'>
                Our Vision
              </h3>
              <p className='text-slate-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
                id possimus. Beatae excepturi dolorum molestias quos, recusandae
                ad deserunt porro est consectetur? Tenetur ipsum vero voluptate
                ipsa, non excepturi animi?
              </p>
            </div>
            <div className='bg-blue-600 p-8 rounded-lg text-white'>
              <h3 className='text-2xl font-bold mb-4'>Why Choose Us?</h3>
              <ul className='space-y-4'>
                <li className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span>Lorem ipsum dolor sit amet consec.</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span>Lorem ipsum dolor sit amet consec.</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span>Lorem ipsum dolor sit amet consec.</span>
                </li>
                <li className='flex items-center space-x-3'>
                  <div className='w-2 h-2 bg-white rounded-full'></div>
                  <span>Lorem ipsum dolor sit amet consec.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
