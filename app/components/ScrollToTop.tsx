"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return showScrollTop ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className='fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300'
    >
      <ChevronUp className='w-6 h-6' />
    </button>
  ) : null;
};

export default ScrollToTop;
