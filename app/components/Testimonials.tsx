"use client";

import React, { useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "Tech Solutions Inc.",
      content:
        "Working with this HR team transformed our hiring process. We've seen a 40% improvement in retention rates.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Growth Startup",
      content:
        "Their strategic HR consulting helped us scale from 10 to 100 employees seamlessly.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      role: "Operations Manager",
      company: "Global Logistics",
      content:
        "The training programs they developed for our team were exactly what we needed. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className='py-20 bg-slate-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
            Client Testimonials
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
        </div>
        <div className='relative'>
          <div className='relative h-80'>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                  index === currentTestimonial ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className='max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
                  <div className='flex items-center mb-4'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 text-yellow-400 fill-current'
                      />
                    ))}
                  </div>
                  <p className='text-slate-600 mb-4 italic'>
                    "{testimonial.content}"
                  </p>
                  <div className='font-semibold text-slate-800'>
                    {testimonial.name}
                  </div>
                  <div className='text-slate-600'>{testimonial.role}</div>
                  <div className='text-blue-600'>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex justify-center mt-6 space-x-2'>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-slate-300"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
