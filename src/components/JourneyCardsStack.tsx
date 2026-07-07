"use client";

import React, { useEffect, useRef, useState } from 'react';

const journeyCards = [
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/672dfeced4912f949d2be91a_Briefcase.svg',
    title: 'Start your business',
    body: 'Most errors are made at the start, avoid this by knowing the way to start properly.',
    rotation: 0,
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ea77f544166c864e1847_Group%201.svg',
    title: 'Get compliant',
    body: 'Understand all the steps needed to get compliant, from GDPR compliance to employment rules.',
    rotation: 2,
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ebcc0a547f003fe65ebb_Group%2011.svg',
    title: 'Protect your IP',
    body: "Ensure you've got everything covered so your most precious assets are protected – your IP.",
    rotation: 4,
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec0e33165ba23373f8ee_People.svg',
    title: 'Build your team',
    body: 'Know how to build your team the right way from the start.',
    rotation: 6,
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec4879faded09b48d683_Plant.svg',
    title: 'Build your business',
    body: "Ready to take on clients but not sure what you need to have in place? We've got you covered.",
    rotation: 8,
  },
  {
    iconUrl: 'https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec714400c1bd005b21a4_Scaling.svg',
    title: 'Raise money',
    body: 'Understand the right steps you should be taking to prepare to raise money.',
    rotation: 10,
  },
];

const documentCards = [
  { title: 'Subscription Agreement' },
  { title: 'Shareholder Agreement' },
  { title: 'Articles of Association' },
  { title: 'Board Minutes' },
  { title: 'Shareholder Resolutions' },
  { title: 'Disclosure Letter' },
].map((d, i) => ({ ...d, rotation: i * 2 }));

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

interface JourneyCardsStackProps {
  cardsOnly?: boolean;
  cards?: { title: string }[];
}

const JourneyCardsStack: React.FC<JourneyCardsStackProps> = ({ cardsOnly = false, cards }) => {
  const activeDocumentCards = (cards && cards.length > 0
    ? cards.map((d, i) => ({ ...d, rotation: i * 2 }))
    : documentCards);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsOnlyRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardProgress, setCardProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      const shouldPin = rect.top <= 0 && rect.bottom > windowHeight;

      if (shouldPin && !isPinned) {
        setIsPinned(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
      } else if (!shouldPin && isPinned && rect.top > 0) {
        setIsPinned(false);
        document.body.style.overflow = '';
        document.body.style.height = '';
        setCurrentCardIndex(0);
        setCardProgress(0);
      }

      if (isPinned) {
        const scrollOffset = Math.abs(rect.top);
        const totalScrollDistance = sectionHeight - windowHeight;
        const overallProgress = Math.min(1, scrollOffset / totalScrollDistance);
        const segmentProgress = overallProgress * 6;
        const newCardIndex = Math.floor(segmentProgress);
        const newCardProgress = segmentProgress - newCardIndex;
        setCurrentCardIndex(Math.min(5, newCardIndex));
        setCardProgress(newCardProgress);

        if (overallProgress >= 1) {
          setIsPinned(false);
          document.body.style.overflow = '';
          document.body.style.height = '';
        }
      }
    };

    if (cardsOnly) return; // cards-only mode uses an interval loop instead
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isPinned, cardsOnly]);

  // Cards-only: pin the page while the card stack cycles
  useEffect(() => {
    if (!cardsOnly) return;
    const el = cardsOnlyRef.current;
    if (!el) return;
    const segments = activeDocumentCards.length - 1;
    let progress = 0;
    let engaged = false;
    let touchY: number | null = null;

    const apply = () => {
      const idx = Math.min(segments, Math.floor(progress));
      setCurrentCardIndex(idx);
      setCardProgress(Math.min(1, Math.max(0, progress - idx)));
    };

    const lock = () => {
      if (engaged) return;
      engaged = true;
      document.body.style.overflow = 'hidden';
    };
    const unlock = () => {
      if (!engaged) return;
      engaged = false;
      document.body.style.overflow = '';
    };

    // Section is "in range" when any meaningful part of it overlaps the
    // central portion of the viewport. Wide band so fast scrolls still trigger.
    const isInRange = (dir: number) => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      if (dir > 0) {
        // Scrolling down: engage as soon as the section's bottom crosses
        // below the viewport center (i.e. it's reached center or higher).
        return rect.top < wh * 0.6 && rect.bottom > wh * 0.4;
      }
      // Scrolling up: engage as soon as the section's top crosses above
      // the viewport center.
      return rect.bottom > wh * 0.4 && rect.top < wh * 0.6;
    };

    const snapToCenter = () => {
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight;
      const offset = rect.top + rect.height / 2 - wh / 2;
      window.scrollBy({ top: offset, behavior: 'auto' });
    };

    // Try to engage based on the current scroll geometry; called on every gesture
    const tryEngage = (dir: number) => {
      if (engaged) return true;
      if (!isInRange(dir)) return false;
      if (dir > 0 && progress >= segments) return false;
      if (dir < 0 && progress <= 0) return false;
      lock();
      snapToCenter();
      return true;
    };

    const handleDelta = (delta: number, dir: number, preventDefault: () => void) => {
      if (!tryEngage(dir)) return;
      const next = Math.max(0, Math.min(segments, progress + delta));
      const wouldOverflow =
        (dir > 0 && progress >= segments) || (dir < 0 && progress <= 0);
      if (wouldOverflow) {
        // Already at bound — release and let the page scroll this gesture through
        unlock();
        return;
      }
      preventDefault();
      progress = next;
      apply();
      if (
        (dir > 0 && progress >= segments) ||
        (dir < 0 && progress <= 0)
      ) {
        // Reached a bound; release on the NEXT gesture in the same direction
        // (do not release here, so this gesture stays absorbed).
      }
    };

    const onWheel = (e: WheelEvent) => {
      const dir = Math.sign(e.deltaY);
      if (dir === 0) return;
      handleDelta(e.deltaY / 500, dir, () => e.preventDefault());
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (touchY == null) return;
      const y = e.touches[0]?.clientY ?? touchY;
      const dy = touchY - y;
      const dir = Math.sign(dy);
      if (dir === 0) return;
      handleDelta(dy / 200, dir, () => e.preventDefault());
      touchY = y;
    };
    const onTouchEnd = () => {
      touchY = null;
    };

    // No scroll-based release: the section is locked to center while engaged.
    const onScroll = () => {};

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('scroll', onScroll);
      document.body.style.overflow = '';
    };
  }, [cardsOnly, activeDocumentCards.length]);

  const cardsStack = (
    <div
      ref={cardsOnlyRef}
      className="journey-cards-stack-wrap"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '260px',
        position: 'relative',
      }}
    >
      <div className="journey-cards-stack-inner" style={{ position: 'relative', width: '100%', maxWidth: '380px', minHeight: '220px' }}>
        <style>{`
          @media (max-width: 768px) {
            .journey-cards-stack-wrap { overflow-x: clip; overflow-y: visible; padding: 24px 0; }
            .journey-cards-stack-inner { max-width: 260px !important; }
          }
        `}</style>
        {(cardsOnly ? activeDocumentCards : journeyCards).map((card: any, index: number) => {
          // In cards-only mode we render an infinite loop, so all cards remain visible
          let isVisible = true;
          let translateY = 0;
          let opacity = 1;

          if (index < currentCardIndex) {
            isVisible = false;
          } else if (index === currentCardIndex) {
            const easedProgress = easeInOut(cardProgress);
            translateY = -easedProgress * 100;
            opacity = 1 - easedProgress;
          }

          const total = (cardsOnly ? activeDocumentCards : journeyCards).length;
          const stackOffset = (total - 1 - index) * 4;

          if (cardsOnly) {
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: stackOffset,
                  right: -stackOffset,
                  width: '100%',
                  maxWidth: '380px',
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  padding: '24px 28px 28px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  display: isVisible ? 'flex' : 'none',
                  flexDirection: 'column',
                  transform: `translateY(${translateY}%) rotate(${card.rotation}deg)`,
                  opacity,
                  transition: 'none',
                  zIndex: total - index,
                  transformOrigin: 'center center',
                }}
              >
                <div
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: '26px',
                    color: 'rgb(18, 18, 18)',
                    textAlign: 'center',
                    marginBottom: '18px',
                    paddingBottom: '14px',
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  {card.title}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      style={{
                        height: '5px',
                        borderRadius: '3px',
                        backgroundColor: 'rgba(0,0,0,0.06)',
                        width: i === 4 ? '45%' : i === 2 ? '75%' : '100%',
                      }}
                    />
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: stackOffset,
                right: -stackOffset,
                width: '100%',
                maxWidth: '580px',
                height: '233px',
                backgroundColor: 'white',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                display: isVisible ? 'flex' : 'none',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transform: `translateY(${translateY}%) rotate(${card.rotation}deg)`,
                opacity: opacity,
                transition: 'none',
                zIndex: journeyCards.length - index,
              }}
            >
              <img
                src={card.iconUrl}
                alt={`${card.title} icon`}
                style={{ width: '48px', height: '48px', marginBottom: '16px', objectFit: 'contain' }}
              />
              <h3
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '12px',
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(45, 45, 45)',
                  margin: 0,
                }}
              >
                {card.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (cardsOnly) return cardsStack;

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        padding: '200px 0',
        backgroundColor: '#FFFEFB',
        height: '600vh',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: isPinned ? 'fixed' : 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            width: '100%',
            padding: '0 64px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h2
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontWeight: 400,
                fontSize: '60px',
                lineHeight: '63px',
                color: 'rgb(18, 18, 18)',
                margin: 0,
                marginBottom: '16px',
                textAlign: 'left',
              }}
            >
              Support at each stage of your journey
            </h2>
            <p
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '28px',
                color: 'rgb(45, 45, 45)',
                margin: 0,
                marginBottom: '32px',
                textAlign: 'left',
              }}
            >
              Legal support shouldn't start or stop at fundraising! We provide comprehensive assistance at every stage of your journey, addressing legal issues both big and small.
            </p>
            <a
              href="https://perfect-afternoon-22.authkit.app/sign-up"
              style={{
                fontFamily: '"Open Sans", sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                padding: '16px 32px',
                borderRadius: '50px',
                backgroundColor: '#347AE9',
                color: 'white',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
                height: '59px',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#2B68C4';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#347AE9';
              }}
            >
              Sign up for free
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              position: 'relative',
            }}
          >
            <div style={{ position: 'relative', width: '580px', height: '233px' }}>
              {journeyCards.map((card, index) => {
                let isVisible = true;
                let translateY = 0;
                let opacity = 1;

                if (index < currentCardIndex) {
                  isVisible = false;
                } else if (index === currentCardIndex) {
                  const easedProgress = easeInOut(cardProgress);
                  translateY = -easedProgress * 100;
                  opacity = 1 - easedProgress;
                }

                const stackOffset = (journeyCards.length - 1 - index) * 4;

                return (
                  <div
                    key={index}
                    style={{
                      position: 'absolute',
                      top: stackOffset,
                      right: -stackOffset,
                      width: '580px',
                      height: '233px',
                      backgroundColor: 'white',
                      borderRadius: '24px',
                      padding: '24px',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(0, 0, 0, 0.05)',
                      display: isVisible ? 'flex' : 'none',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transform: `translateY(${translateY}%) rotate(${card.rotation}deg)`,
                      opacity: opacity,
                      transition: 'none',
                      zIndex: journeyCards.length - index,
                    }}
                  >
                    <img
                      src={card.iconUrl}
                      alt={`${card.title} icon`}
                      style={{ width: '48px', height: '48px', marginBottom: '16px', objectFit: 'contain' }}
                    />
                    <h3
                      style={{
                        fontFamily: '"DM Serif Display", serif',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '32px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '12px',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0,
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyCardsStack;