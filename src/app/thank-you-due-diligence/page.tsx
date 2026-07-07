"use client";


import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const ThankYouDueDiligencePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = 'Thank You | Due Diligence Checklist';
    
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="main-wrapper">
        <div className="section_thanks">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="thanks_component">
                  <div className="thanks_content">
                    <div 
                      className="thanks_header" 
                      style={{ 
                        gap: '0.25rem',
                        alignItems: isMobile ? 'center' : 'flex-start'
                      }}
                    >
                      <h1 
                        className="heading-style-h2" 
                        style={{ 
                          textAlign: isMobile ? 'center' : 'left',
                          marginTop: isMobile ? '1.5rem' : '0'
                        }}
                      >
                        Thank you
                      </h1>
                      <p 
                        className="text-size-medium" 
                        style={{ 
                          textAlign: isMobile ? 'center' : 'left'
                        }}
                      >
                        For more of our free resources sign up to our platform.
                      </p>
                      {isMobile && (
                          <div style={{ display: 'flex', justifyContent: 'center', margin: '1rem 0' }}>
                            <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="img">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M7 10l5 5 5-5" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M12 15V3" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                      )}
                      <div 
                        className="flex" 
                        style={{ 
                          justifyContent: isMobile ? 'center' : 'flex-start'
                        }}
                      >
                        <a href="/documents/SuLe---Due-Diligence-Checklist.pdf" download="SuLe-Due-Diligence-Checklist.pdf" className="thanks_cta flex items-baseline gap-2 text-[#347AE9]">
                          {!isMobile && (
                             <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="img">
                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M7 10l5 5 5-5" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                 <path d="M12 15V3" stroke="#347AE9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                               </svg>
                             </div>
                          )}
                          <p style={{ margin: 0, lineHeight: '120%', display: 'inline', fontSize: '1.125rem', fontFamily: 'Opensans Medium, sans-serif', color: '#347AE9' }}>Click here to download your document</p>
                        </a>
                      </div>
                    </div>
                    <div 
                      className="button-group flex" 
                      style={{ 
                        justifyContent: isMobile ? 'center' : 'flex-start',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '0.75rem' : '1rem'
                      }}
                    >
                      <a 
                        href="/platform" 
                        className="button w-button" 
                        style={{ 
                          width: isMobile ? '100%' : 'auto'
                        }}
                      >
                        Discover our platform
                      </a>
                      <a 
                        href="https://hub.sule.io/" 
                        className="button-secondary w-button" 
                        style={{ 
                          width: isMobile ? '100%' : 'auto'
                        }}
                      >
                        Sign up for free
                      </a>
                    </div>
                  </div>
                  <div className="investment_form-image-wrapper">
                    <img src="/lovable-uploads/ab0b8b08-27cb-41cd-abb7-998a7dcc1831.png" loading="lazy" width="616" alt="Due Diligence Checklist" className="investment_form-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default ThankYouDueDiligencePage;
