import { Users, Target, Briefcase } from "lucide-react";
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Recruitment & Staffing",
      description:
        "Find top talent and build your dream team with our comprehensive recruitment solutions.",
      icon: <Users className='w-12 h-12 text-blue-600' />,
    },
    {
      title: "HR Consulting",
      description:
        "Expert guidance on HR strategy, policy development, and organizational structure.",
      icon: <Target className='w-12 h-12 text-blue-600' />,
    },
    {
      title: "Training & Development",
      description:
        "Empower your workforce with customized training programs and workshops.",
      icon: <Briefcase className='w-12 h-12 text-blue-600' />,
    },
  ];
  return (
    <div>
      {/* Services Section */}
      <section id='services' className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-800 mb-4'>
              Our Services
            </h2>
            <div className='w-20 h-1 bg-blue-600 mx-auto'></div>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300'
              >
                <div className='mb-6'>{service.icon}</div>
                <h3 className='text-xl font-bold text-slate-800 mb-4'>
                  {service.title}
                </h3>
                <p className='text-slate-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
