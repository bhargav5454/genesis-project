"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import TestimonialsSection from '@/components/homepage/TestimonialsSection';
import PlatformSection from '@/components/homepage/PlatformSection';
import PartnersSection from '@/components/homepage/PartnersSection';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { comparisonData } from '@/data/pricingData';
import ToggleSwitch from '@/components/ToggleSwitch';
import ExtraCreditsPanel from '@/components/ExtraCreditsPanel';

const ExplorePricingPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activePlan, setActivePlan] = useState<'basic' | 'premium' | 'premiumPlus'>('premiumPlus');
  const [pricingView, setPricingView] = useState<'Subscriptions' | 'Credits'>('Subscriptions');

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    // Add the exact same CSS styling as used in HomePage for TestimonialsSection
    const style = document.createElement('style');
    style.innerHTML = `
      /* Updated Testimonials Section Styling */
      .section_testimonials {
        background-color: #FFFEFB;
        padding: 2rem 0; /* Reduced from 4rem to 2rem */
      }
      
      .testimonials_component {
        position: relative;
      }
      
      .testimonial-slider {
        margin: 1.5rem 0 2rem; /* Adjusted margins */
        max-width: 100%;
        overflow: visible;
      }
      
      .testimonial-card {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        height: 100%;
        display: flex;
        flex-direction: column;
        min-width: 300px; /* Ensure minimum width */
      }
      
      /* Testimonial heading styling */
      .testimonial-heading {
        font-family: "DM Serif Display", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 34px;
        color: rgb(18, 18, 18);
        text-align: left;
        margin-bottom: 0.75rem;
      }
      
      /* Consistent card styling for all testimonials */
      .featured-testimonial {
        background-color: #ffffff;
        border-radius: 12px;
        padding: 2.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      
      .testimonial-content {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: rgb(18, 18, 18);
        margin-bottom: 2rem;
        text-align: left;
        flex-grow: 1;
      }
      
      .testimonial-author {
        display: flex;
        align-items: center;
        gap: 12px;
        flex-direction: row;
      }
      
      .testimonial-author-image {
        flex-shrink: 0;
      }
      
      .author-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
      
      .testimonial-author-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: left;
      }
      
      .testimonial-author-name {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
        color: rgb(18, 18, 18);
        margin-bottom: 0.25rem;
      }
      
      .testimonial-author-position {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: rgb(18, 18, 18);
      }
      
      .testimonial-navigation {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 1.5rem;
        position: relative;
      }
      
      .testimonial-arrows {
        display: flex;
        gap: 1.5rem;
        justify-content: flex-start;
      }
      
      .testimonial-arrow {
        width: auto;
        height: auto;
        border-radius: 0;
        background-color: transparent;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        color: #333;
        padding: 0;
      }
      
      .testimonial-arrow:hover {
        transform: none;
        box-shadow: none;
        color: #347AE9;
      }
      
      .testimonial-dots {
        display: flex;
        gap: 0.5rem;
        position: absolute;
        right: 0;
        bottom: 0;
      }
      
      .testimonial-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
        padding: 0;
      }
      
      .testimonial-dot.active {
        background-color: #347AE9;
      }
      
      /* Splide slider customizations for peek effect */
      .splide__track {
        overflow: visible;
        padding-left: 0;
        margin-left: 0;
      }
      
      .splide__list {
        display: flex;
        gap: 24px; /* Consistent gap between all cards */
      }
      
      .testimonial-slide {
        min-width: 550px; /* Fixed width for all cards */
        width: 550px !important; /* Ensure fixed width applied to all slides */
        flex: 0 0 auto;
        position: relative;
      }
      
      /* Style for the first visible slide */
      .splide__slide.is-active {
        z-index: 2;
      }
      
      /* Style for the peek preview slides */
      .peek-slide {
        opacity: 0.7;
        pointer-events: none;
        user-select: none;
        z-index: 1;
        transform: translateX(-80%); /* Only show a small portion */
      }
      
      /* Track with peek effect */
      .peek-preview {
        overflow: visible !important;
      }
      
      /* Container for better centering */
      .container-large {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      @media screen and (max-width: 767px) {
        .testimonial-navigation {
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
        }
        
        .testimonial-arrows {
          justify-content: flex-start;
        }
        
        .testimonial-dots {
          position: static;
          justify-content: flex-start;
          margin-top: 1rem;
        }
        
        .featured-testimonial {
          padding: 1.5rem;
        }
        
        .testimonial-content {
          font-size: 16px;
        }
        
        .author-avatar {
          width: 48px;
          height: 48px;
        }
        
        .testimonial-slide {
          min-width: 280px;
        }
      }

      /* Get your legals in order section styling */
      .legals-order-heading {
        font-family: "DM Serif Display", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 63px;
        color: rgb(18, 18, 18);
        margin-bottom: 8px;
      }
      
      .legals-order-description {
        font-family: "Open Sans Medium", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 21px;
        color: rgb(45, 45, 45);
        margin-bottom: -16px;
      }
      
      /* Ensure consistent spacing in the legals section */
      .legals-order-section .section-platform_content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      
      .legals-order-section .section-platform_header {
        margin-bottom: 0 !important;
      }
      
      .legals-order-section .button-group {
        margin-top: 0;
        position: relative;
        top: -24px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Check if the viewport is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const faqData = [
    {
      question: "How do I get legal help?",
      answer: "If you're looking to tackle some legal tasks yourself, we've got a range of resources, templates and guidance to help you navigate through the legal maze. If you need expert legal advice, we can connect you with qualified lawyers who can provide personalised support at affordable rates."
    },
    {
      question: "How much does legal advice cost?",
      answer: "We provide very affordable legal services starting from £250 + VAT. Our pricing is transparent with fixed quotes, so you'll know exactly what you're paying upfront. We also offer various packages and subscription plans to suit different business needs and budgets."
    },
    {
      question: "How do I know your lawyers are qualified?",
      answer: "All of our lawyers must be registered with the SRA (Solicitors Regulation Authority) and have extensive experience from top-tier law firms. We carefully vet all our legal professionals to ensure they meet our high standards for expertise and service quality."
    }
  ];

  return (
    <>
      <Navbar />

      <main style={{ backgroundColor: '#FFFEFB', minHeight: '100vh' }}>
        {/* View Toggle */}
        <section
          style={{
            backgroundColor: '#FFFEFB',
            paddingTop: isMobile ? '80px' : '120px',
            paddingBottom: '0',
          }}
        >
          <div style={{ maxWidth: '320px', margin: '0 auto', padding: '0 16px' }}>
            <ToggleSwitch
              options={['Subscriptions', 'Credits']}
              selectedOption={pricingView}
              onToggle={(opt) => setPricingView(opt as 'Subscriptions' | 'Credits')}
              backgroundColor="#F2EEE3"
            />
          </div>
        </section>

        {pricingView === 'Credits' ? (
          <section
            style={{
              backgroundColor: '#FFFEFB',
              paddingTop: '32px',
              paddingBottom: '64px',
            }}
          >
            <div style={{ padding: '0 16px' }}>
              <ExtraCreditsPanel isMobile={isMobile} />
            </div>
          </section>
        ) : (
        <>
        {/* Pricing Plans Section */}
        {isMobile ?
          <section style={{
            backgroundColor: '#fffefb',
            paddingTop: '32px',
            paddingBottom: '48px'
          }}>
            <div style={{ padding: '0 8px' }}>

              {/* Plan Headers Row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '0px',
                marginBottom: '0',
              }}>
                {/* Basic */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px 0 0 0',
                  padding: '20px 8px 16px',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  borderBottom: 'none',
                  borderRight: 'none',
                }}>
                  <h3 style={{ fontFamily: '"Opensans Bold", sans-serif', fontSize: '13px', fontWeight: 700, color: '#121212', margin: '0 0 12px 0' }}>Basic</h3>
                  <div><span style={{ fontFamily: '"Dmserifdisplay Regular", serif', fontSize: '28px', fontWeight: 400, color: '#121212' }}>Free</span></div>
                  <div style={{ height: '32px' }} />
                  <a href="https://perfect-afternoon-22.authkit.app/sign-up" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '90%', height: '32px', backgroundColor: 'transparent', color: '#121212',
                    border: '1px solid #121212', borderRadius: '24px', textDecoration: 'none',
                    fontFamily: '"Opensans Medium", sans-serif', fontSize: '12px', fontWeight: 500,
                  }}>Sign up</a>
                </div>

                {/* Premium */}
                <div style={{
                  backgroundColor: '#FFFFFF',
                  padding: '20px 8px 16px',
                  textAlign: 'center',
                  border: '1px solid #E5E7EB',
                  borderBottom: 'none',
                  borderRight: 'none',
                }}>
                  <h3 style={{ fontFamily: '"Opensans Bold", sans-serif', fontSize: '13px', fontWeight: 700, color: '#121212', margin: '0 0 12px 0' }}>Premium</h3>
                  <div>
                    <span style={{ fontFamily: '"Dmserifdisplay Regular", serif', fontSize: '28px', fontWeight: 400, color: '#121212' }}>£299</span>
                    <span style={{ fontFamily: '"Opensans Medium", sans-serif', fontSize: '11px', color: '#121212' }}>/qtr</span>
                  </div>
                  <p style={{ fontFamily: '"Opensans Medium", sans-serif', fontSize: '10px', color: '#666', margin: '2px 0 8px 0' }}>+VAT</p>
                  <a href="https://perfect-afternoon-22.authkit.app/sign-up" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '90%', height: '32px', backgroundColor: 'transparent', color: '#121212',
                    border: '1px solid #121212', borderRadius: '24px', textDecoration: 'none',
                    fontFamily: '"Opensans Medium", sans-serif', fontSize: '12px', fontWeight: 500,
                  }}>Sign up</a>
                </div>

                {/* Premium+ */}
                <div style={{
                  backgroundColor: '#E8F0FE',
                  borderRadius: '0 16px 0 0',
                  padding: '20px 8px 16px',
                  textAlign: 'center',
                }}>
                  <h3 style={{ fontFamily: '"Opensans Bold", sans-serif', fontSize: '13px', fontWeight: 700, color: '#121212', margin: '0 0 12px 0' }}>Premium +</h3>
                  <div>
                    <span style={{ fontFamily: '"Dmserifdisplay Regular", serif', fontSize: '28px', fontWeight: 400, color: '#121212' }}>£990</span>
                    <span style={{ fontFamily: '"Opensans Medium", sans-serif', fontSize: '11px', fontWeight: 700, color: '#121212' }}>/yr</span>
                  </div>
                  <p style={{ fontFamily: '"Opensans Medium", sans-serif', fontSize: '10px', color: '#121212', margin: '2px 0 0 0' }}>+VAT</p>
                  <p style={{ fontFamily: '"Opensans Medium", sans-serif', fontSize: '9px', color: '#121212', margin: '0 0 4px 0' }}>2 months free</p>
                  <a href="https://perfect-afternoon-22.authkit.app/sign-up" target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: '90%', height: '32px', backgroundColor: '#000000', color: '#FFFFFF',
                    border: 'none', borderRadius: '24px', textDecoration: 'none',
                    fontFamily: '"Opensans Medium", sans-serif', fontSize: '12px', fontWeight: 500,
                  }}>Sign up</a>
                </div>
              </div>

              {/* Comparison Rows */}
              <div>
                {comparisonData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    {/* Category Header */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr',
                      gap: '0px',
                      borderTop: '1px solid #E5E5E5',
                    }}>
                      <div style={{
                        padding: '12px 8px 4px',
                        fontFamily: '"Opensans Bold", sans-serif',
                        fontSize: '13px',
                        fontWeight: 700,
                        color: '#121212',
                      }}>
                        {category.category}
                        {(category as any).subtitle && (
                          <span style={{
                            fontFamily: '"Open Sans Medium", sans-serif',
                            fontSize: '10px',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            color: '#6B7280',
                            display: 'block',
                            marginTop: '2px',
                          }}>
                            {(category as any).subtitle}
                          </span>
                        )}
                      </div>
                      <div style={{ backgroundColor: '#E8F0FE' }} />
                    </div>

                    {/* Feature Rows */}
                    {category.rows.map((row, rowIndex) => (
                      <div key={rowIndex}>
                        {/* Feature label row */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '2fr 1fr',
                          gap: '0px',
                        }}>
                          <div style={{
                            padding: '8px 8px 2px',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                            color: '#6B7280',
                          }}>
                            {row.feature}
                          </div>
                          <div style={{ backgroundColor: '#E8F0FE' }} />
                        </div>
                        {/* Values in 3 columns */}
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr 1fr',
                          gap: '0px',
                        }}>
                          <div style={{
                            padding: '4px 8px 10px',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '11px',
                            fontWeight: 500,
                            color: '#121212',
                            textAlign: 'center',
                          }}>
                            {row.basic}
                          </div>
                          <div style={{
                            padding: '4px 8px 10px',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '11px',
                            fontWeight: (row as any).bold ? 700 : 500,
                            color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : '#121212',
                            textAlign: 'center',
                          }}>
                            {row.premium}
                          </div>
                          <div style={{
                            padding: '4px 8px 10px',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '11px',
                            fontWeight: (row as any).bold ? 700 : 500,
                            color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : '#121212',
                            textAlign: 'center',
                            backgroundColor: '#E8F0FE',
                            borderRadius: categoryIndex === comparisonData.length - 1 && rowIndex === category.rows.length - 1 ? '0 0 16px 16px' : '0',
                          }}>
                            {row.premiumPlus}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          : <section style={{
            backgroundColor: '#FFFEFB',
            paddingTop: '32px',
            paddingBottom: '48px'
          }}>
            <div className="container-large padding-global">
              {/* Integrated Pricing Table */}
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative'
              }}>

                {/* Plan Headers */}
                <div className="pricing-grid-headers" style={{
                  display: 'grid',
                  gridTemplateColumns: '280px 280px 280px 296px',
                  gap: '0px',
                  justifyContent: 'center',
                  marginBottom: '0'
                }}>
                  <div></div>

                  {/* Basic Plan Header */}
                  <div className="pricing-plan-header" style={{
                    backgroundColor: 'transparent',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '320px'
                  }}>
                    <h3 className="pricing-plan-title" style={{
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#121212',
                      marginBottom: '24px',
                      margin: '0 0 24px 0'
                    }}>
                      Basic
                    </h3>

                    <div style={{ marginBottom: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span className="pricing-plan-price" style={{
                          fontFamily: '"Dmserifdisplay Regular", serif',
                          fontSize: '48px',
                          fontWeight: 400,
                          lineHeight: '50px',
                          color: '#121212'
                        }}>
                          Free
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://perfect-afternoon-22.authkit.app/sign-up"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pricing-plan-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '48px',
                        backgroundColor: 'transparent',
                        color: '#121212',
                        border: '1px solid #121212',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      Sign up
                    </a>
                  </div>

                  {/* Premium Plan Header */}
                  <div className="pricing-plan-header" style={{
                    backgroundColor: 'transparent',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '320px'
                  }}>
                    <h3 className="pricing-plan-title" style={{
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#121212',
                      marginBottom: '24px',
                      margin: '0 0 24px 0'
                    }}>
                      Premium
                    </h3>

                    <div style={{ marginBottom: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span className="pricing-plan-price" style={{
                          fontFamily: '"Dmserifdisplay Regular", serif',
                          fontSize: '48px',
                          fontWeight: 400,
                          lineHeight: '50px',
                          color: '#121212'
                        }}>
                          £299
                        </span>
                        <span className="pricing-plan-period" style={{
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#121212'
                        }}>
                          /quarter
                        </span>
                      </div>

                      <p style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#666',
                        margin: '4px 0 8px 0',
                        textAlign: 'center'
                      }}>
                        +VAT
                      </p>

                      <p className="pricing-plan-subtitle" style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#666',
                        marginTop: '8px',
                        margin: '8px 0 0 0'
                      }}>
                        Invite up to 5 team members included
                      </p>
                    </div>

                    <a
                      href="https://perfect-afternoon-22.authkit.app/sign-up"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pricing-plan-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '48px',
                        backgroundColor: 'transparent',
                        color: '#121212',
                        border: '1px solid #121212',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      Sign up
                    </a>
                  </div>

                  {/* Premium+ Plan Header */}
                  <div className="pricing-plan-header premium-plus" style={{
                    backgroundColor: '#E8F0FE',
                    borderRadius: '24px 24px 0 0',
                    padding: '32px 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '320px'
                  }}>
                    <h3 className="pricing-plan-title" style={{
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#121212',
                      marginBottom: '24px',
                      margin: '0 0 24px 0'
                    }}>
                      Premium +
                    </h3>

                    <div style={{ marginBottom: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <span className="pricing-plan-price" style={{
                          fontFamily: '"Dmserifdisplay Regular", serif',
                          fontSize: '48px',
                          fontWeight: 400,
                          lineHeight: '50px',
                          color: '#121212'
                        }}>
                          £990
                        </span>
                        <span className="pricing-plan-period" style={{
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                        fontWeight: 700,
                          color: '#121212'
                        }}>
                          /yr
                        </span>
                      </div>

                      <p style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#121212',
                        margin: '4px 0 8px 0',
                        textAlign: 'center'
                      }}>
                        +VAT
                      </p>

                      <p className="pricing-plan-subtitle" style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#121212',
                        marginTop: '8px',
                        margin: '8px 0 0 0'
                      }}>
                        Get two months for free
                      </p>
                    </div>

                    <a
                      href="https://perfect-afternoon-22.authkit.app/sign-up"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pricing-plan-button"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '48px',
                        backgroundColor: '#000000',
                        color: 'white',
                        border: 'none',
                        borderRadius: '24px',
                        textDecoration: 'none',
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      Sign up
                    </a>
                  </div>
                </div>

                {/* Comparison Rows */}
                <div className="pricing-comparison-rows">
                  {comparisonData.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      {/* Category Header Row */}
                      <div className="pricing-category-row" style={{
                        display: 'grid',
                        gridTemplateColumns: '280px 280px 280px 296px',
                        gap: '0px',
                        justifyContent: 'center',
                        width: '100%',
                        borderTop: '1px solid #E5E5E5'
                      }}>
                        <div className="pricing-category-header" style={{
                          padding: '20px 24px',
                          fontFamily: '"Opensans Bold", sans-serif',
                          fontSize: '20px',
                          fontWeight: 700,
                          lineHeight: '28px',
                          color: '#121212',
                          backgroundColor: 'transparent',
                          borderTop: '1px solid #E5E5E5'
                        }}>
                          {category.category}
                          {(category as any).subtitle && (
                            <div style={{
                              fontFamily: '"Open Sans Medium", sans-serif',
                              fontSize: '14px',
                              fontWeight: 400,
                              fontStyle: 'italic',
                              lineHeight: '20px',
                              color: '#6B7280',
                              marginTop: '4px'
                            }}>
                              {(category as any).subtitle}
                            </div>
                          )}
                        </div>
                        <div style={{ backgroundColor: 'transparent', borderTop: '1px solid #E5E5E5' }}></div>
                        <div style={{ backgroundColor: 'transparent', borderTop: '1px solid #E5E5E5' }}></div>
                        <div style={{
                          backgroundColor: '#E8F0FE',
                          borderTop: '1px solid #E5E5E5'
                        }}></div>
                      </div>

                      {/* Feature Rows */}
                      {category.rows.map((row, rowIndex) => (
                        <div key={rowIndex} className="pricing-feature-row" style={{
                          display: 'grid',
                          gridTemplateColumns: '280px 280px 280px 296px',
                          gap: '0px',
                          justifyContent: 'center',
                          width: '100%',
                          backgroundColor: 'transparent',
                          borderRadius: '0'
                        }}>
                          <div className="pricing-feature-label" style={{
                            padding: '16px 24px',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            color: '#121212',
                            backgroundColor: 'transparent',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px'
                          }}>
                            <span>{row.feature}</span>
                            {(row.feature === 'Price' || row.feature === 'Pack pricing' || row.feature === 'Extra member discount on every pack') && (
                              <button
                                type="button"
                                aria-label={`See ${row.feature} in Credits`}
                                onClick={() => {
                                  setPricingView('Credits');
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  width: '24px',
                                  height: '24px',
                                  borderRadius: '50%',
                                  backgroundColor: '#121212',
                                  color: '#FFFFFF',
                                  border: 'none',
                                  cursor: 'pointer',
                                  padding: 0,
                                  flexShrink: 0
                                }}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="7" y1="17" x2="17" y2="7" />
                                  <polyline points="7 7 17 7 17 17" />
                                </svg>
                              </button>
                            )}
                          </div>
                          <div className="pricing-feature-value" style={{
                            padding: '16px 24px',
                            textAlign: 'center',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '16px',
                            fontWeight: 500,
                            color: '#121212',
                            backgroundColor: 'transparent',
                            ...(row.feature === 'Number of Users' && {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            })
                          }}>
                            {row.basic}
                          </div>
                          <div className="pricing-feature-value" style={{
                            padding: '16px 24px',
                            textAlign: 'center',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '16px',
                            fontWeight: (row as any).bold ? 700 : 500,
                            color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : '#121212',
                            backgroundColor: 'transparent',
                            ...(row.feature === 'Number of Users' && {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            })
                          }}>
                            {row.premium}
                          </div>
                          <div className="pricing-feature-value premium-plus" style={{
                            padding: '16px 24px',
                            textAlign: 'center',
                            fontFamily: '"Opensans Medium", sans-serif',
                            fontSize: '16px',
                            fontWeight: (row as any).bold ? 700 : 500,
                            color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : '#121212',
                            backgroundColor: '#E8F0FE',
                            borderRadius: categoryIndex === comparisonData.length - 1 && rowIndex === category.rows.length - 1 ? '0 0 24px 24px' : '0',
                            ...(row.feature === 'Number of Users' && {
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            })
                          }}>
                            {row.premiumPlus}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>}
        </>
        )}

        <TestimonialsSection />

        <section style={{
          backgroundColor: '#F4EEE4',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}>
          <div className="padding-global">
            <div className="container-large">
              <h2 style={{
                fontFamily: '"Dmserifdisplay Regular", sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '60px',
                lineHeight: '63px',
                color: 'rgb(18, 18, 18)',
                textAlign: 'left',
                marginBottom: '48px'
              }}>
                Have questions?
              </h2>

              <div style={{
                backgroundColor: '#FFFEFB',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {faqData.map((faq, index) => (
                  <div key={index} style={{
                    borderBottom: index < faqData.length - 1 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: '100%',
                        padding: '24px 32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <h3 style={{
                        fontFamily: '"Dmserifdisplay Regular", sans-serif',
                        fontWeight: 400,
                        fontSize: '26px',
                        lineHeight: '27px',
                        color: 'rgb(18, 18, 18)',
                        margin: '0',
                        flex: 1
                      }}>
                        {faq.question}
                      </h3>
                      <div style={{
                        marginLeft: '16px',
                        flexShrink: 0
                      }}>
                        {openAccordion === index ? (
                          <ChevronUp size={24} color="rgb(18, 18, 18)" />
                        ) : (
                          <ChevronDown size={24} color="rgb(18, 18, 18)" />
                        )}
                      </div>
                    </button>

                    {openAccordion === index && (
                      <div style={{
                        padding: '0 32px 24px 32px'
                      }}>
                        <p style={{
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(45, 45, 45)',
                          margin: '0',
                          textAlign: 'left'
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PlatformSection
          title="Get your legals in order"
          description="Sign up to our platform to streamline your legal tasks, get personalised step-by-step guidance, on-demand access to lawyers and access a wide range of templates and resources"
          imageSrc="/images/Frame-2131328690.svg"
          imageAlt=""
          imageRight={true}
          noRadius={true}
          primaryButtonText="Sign up for free"
          primaryButtonLink="https://perfect-afternoon-22.authkit.app/sign-up"
          customHeadingClass="legals-order-heading"
          customDescriptionClass="legals-order-description"
          customSectionClass="legals-order-section"
        />

        <PartnersSection
          title="We partner with the best startup accelerators and venture firms"
          customHeadingStyle={{
            fontSize: '33px',
            marginTop: '-12px'
          }}
        />
      </main>

      <Footer />
      <CookieConsent />

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 40px !important;
            line-height: 44px !important;
          }
          
          h2 {
            font-size: 32px !important;
            line-height: 36px !important;
          }
          
          .container-large {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          /* Mobile pricing table - keep table format but make more compact */
          .pricing-grid-headers {
            grid-template-columns: 120px 120px 120px 120px !important;
            gap: 4px !important;
          }
          
          .pricing-plan-header {
            padding: 12px 8px !important;
            min-height: 200px !important;
          }
          
          .pricing-plan-title {
            font-size: 12px !important;
            margin-bottom: 8px !important;
          }
          
          .pricing-plan-price {
            font-size: 24px !important;
            line-height: 28px !important;
          }
          
          .pricing-plan-period {
            font-size: 12px !important;
          }
          
          .pricing-plan-subtitle {
            font-size: 10px !important;
            margin-top: 4px !important;
          }
          
          .pricing-plan-button {
            height: 32px !important;
            font-size: 10px !important;
            padding: 0 8px !important;
          }
          
          .pricing-category-row,
          .pricing-feature-row {
            grid-template-columns: 120px 120px 120px 120px !important;
            gap: 4px !important;
          }
          
          .pricing-category-header {
            padding: 8px 6px !important;
            font-size: 12px !important;
            line-height: 14px !important;
          }
          
          .pricing-feature-label {
            padding: 8px 6px !important;
            font-size: 10px !important;
            text-align: center !important;
          }
          
          .pricing-feature-value {
            padding: 8px 4px !important;
            font-size: 9px !important;
            text-align: center !important;
            line-height: 12px !important;
          }
          
          .pricing-feature-value.premium-plus {
            background-color: #E8F0FE !important;
            color: #121212 !important;
          }
          
          /* Mobile spacing adjustments */
          section {
            padding-top: 60px !important;
            padding-bottom: 32px !important;
          }
          
          h2 {
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ExplorePricingPage;
