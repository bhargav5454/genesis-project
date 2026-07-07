"use client";


import React, { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import LegalsOrderSection from '@/components/LegalsOrderSection';
import { newsPosts } from '@/data/newsData';

const InvestmentReadinessChecklistPage = () => {
  const navigate = useRouter();

  useEffect(() => {
    document.title = 'Free investment readiness checklist';
    
    // Load HubSpot script
    const script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = '//js-eu1.hsforms.net/forms/embed/v2.js';
    script.async = true;
    
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "27012556",
          formId: "879b3687-0ac1-433f-ae9c-308a66364004",
          target: '#hubspot-form-container',
          region: "eu1"
        });
      }
    };
    
    document.head.appendChild(script);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  // Get the 2 most recent news posts
  const recentPosts = useMemo(() => {
    return [...newsPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 2);
  }, []);

  const handleReadMore = (slug: string) => {
    navigate.push(`/news/${slug}`);
  };

  return (
    <div className="page-wrapper investment-readiness-page">
      <Navbar />
      
      <main className="main-wrapper">
        {/* New Hero Section */}
        <section className="section_hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="text-align-center">
                  <div className="max-width-xlarge align-center">
                    <div className="margin-bottom margin-custom1">
                      <h1 
                        className="text-center"
                        style={{
                          fontFamily: 'DM Serif Display, serif',
                          fontSize: '60px',
                          lineHeight: '63px',
                          fontWeight: 400,
                          color: 'rgb(18, 18, 18)'
                        }}
                      >
                        Get investment ready with our<br />
                        Investment Readiness Checklist
                      </h1>
                    </div>
                    <p 
                      className="text-center"
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '18px',
                        lineHeight: '28px',
                        fontWeight: 400,
                        color: 'rgb(45, 45, 45)'
                      }}
                    >
                      Discover the insights to elevate your startup's investment readiness. Our expert legal team, with over 50 years of combined experience, has meticulously crafted this exclusive checklist, unveiling the hidden legal essentials for investment readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="section_investment-form">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="investment_form-component">
                  <div className="investment_form-content">
                    <div className="text-size-regular">Fill out the form so you can download the <strong>investment readiness checklist</strong></div>
                    <div id="hubspot-form-container" style={{ marginTop: '4px' }}></div>
                  </div>
                  <div className="investment_form-image-wrapper">
                    <img src="/images/Free_US_Half_Fold_Brochure_Mockup_2-copy-1-1.png" loading="eager" width="616" alt="" className="investment_form-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Explore our blog section */}
        <section className="section_blog" style={{ backgroundColor: '#F4EEE4' }}>
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="blog_header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                  <div>
                    <h2 
                      style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '48px',
                        lineHeight: '50px',
                        fontWeight: 400,
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '16px'
                      }}
                    >
                      Explore our blog
                    </h2>
                    <p 
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '18px',
                        lineHeight: '28px',
                        fontWeight: 400,
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}
                    >
                      Stay updated with company news, articles, tips, and insights designed to help<br />
                      founders turn their dreams into reality.
                    </p>
                  </div>
                  <a 
                    href="/blog"
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '16px',
                      lineHeight: '24px',
                      fontWeight: 600,
                      color: '#336DFF',
                      border: '2px solid #336DFF',
                      padding: '14px 32px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      flexShrink: 0
                    }}
                  >
                    View all
                  </a>
                </div>
                
                <div className="blog_cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                  {recentPosts.map((post) => (
                    <div key={post.slug} className="blog_card">
                      <img 
                        src={typeof post.image === 'string' ? post.image : post.image?.src}
                        alt={post.title}
                        onClick={() => handleReadMore(post.slug)}
                        style={{ width: '632px', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)' }}
                      />
                      <div 
                        style={{
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(102, 102, 102)',
                          marginBottom: '8px'
                        }}
                      >
                        {post.date} • {post.readTime}
                      </div>
                      <h3 
                        style={{
                          fontFamily: 'DM Serif Display, serif',
                          fontSize: '28px',
                          lineHeight: '34px',
                          fontWeight: 400,
                          color: 'rgb(18, 18, 18)',
                          margin: 0,
                          marginBottom: '16px'
                        }}
                      >
                        {post.title}
                      </h3>
                      <p 
                        style={{
                          fontFamily: 'Open Sans Medium, sans-serif',
                          fontSize: '16px',
                          lineHeight: '21px',
                          fontWeight: 500,
                          color: 'rgb(102, 102, 102)',
                          margin: 0,
                          marginBottom: '16px'
                        }}
                      >
                        {post.subtitle}
                      </p>
                      <button 
                        onClick={() => handleReadMore(post.slug)}
                        style={{
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#336DFF',
                          backgroundColor: 'transparent',
                          border: '2px solid #336DFF',
                          padding: '8px 14px',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Read more <ChevronRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get your legals in order section - exactly as on homepage */}
        <LegalsOrderSection />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default InvestmentReadinessChecklistPage;
