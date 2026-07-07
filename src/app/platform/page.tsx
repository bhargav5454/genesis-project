"use client";

import React, { useEffect, useState } from 'react';
import PlatformPageMobile from './PlatformPageMobile';
import PlatformPageDesktop from './PlatformPageDesktop';

// Main PlatformPage component that handles responsive rendering
const PlatformPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the viewport is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // If mobile, render the mobile component, otherwise render the desktop version
  return isMobile ? <PlatformPageMobile /> : <PlatformPageDesktop />;
};

export default PlatformPage;
