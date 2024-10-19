"use client";

import React, { useState, useEffect } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    clients: 0,
    employees: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats");
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep === steps) {
        clearInterval(interval);
        return;
      }

      setStats((prev) => ({
        clients: Math.floor((500 / steps) * currentStep),
        employees: Math.floor((50 / steps) * currentStep),
        satisfaction: Math.floor((98 / steps) * currentStep),
      }));

      currentStep++;
    }, stepDuration);
  };

  return (
    <section id='stats' className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8 text-center'>
          <div className='p-6 bg-blue-50 rounded-lg'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>
              {stats.clients}+
            </div>
            <div className='text-slate-600'>Happy Clients</div>
          </div>
          <div className='p-6 bg-blue-50 rounded-lg'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>
              {stats.employees}+
            </div>
            <div className='text-slate-600'>HR Experts</div>
          </div>
          <div className='p-6 bg-blue-50 rounded-lg'>
            <div className='text-4xl font-bold text-blue-600 mb-2'>
              {stats.satisfaction}%
            </div>
            <div className='text-slate-600'>Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
