"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const GetInTouchPage = () => {
  useEffect(() => {
    document.title = 'Get in Touch | SuLe Hub';
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
                  <h1 className="heading-style-h1">Get in Touch</h1>
                  <div className="margin-top margin-medium">
                    <p className="text-size-medium">We're here to help! Fill out the form below and our team will get back to you as soon as possible.</p>
                  </div>
                </div>
                
                <div className="margin-top margin-xlarge">
                  <div className="form_component w-form">
                    <form className="form_form">
                      <input className="form_input w-input" maxLength={256} name="Name" placeholder="Your Name" type="text" id="Name" required />
                      <input className="form_input w-input" maxLength={256} name="Email" placeholder="Your Email" type="email" id="Email" required />
                      <input className="form_input w-input" maxLength={256} name="Company" placeholder="Company Name" type="text" id="Company" />
                      <textarea className="form_input is-text-area w-input" maxLength={5000} name="Message" placeholder="Your Message" id="Message" required></textarea>
                      <div className="margin-top margin-small">
                        <label className="w-checkbox form_checkbox">
                          <input type="checkbox" name="Privacy-Policy" id="Privacy-Policy" required style={{opacity: 0, position: 'absolute', zIndex: -1}} />
                          <div className="w-checkbox-input w-checkbox-input--inputType-custom form_checkbox-icon"></div>
                          <span className="form_checkbox-label w-form-label">SuLe needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a href="/privacy-policy" className="privacy-policy">Privacy Policy.</a></span>
                        </label>
                      </div>
                      <div className="margin-top margin-medium">
                        <input type="submit" className="button w-button" value="Send Message" />
                      </div>
                    </form>
                    <div className="form_message-success w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>Oops! Something went wrong while submitting the form.</div>
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

export default GetInTouchPage;
