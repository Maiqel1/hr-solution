"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const faqs = [
    {
      question: "What makes your HR solutions unique?",
      answer:
        "We combine cutting-edge technology with personalized service. Our approach is data-driven yet human-centered, ensuring optimal results for both employers and employees.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Most of our solutions can be implemented within 2-4 weeks, depending on the complexity and scale of your organization. We provide dedicated support throughout the process.",
    },
    {
      question: "Do you offer customized solutions?",
      answer:
        "Absolutely! We believe every organization is unique. Our team works closely with you to understand your specific needs and tailors our solutions accordingly.",
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
            Frequently Asked Questions
          </h2>
          <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
        </div>
        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div key={index} className='border rounded-lg'>
              <button
                className='w-full px-6 py-4 text-left flex justify-between items-center hover:bg-slate-50'
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
              >
                <span className='font-semibold text-slate-800'>
                  {faq.question}
                </span>
                {activeAccordion === index ? (
                  <ChevronDown className='w-5 h-5 text-blue-600' />
                ) : (
                  <ChevronRight className='w-5 h-5 text-blue-600' />
                )}
              </button>
              {activeAccordion === index && (
                <div className='px-6 pb-4 text-slate-600'>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
