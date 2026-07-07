"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const BookAFreeDemoPage = () => {
  useEffect(() => {
    document.title = 'Book a free consultation - SuLe Hub';
    
    // Initialize Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="main-wrapper">
        <div className="section_book">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="book_component">
                  <div className="book_content">
                    <div className="book_header">
                      <h1 className="text-5xl font-bold text-black mb-4">Get a free legal health check with help from experienced lawyers</h1>
                      <div className="text-size-medium mb-3">Prepare your startup for success and ensure you're investment-ready. We'll review your startup's legal standing and provide you with a thorough legal health check. Following that, we offer highly discounted expert support, available for a limited time. Additionally, as one of the early adopters, you'll have the opportunity to be among the first beta users of SuLeHub, completely free of charge.</div>
                    </div>
                    <div>
                      <div>
                        <a 
                          href="https://calendly.com/d/cq55-w8f-wsg/introductory-call" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="calendly-widget"
                          style={{
                            backgroundColor: '#347ae9',
                            color: 'white',
                            padding: '20px',
                            borderRadius: '50px',
                            display: 'block',
                            width: '300px',
                            textAlign: 'center',
                            fontSize: '18px',
                            fontWeight: 500,
                            textDecoration: 'none'
                          }}
                        >
                          Book a free consultation
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="book_image-wrappe">
                    <img 
                      src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/64a99ae1096cb1382690b79e_illustration%20(33).png" 
                      loading="lazy" 
                      width="586" 
                      alt="Legal consultation illustration" 
                      className="book_image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .section_book {
            padding-top: 60px !important;
          }
          
          .book_component {
            flex-direction: column !important;
            gap: 40px !important;
          }
          
          .book_content {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .book_header h1 {
            text-align: left !important;
            font-size: 28px !important;
            line-height: 32px !important;
            margin-bottom: 16px !important;
          }
          
          .book_header .text-size-medium {
            text-align: left !important;
            font-size: 14px !important;
            line-height: 20px !important;
            margin-bottom: 0px !important;
          }
          
          .calendly-widget {
            width: 100% !important;
            max-width: 280px !important;
            height: 45px !important;
            padding: 0 20px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            font-size: 16px !important;
            margin: 0 !important;
          }
          
          .book_image-wrappe {
            display: flex !important;
            justify-content: center !important;
            padding: 0 20px !important;
            margin-bottom: 60px !important;
          }
          
          .book_image {
            width: 80% !important;
            max-width: 400px !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default BookAFreeDemoPage;
