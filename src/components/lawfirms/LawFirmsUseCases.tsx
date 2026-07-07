"use client";

import React, { useState, useEffect } from 'react';
import card1Video from '@/assets/lawfirms/card1.mp4';
import card2Video from '@/assets/lawfirms/card2.mp4';
import card3Video from '@/assets/lawfirms/card3.mp4';

const useCases = [
  {
    title: 'Import company details automatically',
    description: "Prefill your client's company information from Companies House so the matter starts from verified data.",
    video: card1Video
  },
  {
    title: 'Workflows ready for review',
    description: 'Key answers are prefilled from Companies House, the term sheet, and the cap table, so associates validate instead of retyping.',
    video: card2Video
  },
  {
    title: 'Generate and Download documents from your precedent',
    description: "Create BVCA, ASA, and CLN packs using your firm's templates, with deal data carried through consistently.",
    video: card3Video
  }
];

const LawFirmsUseCases = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section style={{
      backgroundColor: '#FFFEFC',
      paddingTop: '80px',
      paddingBottom: '80px',
    }}>
      <div className="padding-global">
        <div className="container-large" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Section Title */}
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: '1.2',
            color: '#1C1C1C',
            marginBottom: '48px',
            fontWeight: 400,
            textAlign: 'center',
          }}>
            {isMobile ? 'How Law Firms Use Us' : 'How Law Firms Use SuLe Venture Hub'}
          </h2>

          {/* Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }} className="law-firms-cards-grid">
            {useCases.map((useCase, index) => (
              <div key={index} style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Video or Placeholder */}
                {useCase.video ? (
                  <video
                    src={useCase.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      aspectRatio: '4 / 5',
                      objectFit: 'cover',
                      borderRadius: '4px',
                      marginBottom: '24px',
                    }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 5',
                    backgroundColor: '#F4EEE4',
                    borderRadius: '4px',
                    marginBottom: '24px',
                  }} />
                )}

                {/* Card Title */}
                <h3 className="law-firms-card-title" style={{
                  fontFamily: '"Hedvig Letters Serif", serif',
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  lineHeight: '1.3',
                  color: '#1C1C1C',
                  marginBottom: '12px',
                  fontWeight: 400,
                  minHeight: '60px',
                }}>
                  {useCase.title}
                </h3>

                {/* Card Description */}
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  lineHeight: '1.6',
                  color: '#5A5A5A',
                  fontWeight: 400,
                  margin: 0,
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .law-firms-cards-grid {
            grid-template-columns: 1fr !important;
            gap: 68px !important;
          }
          .law-firms-card-title {
            font-size: 28px !important;
            min-height: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LawFirmsUseCases;
