"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import PartnersSection from '@/components/homepage/PartnersSection';

const LegalConsultationPage = () => {
  useEffect(() => {
    document.title = 'Sign up for a legal consultation | SuLe Hub';
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <div className="main-wrapper">
        {/* Updated Hero Section */}
        <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: 'white' }} className="hero-section">
          <div className="padding-global">
            <div className="container-large">
              <div className="hero-content" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '40px'
              }}>
                {/* Left Column - Text and Buttons wrapped in hero-content */}
                <div className="hero-text-column" style={{ flex: '1', maxWidth: '50%' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                  }}>
                    <h1 
                      className="text-left hero-main-heading"
                      style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontWeight: 400,
                        fontSize: '60px',
                        lineHeight: '63px',
                        color: 'rgb(18, 18, 18)',
                        marginBottom: '24px'
                      }}
                    >
                      Get legal help fast from experienced lawyers
                    </h1>
                    
                    <p 
                      className="text-left hero-subtext"
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'rgb(45, 45, 45)',
                        marginBottom: '124px'
                      }}
                    >
                      Got something specific you're not sure about?<br />
                      We offer help with several areas of law. Let us know what<br />
                      you're struggling with and talk to an expert.
                    </p>
                    
                    <div className="hero-buttons" style={{ display: 'flex', gap: '16px' }}>
                      <a
                        href="https://calendly.com/d/cq55-w8f-wsg/introductory-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center hero-primary-button"
                        style={{
                          backgroundColor: '#336DFF',
                          color: '#FFFFFF',
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '24px',
                          padding: '14px 32px',
                          borderRadius: '999px',
                          textDecoration: 'none'
                        }}
                      >
                        Book a free consultation
                      </a>
                      
                      <a
                        href="#"
                        className="inline-block text-center hero-secondary-button"
                        style={{
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #336DFF',
                          color: '#336DFF',
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '24px',
                          padding: '14px 32px',
                          borderRadius: '999px',
                          textDecoration: 'none'
                        }}
                      >
                        Get instant quote
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Image */}
                <div className="hero-image-column" style={{ flex: '0 0 544px' }}>
                  <img
                    src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/673b273e31100594183b79b0_Img%20(1).png"
                    alt="Legal consultation illustration"
                    className="hero-image"
                    style={{
                      width: '544px',
                      height: '640px',
                      borderRadius: '16px',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Our Legal Services Section */}
        <section className="legal-services-section" style={{ 
          paddingTop: '120px', 
          paddingBottom: '120px', 
          backgroundColor: '#F4EEE4' 
        }}>
          <div className="padding-global">
            <div className="container-large">
              <div style={{ textAlign: 'left' }}>
                {/* Icon */}
                <img
                  src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6731ef024db304008895d203_Gavel.svg"
                  alt="Legal services icon"
                  style={{
                    width: '128px',
                    height: '83px',
                    marginBottom: '24px'
                  }}
                />
                
                {/* Heading */}
                <h2 className="legal-services-heading" style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontWeight: 400,
                  fontSize: '60px',
                  lineHeight: '63px',
                  color: 'rgb(18, 18, 18)',
                  marginBottom: '24px',
                  textAlign: 'left'
                }}>
                  Our legal services
                </h2>
                
                {/* Intro paragraph */}
                <p className="legal-services-subtext" style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '28px',
                  color: 'rgb(45, 45, 45)',
                  marginBottom: '40px',
                  textAlign: 'left'
                }}>
                  We offer a wide variety legal services at affordable prices. If you need something else, get in touch and we'll get you a free quote within 1 business day.
                </p>
                
                {/* Services grid */}
                <div className="services-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '16px',
                  marginBottom: '40px',
                  textAlign: 'left'
                }}>
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Commercial
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Advising on corporate structures, share ownership, shareholders' agreements and corporate governance.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Corporate
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Advising on corporate structures, share ownership, shareholders' agreements and corporate governance.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Compliance
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Ensuring regulatory adherence, risk management, and industry-specific obligations.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Dispute resolution
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Resolving conflicts before they get to court. Dealing with pre-action claims.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Employment
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Dealing with employment rules, regulations, employment agreements and workplace policies.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Finance
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Advising on various loan agreements and convertible funding agreements.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Intellectual property
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Protecting patents, trademarks, copyrights, and trade secrets.
                    </p>
                  </div>
                  
                  <div className="service-item">
                    <h3 className="service-item-heading" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '20px',
                      lineHeight: '28px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px'
                    }}>
                      Property
                    </h3>
                    <p className="service-item-description" style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      color: 'rgb(45, 45, 45)',
                      margin: 0
                    }}>
                      Advising on the non-regulated areas of commercial leases.
                    </p>
                  </div>
                </div>
                
                {/* Call-to-action buttons */}
                <div style={{ 
                  display: 'flex', 
                  gap: '16px', 
                  justifyContent: 'flex-start',
                  marginTop: '40px'
                }}>
                  <a
                    href="https://calendly.com/d/cq55-w8f-wsg/introductory-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center"
                    style={{
                      backgroundColor: '#336DFF',
                      color: '#FFFFFF',
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      padding: '14px 32px',
                      borderRadius: '999px',
                      textDecoration: 'none'
                    }}
                  >
                    Book a free consultation
                  </a>
                  
                  <a
                    href="#"
                    className="inline-block text-center"
                    style={{
                      backgroundColor: 'transparent',
                      border: '2px solid #336DFF',
                      color: '#336DFF',
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      padding: '14px 32px',
                      borderRadius: '999px',
                      textDecoration: 'none'
                    }}
                  >
                    Get instant quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New How it works Section */}
        <section className="how-it-works-section" style={{ 
          paddingTop: '120px', 
          paddingBottom: '120px', 
          backgroundColor: 'white' 
        }}>
          <div className="padding-global">
            <div className="container-large">
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '40px'
              }}>
                {/* Left Column - Content */}
                <div style={{ flex: '1', maxWidth: '50%' }}>
                  {/* Heading */}
                  <h2 className="how-it-works-heading" style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '60px',
                    lineHeight: '63px',
                    color: 'rgb(18, 18, 18)',
                    marginBottom: '24px',
                    textAlign: 'left'
                  }}>
                    How it works
                  </h2>
                  
                  {/* Steps list */}
                  <div className="how-it-works-steps" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    marginBottom: '32px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div className="step-number" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '32px',
                        color: 'rgb(18, 18, 18)',
                        width: '48px',
                        flexShrink: 0
                      }}>
                        1.
                      </div>
                      <p className="step-text" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Create your account in just a few minutes—no hidden fees, no obligations.
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div className="step-number" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '32px',
                        color: 'rgb(18, 18, 18)',
                        width: '48px',
                        flexShrink: 0
                      }}>
                        2.
                      </div>
                      <p className="step-text" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Choose from our helpful templates and knowledge hub, or tell us about your specific legal needs and we'll connect you to a lawyer.
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div className="step-number" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '32px',
                        color: 'rgb(18, 18, 18)',
                        width: '48px',
                        flexShrink: 0
                      }}>
                        3.
                      </div>
                      <p className="step-text" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Get one of our lawyers to make any amendments or drafts of contracts, answer specific legal questions or give step-by-step guidance for your legal queries.
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div className="step-number" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '32px',
                        color: 'rgb(18, 18, 18)',
                        width: '48px',
                        flexShrink: 0
                      }}>
                        4.
                      </div>
                      <p className="step-text" style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Work with your lawyer directly through our platform, keep all of your communication and documents stored in one safe place.
                      </p>
                    </div>
                  </div>
                  
                  {/* Call-to-action button */}
                  <a
                    href="https://calendly.com/d/cq55-w8f-wsg/introductory-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center"
                    style={{
                      backgroundColor: '#336DFF',
                      color: '#FFFFFF',
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '24px',
                      padding: '14px 32px',
                      borderRadius: '999px',
                      textDecoration: 'none'
                    }}
                  >
                    Book a free consultation
                  </a>
                </div>
                
                {/* Right Column - Image */}
                <div style={{ 
                  flex: '0 0 50%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    backgroundColor: '#336DFF',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    width: '100%',
                    maxWidth: '544px'
                  }}>
                    <img
                      src="/images/legal-consultation-lawyers-v2.png"
                      alt="How it works illustration"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Logo Carousel Section */}
        <section style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          backgroundColor: 'white',
          width: '100%'
        }}>
          <div style={{ width: '100%' }}>
            {/* Heading */}
            <h2 style={{
              fontFamily: '"DM Serif Display", sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '34px',
              color: 'rgb(18, 18, 18)',
              textAlign: 'center',
              marginBottom: '40px',
              padding: '0 20px'
            }}>
              Our lawyers have worked at some of the best law firms
            </h2>
            
            {/* Logo Carousel */}
            <div style={{ 
              width: '100%',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <div 
                style={{
                  display: 'flex',
                  animation: 'scroll 20s linear infinite',
                  width: 'calc(200%)',
                  gap: '32px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.animationPlayState = 'paused';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.animationPlayState = 'running';
                }}
              >
                {/* First set of logos */}
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '120px',
                      height: '60px',
                      backgroundColor: '#E5E5E5',
                      borderRadius: '4px',
                      flexShrink: 0
                    }}
                  />
                ))}
                {/* Duplicate set for seamless loop */}
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={`duplicate-${i}`}
                    style={{
                      width: '120px',
                      height: '60px',
                      backgroundColor: '#E5E5E5',
                      borderRadius: '4px',
                      flexShrink: 0
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Add CSS animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-100% + 100vw));
              }
            }
            
            @media (max-width: 768px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-100% + 100vw - 240px));
                }
              }
            }
            
            @media (max-width: 1024px) and (min-width: 769px) {
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-100% + 100vw - 144px));
                }
              }
            }
          `}</style>
        </section>

        {/* New Join Our Team Section */}
        <section className="join-our-team-section" style={{ 
          paddingTop: '80px', 
          paddingBottom: '80px', 
          backgroundColor: 'white',
          width: '100%'
        }}>
          <div style={{ 
            width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 20px',
            textAlign: 'center'
          }}>
            {/* Heading */}
            <h2 className="join-our-team-heading" style={{
              fontFamily: '"DM Serif Display", serif',
              fontWeight: 400,
              fontSize: '48px',
              lineHeight: '56px',
              color: 'rgb(18, 18, 18)',
              textAlign: 'center',
              marginBottom: '24px'
            }}>
              Join our team of trusted lawyers
            </h2>
            
            {/* Paragraph */}
            <p className="join-our-team-subtext" style={{
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
              color: 'rgb(45, 45, 45)',
              textAlign: 'center',
              marginBottom: '32px',
              margin: '0 auto 32px auto'
            }}>
              Are you a lawyer with at least 5 years' experience working with growing companies? We're always looking for great lawyers to add to our team. Completely part-time, in your own hours and fast payments!
            </p>
            
            {/* Button */}
            <a
              href="https://calendly.com/d/cq55-w8f-wsg/introductory-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center"
              style={{
                backgroundColor: '#336DFF',
                color: '#FFFFFF',
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '24px',
                padding: '14px 32px',
                borderRadius: '999px',
                textDecoration: 'none'
              }}
            >
              Contact us
            </a>
          </div>
        </section>
      </div>

      <PartnersSection 
        title="We partner with the best startup accelerators and venture firms" 
      />
      
      <Footer />
      <CookieConsent />
      
      {/* Mobile-specific styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 92px !important;
            padding-bottom: 60px !important;
          }
          
          .hero-section .padding-global {
            padding: 0 20px !important;
          }
          
          .hero-content {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
            padding: 0 !important;
          }
          
          .hero-text-column {
            flex: 1 !important;
            max-width: 100% !important;
            width: 100% !important;
          }
          
          .hero-main-heading {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-size: 32px !important;
            line-height: 34px !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            text-align: left !important;
            margin-bottom: 16px !important;
          }
          
          .hero-subtext {
            font-family: "Opensans Medium", sans-serif !important;
            font-size: 16px !important;
            line-height: 22px !important;
            font-style: normal !important;
            font-weight: 500 !important;
            color: rgb(18, 18, 18) !important;
            text-align: left !important;
            margin-bottom: 24px !important;
          }
          
          .hero-buttons {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
            width: 100% !important;
          }
          
          .hero-primary-button,
          .hero-secondary-button {
            width: 100% !important;
            display: block !important;
            height: 52px !important;
            line-height: 24px !important;
            padding: 14px 32px !important;
            box-sizing: border-box !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-align: center !important;
            border-radius: 999px !important;
            text-decoration: none !important;
          }
          
          .hero-secondary-button {
            border: 1px solid #336DFF !important;
            background-color: #FFFFFF !important;
            color: #336DFF !important;
          }
          
          .hero-image-column {
            flex: 1 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: flex-start !important;
            order: 1 !important;
          }
          
          .hero-image {
            width: 100% !important;
            height: auto !important;
            max-width: 100% !important;
            border-radius: 12px !important;
            object-fit: cover !important;
          }

          /* Legal Services Section Mobile Styles */
          .legal-services-section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }

          .legal-services-section .padding-global {
            padding: 0 20px !important;
          }

          .legal-services-heading {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 40px !important;
            line-height: 42px !important;
            text-align: left !important;
            margin-bottom: 16px !important;
          }

          .legal-services-subtext {
            font-family: "Opensans Medium", sans-serif !important;
            font-style: normal !important;
            font-weight: 500 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 16px !important;
            line-height: 19px !important;
            text-align: left !important;
            margin-bottom: 32px !important;
          }

          .services-grid {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            margin-bottom: 32px !important;
            grid-template-columns: none !important;
          }

          .service-item-heading {
            font-family: Opensans, sans-serif !important;
            font-style: normal !important;
            font-weight: 600 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 18px !important;
            line-height: 20px !important;
            margin-bottom: 8px !important;
          }

          .service-item-description {
            font-family: "Opensans Medium", sans-serif !important;
            font-style: normal !important;
            font-weight: 500 !important;
            color: rgb(45, 45, 45) !important;
            font-size: 14px !important;
            line-height: 20px !important;
            margin: 0 !important;
          }

          /* Legal Services Section Button Container */
          .legal-services-section > div > div > div > div:last-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            width: 100% !important;
          }

          /* All buttons in legal services section */
          .legal-services-section a {
            width: 100% !important;
            height: 52px !important;
            line-height: 24px !important;
            padding: 14px 32px !important;
            box-sizing: border-box !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-align: center !important;
            border-radius: 999px !important;
            text-decoration: none !important;
            display: block !important;
          }

          /* How it works Section Mobile Styles */
          .how-it-works-section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }

          .how-it-works-section .padding-global {
            padding: 0 20px !important;
          }

          .how-it-works-section > div > div > div {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 32px !important;
            max-width: 100% !important;
          }

          .how-it-works-section > div > div > div > div:first-child {
            flex: 1 !important;
            max-width: 100% !important;
            width: 100% !important;
            order: 2 !important;
          }

          .how-it-works-section > div > div > div > div:last-child {
            flex: 1 !important;
            width: 100% !important;
            display: flex !important;
            justify-content: flex-start !important;
            order: 1 !important;
          }

          .how-it-works-heading {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 40px !important;
            line-height: 42px !important;
            text-align: left !important;
            margin-bottom: 24px !important;
          }

          .how-it-works-steps {
            display: flex !important;
            flex-direction: column !important;
            gap: 24px !important;
            margin-bottom: 32px !important;
          }

          .step-number {
            font-family: "Opensans Medium", sans-serif !important;
            font-style: normal !important;
            font-weight: 600 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 24px !important;
            line-height: 26px !important;
            width: 32px !important;
            flex-shrink: 0 !important;
          }

          .step-text {
            font-family: "Opensans Medium", sans-serif !important;
            font-style: normal !important;
            font-weight: 500 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 16px !important;
            line-height: 22px !important;
            margin: 0 !important;
          }

          /* How it works section button */
          .how-it-works-section a {
            width: 100% !important;
            height: 52px !important;
            line-height: 24px !important;
            padding: 14px 32px !important;
            box-sizing: border-box !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            text-align: center !important;
            border-radius: 999px !important;
            text-decoration: none !important;
            display: block !important;
          }

          /* Logo Carousel Section heading mobile styles */
          section h2 {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 26px !important;
            line-height: 29px !important;
          }

          /* PartnersSection heading mobile styles */
          .partners-section h2,
          .partners-section .heading-style-h3 {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 26px !important;
            line-height: 29px !important;
          }

          /* Join Our Team Section Mobile Styles */
          .join-our-team-section {
            padding: 60px 20px !important;
          }

          .join-our-team-heading {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-style: normal !important;
            font-weight: 400 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 40px !important;
            line-height: 42px !important;
            text-align: left !important;
            margin-bottom: 24px !important;
          }

          .join-our-team-subtext {
            font-family: "Opensans Medium", sans-serif !important;
            font-style: normal !important;
            font-weight: 500 !important;
            color: rgb(18, 18, 18) !important;
            font-size: 16px !important;
            line-height: 19px !important;
            text-align: center !important;
            margin-bottom: 32px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalConsultationPage;
