"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailUseCasesPage = () => {
  useEffect(() => {
    document.title = 'Use Cases - SuLe Hub';
  }, []);

  const useCases = [
    {
      title: "Early-Stage Startups",
      description: "For founders just starting their journey, SuLe Hub provides essential legal documents, guidance on company formation, and cost-effective legal support to establish a solid foundation.",
      benefits: [
        "Company formation documents and guidance",
        "Founder agreements and equity allocation",
        "Basic intellectual property protection",
        "Employee contracts and policies"
      ]
    },
    {
      title: "Growth-Stage Companies",
      description: "As your business grows, SuLe Hub scales with you, offering more complex legal support for fundraising, expansion, and increasing compliance requirements.",
      benefits: [
        "Investment round documentation",
        "Commercial contracts and negotiations",
        "Regulatory compliance frameworks",
        "Intellectual property strategy"
      ]
    },
    {
      title: "International Expansion",
      description: "Expanding globally brings new legal challenges. SuLe Hub connects you with international expertise and provides guidance on cross-border regulations.",
      benefits: [
        "International entity setup guidance",
        "Cross-border compliance requirements",
        "Local legal partner connections",
        "Global intellectual property protection"
      ]
    },
    {
      title: "Industry-Specific Solutions",
      description: "Different sectors face unique legal challenges. SuLe Hub offers specialized support for technology, healthcare, fintech, e-commerce, and other industries.",
      benefits: [
        "Industry-specific compliance guidance",
        "Specialized contract templates",
        "Sector-focused legal expertise",
        "Regulatory navigation for regulated industries"
      ]
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
                      <h1 className="heading-style-h1">Use Cases</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        Discover how SuLe Hub helps businesses at different stages and across various industries
                        navigate their legal challenges efficiently and cost-effectively.
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
                {useCases.map((useCase, index) => (
                  <div key={index} className={`use-case ${index > 0 ? 'margin-top margin-xlarge' : ''}`}>
                    <h2 className="heading-style-h3">{useCase.title}</h2>
                    <div className="margin-top margin-medium">
                      <p className="text-size-medium">{useCase.description}</p>
                      <div className="margin-top margin-medium">
                        <h3 className="heading-style-h5">Key Benefits:</h3>
                        <ul className="margin-top margin-small">
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i} className="text-size-regular margin-top margin-tiny">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < useCases.length - 1 && <div className="footer-divider margin-top margin-medium"></div>}
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
                <h2 className="heading-style-h3">Find the right solution for your business</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Talk to our team to learn how SuLe Hub can address your specific legal needs.
                  </p>
                  <div className="margin-top margin-medium">
                    <a href="/book-a-free-demo" className="button w-button">Book a Free Demo</a>
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

export default DetailUseCasesPage;
