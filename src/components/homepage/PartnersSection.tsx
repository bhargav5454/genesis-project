"use client";

import React, { useState, useRef, useEffect } from 'react';

interface PartnersSectionProps {
  title: string;
  customHeadingClass?: string;
  customHeadingStyle?: React.CSSProperties;
}

const PartnersSection = ({ title, customHeadingClass, customHeadingStyle }: PartnersSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const partnerLogos = [
    { src: "/lovable-uploads/43c79b2a-9365-46e9-99df-2644e9087455.png", alt: "Convex Technology" },
    { src: "/lovable-uploads/b844ddbd-1918-4f30-aa14-738cb509820f.png", alt: "Curay" },
    { src: "/lovable-uploads/d97c0747-f090-4022-a811-15353f5d9a67.png", alt: "Partner logo" },
    { src: "/lovable-uploads/b5b49663-4724-424c-abf5-fe495ffe2213.png", alt: "Handshake Partner" },
    { src: "/lovable-uploads/f1bb22ce-14cc-4b3a-a94e-495478dc8ecf.png", alt: "Barclays Eagle Labs" },
    { src: "/lovable-uploads/87b9e04c-8471-47a6-a59c-517458f76076.png", alt: "Byway" },
    { src: "/lovable-uploads/221727fb-3aa4-4209-a83a-29bdc94d192a.png", alt: "Client Fabric" },
    { src: "/lovable-uploads/a530155b-6a03-4a3d-93b4-97145be6c03a.png", alt: "Falco" },
    { src: "/lovable-uploads/6b6b376b-ccce-487e-a94b-b6a949c4f551.png", alt: "Exsel" },
    { src: "/lovable-uploads/9dc972b3-fe69-477d-9e79-f8e0fbf7e35d.png", alt: "Carbon Coyote" },
    { src: "/lovable-uploads/c8838882-e91f-4bda-9315-b4cdfe5bb09b.png", alt: "Circles Health & Wellbeing" },
    { src: "/lovable-uploads/76b1ff7c-c06e-45bb-abcb-206bd5bfc387.png", alt: "Easy Bites" },
    { src: "/lovable-uploads/ba30d177-8fb6-42c6-9462-c810b180cbee.png", alt: "Eslando" },
    { src: "/lovable-uploads/4b77d7fb-45bd-4574-a432-91708412d589.png", alt: "Equati" },
    { src: "/lovable-uploads/f60a8dd9-8a73-409e-8160-3bfdf0747d5e.png", alt: "Altiverse" },
    { src: "/lovable-uploads/109905f3-7470-449d-9a45-cff3e90c4172.png", alt: "Angels Den" },
    { src: "/lovable-uploads/2ac32286-8168-4e20-b658-75e0f6367526.png", alt: "Bren" },
    { src: "/lovable-uploads/4e3ed830-a96b-4cd4-b088-4c772d1cb97b.png", alt: "Fusign42" },
    { src: "/lovable-uploads/df8cb76f-b84a-4eb0-ac71-3c843bcead24.png", alt: "Coco Factory" },
    { src: "/lovable-uploads/6d270eca-29ca-41ff-86ba-c8fef04cf83e.png", alt: "Messiah and Eve" },
    { src: "/lovable-uploads/c4a737ea-dfda-4c53-94bb-7721d1ffba80.png", alt: "Monk" },
    { src: "/lovable-uploads/9299cb0d-4a04-4e6a-83ac-15294ed62a05.png", alt: "Nicholas Sferrazza Agency" },
    { src: "/lovable-uploads/048d4955-2f1b-411e-83c2-ccfbce6fe2f2.png", alt: "OTO" },
    { src: "/lovable-uploads/1498e24a-a65a-47b5-b52b-b2d7c8f847b8.png", alt: "Oxyzn" },
    { src: "/lovable-uploads/c101c5ec-e065-4bd2-b3a4-9aef5902fc27.png", alt: "Pitch Black Ventures" },
    { src: "/lovable-uploads/0f82fd29-1f72-414e-95d2-3552d72bcaa9.png", alt: "Wiser" },
    { src: "/lovable-uploads/132c6643-86af-4347-9942-e0ca637d2eaf.png", alt: "Zak Health" },
    { src: "/lovable-uploads/4de0801d-28e7-404a-91f2-cbf733e6acda.png", alt: "Sustainable Network" },
    { src: "/lovable-uploads/62ef7a4f-2cfd-4b33-b585-d519e72ee741.png", alt: "Libertum" },
    { src: "/lovable-uploads/5bedbf52-0181-47c6-be6f-58a94e1ffd06.png", alt: "Partner Logo" },
    { src: "/lovable-uploads/41f95f56-d90a-4157-aedb-8d0432fa5dff.png", alt: "PTH Venture Studio" },
    { src: "/lovable-uploads/864cd0c7-98df-49e3-8dac-e5cc1dde6e89.png", alt: "Serendipitus" },
    { src: "/lovable-uploads/44df15a1-1338-42d1-8693-50fd1930ea62.png", alt: "Virgin Start" },
    { src: "/lovable-uploads/959861e1-0ee7-4748-b772-d6df2f4aa52c.png", alt: "Vox Imaging Technology" },
    { src: "/lovable-uploads/2070dd4c-e477-4c71-9b02-2162c59ad61b.png", alt: "Hear for School" },
    { src: "/lovable-uploads/2330dcc0-bafa-4fac-b267-654ba62c6e29.png", alt: "LegalTechTalk" },
    { src: "/lovable-uploads/11f66d02-d07d-4e95-ba3d-b35c5b001ac8.png", alt: "Post Carbon Lab" },
    { src: "/lovable-uploads/6008e795-1145-4e2d-b811-bfd39d69b1e4.png", alt: "Round" },
    { src: "/lovable-uploads/447dbb1d-5653-456e-a2b0-6907341c7f46.png", alt: "Hive Founders" },
    { src: "/lovable-uploads/70282875-3ac4-4088-a92b-6aabb8224d30.png", alt: "Receiptable" },
    { src: "/lovable-uploads/8343317b-431d-402a-8895-b866fcb31733.png", alt: "Hitchwise" },
    { src: "/lovable-uploads/80b505c1-4d7e-4ccd-8f60-b9d56fc10efb.png", alt: "Lowr" },
    { src: "/lovable-uploads/2487e4e8-c935-4524-823c-6edb32b6b2a8.png", alt: "Lnf" }
  ];

  // Auto-play functionality
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (!isDragging) {
        setCurrentSlide(prev => (prev + 1) % partnerLogos.length);
      }
    }, 3000); // Auto-advance every 3 seconds

    return () => clearInterval(autoPlayInterval);
  }, [isDragging, partnerLogos.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentSlide < partnerLogos.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (translateX < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
    setTranslateX(0);
  };

  const handleMouseStart = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diffX = startX - currentX;
    setTranslateX(-diffX);
  };

  const handleMouseEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const threshold = 50;
    if (Math.abs(translateX) > threshold) {
      if (translateX > 0 && currentSlide < partnerLogos.length - 1) {
        setCurrentSlide(prev => prev + 1);
      } else if (translateX < 0 && currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
      }
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        handleMouseEnd();
      }
    };

    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, [isDragging]);

  return (
    <>
      {/* Desktop version - hidden on mobile */}
      <section className="section overflow-hidden hidden md:block" style={{ 
        position: 'relative',
        zIndex: 15,
        backgroundColor: '#FFFEFB',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        display: 'none'
      }}>
        <div className="padding-global">
          <div className="container-large" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div className="text-align-center" style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 
                className={`heading-style-h4 ${customHeadingClass || ''}`}
                style={{ 
                  fontFamily: "'DM Serif Display', serif",
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '32px',
                  lineHeight: '34px',
                  color: 'rgb(18, 18, 18)',
                  marginBottom: '0',
                  ...customHeadingStyle
                }}
              >
                {title}
              </h2>
            </div>
            
            {/* Desktop logos display */}
            <div className="logos-display" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4rem',
              flexWrap: 'wrap',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              {partnerLogos.slice(0, 6).map((logo, index) => (
                <div key={index} className="logo-item" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '140px',
                  height: '80px'
                }}>
                  <img 
                    alt={logo.alt} 
                    loading="lazy" 
                    src={logo.src} 
                    style={{
                      maxHeight: '60px',
                      width: 'auto',
                      maxWidth: '180px',
                      opacity: 0.8,
                      transition: 'opacity 0.3s ease',
                      filter: 'grayscale(100%)',
                      objectFit: 'contain'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.filter = 'grayscale(0%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile version - now visible on all screen sizes */}
      <section className="block mobile-partners-section" style={{
        backgroundColor: '#FFFEFB',
        padding: '2rem 1.25rem',
        position: 'relative',
        zIndex: 15
      }}>
        <div className="text-center mb-6">
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: '28px',
            lineHeight: '32px',
            color: 'rgb(18, 18, 18)',
            textAlign: 'center',
            marginBottom: '1.5rem'
          }} className="md:text-[38px]">
            {title}
          </h2>
        </div>
        
        {/* Continuous Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee" style={{
            width: 'max-content',
            animation: 'marquee 120s linear infinite'
          }}>
            {/* First set of logos */}
            {partnerLogos.map((logo, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ margin: '0 100px', minWidth: '160px', height: '100px' }}
              >
                <img 
                  alt={logo.alt} 
                  loading="lazy" 
                  src={logo.src} 
                  style={{
                    maxHeight: '80px',
                    width: 'auto',
                    maxWidth: '240px',
                    opacity: 0.8,
                    filter: 'grayscale(100%)',
                    objectFit: 'contain'
                  }}
                  draggable={false}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((logo, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex justify-center items-center"
                style={{ margin: '0 100px', minWidth: '160px', height: '100px' }}
              >
                <img 
                  alt={logo.alt} 
                  loading="lazy" 
                  src={logo.src} 
                  style={{
                    maxHeight: '80px',
                    width: 'auto',
                    maxWidth: '240px',
                    opacity: 0.8,
                    filter: 'grayscale(100%)',
                    objectFit: 'contain'
                  }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default PartnersSection;
