"use client";


import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailTestimonialsPage = () => {
  useEffect(() => {
    document.title = 'Client Testimonials - SuLe Hub';
  }, []);

  const testimonials = [
    {
      quote: "SuLe Hub transformed how we handle our legal work. As a fast-growing startup, we needed legal support that could keep pace - and that's exactly what we found.",
      name: "Sarah Johnson",
      position: "Founder, TechStart",
      image: "/images/Placeholder-Image-1.png"
    },
    {
      quote: "The platform is incredibly intuitive, and having access to legal expertise when we need it has been invaluable. It's like having an in-house legal team without the overhead.",
      name: "Michael Chen",
      position: "CEO, GreenGrow Innovations",
      image: "/images/Placeholder-Image-1_1.png"
    },
    {
      quote: "The document templates and guidance saved us countless hours and helped us avoid costly mistakes. SuLe Hub is now an essential part of our business operations.",
      name: "Emma Rodriguez",
      position: "Operations Director, Digital Solutions Inc.",
      image: "/images/Placeholder-Image-1.png"
    },
    {
      quote: "As a solo founder, legal matters used to be overwhelming. SuLe Hub has made them manageable and given me confidence that my business is on solid legal ground.",
      name: "James Wilson",
      position: "Founder, Streamline Apps",
      image: "/images/Placeholder-Image-1_1.png"
    },
    {
      quote: "The legal guidance from SuLe Hub has been instrumental in our international expansion. Their expertise in cross-border regulations saved us from potential compliance issues.",
      name: "Olivia Thompson",
      position: "CEO, Global Tech Solutions",
      image: "/images/Placeholder-Image-1.png"
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
                      <h1 className="heading-style-h1">Client Testimonials</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        Hear from startup founders and business leaders about their experience with SuLe Hub 
                        and how our platform has helped them navigate legal challenges.
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
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card padding-large background-color-floral-s2">
                      <div className="text-size-medium">"{testimonial.quote}"</div>
                      <div className="testimonial-author margin-top margin-medium">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" style={{ width: 60, height: 60, borderRadius: '50%', marginRight: 15 }} />
                        <div>
                          <div className="text-weight-semibold">{testimonial.name}</div>
                          <div className="text-size-small">{testimonial.position}</div>
                        </div>
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
                <h2 className="heading-style-h3">Join our growing list of satisfied clients</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Experience how SuLe Hub can transform legal support for your business.
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

export default DetailTestimonialsPage;
