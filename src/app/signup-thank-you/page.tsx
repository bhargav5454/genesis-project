"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const SignupThankYouPage = () => {
  useEffect(() => {
    document.title = 'Investment Readiness Guide | SuLe Hub';
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
                    <div className="thanks_header">
                      <h1 className="heading-style-h2">Thank you</h1>
                      <div className="text-size-medium">For more of our free resources sign up to our platform.</div>
                      <a href="/documents/SuLe---Investment-Readiness-Guide.pdf" className="thanks_cta w-inline-block">
                        <div className="icon-embed-xsmall w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 25" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path d="M6 18.5H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12 6.5V14.5M12 14.5L15.5 11M12 14.5L8.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M3 20.9V4.1C3 3.76863 3.26863 3.5 3.6 3.5H20.4C20.7314 3.5 21 3.76863 21 4.1V20.9C21 21.2314 20.7314 21.5 20.4 21.5H3.6C3.26863 21.5 3 21.2314 3 20.9Z" stroke="currentColor" strokeWidth="1.5"></path>
                          </svg>
                        </div>
                        <div>Click here to download your document</div>
                      </a>
                    </div>
                    <div className="button-group">
                      <a href="/platform" className="button w-button">Discover our platform</a>
                      <a href="https://hub.sule.io/" className="button-secondary w-button">Sign up for free</a>
                    </div>
                  </div>
                  <div className="investment_form-image-wrapper">
                    <img src="/src/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1.png" loading="lazy" width="616" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 92vw, (max-width: 1439px) 42vw, 584px" alt="" srcSet="/src/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1-p-500.png 500w, /src/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1-p-800.png 800w, /src/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1-p-1080.png 1080w, /src/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1.png 1232w" className="investment_form-image" />
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

export default SignupThankYouPage;
