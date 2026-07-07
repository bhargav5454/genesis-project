"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AboutUsContent from '@/components/AboutUsContent';

const AboutUsPage = () => {
  useEffect(() => {
    document.title = 'About Us - SuLe Hub';
  }, []);

  useEffect(() => {
    // Add custom CSS for the "Get your legals in order" section to match homepage
    const style = document.createElement('style');
    style.innerHTML = `
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

      /* HERO SECTION BUTTON ALIGNMENT - FIXED FOR ALL SCREEN SIZES */
      .hero-buttons-mobile {
        display: flex !important;
        flex-direction: row !important;
        gap: 24px !important;
        justify-content: center !important;
        align-items: center !important;
        margin-top: 32px !important;
        margin-bottom: 32px !important;
        width: 100% !important;
        max-width: 400px !important;
        margin-left: auto !important;
        margin-right: auto !important;
      }
      
      .hero-button-mobile {
        font-size: 17px !important;
        padding-top: 12px !important;
        padding-bottom: 12px !important;
        padding-left: 12px !important;
        padding-right: 12px !important;
        height: 56px !important;
        min-width: 180px !important;
        white-space: nowrap !important;
        text-align: center !important;
        box-sizing: border-box !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
      }
      
      .hero-button-mobile.button-secondary {
        border-width: 2px !important;
      }
      
      /* Always ensure horizontal alignment regardless of screen size */
      @media (max-width: 768px) {
        .hero-buttons-mobile {
          flex-direction: row !important;
          flex-wrap: nowrap !important;
        }
        
        .hero-button-mobile {
          font-size: 14px !important;
          padding-left: 10px !important;
          padding-right: 10px !important;
          min-width: 140px !important;
          flex: 1 !important;
        }
      }
      
      @media (max-width: 480px) {
        .hero-buttons-mobile {
          gap: 16px !important;
          max-width: 350px !important;
        }
        
        .hero-button-mobile {
          min-width: 100px !important;
          font-size: 13px !important;
          padding-left: 8px !important;
          padding-right: 8px !important;
        }
      }
      
      /* About section vertical alignment fix */
      .about-section-container {
        display: flex !important;
        flex-direction: column !important;
        padding-top: 0 !important;
      }
      
      .about-section-heading {
        margin-top: 0 !important;
        padding-top: 0 !important;
      }
      
      .about-section-content {
        padding-top: 0 !important;
      }
      
      /* Section gaps fix */
      .platform-section,
      .clients-section,
      .partners-section,
      .testimonials-section {
        margin-top: 0 !important;
        padding-top: 60px !important;
      }
      
      /* Remove extra margin between sections */
      section + section {
        margin-top: 0 !important;
      }
      
      /* Fix spacing for legals-order section */
      .section-platform_component.legals-order-section {
        padding-top: 60px !important;
        padding-bottom: 60px !important;
        margin-bottom: 0 !important;
      }
      
      /* About section fixes */
      @media (max-width: 991px) {
        .about-section-container {
          padding-top: 0 !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <AboutUsContent />
      </main>

      <Footer />
      <CookieConsent />
      
      <style jsx>{`
        @media (max-width: 768px) {
          .legal-team-buttons {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
        
        @keyframes scroll-logos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-carousel:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
