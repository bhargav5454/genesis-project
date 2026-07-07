"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us | SuLe Hub';
    
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      // Create the form once the script is loaded
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "27012556",
          formId: "7013ee6a-aff2-494c-98b1-6718c4666095",
          region: "eu1",
          target: '#hubspot-form'
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-small">
                <div className="text-align-center">
                  <h1 className="heading-style-h1">Contact Us</h1>
                  <div className="margin-top margin-medium">
                    <p className="text-size-medium">At SuLe, we're committed to excellence in legal services — and that starts with our people. Fill out the form below, and our team will be in touch soon to answer any queries. We look forward to exploring how we might work together!</p>
                  </div>
                </div>
                
                
                <div className="margin-top margin-xlarge">
                  <div id="hubspot-form"></div>
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

export default ContactPage;
