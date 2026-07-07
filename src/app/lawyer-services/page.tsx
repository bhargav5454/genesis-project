"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const LawyerServicesPage = () => {
  useEffect(() => {
    document.title = 'Lawyer Services Reimagined - Online Legal Expertise | SuLe Hub';
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="section section_home-header" style={{ backgroundColor: '#ffffff' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="home_header-wrapper">
                  <div className="margin-bottom margin-large">
                    <div className="text-align-center">
                      <div className="margin-bottom margin-small">
                        <h1 className="heading-style-h1" style={{ fontWeight: 'normal' }}>
                          Lawyer Services Reimagined:<br />
                          <span className="text-color-brand">Online Legal Expertise</span><br />
                          at Your Fingertips
                        </h1>
                      </div>
                      <p className="text-size-medium text-color-grey">
                        Affordable, on-demand, from ex-Magic Circle lawyers. Delivered entirely online.
                      </p>
                    </div>
                  </div>
                  <div className="margin-bottom margin-medium">
                    <div className="text-align-center">
                      <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-icon w-inline-block" style={{ 
                        padding: '16px 32px', 
                        fontSize: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        maxWidth: '400px',
                        width: 'auto',
                        height: '56px',
                        margin: '0 auto'
                      }}>
                        <span className="text-size-regular text-weight-semibold">Start Your Free Legal Match</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default LawyerServicesPage;
