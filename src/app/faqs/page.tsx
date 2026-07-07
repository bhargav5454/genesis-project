"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailFaqsPage = () => {
  useEffect(() => {
    document.title = 'Frequently Asked Questions - SuLe Hub';
  }, []);

  const faqs = [
    {
      question: "What is SuLe Hub?",
      answer: "SuLe Hub is a legal platform designed specifically for startups and growing businesses. We provide affordable, accessible legal support to help founders focus on building their business rather than getting lost in legal complexities."
    },
    {
      question: "How does SuLe Hub work?",
      answer: "Our platform combines technology with expert legal knowledge to provide solutions tailored to the needs of startups. We offer document templates, legal guidance, and connections to specialized lawyers when needed."
    },
    {
      question: "Is SuLe Hub suitable for my business?",
      answer: "SuLe Hub is designed for startups and growing businesses at any stage. Whether you're just starting out or scaling up, our platform provides the legal support you need to navigate challenges and opportunities."
    },
    {
      question: "How much does SuLe Hub cost?",
      answer: "We offer different pricing plans to meet the varied needs of businesses. You can view our pricing options on our dedicated pricing page, which includes both subscription models and pay-as-you-go options."
    },
    {
      question: "Can I speak with a real lawyer through SuLe Hub?",
      answer: "Yes, SuLe Hub connects you with experienced lawyers when needed. While our platform automates many routine legal tasks, we understand that some situations require personalized expert advice."
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
                      <h1 className="heading-style-h1">Frequently Asked Questions</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        Find answers to common questions about our legal platform, services, and how we can help your business.
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
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${index > 0 ? 'margin-top margin-medium' : ''}`}>
                    <h2 className="heading-style-h4">{faq.question}</h2>
                    <div className="margin-top margin-small">
                      <p className="text-size-regular">{faq.answer}</p>
                    </div>
                    {index < faqs.length - 1 && <div className="footer-divider margin-top margin-medium"></div>}
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
                <h2 className="heading-style-h3">Still have questions?</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Our team is ready to help with any other questions you might have about our services.
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

export default DetailFaqsPage;
