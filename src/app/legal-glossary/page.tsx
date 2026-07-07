"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import GlossaryCard from '@/components/GlossaryCard';
import LegalsOrderSection from '@/components/LegalsOrderSection';

const LegalGlossaryPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    document.title = 'Legal Glossary | SuLe Hub';
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const alphabet = 'ABCDEFGH'.split('').concat(['I-J-K']).concat('LMNO'.split('').concat(['P-Q-R']).concat('STUVWXYZ'.split('')));

  const glossaryData = {
    A: [
      {
        term: "Assets Under Management",
        definition: "Assets under management (or \"AUM\") is equal to the market value of investments that either an institution or individual manages on behalf of its clients.",
        slug: "assets-under-management"
      }
    ]
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        {/* Header Section */}
        <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="text-align-center">
                <h1 
                  style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontSize: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? '48px' : '80px',
                    lineHeight: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? '52px' : '80px',
                    fontWeight: 400,
                    color: 'rgb(18, 18, 18)',
                    margin: 0,
                    marginBottom: '20px'
                  }}
                >
                  Startup legal jargon.<br />Demystified.
                </h1>
                <p 
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28px',
                    fontWeight: 400,
                    color: 'rgb(102, 102, 102)',
                    margin: 0,
                    marginBottom: '20px'
                  }}
                >
                  Helping you with the knowledge to navigate the legal landscape confidently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alphabet Filter */}
        <section className="section" style={{ paddingTop: '0', paddingBottom: '0', backgroundColor: '#F5FCFF' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="text-align-center" style={{ 
                margin: '0', 
                padding: '40px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '120px'
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                  {alphabet.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => scrollToLetter(letter)}
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: 600,
                        color: 'rgb(45, 45, 45)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        padding: '4px 8px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.textDecoration = 'underline';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.textDecoration = 'none';
                      }}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glossary Content */}
        <section className="section">
          <div className="padding-global">
            <div className="container-large">
              {alphabet.map((letter) => {
                const terms = (glossaryData as any)[letter] || [];
                
                return (
                  <div key={letter} style={{ marginBottom: '60px' }}>
                    <h2 
                      id={`letter-${letter}`}
                      style={{
                        fontFamily: 'DM Serif Display, serif',
                        fontSize: '32px',
                        lineHeight: '34px',
                        fontWeight: 400,
                        color: 'rgb(18, 18, 18)',
                        marginTop: '32px',
                        marginBottom: '32px',
                        textAlign: 'center',
                        padding: '16px',
                        backgroundColor: '#F5FCFF',
                        borderRadius: '8px',
                        border: '1px solid rgba(52, 122, 233, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {letter}
                    </h2>
                    
                    {/* Cards Grid - Updated for left alignment */}
                    <div style={{
                      display: 'flex',
                      flexDirection: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? 'column' : 'row',
                      flexWrap: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? 'nowrap' : 'wrap',
                      gap: '24px',
                      marginBottom: '40px',
                      justifyContent: 'flex-start',
                      alignItems: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? 'center' : 'flex-start'
                    }}>
                      {terms.map((item: any, index: number) => (
                        <GlossaryCard
                          key={index}
                          title={item.term}
                          description={item.definition}
                          slug={item.slug}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Get your legals in order section - exactly as on investment readiness checklist page */}
        <LegalsOrderSection />
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '50px',
            height: '50px',
            backgroundColor: '#336DFF',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            transition: 'opacity 0.3s ease'
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <Footer />
      <CookieConsent />

      <style jsx>{`
        @media (max-width: 1200px) {
          .glossary-cards {
            justify-content: center !important;
          }
        }
        
        @media (max-width: 768px) {
          .glossary-cards {
            flex-direction: column !important;
            align-items: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LegalGlossaryPage;
