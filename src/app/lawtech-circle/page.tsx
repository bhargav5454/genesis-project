"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, Layers, Lightbulb, Shield, Users } from 'lucide-react';

import { useInView } from 'react-intersection-observer';
import suleLogo from '@/assets/sule-logo-lawtech.png';
import lawtechHeroImg from '@/assets/lawtech-hero-image.png';
import bannerImage from '@/assets/lawfirms/banner-image.svg';

const ScrollReveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

const LawTechCirclePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const navigate = useRouter();

  useEffect(() => {
    const title = 'The LawTech Circle | Powered by SuLe';
    const description = 'A private, curated circle of associates at leading law firms designed to build a deep understanding of the venture space, legal tech innovation, and peer connections.';
    const image = 'https://sule.io/images/lawtech-circle-og.png';
    const url = 'https://sule.io/lawtech-circle';

    document.title = title;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute('content');
      el.setAttribute('content', value);
      return prev;
    };

    const prevDesc = setMeta('name', 'description', description);
    const prevOgTitle = setMeta('property', 'og:title', title);
    const prevOgDesc = setMeta('property', 'og:description', description);
    const prevOgImage = setMeta('property', 'og:image', image);
    const prevOgImageWidth = setMeta('property', 'og:image:width', '1200');
    const prevOgImageHeight = setMeta('property', 'og:image:height', '630');
    const prevOgImageType = setMeta('property', 'og:image:type', 'image/png');
    const prevOgUrl = setMeta('property', 'og:url', url);
    const prevOgType = setMeta('property', 'og:type', 'website');
    const prevTwCard = setMeta('name', 'twitter:card', 'summary_large_image');
    const prevTwTitle = setMeta('name', 'twitter:title', title);
    const prevTwDesc = setMeta('name', 'twitter:description', description);
    const prevTwImage = setMeta('name', 'twitter:image', image);

    return () => {
      const restore = (attr: string, key: string, prev: string | null) => {
        const el = document.querySelector(`meta[${attr}="${key}"]`);
        if (el && prev) el.setAttribute('content', prev);
      };
      restore('name', 'description', prevDesc);
      restore('property', 'og:title', prevOgTitle);
      restore('property', 'og:description', prevOgDesc);
      restore('property', 'og:image', prevOgImage);
      restore('property', 'og:image:width', prevOgImageWidth);
      restore('property', 'og:image:height', prevOgImageHeight);
      restore('property', 'og:image:type', prevOgImageType);
      restore('property', 'og:url', prevOgUrl);
      restore('property', 'og:type', prevOgType);
      restore('name', 'twitter:card', prevTwCard);
      restore('name', 'twitter:title', prevTwTitle);
      restore('name', 'twitter:description', prevTwDesc);
      restore('name', 'twitter:image', prevTwImage);
    };
  }, []);

  useEffect(() => {
    if (showJoinModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showJoinModal]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAFBFC', fontFamily: '"Geist", sans-serif', fontWeight: 300 }}>
      {/* Mobile styles */}
      <style>{`
        @media (max-width: 640px) {
          .ltc-navbar {
            padding: 14px 20px !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            z-index: 1000 !important;
          }
          .ltc-navbar + * {
            padding-top: 70px !important;
          }
          .ltc-navbar-logo-group {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2px !important;
          }
          .ltc-navbar-logo-title {
            font-size: 16px !important;
          }
          .ltc-navbar-logo-sub {
            font-size: 11px !important;
          }
          .ltc-navbar-logo-img {
            height: 16px !important;
          }
          .ltc-navbar-events-link, .ltc-navbar-venture-link {
            display: none !important;
          }
          .ltc-hero-section {
            min-height: auto !important;
            align-items: flex-start !important;
          }
          .ltc-hero-inner {
            padding: 28px 24px 60px !important;
          }
          .ltc-hero-headline {
            font-size: 46px !important;
            line-height: 1.25 !important;
            max-width: 100% !important;
            margin-bottom: 28px !important;
          }
          .ltc-hero-subtext {
            font-size: 17px !important;
            font-weight: 300 !important;
            line-height: 1.75 !important;
            max-width: 100% !important;
            color: #6B7280 !important;
            margin-bottom: 40px !important;
          }
          .ltc-hero-ctas {
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .ltc-hero-ctas a {
            width: 100% !important;
            text-align: center !important;
            padding: 14px 24px !important;
            font-size: 15px !important;
            box-sizing: border-box !important;
          }
          /* Hide scrollbar but keep scrollable */
          html, body {
            overflow-y: auto !important;
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
          html::-webkit-scrollbar,
          body::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          .ltc-hero-blob-tr {
            width: 70% !important;
            height: 60% !important;
            top: -5% !important;
            right: -15% !important;
          }
          .ltc-hero-blob-bl {
            width: 60% !important;
            height: 50% !important;
            bottom: -10% !important;
            left: -15% !important;
          }
          .ltc-section {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .ltc-footer {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          .ltc-sule-logo-wrap {
            justify-content: flex-start !important;
          }
         .ltc-sule-logo-img {
            width: 160px !important;
          }
          .ltc-hero-inner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding-right: 24px !important;
            padding-bottom: 40px !important;
          }
          .ltc-hero-image-col {
            display: block !important;
            width: 100% !important;
            max-width: 400px !important;
            margin: 24px auto 0 auto !important;
            align-self: center !important;
            position: relative !important;
            z-index: 3 !important;
          }
          .ltc-hero-image-col img {
            border-radius: 6px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 1100px) {
          .ltc-hero-headline {
            font-size: 44px !important;
          }
          .ltc-hero-inner {
            flex-direction: column !important;
            align-items: stretch !important;
            padding-right: 24px !important;
            gap: 24px !important;
            padding-top: 8px !important;
            padding-bottom: 40px !important;
          }
          .ltc-hero-image-col {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 32px 0 0 0 !important;
            align-self: stretch !important;
            position: relative !important;
            z-index: 3 !important;
          }
          .ltc-hero-image-col img {
            border-radius: 6px !important;
          }
          .ltc-hero-subtext {
            font-size: 15px !important;
            margin-bottom: 24px !important;
          }
          .ltc-hero-section {
            min-height: auto !important;
            padding-top: 0px !important;
            padding-bottom: 32px !important;
          }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .ltc-hero-headline {
            font-size: 38px !important;
          }
        }
      `}</style>
      {/* Navbar */}
      <nav className="ltc-navbar" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 40px',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.72)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(234, 237, 241, 0.6)' : '1px solid #EAEDF1',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
      }}>
        <a onClick={(e) => { e.preventDefault(); navigate.push('/'); }} href="/" className="ltc-navbar-logo-group" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', cursor: 'pointer' }}>
          <span className="ltc-navbar-logo-title" style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: '18px',
            fontWeight: 400,
            color: '#1A1F36',
          }}>
            The LawTech Circle
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="ltc-navbar-logo-sub" style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 300 }}>by</span>
            <img className="ltc-navbar-logo-img" src={suleLogo.src} alt="SuLe" style={{ height: '20px', width: 'auto' }} />
          </div>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            className="ltc-navbar-venture-link"
            href="/"
            onClick={(e) => { e.preventDefault(); navigate.push('/'); }}
            style={{
              fontSize: '15px',
              color: '#1A1F36',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Go to Venture Hub
          </a>
          <a className="ltc-navbar-events-link" href="#events" onClick={(e) => {
            e.preventDefault();
            document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
          }} style={{
            fontSize: '15px',
            color: '#1A1F36',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>
            Events
          </a>
          <button
            onClick={() => setShowJoinModal(true)}
            style={{
              display: 'inline-block',
              padding: '10px 24px',
              backgroundColor: '#000000',
              color: '#FFFFFF',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              transition: 'opacity 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Request to Join
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ltc-hero-section" style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Subtle gradient blob top-right */}
        <div className="ltc-hero-blob-tr" style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '110%',
          background: 'radial-gradient(ellipse at 70% 40%, rgba(239, 245, 253, 0.9) 0%, rgba(239, 245, 253, 0.4) 50%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        {/* Subtle gradient blob bottom-left */}
        <div className="ltc-hero-blob-bl" style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '45%',
          height: '80%',
          background: 'radial-gradient(ellipse at 30% 70%, rgba(230, 220, 200, 0.2) 0%, transparent 60%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        {/* Bottom fade-out */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #FAFBFC)',
          pointerEvents: 'none',
          zIndex: 2,
        }} />

        <div className="ltc-hero-inner" style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '100%',
          margin: '0',
          paddingTop: '80px',
          paddingBottom: '80px',
          paddingLeft: 'max(24px, calc((100% - 1200px) / 2 + 24px))',
          paddingRight: '0',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          gap: '40px',
        }}>
          <div className="ltc-hero-text-col" style={{ flex: 1, minWidth: 0 }}>
          {/* Tag */}
          <div
            className="lawtech-tag"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '6px',
              fontSize: '13px',
              color: '#4B5563',
              marginBottom: '56px',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              cursor: 'default',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              gap: '0px',
              transition: 'gap 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            onMouseEnter={(e) => {
              if (window.innerWidth <= 640) return;
              e.currentTarget.style.gap = '10px';
              const expandEl = e.currentTarget.querySelector('.lawtech-tag-expand') as HTMLElement;
              if (expandEl) {
                expandEl.style.maxWidth = '600px';
                expandEl.style.opacity = '1';
                expandEl.style.padding = '4px 14px';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth <= 640) return;
              e.currentTarget.style.gap = '0px';
              const expandEl = e.currentTarget.querySelector('.lawtech-tag-expand') as HTMLElement;
              if (expandEl) {
                expandEl.style.maxWidth = '0px';
                expandEl.style.opacity = '0';
                expandEl.style.padding = '4px 0px';
              }
            }}
          >
            <span style={{ flexShrink: 0 }}>Associates & VC counsel · Private circle</span>
            <span
              className="lawtech-tag-expand"
              style={{
                maxWidth: '0px',
                opacity: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                backgroundColor: '#E0E4E2',
                color: '#000000',
                borderRadius: '6px',
                padding: '4px 0px',
                fontSize: '12px',
                fontWeight: 400,
                transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease, padding 0.4s ease',
              }}
            >
              Please do join us if you are a Corporate Associate or Trainee looking to qualify into Corporate.
            </span>
          </div>

          {/* Headline */}
          <h1 className="ltc-hero-headline" style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(36px, 5.5vw, 56px)',
            lineHeight: 1.1,
            color: '#1A1F36',
            fontWeight: 400,
            maxWidth: '680px',
            marginBottom: '32px',
          }}>
            Get ahead in venture law - before the market shifts under you.
          </h1>

          {/* Subtext */}
          <p className="ltc-hero-subtext" style={{
            fontFamily: '"Geist", sans-serif',
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            lineHeight: 1.65,
            color: '#9CA3AF',
            maxWidth: '620px',
            marginBottom: '48px',
            fontWeight: 300,
          }}>
            A private circle of venture associates learning how venture deals really work, how legal tech is changing execution, and how to become indispensable inside their firms.
          </p>

          {/* CTAs */}
          <div className="ltc-hero-ctas" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowJoinModal(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                height: '56px',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '17px',
                fontWeight: 500,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Request to Join
            </button>
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                height: '56px',
                backgroundColor: '#FFFFFF',
                color: '#1A1F36',
                borderRadius: '100px',
                border: '1px solid #D1D5DB',
                textDecoration: 'none',
                fontSize: '17px',
                fontWeight: 500,
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
            >
              View Upcoming Sessions
            </a>
          </div>
          </div>
          <div className="ltc-hero-image-col" style={{
            flex: '0 0 auto',
            width: '700px',
            alignSelf: 'flex-end',
            marginRight: '0',
          }}>
            <img
              src={lawtechHeroImg.src}
              alt="Professionals meeting around a table"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '6px 0 0 6px',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      <ScrollReveal>
      <section className="ltc-section" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px 100px',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#6B7280',
          marginBottom: '24px',
          display: 'block',
        }}>
          Why this exists
        </span>
        <h2 style={{
          fontFamily: '"Hedvig Letters Serif", serif',
          fontSize: 'clamp(24px, 3.5vw, 34px)',
          lineHeight: 1.2,
          color: '#1A1F36',
          fontWeight: 400,
          maxWidth: '650px',
          marginBottom: '64px',
        }}>
          Associates run the deals, but rarely get to see outside of investment documents.
        </h2>

        <div className="lawtech-cards" style={{
          display: 'grid',
          gap: '24px',
        }}>
          {[
            {
              icon: <Layers size={20} />,
              title: 'Discover the full venture ecosystem',
              desc: 'Understand how term sheets, SAFEs, side letters, VC funds and venture debt actually connect - not just the documents you\u2019re drafting.',
            },
            {
              icon: <Lightbulb size={20} />,
              title: 'Get ahead with legal tech tools',
              desc: 'Actually understand what legal tech tools are out there. Learn how to use legal tech to supercharge your work.',
            },
            {
              icon: <Shield size={20} />,
              title: 'A space to ask what you can\u2019t ask internally',
              desc: 'Deal mistakes. Process bottlenecks. Promotion pressure. Every session runs under Chatham House rules.',
            },
            {
              icon: <Users size={20} />,
              title: 'Connect with other venture associates and VC counsel',
              desc: 'A curated group of venture associates and VC counsel from firms and funds you respect, in a safe space for you to connect and learn from one another.',
            },
          ].map((card, i) => (
            <div key={i} style={{
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
              padding: '36px 32px',
              backgroundColor: '#FFFFFF',
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '6px',
                backgroundColor: '#EFF5FD',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1A1F36',
                marginBottom: '20px',
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontFamily: '"Geist", sans-serif',
                fontSize: '16px',
                fontWeight: 600,
                color: '#1A1F36',
                marginBottom: '12px',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontSize: '13px',
                lineHeight: 1.6,
                color: '#6B7280',
                fontWeight: 300,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="ltc-section" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px 64px 24px',
      }}>
        <div className="ltc-banner-grid" style={{
          backgroundColor: '#C9BCBB',
          borderRadius: '8px',
          padding: '32px 40px 0 40px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'end',
        }}>
          <div style={{
            borderRadius: '6px',
            overflow: 'hidden',
            marginBottom: 0,
          }}>
            <img
              src={(bannerImage as any).src || bannerImage}
              alt="SuLe venture deals"
              style={{
                width: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </div>
          <div style={{ paddingBottom: '32px' }}>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", serif',
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              lineHeight: 1.2,
              color: '#1A1F36',
              fontWeight: 400,
              marginBottom: '16px',
              maxWidth: '360px',
            }}>
              See how SuLe is changing venture deals
            </h2>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.6,
              color: '#3D3D3D',
              fontWeight: 300,
              marginBottom: '32px',
              maxWidth: '560px',
            }}>
              Digitising the venture legal process for law firms by removing manual steps and using firm datasets and documents in a shared workspace to collaborate seamlessly with founders & VCs.
            </p>
            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                fontFamily: '"Geist", sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                padding: '14px 32px',
                borderRadius: '100px',
                textDecoration: 'none',
                gap: '8px',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Learn more
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .ltc-banner-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              padding: 32px 32px 0 32px !important;
              align-items: start !important;
            }
            .ltc-banner-grid > div:first-child {
              padding-top: 32px;
            }
            .ltc-banner-grid h2,
            .ltc-banner-grid p {
              text-align: left !important;
            }
          }
          @media (max-width: 768px) {
            .ltc-banner-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
              padding: 0 24px !important;
            }
          }
        `}</style>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section style={{
        backgroundColor: '#F3F4F6',
        padding: '100px 0',
      }}>
        <div className="ltc-section" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#6B7280',
            marginBottom: '24px',
            display: 'block',
          }}>
            How it works
          </span>
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(24px, 3.5vw, 34px)',
            lineHeight: 1.2,
            color: '#1A1F36',
            fontWeight: 400,
            marginBottom: '64px',
          }}>
            Selective by design.
          </h2>

          <div className="lawtech-steps" style={{
            display: 'grid',
            gap: '48px',
          }}>
            {[
              {
                num: '01',
                title: "Register your interest",
                desc: 'Submit a short "Request to Join". We ask a few questions to understand your practice area, deal exposure, and goals. An existing member can also refer you!',
              },
              {
                num: '02',
                title: 'Reviewed for fit',
                desc: 'Every application is reviewed individually to ensure the room stays high-quality - associates (and trainees) and VC counsel working in venture, at a similar level, facing similar pressures.',
              },
              {
                num: '03',
                title: 'Join upcoming sessions',
                desc: 'If approved, you\u2019ll receive invitations to attend upcoming sessions and events - free of charge, there are no membership fees and no catches. Good vibes only.',
              },
            ].map((step, i) => (
              <div key={i}>
                <span style={{
                  fontFamily: '"Hedvig Letters Serif", serif',
                  fontSize: '42px',
                  fontWeight: 400,
                  color: '#C8DFFF',
                  lineHeight: 1,
                  display: 'block',
                  marginBottom: '16px',
                }}>
                  {step.num}
                </span>
                <h3 style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1A1F36',
                  marginBottom: '12px',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  lineHeight: 1.6,
                  color: '#6B7280',
                  fontWeight: 300,
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section id="events" className="ltc-section" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '100px 40px',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: '#6B7280',
          marginBottom: '24px',
          display: 'block',
        }}>
          Upcoming events
        </span>
        <h2 style={{
          fontFamily: '"Hedvig Letters Serif", serif',
          fontSize: 'clamp(24px, 3.5vw, 34px)',
          lineHeight: 1.2,
          color: '#1A1F36',
          fontWeight: 400,
          marginBottom: '20px',
        }}>
          See what's coming up.
        </h2>
        <p style={{
          fontSize: '15px',
          lineHeight: 1.6,
          color: '#9CA3AF',
          fontWeight: 300,
          maxWidth: '550px',
          marginBottom: '48px',
        }}>
           Browse upcoming events below. Each event is invitation-only - request access or ask an existing member for a referral.
        </p>

        <iframe
          src="https://luma.com/embed/event/evt-fHXJ02RAyHAdS84/simple"
          className="w-full border-0"
          style={{ border: '1px solid #bfcbda88', borderRadius: '4px', height: '450px' }}
          allowFullScreen
          aria-hidden={false}
          tabIndex={0}
          title="Upcoming Events"
        />
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <section className="ltc-section" style={{
        width: '100%',
        padding: '80px 24px',
        backgroundColor: '#E0E4E2',
      }}>
        <div className="lawtech-sule-card" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          border: '1px solid #E5E7EB',
          borderRadius: '6px',
          padding: '64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '48px',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate.push('/'); }} className="ltc-sule-logo-wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <img className="ltc-sule-logo-img" src={suleLogo.src} alt="SuLe" style={{ width: '240px', height: 'auto' }} />
          </a>
          <div>
            <span style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: '#6B7280',
              marginBottom: '20px',
              display: 'block',
            }}>
              by SuLe
            </span>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", serif',
              fontSize: 'clamp(22px, 3vw, 30px)',
              lineHeight: 1.3,
              color: '#1A1F36',
              fontWeight: 400,
              marginBottom: '20px',
            }}>
              Built by the team digitising venture law.
            </h2>
            <p style={{
              fontSize: '14px',
              lineHeight: 1.7,
              color: '#6B7280',
              fontWeight: 300,
              marginBottom: '28px',
            }}>
               SuLe digitises the venture legal process for law firms - removing manual steps like
               drafting and using firm datasets, know-how, and documents in a shared workspace to
               collaborate seamlessly with founders and VCs. The LawTech Circle is where that same
               mission extends to people: connecting the associates shaping the future of venture
               practice.
            </p>
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate.push('/'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1A1F36',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Learn more about SuLe <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>
      </ScrollReveal>

      <ScrollReveal>
      <footer className="ltc-footer" style={{
        backgroundColor: '#1C1C1C',
        padding: '80px 40px 48px',
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {/* CTA area */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '64px',
          }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{
                fontFamily: '"Hedvig Letters Serif", serif',
                fontSize: 'clamp(24px, 3.5vw, 34px)',
                lineHeight: 1.3,
                color: '#FFFFFF',
                fontWeight: 400,
                marginBottom: '20px',
              }}>
                If this sounds like your kind of circle, we'd like to hear from you.
              </h2>
              <p style={{
                fontSize: '14px',
                lineHeight: 1.7,
                color: '#9CA3AF',
                fontWeight: 300,
              }}>
                Share your name, firm or fund, and practice area. If the fit is right, we'll reach out with
                details on an upcoming session.
              </p>
            </div>
            <button
              onClick={() => setShowJoinModal(true)}
              style={{
                display: 'inline-block',
                padding: '10px 24px',
                backgroundColor: '#FFFFFF',
                color: '#1C1C1C',
                borderRadius: '100px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'opacity 0.2s ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Request to Join
            </button>
          </div>

          {/* Divider */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <span style={{
              fontSize: '13px',
              color: '#6B7280',
              fontWeight: 300,
            }}>
              Off the record · By invitation · For associates & VC counsel
            </span>
            <a href="/" onClick={(e) => { e.preventDefault(); navigate.push('/'); }} style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', cursor: 'pointer' }}>
              <span style={{ fontSize: '13px', color: '#6B7280', fontWeight: 300 }}>by</span>
              <img src={suleLogo.src} alt="SuLe" style={{ height: '18px', width: 'auto', opacity: 0.5, filter: 'invert(1)' }} />
            </a>
          </div>
        </div>
      </footer>
      </ScrollReveal>

      <style>{`
        .lawtech-tag {
          border: 1px solid #D1D5DB;
          transition: border-color 0.3s ease;
          cursor: default;
        }
        .lawtech-tag:hover {
          border-color: #D1D5DB;
        }
        .lawtech-cards {
          grid-template-columns: repeat(2, 1fr);
        }
        .lawtech-steps {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 768px) {
          nav {
            padding: 12px 20px !important;
          }
          .lawtech-hero-content {
            padding: 40px 20px !important;
          }
          .lawtech-cards {
            grid-template-columns: 1fr;
          }
          .lawtech-steps {
            grid-template-columns: 1fr;
          }
          .lawtech-sule-card {
            grid-template-columns: 1fr !important;
            padding: 32px !important;
          }
        }
        .modal-scroll-modern::-webkit-scrollbar {
          width: 6px;
        }
        .modal-scroll-modern::-webkit-scrollbar-track {
          background: transparent;
        }
        .modal-scroll-modern::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.15);
          border-radius: 3px;
        }
        .modal-scroll-modern::-webkit-scrollbar-thumb:hover {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .modal-scroll-modern {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 0, 0, 0.15) transparent;
        }
      `}</style>

      {/* Request to Join Modal */}
      {showJoinModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setShowJoinModal(false)}
        >
          <div
            className="modal-scroll-modern"
            style={{
              position: 'relative',
              width: '90%',
              maxWidth: '640px',
              height: '85vh',
              backgroundColor: '#FFFFFF',
              borderRadius: '6px',
              overflow: 'auto',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowJoinModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 10,
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#F3F4F6',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                color: '#6B7280',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E5E7EB'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#F3F4F6'}
            >
              ✕
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdszcS1c3g5RvXASyPlJPZru6NN4YRjvOcF167RXpioEsXAfw/viewform?embedded=true"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              title="Request to Join"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LawTechCirclePage;
