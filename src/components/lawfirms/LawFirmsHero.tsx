import React from 'react';
import heroVideo from '@/assets/lawfirms/hero2.mp4';

const LawFirmsHero = () => {
  return (
    <section className="lawfirms-hero-section" style={{
      backgroundColor: '#FFFEFC',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '32px',
      paddingTop: '120px',
      paddingBottom: '48px',
      minHeight: 'auto',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="padding-global lawfirms-hero-content" style={{ 
        position: 'relative', 
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        paddingTop: '16px',
        paddingBottom: '16px',
        marginBottom: '32px'
      }}>
          <div className="container-large" style={{ 
            maxWidth: '1200px', 
            margin: '0 auto',
            padding: '0 24px'
          }}>
          {/* Content Container - Left Aligned */}
          <div className="lawfirms-hero-text-container" style={{
            maxWidth: '900px',
            marginBottom: '60px',
            marginTop: '10px'
          }}>
            {/* Headline */}
            <h1 className="lawfirms-hero-headline" style={{
              fontFamily: '"Hedvig Letters Serif", serif',
              fontSize: 'clamp(28px, 5vw, 56px)',
              lineHeight: '1.15',
              color: '#1C1C1C',
              marginBottom: '24px',
              fontWeight: 400,
              marginTop: '0',
            }}>
              Take on more venture deals, without compromising quality.
            </h1>

            {/* Supporting Text */}
            <p className="lawfirms-hero-subtext" style={{
              fontFamily: '"Geist", sans-serif',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              lineHeight: '1.6',
              color: '#1C1C1C',
              marginBottom: '36px',
              maxWidth: '600px',
              fontWeight: 400,
            }}>
              Reduce associate drafting time by ~80%, increase number of clients with more capacity and standardise venture deal quality.
            </p>

            {/* CTA Button */}
            <div className="lawfirms-hero-cta-wrapper">
              <a
                href="https://calendly.com/startup-legals/law-firm-demo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '16px 32px',
                  backgroundColor: '#1C1C1C',
                  color: '#FFFFFF',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Book a Demo
              </a>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .lawfirms-hero-section {
                padding-top: 16px !important;
                padding-bottom: 24px !important;
                margin-bottom: 8px !important;
                overflow: visible !important;
              }
              .lawfirms-hero-content {
                padding-top: 0 !important;
                margin-bottom: 16px !important;
              }
              .lawfirms-hero-text-container {
                margin-top: 0 !important;
                margin-bottom: 40px !important;
              }
              .lawfirms-hero-headline {
                margin-top: 0 !important;
                font-size: 36px !important;
                line-height: 1.1 !important;
                margin-bottom: 20px !important;
                font-family: "Hedvig Letters Serif", serif !important;
                font-weight: 400 !important;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
              .lawfirms-hero-subtext {
                font-size: 16px !important;
                line-height: 1.5 !important;
                margin-bottom: 32px !important;
              }
              .lawfirms-hero-cta-wrapper {
                text-align: left;
              }
              .lawfirms-hero-cta-wrapper a {
                padding: 16px 48px !important;
              }
            }
          `}</style>

          {/* Hero Video */}
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              aspectRatio: '16 / 9',
              objectFit: 'cover',
              borderRadius: '16px',
              border: '1px solid #E8E8E8',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default LawFirmsHero;
