import React from 'react';
import { useInView } from 'react-intersection-observer';
import patriciaWingImage from '@/assets/patricia-wing-vision.png';

const LawFirmsVision = () => {
  const { ref: paragraph1Ref, inView: paragraph1InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: paragraph2Ref, inView: paragraph2InView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: founderRef, inView: founderInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="vision-section">
      <div className="vision-wrapper">
        <div className="vision-container">
          {/* Heading - top center */}
          <h2 className="vision-heading">
            The Vision
          </h2>

          {/* Content row */}
          <div className="vision-content-row">
            {/* Image - bottom-left corner */}
            <div className="vision-image-container">
              <img 
                src={(patriciaWingImage as any).src || patriciaWingImage} 
                alt="Patricia Wing, Founder & CEO" 
                className="vision-image"
              />
            </div>

            {/* Content */}
            <div className="vision-text-content">
              <p 
                ref={paragraph1Ref}
                className={`vision-paragraph vision-animate ${paragraph1InView ? 'vision-animate-visible' : ''}`}
              >
                The legal world wasn't built for startups. It was built for institutions, at
                institutional pace. But the world has changed. Businesses are being
                launched, scaled, and sold faster than ever before. SuLe is our answer
                to this shift, a vision of legal that's intelligent, intuitive, and in sync with
                the way modern companies operate. Where lawyers focus on complex
                strategy, not chasing documents. Where founders can get trusted
                support without delay. Where venture backers and portfolio companies
                speak the same legal language.
              </p>

              <p 
                ref={paragraph2Ref}
                className={`vision-paragraph vision-animate ${paragraph2InView ? 'vision-animate-visible' : ''}`}
                style={{ transitionDelay: '0.1s' }}
              >
                We're not just building a platform. We're laying the foundation for a
                smarter, scalable legal system. One that keeps up, drives growth and
                empowers those involved. We work hand in hand with law firms,
                founders, and funds to deliver legal support that scales with ambition.
              </p>

              <div 
                ref={founderRef}
                className={`vision-founder vision-animate ${founderInView ? 'vision-animate-visible' : ''}`}
                style={{ transitionDelay: '0.2s' }}
              >
                <p className="vision-founder-name">
                  Patricia Wing
                </p>
                <p className="vision-founder-title">
                  Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .vision-section {
          padding: 80px 0;
          background-color: #FFFEFB;
        }
        
        .vision-wrapper {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }
        
        .vision-container {
          background-color: #FCF9F4;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: clamp(500px, 50vw, 672px);
          overflow: hidden;
        }
        
        .vision-heading {
          font-family: "Hedvig Letters Serif", serif;
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 400;
          color: #1C1C1C;
          text-align: center;
          padding: clamp(32px, 4vw, 48px) 0 clamp(24px, 3vw, 32px);
          margin: 0;
        }
        
        .vision-content-row {
          display: flex;
          gap: clamp(24px, 4vw, 48px);
          align-items: flex-end;
          flex: 1;
          padding-right: clamp(24px, 5vw, 64px);
        }
        
        .vision-image-container {
          width: clamp(320px, 42vw, 546px);
          height: clamp(300px, 40vw, 518px);
          border-radius: 0 4px 0 0;
          flex-shrink: 0;
          overflow: hidden;
        }
        
        .vision-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }
        
        .vision-text-content {
          flex: 1;
          align-self: flex-start;
          padding-top: 24px;
        }
        
        .vision-paragraph {
          font-family: Geist, sans-serif;
          font-size: clamp(15px, 1.8vw, 17px);
          font-weight: 400;
          color: #1C1C1C;
          line-height: 1.7;
          margin: 0 0 24px 0;
        }
        
        /* Scroll animation styles */
        .vision-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        
        .vision-animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .vision-founder {
          margin-top: 0;
        }
        
        .vision-founder-name {
          font-family: Geist, sans-serif;
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 600;
          color: #1C1C1C;
          margin: 0 0 4px 0;
        }
        
        .vision-founder-title {
          font-family: Geist, sans-serif;
          font-size: clamp(14px, 1.6vw, 16px);
          font-weight: 400;
          color: #1C1C1C;
          margin: 0;
        }
        
        /* Tablet breakpoint */
        @media (max-width: 1024px) {
          .vision-content-row {
            flex-direction: column;
            align-items: flex-start;
            padding: 0 24px 0 24px;
          }
          
          .vision-text-content {
            order: 1;
            padding-top: 0;
          }
          
          .vision-image-container {
            order: 2;
            width: clamp(280px, 70vw, 400px);
            height: clamp(260px, 65vw, 380px);
            border-radius: 4px 4px 0 0;
            margin-top: 24px;
          }
        }
        
        /* Mobile breakpoint */
        @media (max-width: 768px) {
          .vision-section {
            padding: 48px 0 80px;
          }
          
          .vision-wrapper {
            padding: 0 16px;
          }
          
          .vision-container {
            min-height: auto;
            border-radius: 12px;
          }
          
          .vision-heading {
            font-size: 36px;
            padding: 32px 24px 24px;
          }
          
          .vision-content-row {
            flex-direction: column;
            align-items: center;
            padding: 0 24px;
            gap: 32px;
          }
          
          .vision-text-content {
            order: 1;
            padding-top: 0;
          }
          
          .vision-paragraph {
            font-size: 16px;
            line-height: 1.65;
            margin-bottom: 20px;
          }
          
          .vision-paragraph-underline {
            margin-bottom: 28px;
          }
          
          .vision-founder-name {
            font-size: 18px;
          }
          
          .vision-founder-title {
            font-size: 14px;
          }
          
          .vision-image-container {
            order: 2;
            width: calc(100% - 32px);
            height: auto;
            aspect-ratio: 1 / 1;
            max-height: 320px;
            border-radius: 4px;
            margin: 0 16px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default LawFirmsVision;
