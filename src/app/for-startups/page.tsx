"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import HeroSection from '@/components/homepage/HeroSection';
import PartnersSection from '@/components/homepage/PartnersSection';
import PlatformSection from '@/components/homepage/PlatformSection';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import { useBannerVisibility } from '@/hooks/useBannerVisibility';

const HomePage = () => {
  const isBannerVisible = useBannerVisibility();
  // Set to true to show the webinar banner
  const showWebinarBanner = false;
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Trigger page load animation after a brief delay
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  const [showEventEmbed, setShowEventEmbed] = useState(false);
  const [isBannerClosed, setIsBannerClosed] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(48);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    document.title = 'SuLe Hub - Legal Support for Startups and Growing Businesses';
  }, []);

  // Countdown timer functionality
  useEffect(() => {
    const targetDate = new Date('2026-06-03T08:00:00+00:00');

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const calcDays = Math.floor(distance / (1000 * 60 * 60 * 24));
        const calcHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const calcMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const calcSeconds = Math.floor((distance % (1000 * 60)) / 1000);

        setDays(calcDays);
        setHours(calcHours);
        setMinutes(calcMinutes);
        setSeconds(calcSeconds);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate responsive banner height
  useEffect(() => {
    const calculateBannerHeight = () => {
      const isMobile = window.innerWidth <= 767;
      setIsMobileViewport(isMobile);
      setBannerHeight(isMobile ? 70 : 80);
    };

    calculateBannerHeight();
    window.addEventListener('resize', calculateBannerHeight);

    return () => {
      window.removeEventListener('resize', calculateBannerHeight);
    };
  }, []);

  useEffect(() => {
    // Add custom CSS for the Smart Legal Platform section
    const style = document.createElement('style');
    style.innerHTML = `
      /* Ensure proper z-index stacking for all sections */
      .main-wrapper > * {
        position: relative;
        z-index: 10;
      }
      
      /* Hero section has lower z-index to allow subsequent sections to stack properly */
      .section_home-header {
        z-index: 1 !important;
      }
      
      .smart-legal-heading {
        font-family: 'DM Serif Display', sans-serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 50px;
        color: rgb(18, 18, 18);
        margin-bottom: 4px;
      }
      
      .smart-legal-description {
        font-family: 'Open Sans', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: rgb(45, 45, 45);
        margin-bottom: 4px;
      }
      
      .smart-legal-list {
        margin-top: 4px;
        list-style: none;
        padding-left: 0;
      }
      
      .smart-legal-list-item {
        font-family: 'Open Sans', sans-serif;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: rgb(18, 18, 18);
        margin-bottom: 5px;
      }
      
      .large-image img {
        max-width: 110%;
        height: auto;
      }
      
      .smart-legal-buttons {
        display: flex;
        gap: 20px;
        margin-top: 5px;
      }
      
      .find-out-more {
        background-color: #3B82F6;
        border-radius: 100px;
        padding: 12px 24px;
        height: 56px;
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      
      .free-legal-health {
        border: 2px solid #3B82F6;
        color: #3B82F6;
        background-color: transparent;
        border-radius: 100px;
        padding: 12px 24px;
        height: 56px;
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      
      /* Update all buttons to have consistent height */
      .button, .button-secondary {
        height: 56px;
        display: flex;
        align-items: center;
        font-size: 17px;
      }
      
      /* Increase border thickness for outlined buttons */
      .button-secondary {
        border-width: 2px !important;
      }
      
      /* Make video container perfectly square at all screen sizes */
      .section_platform-video {
        position: relative;
        width: 100%;
        padding-bottom: 100%; /* Creates a 1:1 aspect ratio */
        overflow: hidden;
      }
      
      /* Position the video absolutely within the container to maintain aspect ratio */
      .w-background-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      /* Set the specific background color for the journey section */
      .journey-section-bg {
        background-color: #F4EEE4 !important;
      }

      /* Mobile-specific fix for journey section background */
      @media screen and (max-width: 767px) {
        .journey-section-bg .section-platform_content {
          background-color: #F4EEE4 !important;
        }
        
        .journey-section-bg .section-platform_content > * {
          background-color: transparent !important;
        }
        
        /* Center the video element within its container on mobile */
        .journey-section-bg .section_platform-video {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          padding-bottom: 60%; /* Reduced aspect ratio to prevent cutoff */
          overflow: visible; /* Allow the video to be fully visible */
          height: auto; /* Allow height to be determined by content */
        }
        
        .journey-section-bg .w-background-video {
          position: static; /* Remove absolute positioning */
          width: 90%; /* Slightly larger for better visibility */
          height: auto;
          max-width: 90%;
          object-fit: contain; /* Ensure full visibility */
          transform: none; /* Remove any transforms that might cause positioning issues */
          margin: 20px auto; /* Add top/bottom margin for proper centering */
          display: block; /* Ensure block display for proper centering */
        }

        /* Hide the entire first partners section (desktop version) on mobile */
        .section.overflow-hidden.hidden.md\\:block {
          display: none !important;
        }
      }

      /* Updated Testimonials Section Styling */
      .section_testimonials {
        background-color: #F4EEE4;
        padding: 2rem 0; /* Reduced from 4rem to 2rem */
      }
      
      .testimonials_component {
        position: relative;
      }
      
      .testimonial-slider {
        margin: 1.5rem 0 2rem; /* Adjusted margins */
        max-width: 100%;
        overflow: visible;
      }
      
      .testimonial-card {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 300px; /* Ensure minimum width */
      }
      
      /* Testimonial heading styling */
      .testimonial-heading {
        font-family: "DM Serif Display", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 34px;
        color: rgb(18, 18, 18);
        text-align: left;
        margin-bottom: 0.75rem;
      }
      
      /* Consistent card styling for all testimonials */
      .featured-testimonial {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      
      .testimonial-content {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: rgb(18, 18, 18);
        margin-bottom: 2rem;
        text-align: left;
        flex-grow: 1;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-direction: row;
      }
      
      .testimonial-author-image {
        flex-shrink: 0;
      }
      
      .author-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .testimonial-author-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
      }
      
      .testimonial-author-name {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: rgb(18, 18, 18);
        margin-bottom: 0.25rem;
      }
      
      .testimonial-author-position {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: rgb(18, 18, 18);
      }
      
      .testimonial-navigation {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1.5rem;
        position: relative;
      }
      
      .testimonial-arrows {
        display: flex;
        gap: 1.5rem;
        justify-content: flex-start;
      }
      
      .testimonial-arrow {
        width: auto;
        height: auto;
        border-radius: 0;
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #333;
        padding: 0;
      }
      
      .testimonial-arrow:hover {
        transform: none;
        box-shadow: none;
        color: #347AE9;
      }
      
      .testimonial-dots {
        display: flex;
        gap: 0.5rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      
      .testimonial-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        padding: 0;
      }
      
      .testimonial-dot.active {
        background-color: #347AE9;
      }
      
      /* Splide slider customizations for peek effect */
      .splide__track {
        overflow: visible;
        padding-left: 0;
        margin-left: 0;
      }
      
      .splide__list {
        display: flex;
        gap: 24px; /* Consistent gap between all cards */
      }
      
      .testimonial-slide {
        min-width: 550px; /* Fixed width for all cards */
        width: 550px !important; /* Ensure fixed width applied to all slides */
        flex: 0 0 auto;
        position: relative;
      }
      
      /* Style for the first visible slide */
      .splide__slide.is-active {
        z-index: 2;
      }
      
      /* Style for the peek preview slides */
      .peek-slide {
        opacity: 0.7;
        pointer-events: none;
        user-select: none;
        z-index: 1;
        transform: translateX(-80%); /* Only show a small portion */
      }
      
      /* Track with peek effect */
      .peek-preview {
        overflow: visible !important;
      }
      
      /* Container for better centering */
      .container-large {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      @media screen and (max-width: 767px) {
        .testimonial-navigation {
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }
        
        .testimonial-arrows {
          justify-content: flex-start;
        }
        
        .testimonial-dots {
          position: static;
          justify-content: flex-start;
          margin-top: 1rem;
        }
        
        .featured-testimonial {
          padding: 1.5rem;
        }
        
        .testimonial-content {
          font-size: 16px;
        }
        
        .author-avatar {
          width: 48px;
          height: 48px;
        }
        
        .testimonial-slide {
          min-width: calc(100vw - 80px); /* Increased padding to prevent cutoff */
          width: calc(100vw - 80px) !important; /* Ensure the card fits within screen width */
          max-width: calc(100vw - 80px); /* Prevent overflow */
        }
        
        .testimonial-card {
          width: 100%; /* Take full width of the slide */
          min-width: auto; /* Remove minimum width restriction on mobile */
          box-sizing: border-box; /* Include padding in width calculation */
          margin: 0; /* Remove any margins that could cause overflow */
          padding: 1.5rem; /* Ensure adequate internal padding */
        }
        
        /* Ensure the splide container doesn't cause overflow */
        .splide__track {
          overflow: hidden; /* Prevent horizontal scroll on mobile */
          padding-left: 24px; /* Add left padding */
          padding-right: 24px; /* Add right padding */
        }
        
        .splide__list {
          gap: 16px; /* Reduce gap on mobile */
        }
        
        /* Adjust container padding on mobile */
        .container-large {
          padding: 0 20px; /* Reduce container padding */
        }
        
        /* Ensure section has proper padding */
        .section_testimonials .padding-global {
          padding-left: 20px;
          padding-right: 20px;
        }
      }

      /* Get your legals in order section styling */
      .legals-order-heading {
        font-family: "DM Serif Display", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 63px;
        color: rgb(18, 18, 18);
        margin-bottom: 8px;
      }
      
      .legals-order-description {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: rgb(45, 45, 45);
        margin-bottom: -16px;
      }
      
      /* Ensure consistent spacing in the legals section */
      .legals-order-section .section-platform_content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .legals-order-section .section-platform_header {
        margin-bottom: 0 !important;
      }
      
      .legals-order-section .button-group {
        margin-top: 0;
        position: relative;
        top: -24px;
      }
      
      /* Newsletter section responsive styles */
      @media screen and (max-width: 991px) {
        .footer-top {
          flex-direction: column;
          align-items: flex-start !important;
        }
        
        .footer_header {
          margin-bottom: 24px;
          max-width: 100% !important;
        }
        
        .form_component {
          width: 100%;
          max-width: 100% !important;
        }
      }
      
      /* DM Serif Display font fix */
      @font-face {
        font-family: "DM Serif Display Regular";
        src: url("/fonts/DMSerifDisplay-Regular.ttf") format("truetype");
        font-weight: 400;
        font-style: normal;
      }
      
      /* Open Sans Medium font fix */
      @font-face {
        font-family: "Open Sans Medium";
        src: url("/fonts/OpenSans-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
      }
      
      /* Event Banner Styles */
      .event-banner {
        background: linear-gradient(135deg, #E7F0FF 0%, #DDEBFF 25%, #E7F0FF 50%, #F3E8FF 75%, #FFF8E7 100%);
        padding: 20px 0;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1030;
        box-shadow: 0 2px 8px rgba(52, 122, 233, 0.1);
        height: 80px;
      }
      
      .event-banner-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        height: 100%;
        position: relative;
      }
      
      .event-banner-left {
        display: flex;
        align-items: center;
        padding: 12px 0;
      }
      
      .event-banner-pill {
        background-color: white;
        border: 1px solid #000000;
        border-radius: 20px;
        padding: 4px 12px;
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-size: 10px;
        color: #000000;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        white-space: nowrap;
      }
      
      .event-banner-center {
        flex: 1;
        text-align: center;
        padding: 12px 0;
      }
      
      .event-banner-headline {
        color: #000000;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 600;
        margin: 0;
        line-height: 1.2;
      }
      
      .event-banner-right {
        display: flex;
        align-items: center;
        padding: 12px 0;
        padding-right: 36px;
      }
      
      .event-banner-right-content {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .event-register-button {
        background-color: #297DFF;
        color: white;
        border: none;
        border-radius: 50px;
        padding: 6px 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        height: 32px;
        display: flex;
        align-items: center;
      }
      
      .event-register-button:hover {
        background-color: #000000 !important;
        color: #FFFFFF !important;
        transform: translateY(-1px);
      }
      
      .event-countdown {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      
      .countdown-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
      }
      
      .countdown-number {
        background-color: #000000;
        color: white;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 9px;
        padding: 2px 4px;
        border-radius: 3px;
        min-width: 16px;
        text-align: center;
      }
      
      .countdown-label {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 6px;
        color: #666666;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }
      
      .event-banner-close {
        position: absolute;
        right: 8px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: #666666;
        font-size: 16px;
        cursor: pointer;
        padding: 2px;
        line-height: 1;
        opacity: 0.8;
        transition: opacity 0.2s ease;
        z-index: 10;
      }
      
      .event-banner-close:hover {
        opacity: 1;
        color: #333333;
      }
      
      
      .event-embed-container {
        background-color: rgba(0, 0, 0, 0.8);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      
      .event-embed-wrapper {
        position: relative;
        background: white;
        border-radius: 8px;
        padding: 20px;
        max-width: 640px;
        width: 100%;
        height: 85vh;
        overflow: auto;
        display: flex;
        flex-direction: column;
      }
      
      .event-embed-close {
        position: absolute;
        top: 10px;
        right: 15px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #666;
        z-index: 2001;
      }
      
      .event-embed-close:hover {
        color: #333;
      }
      
      /* main-wrapper margin is set dynamically via inline style */

      /* Mobile responsive */
      @media screen and (max-width: 767px) {
        .event-banner {
          padding: 16px 0;
          height: 70px;
          top: 0;
        }
        
        .event-banner-content {
          flex-direction: row;
          gap: 8px;
          padding: 0 16px;
          position: relative;
        }
        
        .event-banner-left {
          display: none;
        }
        
        .event-banner-center {
          padding: 10px 0;
          text-align: left;
        }
        
        .event-banner-right {
          padding: 10px 0;
          padding-right: 28px;
        }
        
        .event-banner-right-content {
          gap: 8px;
        }
        
        .event-banner-headline {
          font-size: 12px;
        }
        
        .event-countdown {
          gap: 3px;
        }
        
        .countdown-number {
          font-size: 8px;
          padding: 2px 3px;
          min-width: 14px;
        }
        
        .countdown-label {
          font-size: 5px;
        }
        
        .event-register-button {
          padding: 4px 18px;
          font-size: 10px;
          height: 32px;
        }
        
        .event-banner-pill {
          font-size: 9px;
          padding: 3px 8px;
        }
        
        .event-banner-close {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
        }
        
        /* main-wrapper margin handled dynamically */
        
        .event-embed-wrapper {
          margin: 10px;
          padding: 15px;
          height: 90vh;
        }
        
      .event-embed-wrapper iframe {
        width: 100% !important;
        height: 100% !important;
        flex: 1;
        min-height: 400px;
      }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const switcherHeight = isMobileViewport ? 44 : 52;
  const eventBannerOffset = showWebinarBanner && !isBannerClosed ? bannerHeight : 0;
  const dynamicNavbarOffset = eventBannerOffset + (isBannerVisible ? switcherHeight : 0);
  const staticNavbarOffset = eventBannerOffset + switcherHeight;

  return (
    <div className="page-wrapper">
      <style>{`
        .page-load-fade {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .page-load-fade.loaded {
          opacity: 1;
          transform: translateY(0);
        }
        .page-load-delay-1 { transition-delay: 0.15s; }
        .page-load-delay-2 { transition-delay: 0.3s; }
        .page-load-delay-3 { transition-delay: 0.45s; }
      `}</style>
      <AudienceSwitcher isHidden={!isBannerVisible} style={{ top: `${eventBannerOffset}px` }} />
      {/* Event Banner - controlled by showWebinarBanner flag */}
      {showWebinarBanner && !isBannerClosed && (
        <div className="event-banner">
          <div className="event-banner-content">
            <div className="event-banner-left">
              <div className="event-banner-pill">
                SULE EVENTS
              </div>
            </div>
            
            <div className="event-banner-center">
              <h2 className="event-banner-headline">
                Next event: "Barry's & Breakfast"
              </h2>
            </div>
            
            <div className="event-banner-right">
              <div className="event-banner-right-content">
                <button 
                  className="event-register-button"
                  onClick={() => setShowEventEmbed(true)}
                >
                  Register Here
                </button>
                
                <div className="event-countdown">
                  <div className="countdown-item">
                    <div className="countdown-number">{String(days).padStart(2, '0')}</div>
                    <div className="countdown-label">DAYS</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(hours).padStart(2, '0')}</div>
                    <div className="countdown-label">HRS</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(minutes).padStart(2, '0')}</div>
                    <div className="countdown-label">MINS</div>
                  </div>
                  <div className="countdown-item">
                    <div className="countdown-number">{String(seconds).padStart(2, '0')}</div>
                    <div className="countdown-label">SECS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="event-banner-close"
            onClick={() => setIsBannerClosed(true)}
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
      )}
      
      {/* Event Embed Modal */}
      {showEventEmbed && (
        <div className="event-embed-container" onClick={() => setShowEventEmbed(false)}>
          <div className="event-embed-wrapper" onClick={(e) => e.stopPropagation()}>
            <button 
              className="event-embed-close"
              onClick={() => setShowEventEmbed(false)}
            >
              ×
            </button>
            <iframe
              src="https://luma.com/embed/event/evt-bwNzEGf8aMq1snC/simple"
              width="600"
              height="450"
              frameBorder="0"
              style={{border: '1px solid #bfcbda88', borderRadius: '4px', width: '100%', height: '100%', flex: '1', minHeight: '400px'}}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      )}
      
      <Navbar bannerHeight={dynamicNavbarOffset} />
      
      <main className="main-wrapper" style={{ position: 'relative', zIndex: 5, marginTop: `${staticNavbarOffset + 70}px` }}>
        <div className={`page-load-fade ${pageLoaded ? 'loaded' : ''}`}>
          <HeroSection />
        </div>
        
        <div className={`page-load-fade page-load-delay-1 ${pageLoaded ? 'loaded' : ''}`} style={{ position: 'relative', zIndex: 10 }}>
          {/* First Partners Section - between hero and smart legal platform */}
          <PartnersSection title="We've helped great startups just like yours" />

          <PlatformSection 
            title="A smart legal platform, unlike anything else"
            description="Tired of expensive legal fees that don't get you very far? Sick of not knowing what to do and feeling lost? We think we may have a solution."
            listItems={[
              "Easy on-demand legal guidance",
              "Free 360 legal health check",
              "Unlimited 15 minute consultations with lawyers",
              "Fully customisable templates tailored to your business"
            ]}
            imageSrc="/images/smart-legal-platform.svg"
            primaryButtonText="Find out more"
            primaryButtonLink="/platform"
            secondaryButtonText="Free legal health check"
            secondaryButtonLink="https://hub.sule.io/quiz"
            isSmartLegalSection={true}
          />

          <PlatformSection 
            title="Affordable legal help from experienced lawyers"
            description="Whether you're navigating contracts, resolving disputes, or simply need guidance, we've got you covered with clear and reliable solutions."
            listItems={[
              "Expert lawyers",
              "Fast, easy and affordable support",
              "Highest quality legal documents"
            ]}
            imageSrc="/images/affordable-legal-help.svg"
            imageAlt=""
            imageRight={true}
            primaryButtonText="Book a free consultation"
            primaryButtonLink="/book-a-free-consultation"
            secondaryButtonText="Find out more"
            secondaryButtonLink="/consultation"
            showDesktopOnly={true}
            tabletImageSrc="/images/Frame-2131328667.png"
            tabletImageSrcSet="/images/Frame-2131328667-p-500.png 500w, /images/Frame-2131328667-p-800.png 800w, /images/Frame-2131328667-p-1080.png 1080w, /images/Frame-2131328667.png 1232w"
            tabletImageSizes="(max-width: 1232px) 100vw, 1232px"
            isSmartLegalSection={true}
          />

          <PlatformSection 
            title="Support at each stage of your journey"
            description="We support you at every stage of your journey—from launching your business and ensuring compliance to protecting your IP, building your team, and raising money."
            backgroundColor="journey-section-bg"
            imageRight={true}
            primaryButtonText="Sign up for free"
            primaryButtonLink="https://perfect-afternoon-22.authkit.app/sign-up"
            hasVideo={true}
            videoPath="/videos/platform-transcode.mp4"
            videoPoster="/videos/platform-poster-00001.jpg"
            isSmartLegalSection={true}
          />

          <TestimonialsSection />

          <PlatformSection 
            title="Get your legals in order"
            description="Sign up to our platform to streamline your legal tasks, get personalised step-by-step guidance, on-demand access to lawyers and access a wide range of templates and resources"
            imageSrc="/images/Frame-2131328690.svg"
            imageAlt=""
            imageRight={true}
            noRadius={true}
            primaryButtonText="Sign up for free"
            primaryButtonLink="https://perfect-afternoon-22.authkit.app/sign-up"
            customHeadingClass="legals-order-heading"
            customDescriptionClass="legals-order-description"
            customSectionClass="legals-order-section"
          />

          {/* Second Partners Section - above footer */}
          <PartnersSection title="We partner with the best startup accelerators and venture firms" />
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default HomePage;
