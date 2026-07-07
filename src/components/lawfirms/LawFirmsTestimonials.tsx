import React from 'react';
import { useInView } from 'react-intersection-observer';
import brownRudnickLogo from '@/assets/lawfirms/brown-rudnick-logo.png';
import quoteMarkSvg from '@/assets/lawfirms/quote-mark.svg';
import neilFosterPhoto from '@/assets/lawfirms/neil-foster.png';

const LawFirmsTestimonials = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });
  return (
    <section style={{
      backgroundColor: '#FFFEFC',
      paddingTop: '40px',
      paddingBottom: '80px',
    }}>
      <div className="padding-global">
        <div className="container-large" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          {/* Section Title */}
          <h2
            ref={titleRef}
            style={{
              fontFamily: '"Hedvig Letters Serif", serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: '1.2',
              color: '#1C1C1C',
              marginBottom: '32px',
              fontWeight: 400,
              textAlign: 'center',
              opacity: titleInView ? 1 : 0,
              transform: titleInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            Testimonials
          </h2>

          {/* Testimonial Card */}
          <div
            ref={cardRef}
            style={{
              backgroundColor: '#1C1C1C',
              borderRadius: '16px',
              padding: 'clamp(32px, 5vw, 48px)',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '40px',
              alignItems: 'start',
              opacity: cardInView ? 1 : 0,
              transform: cardInView ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
            }}
            className="testimonial-card"
          >
            {/* Left Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', height: '100%', justifyContent: 'space-between' }}>
              {/* Logo Container */}
              <div
                className="testimonial-logo"
                style={{
                  backgroundColor: '#DFDFDF',
                  borderRadius: '8px',
                  padding: '12px 20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  width: 'fit-content',
                }}
              >
                <img
                  src={(brownRudnickLogo as any).src || brownRudnickLogo}
                  alt="Brown Rudnick"
                  style={{ height: '20px', width: 'auto' }}
                  className="testimonial-logo-img"
                />
              </div>

              {/* Quote Mark */}
              <img
                src={(quoteMarkSvg as any).src || quoteMarkSvg}
                alt=""
                style={{
                  width: '24px',
                  height: 'auto',
                  marginTop: '0px',
                }}
              />

              {/* Quote Text */}
              <p
                className="testimonial-quote"
                style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  lineHeight: '1.4',
                  color: '#FFFFFF',
                  fontWeight: 400,
                  maxWidth: '650px',
                  marginTop: '-16px',
                }}
              >
                Brown Rudnick is delighted to be working with SuLe to automate first drafts in venture deals. This means that we can increase efficiency in order that early stage companies, with a seed or series A term sheet, can access legal advice that would previously have been too expensive.
              </p>

            </div>

            {/* Right Content - Person Image */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} className="testimonial-person">
              {/* Person Image */}
              <div style={{
                width: '280px',
                height: '280px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}>
                <img
                  src={(neilFosterPhoto as any).src || neilFosterPhoto}
                  alt="Neil Foster"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* Person Info */}
              <div>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '20px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  marginBottom: '4px',
                }}>
                  Neil Foster
                </p>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: '#ABABAB',
                  lineHeight: '1.4',
                }}>
                  Global Chair of Technology<br />
                  Sector at Brown Rudnick LLP
                </p>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 768px) {
              .testimonial-card {
                grid-template-columns: 1fr !important;
                gap: 24px !important;
              }
              .testimonial-logo {
                padding: 8px 16px !important;
              }
              .testimonial-logo-img {
                height: 16px !important;
              }
              .testimonial-quote {
                font-size: 18px !important;
                line-height: 1.5 !important;
              }
              .testimonial-person {
                order: 0;
                align-items: flex-start;
              }
              .testimonial-person > div:first-child {
                width: 200px !important;
                height: 200px !important;
              }
              .testimonial-person > div:last-child {
                text-align: left;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default LawFirmsTestimonials;
