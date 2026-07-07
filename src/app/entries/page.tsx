"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailEntriesPage = () => {
  useEffect(() => {
    document.title = 'Blog Entries - SuLe Hub';
  }, []);

  const blogEntries = [
    {
      title: "Essential Legal Documents Every Startup Needs",
      excerpt: "Starting a business involves numerous legal considerations. This post covers the key documents you should have in place from day one.",
      date: "May 1, 2025",
      category: "Startup Law",
      image: "/images/Placeholder-Image-1.png"
    },
    {
      title: "Understanding Intellectual Property for Tech Startups",
      excerpt: "Protecting your innovations is critical in the tech industry. Learn about patents, trademarks, and copyright considerations for your business.",
      date: "April 15, 2025",
      category: "Intellectual Property",
      image: "/images/Placeholder-Image-1_1.png"
    },
    {
      title: "Navigating Data Protection Regulations",
      excerpt: "With evolving privacy laws, ensuring compliance is essential. This guide breaks down what startups need to know about data protection.",
      date: "April 8, 2025",
      category: "Compliance",
      image: "/images/Placeholder-Image-1.png"
    },
    {
      title: "The Legal Side of Raising Venture Capital",
      excerpt: "Securing funding comes with legal implications. Understand the key legal considerations when raising venture capital for your startup.",
      date: "March 27, 2025",
      category: "Fundraising",
      image: "/images/Placeholder-Image-1_1.png"
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
                      <h1 className="heading-style-h1">Blog Entries</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        Insights, guidance, and practical tips to help startups and growing businesses
                        navigate legal challenges and opportunities. Our experts share their knowledge
                        to keep you informed and prepared.
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
                <div className="grid-2-columns">
                  {blogEntries.map((entry, index) => (
                    <div key={index} className="blog-card">
                      <img src={entry.image} alt={entry.title} className="blog-image" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                      <div className="margin-top margin-small">
                        <div className="chip-card">{entry.category}</div>
                        <h3 className="heading-style-h4 margin-top margin-small">{entry.title}</h3>
                        <p className="text-size-regular margin-top margin-small">{entry.excerpt}</p>
                        <div className="text-size-small text-color-tertiary margin-top margin-small">{entry.date}</div>
                        <a href="#" className="text-style-link margin-top margin-medium">Read more</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small text-align-center">
                <h2 className="heading-style-h3">Subscribe to our newsletter</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Get the latest legal insights and updates delivered directly to your inbox.
                  </p>
                  <div className="form_component margin-top margin-medium">
                    <form className="form_form">
                      <div className="form_form-wrapper">
                        <input className="form_input is-newsletter" type="email" placeholder="Enter your email" required />
                        <button type="submit" className="button-secondary is-newsletter">Subscribe</button>
                      </div>
                    </form>
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

export default DetailEntriesPage;
