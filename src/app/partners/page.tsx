"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import PartnersSection from '@/components/homepage/PartnersSection';

const DetailPartnersPage = () => {
  useEffect(() => {
    document.title = 'Our Partners - SuLe Hub';
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <header className="section_home-header">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="home-header_component">
                  <div className="w-layout-grid home-header_content-wrapper">
                    <div className="home-header_content-left">
                      <h1 className="heading-style-h1">Our Partners</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        We collaborate with leading organizations to provide the best legal support for startups and growing businesses.
                        Our partnerships enable us to offer comprehensive solutions tailored to the unique needs of entrepreneurs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <PartnersSection title="Our Trusted Partners" />
        
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small">
                <h2 className="heading-style-h3">Partnership Benefits</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Our partnerships allow us to offer comprehensive legal support, industry expertise, and exclusive benefits to our clients.
                    Working with recognized leaders in various fields means we can provide you with the most relevant and effective solutions
                    for your business needs.
                  </p>
                  <ul className="margin-top margin-small">
                    <li className="text-size-regular">Access to specialized legal resources</li>
                    <li className="text-size-regular">Industry-specific expertise and guidance</li>
                    <li className="text-size-regular">Exclusive offers and discounts</li>
                    <li className="text-size-regular">Integrated solutions for seamless business operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small">
                <h2 className="heading-style-h3">Become a Partner</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Interested in partnering with SuLe? We're always looking for organizations that share our mission
                    of making legal support accessible and effective for startups and growing businesses.
                  </p>
                  <div className="margin-top margin-medium">
                    <a href="/register-interest" className="button w-button">Contact Us</a>
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

export default DetailPartnersPage;
