"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import captable1 from '@/assets/lawfirms/captable1.svg';
import captable2 from '@/assets/lawfirms/captable2.svg';
import captable3 from '@/assets/lawfirms/captable3.png';
import mobilcap1 from '@/assets/lawfirms/mobilcap1.svg';
import mobilcap2 from '@/assets/lawfirms/mobilcap2.svg';
import mobilcap3 from '@/assets/lawfirms/mobilcap3.svg';
import LazyImage, { preloadImages, isImageCached, preloadImage } from './LazyImage';

const slides = [
  {
    title: 'Cap table ready in minutes',
    description: 'Import from Excel or Companies House, then move straight into round modelling.',
    image: captable1,
    mobileImage: mobilcap1
  },
  {
    title: 'Issue shares. Convert notes. Create the option pool.',
    description: 'Model the funding round in one place and keep issued and fully-diluted ownership clear as terms change.',
    image: captable2,
    mobileImage: mobilcap2
  },
  {
    title: 'Export the cap table and share register.',
    description: 'Have a fully ready cap table to share without the manual excel inputs.',
    image: captable3,
    mobileImage: mobilcap3
  }
];

const SLIDE_DURATION = 5000;
const TRANSITION_DURATION = 600;

const LawFirmsCapTable = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [displaySlide, setDisplaySlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesReady, setImagesReady] = useState(false);
  const [enableTransition, setEnableTransition] = useState(true);
  const isTransitioningRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all images on mount
  useEffect(() => {
    const allImages = slides.flatMap(slide => [slide.image, slide.mobileImage]);
    preloadImages(allImages).then(() => {
      setImagesReady(true);
    });
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const changeSlide = useCallback(async (newIndex: number) => {
    if (isTransitioningRef.current) return;
    
    const targetSlide = slides[newIndex];
    const targetImage = isMobile && targetSlide.mobileImage ? targetSlide.mobileImage : targetSlide.image;
    
    if (!isImageCached(targetImage)) {
      await preloadImage(targetImage);
    }
    
    isTransitioningRef.current = true;
    setAnimationKey((prev) => prev + 1);
    
    // Preload the next slide in background
    const nextIndex = (newIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];
    const nextImage = isMobile && nextSlide.mobileImage ? nextSlide.mobileImage : nextSlide.image;
    preloadImage(nextImage);
    
    // If going from last slide to first, animate to the clone first
    if (activeSlide === slides.length - 1 && newIndex === 0) {
      setEnableTransition(true);
      setDisplaySlide(slides.length); // Move to clone position
      
      setTimeout(() => {
        // Disable transition, jump to real first slide
        setEnableTransition(false);
        setDisplaySlide(0);
        setActiveSlide(0);
        
        // Re-enable transition after a frame
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setEnableTransition(true);
            isTransitioningRef.current = false;
          });
        });
      }, TRANSITION_DURATION);
    } else {
      setEnableTransition(true);
      setDisplaySlide(newIndex);
      setActiveSlide(newIndex);
      
      setTimeout(() => {
        isTransitioningRef.current = false;
      }, TRANSITION_DURATION);
    }
  }, [activeSlide, isMobile]);

  const goToNextSlide = useCallback(() => {
    const nextIndex = (activeSlide + 1) % slides.length;
    changeSlide(nextIndex);
  }, [activeSlide, changeSlide]);

  const handleSlideClick = (index: number) => {
    if (index === activeSlide) return;
    changeSlide(index);
  };

  // Auto-advance timer
  useEffect(() => {
    if (!imagesReady) return;
    
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNextSlide, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [animationKey, goToNextSlide, imagesReady]);

  const renderSlide = (slideIndex: number) => {
    const slide = slides[slideIndex];
    const imageSrc = isMobile && slide.mobileImage ? slide.mobileImage : slide.image;
    
    return (
      <div
        key={slideIndex}
        className="cap-table-slide"
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '0',
          width: '100%',
          flexShrink: 0,
        }}
      >
        {/* Text Content */}
        <div 
          className="cap-table-text-container" 
          style={{
            backgroundColor: '#FCF9F4',
            padding: isMobile ? '24px 20px' : '60px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            order: isMobile ? 1 : 0,
          }}
        >
          <h3 style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(24px, 3vw, 32px)',
            lineHeight: '1.2',
            color: '#1C1C1C',
            marginBottom: '16px',
            fontWeight: 400,
          }}>
            {slide.title}
          </h3>
          <p style={{
            fontFamily: '"Geist", sans-serif',
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            lineHeight: '1.6',
            color: '#5A5A5A',
            fontWeight: 400,
            margin: 0,
            maxWidth: '400px',
          }}>
            {slide.description}
          </p>
        </div>

        {/* Image Content */}
        <div
          className="cap-table-image-container"
          style={{
            backgroundColor: slideIndex === 2 ? 'transparent' : '#E6E9E7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            order: isMobile ? 2 : 0,
          }}
        >
          <LazyImage
            src={imageSrc}
            alt={slide.title}
            className="cap-table-slide-image object-cover"
            style={{
              width: '100%',
              height: '100%',
              objectFit: slideIndex === 2 ? 'contain' : 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <section style={{
      backgroundColor: '#FFFEFC',
      paddingTop: '80px',
      paddingBottom: '80px',
    }}>
      <div className="padding-global">
        <div className="container-large" style={{ 
          maxWidth: '1400px', 
          margin: '0 auto',
          width: '100%'
        }}>
          {/* Section Title */}
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: '1.2',
            color: '#1C1C1C',
            marginBottom: '32px',
            fontWeight: 400,
            textAlign: 'center',
          }}>
            Cap Table
          </h2>

          {/* Pill Indicators */}
          <div className="cap-table-pills" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '48px',
          }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                style={{
                  position: 'relative',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  border: 'none',
                  backgroundColor: '#1C1C1C',
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                {activeSlide === index && (
                  <span
                    key={`progress-${animationKey}`}
                    style={{
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      right: '2px',
                      bottom: '2px',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '100px',
                      zIndex: 1,
                      clipPath: 'inset(0 100% 0 0 round 100px)',
                      animation: `pillFill ${SLIDE_DURATION}ms linear forwards`,
                      pointerEvents: 'none',
                    }}
                  />
                )}
                <span style={{
                  position: 'relative',
                  zIndex: 2,
                  color: '#FFFFFF',
                  pointerEvents: 'none',
                }}>
                  {index === 0 ? 'Quick Setup' : index === 1 ? 'Model Round' : 'Export Ready'}
                </span>
                {activeSlide === index && (
                  <span
                    key={`text-overlay-${animationKey}`}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#1C1C1C',
                      zIndex: 3,
                      clipPath: 'inset(0 100% 0 0)',
                      animation: `textReveal ${SLIDE_DURATION}ms linear forwards`,
                      pointerEvents: 'none',
                    }}
                  >
                    {index === 0 ? 'Quick Setup' : index === 1 ? 'Model Round' : 'Export Ready'}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Carousel Container */}
          <div 
            className="cap-table-carousel-container" 
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {/* Sliding Track - All slides in a row + clone of first slide at end */}
            <div
              className="cap-table-track"
              style={{
                display: 'flex',
                width: '100%',
                transform: `translate3d(-${displaySlide * 100}%, 0, 0)`,
                transition: enableTransition ? `transform ${TRANSITION_DURATION}ms cubic-bezier(0.25, 0.1, 0.25, 1)` : 'none',
                willChange: 'transform',
              }}
            >
              {slides.map((_, index) => renderSlide(index))}
              {/* Clone of first slide for seamless loop */}
              {renderSlide(0)}
            </div>
          </div>

          {/* Mobile Dot Pagination */}
          <div className="cap-table-dots" style={{
            display: 'none',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            marginTop: '24px',
          }}>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                style={{
                  padding: 0,
                  border: 'none',
                  backgroundColor: activeSlide === index ? '#1C1C1C' : '#BEBEBE',
                  borderRadius: '100px',
                  width: activeSlide === index ? '40px' : '12px',
                  height: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pillFill {
          from {
            clip-path: inset(0 100% 0 0 round 100px);
          }
          to {
            clip-path: inset(0 0% 0 0 round 100px);
          }
        }
        
        @keyframes textReveal {
          from {
            clip-path: inset(0 100% 0 0);
          }
          to {
            clip-path: inset(0 0% 0 0);
          }
        }
        
        .cap-table-carousel-container {
          min-height: clamp(350px, 40vw, 500px);
        }
        
        .cap-table-image-container {
          min-height: clamp(350px, 40vw, 500px);
        }
        
        .cap-table-text-container {
          min-height: clamp(350px, 40vw, 500px);
        }
        
        @media (max-width: 1200px) {
          .cap-table-text-container {
            padding: 40px 32px !important;
          }
        }
        
        @media (max-width: 1024px) {
          .cap-table-carousel-container {
            min-height: clamp(300px, 35vw, 400px);
          }
          .cap-table-image-container {
            min-height: clamp(300px, 35vw, 400px);
          }
          .cap-table-text-container {
            min-height: clamp(300px, 35vw, 400px);
            padding: 32px 24px !important;
          }
        }
        
        @media (max-width: 768px) {
          .cap-table-pills {
            display: none !important;
          }
          .cap-table-dots {
            display: flex !important;
          }
          .cap-table-slide {
            grid-template-columns: 1fr !important;
          }
          .cap-table-carousel-container {
            min-height: auto !important;
          }
          .cap-table-image-container {
            min-height: auto !important;
            aspect-ratio: 361 / 322;
          }
          .cap-table-text-container {
            min-height: auto !important;
            aspect-ratio: 361 / 322;
          }
          .cap-table-slide-image {
            object-fit: cover !important;
            width: 100% !important;
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LawFirmsCapTable;
