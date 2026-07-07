"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailClientsPage = () => {
  useEffect(() => {
    document.title = 'Our Clients - SuLe Hub';
  }, []);

  const clientCategories = [
    {
      category: "Technology Startups",
      description: "From software development to hardware innovation, we support tech startups at every stage of growth with tailored legal solutions.",
      clients: ["TechWave Solutions", "InnovateSoft", "Quantum Computing Labs", "Digital Futures Inc."]
    },
    {
      category: "E-Commerce Businesses",
      description: "Online retailers face unique legal challenges. We help e-commerce businesses navigate regulations, customer agreements, and global sales.",
      clients: ["Global Marketplace", "Fashion Forward", "Eco Products Online", "Specialty Goods Direct"]
    },
    {
      category: "Healthcare Innovators",
      description: "Healthcare startups operating in a heavily regulated environment rely on our expertise to ensure compliance while innovating.",
      clients: ["MedTech Innovations", "Health Analytics Pro", "Patient Care Solutions", "BioTech Ventures"]
    },
    {
      category: "Financial Technology",
      description: "Fintech companies trust us to help them navigate complex financial regulations while disrupting traditional financial services.",
      clients: ["Payment Solutions Ltd", "Crypto Innovations", "WealthTech Advisors", "Lending Platform Inc."]
    }
  ];

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
                      <h1 className="heading-style-h1">Our Clients</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        SuLe Hub supports a diverse range of businesses across various industries.
                        Our clients range from early-stage startups to established companies looking
                        to optimize their legal operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-large">
                {clientCategories.map((category, index) => (
                  <div key={index} className={`client-category ${index > 0 ? 'margin-top margin-xlarge' : ''}`}>
                    <h2 className="heading-style-h3">{category.category}</h2>
                    <div className="margin-top margin-medium">
                      <p className="text-size-medium">{category.description}</p>
                      <div className="client-logos-grid margin-top margin-medium">
                        <div className="grid-2-columns">
                          {category.clients.map((client, i) => (
                            <div key={i} className="client-logo-wrapper padding-medium background-color-floral-s2">
                              <div className="text-align-center">
                                <div className="text-weight-semibold">{client}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {index < clientCategories.length - 1 && <div className="footer-divider margin-top margin-medium"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small text-align-center">
                <h2 className="heading-style-h3">Join our growing client base</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    See how SuLe Hub can transform legal support for your business.
                  </p>
                  <div className="margin-top margin-medium">
                    <a href="/register-interest" className="button w-button">Get Started Today</a>
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

export default DetailClientsPage;
