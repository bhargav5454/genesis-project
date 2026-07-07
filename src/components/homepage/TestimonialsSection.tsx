"use client";

import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

interface Testimonial {
  content: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    content: "SuLe's lawyers are extremely hardworking, knowledgeable about the startup world and dedicated to helping young startups grow. They go above and beyond! Their communication is amazing, they're never difficult to get hold of and always reply promptly. SuLe is very reasonably priced and works with you to help you find an option which is best for you. I am so glad I found them!",
    authorName: "Adam van Loen",
    authorPosition: "Founder, Hitchwise Limited",
    authorImage: "/lovable-uploads/a158a56c-bb27-4bce-ad96-651b9c923593.png",
    featured: true
  },
  {
    content: "Your knowledge, advice and approach was amazing. You are exactly who I enjoy working with and not what I expected from big scary lawyer.",
    authorName: "David Cullingham",
    authorPosition: "Founder, Buoogle"
  },
  {
    content: "Working with SuLe has ensured we continue to put in place the right documentation and contracts to set a solid foundation for the business' future growth. Having initially tried an online legal tech solution that provided zero advice and gave us no confidence, the switch to SuLe was really refreshing. SuLe are financially accessible, personable and work super efficiently, covering everything a fast-moving start-up needs.",
    authorName: "Chris Purdie",
    authorPosition: "Founder, Receiptable",
    authorImage: "/lovable-uploads/f7bff5b7-b525-4135-b8e4-49b9edc6852a.png"
  },
  {
    content: "We started working with SuLe lawyers this year as our legal partner. To date they have been extremely informative with the help that they have been able to provide us for our start up preparations. The process has been smooth and efficient and we look forward to continue working with them.",
    authorName: "Nadine Campbell",
    authorPosition: "Founder, Pitch Black Ventures",
    authorImage: "/lovable-uploads/903887e4-0437-4201-b511-350aa8f823f2.png"
  },
  {
    content: "We found SuLe when we were looking to work with a company that could guide us through some of our legal issues and provide affordable legal support. Would recommend for any start-up just starting out!",
    authorName: "Bradley Collins",
    authorPosition: "Founder, LegalTechTalk",
    authorImage: "/lovable-uploads/ffe140a0-4acd-4989-8a0f-62c4fa4f0ae9.png",
    featured: true
  }
];

const TestimonialsSection = () => {
  const splideRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(testimonials.length);
  const [splideInstance, setSplideInstance] = useState<any>(null);

  useEffect(() => {
    // Function to apply peek effect consistently
    const applyPeekEffect = () => {
      if (splideRef.current) {
        const list = splideRef.current.querySelector('.splide__list');
        if (list) {
          // Apply consistent peek offset to align with heading
          (list as HTMLElement).style.transform = 'translateX(0)';
        }
      }
    };

    // Initialize the testimonial slider
    const initSlider = () => {
      if (splideRef.current) {
        try {
          const instance = new Splide(splideRef.current, {
            perPage: 1,
            perMove: 1,
            type: 'loop', // Enable circular/looped behavior
            gap: '24px', 
            arrows: false,
            pagination: false,
            speed: 600,
            dragAngleThreshold: 80,
            autoWidth: false,
            rewind: false, // Disable rewinding as we're using loop type
            waitForTransition: true,
            updateOnMove: true,
            trimSpace: false, // Allow empty space for "peek" effect
            start: 0,
            focus: 0,
            padding: { 
              left: '24px', // Reduced from 48px to align with heading
              right: '24px'
            },
            breakpoints: {
              991: {
                perPage: 1,
                gap: '24px',
                padding: { left: '24px', right: '24px' }, // Adjusted to align with heading
              },
              767: {
                perPage: 1,
                gap: '24px',
                padding: { left: '24px', right: '24px' }, // Adjusted to align with heading
              },
              479: {
                perPage: 1,
                gap: '16px',
                padding: { left: '24px', right: '24px' }, // Adjusted to align with heading
              }
            }
          });

          instance.on('moved', (newIndex: number) => {
            setCurrentSlide(newIndex);
          });

          // Apply peek effect on initial load
          instance.on('ready', () => {
            // Ensure all testimonial cards have the same width
            const slides = splideRef.current?.querySelectorAll('.testimonial-slide');
            if (slides && slides.length > 0) {
              // Set a fixed width for all slides
              const fixedWidth = '550px'; // This width matches the featured card
              slides.forEach((slide) => {
                (slide as HTMLElement).style.width = fixedWidth;
              });
            }
            
            // Apply the peek effect
            applyPeekEffect();
            
            // Set the initial slide position correctly
            setTimeout(() => {
              applyPeekEffect();
            }, 50);
          });

          // Re-apply peek effect after refresh
          instance.on('refresh', () => {
            applyPeekEffect();
          });

          // Fix for proper slide movement
          instance.on('move', () => {
            // Allow normal slide movement without forcing peek effect during transition
          });

          instance.mount();
          setSplideInstance(instance);
          setTotalSlides(instance.length);
        } catch (e) {
          console.error('Error initializing Splide:', e);
        }
      }
    };
    
    // Initialize immediately since Splide is imported
    initSlider();
    
    return () => {
      // Clean up Splide instance
      if (splideInstance) {
        splideInstance.destroy();
      }
    };
  }, []);

  // Navigation handlers for proper sequential movement
  const handlePrev = () => {
    if (splideInstance) {
      splideInstance.go('<');
    }
  };

  const handleNext = () => {
    if (splideInstance) {
      splideInstance.go('>');
    }
  };

  return (
    <div id="testimonials" className="section_testimonials">
      <div className="padding-global">
        <div className="padding-section-medium" style={{ paddingTop: '1rem' }}>
          <div className="container-large">
            <div className="testimonials_component">
              <h2 className="testimonial-heading">What our startups and SMEs say</h2>
              
              <div className="testimonial-slider slider2 splide" ref={splideRef}>
                <div className="splide__track">
                  <div className="splide__list">
                    {testimonials.map((testimonial, index) => (
                      <div className="splide__slide testimonial-slide" key={index}>
                        <div className={`testimonial-card ${testimonial.featured ? 'featured-testimonial' : ''}`}>
                          <div className="testimonial-content">
                            {testimonial.content}
                          </div>
                          <div className="testimonial-author">
                            {testimonial.authorImage && (
                              <img 
                                src={testimonial.authorImage} 
                                alt={`${testimonial.authorName}`}
                                className="author-avatar"
                              />
                            )}
                            <div className="testimonial-author-info">
                              <div className="testimonial-author-name">{testimonial.authorName}</div>
                              <div className="testimonial-author-position">{testimonial.authorPosition}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="testimonial-navigation">
                <div className="testimonial-arrows">
                  <button 
                    className="testimonial-arrow testimonial-arrow-left" 
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <button 
                    className="testimonial-arrow testimonial-arrow-right" 
                    onClick={handleNext}
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={24} />
                  </button>
                </div>
                
                <div className="testimonial-dots">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => splideInstance?.go(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
