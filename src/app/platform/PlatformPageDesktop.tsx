"use client";

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import PartnersSection from '@/components/homepage/PartnersSection';
import ToggleSwitch from '@/components/ToggleSwitch';
import { ChevronDown, ChevronUp } from 'lucide-react';
import CallToActionSection from '@/components/platform/CallToActionSection';
import { comparisonData } from '@/data/pricingData';


const PlatformPageDesktop = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    document.title = 'SuLe Platform | Legal Support for Startups';
  }, []);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cardProgress, setCardProgress] = useState(0);
  const [isPinned, setIsPinned] = useState(false);
  const [premiumUsers, setPremiumUsers] = useState('1 user');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !containerRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;

      // Calculate if section should be pinned (when top hits viewport top)
      const shouldPin = rect.top <= 0 && rect.bottom > windowHeight;

      if (shouldPin && !isPinned) {
        // Pin the section
        setIsPinned(true);
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100vh';
      } else if (!shouldPin && isPinned && rect.top > 0) {
        // Unpin when scrolling back up past start
        setIsPinned(false);
        document.body.style.overflow = '';
        document.body.style.height = '';
        setCurrentCardIndex(0);
        setCardProgress(0);
      }

      if (isPinned) {
        // Calculate scroll progress through the pinned section
        const scrollOffset = Math.abs(rect.top);
        const totalScrollDistance = sectionHeight - windowHeight;
        const overallProgress = Math.min(1, scrollOffset / totalScrollDistance);

        // Divide into 6 equal segments for 6 cards
        const segmentProgress = overallProgress * 6;
        const newCardIndex = Math.floor(segmentProgress);
        const newCardProgress = segmentProgress - newCardIndex;

        setCurrentCardIndex(Math.min(5, newCardIndex));
        setCardProgress(newCardProgress);

        // Unpin when all 6 cards have completed animation
        if (overallProgress >= 1) {
          setIsPinned(false);
          document.body.style.overflow = '';
          document.body.style.height = '';
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isPinned]);

  const features = [
    {
      title: "Smart Legal Hub",
      description: "Access a comprehensive collection of legal resources tailored to your business needs.",
      iconSrc: "/images/Frame-2131328715.svg"
    },
    {
      title: "360° Legal Check",
      description: "Get a complete assessment of your legal situation and identify potential risks.",
      iconSrc: "/images/Frame-2131328667-2.svg"
    },
    {
      title: "Knowledge Hub",
      description: "Educational resources to help you understand the legal aspects of your business.",
      iconSrc: "/images/Desktop---86.svg"
    },
    {
      title: "Expert Consultations",
      description: "Connect with experienced lawyers for personalized advice when you need it.",
      iconSrc: "/images/Frame-2131328670.svg"
    }
  ];

  const journeyCards = [
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/672dfeced4912f949d2be91a_Briefcase.svg",
      title: "Start your business",
      body: "Most errors are made at the start, avoid this by knowing the way to start properly.",
      rotation: 0
    },
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ea77f544166c864e1847_Group%201.svg",
      title: "Get compliant",
      body: "Understand all the steps needed to get compliant, from GDPR compliance to employment rules.",
      rotation: 2
    },
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ebcc0a547f003fe65ebb_Group%2011.svg",
      title: "Protect your IP",
      body: "Ensure you've got everything covered so your most precious assets are protected – your IP.",
      rotation: 4
    },
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec0e33165ba23373f8ee_People.svg",
      title: "Build your team",
      body: "Know how to build your team the right way from the start.",
      rotation: 6
    },
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec4879faded09b48d683_Plant.svg",
      title: "Build your business",
      body: "Ready to take on clients but not sure what you need to have in place? We've got you covered.",
      rotation: 8
    },
    {
      iconUrl: "https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563/6735ec714400c1bd005b21a4_Scaling.svg",
      title: "Raise money",
      body: "Understand the right steps you should be taking to prepare to raise money.",
      rotation: 10
    }
  ];

  // Helper function to calculate easing
  const easeInOut = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };



  const faqData = [
    {
      question: "How do I get legal help?",
      answer: "If you're looking to tackle some legal tasks yourself, we've got a range of resources, templates and guidance to help you navigate through the legal maze. If you need expert legal advice, we can connect you with qualified lawyers who can provide personalised support at affordable rates."
    },
    {
      question: "How much does legal advice cost?",
      answer: "We provide very affordable legal services starting from £250 + VAT. Our pricing is transparent with fixed quotes, so you'll know exactly what you're paying upfront. We also offer various packages and subscription plans to suit different business needs and budgets."
    },
    {
      question: "How do I know your lawyers are qualified?",
      answer: "All of our lawyers must be registered with the SRA (Solicitors Regulation Authority) and have extensive experience from top-tier law firms. We carefully vet all our legal professionals to ensure they meet our high standards for expertise and service quality."
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />

      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="section overflow-hidden">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section_platform-header">
                  <div className="platform_header-content">
                    <h1 className="heading-style-h1">
                      A smart legal platform, <br className="hidden md:inline" />
                      <br className="md:hidden" />built by expert lawyers
                    </h1>

                    <p style={{
                      fontFamily: '"Open Sans", sans-serif',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '28px',
                      color: 'rgb(45, 45, 45)',
                      maxWidth: '640px',
                      textAlign: 'left',
                      margin: 0,
                      marginBottom: '84px'
                    }}>
                      Our legal platform streamlines legal tasks, automates risk management, handles contract reviews, and keeps you up-to-date with the latest legal changes—so you can stay focused on growing your business.
                    </p>

                    <a
                      href="https://perfect-afternoon-22.authkit.app/sign-up"
                      style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        padding: '16px 32px',
                        borderRadius: '50px',
                        backgroundColor: '#347AE9',
                        color: 'white',
                        textDecoration: 'none',
                        transition: 'background-color 0.3s ease',
                        height: '59px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={e => {
                        (e.target as HTMLAnchorElement).style.backgroundColor = '#2B68C4';
                      }}
                      onMouseLeave={e => {
                        (e.target as HTMLAnchorElement).style.backgroundColor = '#347AE9';
                      }}
                    >
                      Sign up for free
                    </a>
                  </div>
                  <div className="platform_header-image-wrapper">
                    <img
                      src="/images/platform-hero-image-v2.svg"
                      alt="SuLe Platform Interface"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Venn Diagram Section */}
        <section style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '112px 0',
          backgroundColor: '#F4EEE4'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 64px'
          }}>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '64px'
            }}>
              {/* Left Column - Text Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>

                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '60px',
                  lineHeight: '63px',
                  color: 'rgb(18, 18, 18)',
                  maxWidth: '560px',
                  margin: 0,
                  marginBottom: '24px'
                }}>
                  We're building a smart legal platform, unlike anything else in the market
                </h2>

                <a
                  href="https://perfect-afternoon-22.authkit.app/sign-up"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    padding: '16px 32px',
                    borderRadius: '50px',
                    backgroundColor: '#347AE9',
                    color: 'white',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                    marginTop: '32px',
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = '#2B68C4';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = '#347AE9';
                  }}
                >
                  Sign up for free
                </a>
              </div>

              {/* Right Column - Venn Diagram */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img
                  src="/lovable-uploads/5df4504b-330b-4b02-9445-bcbbd45d20c9.png"
                  alt="Legal resources Venn diagram showing SuLe at the intersection of legal resources, smart legal tools, and access to professionals"
                  style={{
                    maxHeight: '640px',
                    width: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Legal Health Check Section */}
        <section style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '112px 0',
          backgroundColor: '#F4EEE4'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 64px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '32px'
            }}>
              {/* Left Column - Video */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    maxWidth: '575px',
                    aspectRatio: '1/1',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563%2F673df7232c385f4cc7ff268f_360LegalCheck-transcode.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right Column - Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '50px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '32px'
                }}>
                  Free 360 legal health check
                </h2>

                {/* Bulleted List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  width: '100%',
                  marginBottom: '32px'
                }}>
                  {/* Risk diagnosis */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '8px'
                      }}>
                        Risk diagnosis
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Assess your company's legal risks and operations.
                      </p>
                    </div>
                  </div>

                  {/* Step-by-step guidance */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '8px'
                      }}>
                        Step-by-step guidance
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Identify high-level red flags and issues in your contracts.
                      </p>
                    </div>
                  </div>

                  {/* Personalised and relevant information */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '8px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '8px'
                      }}>
                        Personalised and relevant information
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Key information is incorporated automatically using your Companies House.
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '18px',
                    padding: '16px 32px',
                    borderRadius: '30px',
                    backgroundColor: 'transparent',
                    color: '#347AE9',
                    textDecoration: 'none',
                    border: '2px solid #347AE9',
                    transition: 'all 0.3s ease',
                    marginTop: '32px',
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = '#347AE9';
                    (e.target as HTMLAnchorElement).style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLAnchorElement).style.color = '#347AE9';
                  }}
                >
                  Free legal health check
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Legal Hub Section */}
        <section style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '112px 0',
          backgroundColor: '#F4EEE4'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 64px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '48px'
            }}>
              {/* Left Column - Video */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    maxWidth: '632px',
                    aspectRatio: '1/1',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563%2F673df73721e85e298e724156_SmartLegalHub-transcode.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right Column - Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                {/* Badge */}
                <div style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 700,
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  color: 'white',
                  backgroundColor: 'rgb(29, 115, 242)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  marginBottom: '16px'
                }}>
                  COMING SOON
                </div>

                {/* Heading */}
                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '50px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  Smart legal hub
                </h2>

                {/* Subtext */}
                <p style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: 'rgb(45, 45, 45)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  Streamline your legal processes and make informed decisions with confidence with our all-in-one Legal Wiki, designed specifically for tech companies and SMEs and powered by a vetted database.
                </p>

                {/* Feature List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  marginBottom: '32px'
                }}>
                  {/* Get answers to legal questions */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Get answers to legal questions
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Get answers to your burning legal questions with actionable next steps tailored to your legal needs.
                      </p>
                    </div>
                  </div>

                  {/* Review contracts */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Review contracts
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Identify high-level red flags and issues in your contracts.
                      </p>
                    </div>
                  </div>

                  {/* Customise templates */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Customise templates
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Effortlessly create and modify legal templates using our intuitive smart editor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="#"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '18px',
                    padding: '12px 24px',
                    borderRadius: '30px',
                    backgroundColor: 'transparent',
                    color: 'rgb(29, 115, 242)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = 'rgb(29, 115, 242)';
                    (e.target as HTMLAnchorElement).style.color = 'white';
                  }}
                  onMouseLeave={e => {
                    (e.target as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLAnchorElement).style.color = 'rgb(29, 115, 242)';
                  }}
                >
                  Smart legal hub coming soon
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* On-demand access to lawyers Section */}
        <section style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '112px 0',
          backgroundColor: '#F4EEE4'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 48px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '48px'
            }}>
              {/* Left Column - Video */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    maxWidth: '695px',
                    aspectRatio: '1/1',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563%2F673df748829f513de0680e91_Consultations-transcode.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right Column - Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                {/* Heading */}
                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '50px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  On-demand access to lawyers
                </h2>

                {/* Subtext */}
                <p style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: 'rgb(45, 45, 45)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  If you have more bespoke, complex needs, our platform offers direct access to on-demand lawyers with response times in under 2 hours.
                </p>

                {/* Feature List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  marginBottom: '32px'
                }}>
                  {/* Direct access to legal advice */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Direct access to legal advice
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Connect with a lawyer for complex issues, ensuring clear solutions.
                      </p>
                    </div>
                  </div>

                  {/* Quick and easy */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Quick and easy
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Starting a legal advice query is straightforward, and you'll receive a response from a lawyer within two hours.
                      </p>
                    </div>
                  </div>

                  {/* Affordable pricing and senior lawyers */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Affordable pricing and senior lawyers
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        We have a flat fee structure, as all of our lawyers are excellent, you pay fixed fees that you can afford, no matter what.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://calendly.com/d/cq55-w8f-wsg/introductory-call" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '18px',
                    padding: '12px 32px',
                    borderRadius: '30px',
                    backgroundColor: 'rgb(29, 115, 242)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgb(23, 95, 202)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgb(29, 115, 242)';
                  }}
                >
                  Contact a lawyer
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vast knowledge hub & templates Section */}
        <section style={{
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          padding: '112px 0',
          backgroundColor: '#F4EEE4'
        }}>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 48px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '48px'
            }}>
              {/* Left Column - Video */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    maxWidth: '765px',
                    aspectRatio: '1/1',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }}
                >
                  <source src="https://cdn.prod.website-files.com/647f1068e0d0c64b0785d563%2F673df75bf08bd7429aa9702b_KnowledgeHub-transcode.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right Column - Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                {/* Heading */}
                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '50px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  Vast knowledge hub & templates
                </h2>

                {/* Subtext */}
                <p style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: 'rgb(45, 45, 45)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
                  Our repository offers FAQs, clear legal content tailored for tech founders, and a diverse range of templates customisable with our Smart Suite Editor.
                </p>

                {/* Feature List */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  width: '100%',
                  marginBottom: '32px'
                }}>
                  {/* Comprehensive FAQs */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Comprehensive FAQs
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Find answers to common questions quickly.
                      </p>
                    </div>
                  </div>

                  {/* Tailored legal content */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Tailored legal content
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Access easy-to-understand information specifically for tech founders.
                      </p>
                    </div>
                  </div>

                  {/* Customisable legal templates */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#347AE9',
                      marginTop: '9px',
                      flexShrink: 0
                    }}></div>
                    <div>
                      <h3 style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '28px',
                        color: 'rgb(18, 18, 18)',
                        margin: 0,
                        marginBottom: '4px'
                      }}>
                        Customisable legal templates
                      </h3>
                      <p style={{
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '21px',
                        color: 'rgb(45, 45, 45)',
                        margin: 0
                      }}>
                        Utilise a variety of templates that can be personalised with our smart SuLe editor.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <a
                  href="https://perfect-afternoon-22.authkit.app/sign-up" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Open Sans", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '18px',
                    padding: '12px 32px',
                    borderRadius: '30px',
                    backgroundColor: 'rgb(29, 115, 242)',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'rgb(23, 95, 202)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'rgb(29, 115, 242)';
                  }}
                >
                  Explore knowledge hub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pinned Stacked Journey Cards Section with Enhanced Scroll Animation */}
        <section
          ref={sectionRef}
          style={{
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            padding: '200px 0',
            backgroundColor: '#FFFEFB',
            // Create enough scroll space for all 6 card animations
            height: '600vh', // 6x viewport height for smooth scrolling through all cards
            position: 'relative'
          }}
        >
          {/* Pinned Container */}
          <div
            ref={containerRef}
            style={{
              position: isPinned ? 'fixed' : 'sticky',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1
            }}
          >
            <div style={{
              maxWidth: '1440px',
              width: '100%',
              padding: '0 64px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              alignItems: 'center',
              gap: '64px'
            }}>
              {/* Left Column - Text Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
              }}>
                <h2 style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontWeight: 400,
                  fontSize: '60px',
                  lineHeight: '63px',
                  color: 'rgb(18, 18, 18)',
                  margin: 0,
                  marginBottom: '16px',
                  textAlign: 'left'
                }}>
                  Support at each stage of your journey
                </h2>

                <p style={{
                  fontFamily: '"Open Sans", sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: 'rgb(45, 45, 45)',
                  margin: 0,
                  marginBottom: '32px',
                  textAlign: 'left'
                }}>
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
                    height: '59px'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = '#2B68C4';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = '#347AE9';
                  }}
                >
                  Sign up for free
                </a>
              </div>

              {/* Right Column - Stacked Cards */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  width: '580px',
                  height: '233px'
                }}>
                  {journeyCards.map((card, index) => {
                    // Determine visibility and animation state for this card
                    let isVisible = true;
                    let translateY = 0;
                    let opacity = 1;

                    if (index < currentCardIndex) {
                      // Cards that have already animated out
                      isVisible = false;
                    } else if (index === currentCardIndex) {
                      // Current card being animated
                      const easedProgress = easeInOut(cardProgress);
                      translateY = -easedProgress * 100; // Slide up by percentage
                      opacity = 1 - easedProgress; // Fade out
                    }
                    // Cards with index > currentCardIndex remain in default position

                    // Stack offset for visual depth
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
                          transition: 'none', // Remove transitions for smooth scroll-based animation
                          zIndex: journeyCards.length - index
                        }}
                      >
                        <img
                          src={card.iconUrl}
                          alt={`${card.title} icon`}
                          style={{
                            width: '48px',
                            height: '48px',
                            marginBottom: '16px',
                            objectFit: 'contain'
                          }}
                        />
                        <h3 style={{
                          fontFamily: '"DM Serif Display", serif',
                          fontWeight: 400,
                          fontSize: '24px',
                          lineHeight: '32px',
                          color: 'rgb(18, 18, 18)',
                          margin: 0,
                          marginBottom: '12px'
                        }}>
                          {card.title}
                        </h3>
                        <p style={{
                          fontFamily: '"Open Sans", sans-serif',
                          fontWeight: 400,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(45, 45, 45)',
                          margin: 0
                        }}>
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

        {/* Existing Hero Section */}
        <section className="section_platform-hero">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="platform-hero_component">
                  <div className="platform-hero_content">


                    <div className="platform-hero_button-group">

                    </div>
                  </div>
                  <div className="platform-hero_image-wrapper">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Existing Platform Hero Section */}
        <section className="section background-color-floral-s1">
          <div className="padding-global">

          </div>
        </section>

        {/* Pricing Plans Section */}
        <section style={{
          backgroundColor: '#F4EEE4',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}>
          <div className="container-large padding-global">
            {/* Section Title */}
            <h2 style={{
              fontFamily: '"Dmserifdisplay Regular", serif',
              fontSize: '48px',
              fontWeight: 400,
              lineHeight: '50px',
              color: '#121212',
              textAlign: 'center',
              marginBottom: '48px',
              margin: '0 0 48px 0'
            }}>
              Pricing plans
            </h2>

            {/* Integrated Pricing Table */}
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              position: 'relative'
            }}>

              {/* Plan Headers */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '280px 280px 280px 296px',
                gap: '0px',
                justifyContent: 'center',
                marginBottom: '0'
              }}>
                {/* Empty space for feature labels */}
                <div></div>

                {/* Basic Plan Header */}
                <div style={{
                  backgroundColor: 'transparent',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '320px'
                }}>
                  <h3 style={{
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#121212',
                    marginBottom: '24px',
                    margin: '0 0 24px 0'
                  }}>
                    Basic
                  </h3>

                  <div style={{ marginBottom: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{
                        fontFamily: '"Dmserifdisplay Regular", serif',
                        fontSize: '48px',
                        fontWeight: 400,
                        lineHeight: '50px',
                        color: '#121212'
                      }}>
                        Free
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://perfect-afternoon-22.authkit.app/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#EFE6DA',
                      color: '#121212',
                      border: 'none',
                      borderRadius: '24px',
                      textDecoration: 'none',
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    Sign up
                  </a>
                </div>

                {/* Premium Plan Header */}
                <div style={{
                  backgroundColor: 'transparent',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '320px'
                }}>
                  <h3 style={{
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#121212',
                    marginBottom: '24px',
                    margin: '0 0 24px 0'
                  }}>
                    Premium
                  </h3>

                  <div style={{ marginBottom: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{
                        fontFamily: '"Dmserifdisplay Regular", serif',
                        fontSize: '48px',
                        fontWeight: 400,
                        lineHeight: '50px',
                        color: '#121212'
                      }}>
                        £299
                      </span>
                      <span style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#121212'
                      }}>
                        /quarter
                      </span>
                    </div>

                    <p style={{
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#666',
                      margin: '4px 0 8px 0',
                      textAlign: 'center'
                    }}>
                      +VAT
                    </p>

                    <p style={{
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#666',
                      marginTop: '8px',
                      margin: '8px 0 0 0'
                    }}>
                      Invite up to 5 team members included
                    </p>
                  </div>

                  <a
                    href="https://perfect-afternoon-22.authkit.app/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#EFE6DA',
                      color: '#121212',
                      border: 'none',
                      borderRadius: '24px',
                      textDecoration: 'none',
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    Sign up
                  </a>
                </div>

                {/* Premium+ Plan Header */}
                <div style={{
                  backgroundColor: '#E8F0FE',
                  borderRadius: '24px 24px 0 0',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  minHeight: '320px'
                }}>
                  <h3 style={{
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#121212',
                    marginBottom: '24px',
                    margin: '0 0 24px 0'
                  }}>
                    Premium +
                  </h3>

                  <div style={{ marginBottom: '16px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{
                        fontFamily: '"Dmserifdisplay Regular", serif',
                        fontSize: '48px',
                        fontWeight: 400,
                        lineHeight: '50px',
                        color: '#121212'
                      }}>
                        £990
                      </span>
                      <span style={{
                        fontFamily: '"Opensans Medium", sans-serif',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: '#121212'
                      }}>
                        /yr
                      </span>
                    </div>

                    <p style={{
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#121212',
                      margin: '4px 0 8px 0',
                      textAlign: 'center'
                    }}>
                      +VAT
                    </p>

                    <p style={{
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#121212',
                      marginTop: '8px',
                      margin: '8px 0 0 0'
                    }}>
                      Get two months for free
                    </p>
                  </div>

                  <a
                    href="https://perfect-afternoon-22.authkit.app/sign-up"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '48px',
                      backgroundColor: '#000000',
                      color: 'white',
                      border: 'none',
                      borderRadius: '24px',
                      textDecoration: 'none',
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    Sign up
                  </a>
                </div>
              </div>

              {/* Comparison Rows */}
              <div>
                {comparisonData.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    {/* Category Header Row */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '280px 280px 280px 296px',
                      gap: '0px',
                      justifyContent: 'center',
                      width: '100%',
                      borderTop: '1px solid #E5E5E5'
                    }}>
                      <div style={{
                        padding: '20px 24px',
                        fontFamily: '"Opensans Bold", sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: '28px',
                        color: '#121212',
                        backgroundColor: 'transparent',
                        borderTop: '1px solid #E5E5E5'
                      }}>
                        {category.category}
                        {(category as any).subtitle && (
                          <div style={{
                            fontFamily: '"Open Sans Medium", sans-serif',
                            fontSize: '14px',
                            fontWeight: 400,
                            fontStyle: 'italic',
                            lineHeight: '20px',
                            color: '#6B7280',
                            marginTop: '4px'
                          }}>
                            {(category as any).subtitle}
                          </div>
                        )}
                      </div>
                      <div style={{ backgroundColor: 'transparent', borderTop: '1px solid #E5E5E5' }}></div>
                      <div style={{ backgroundColor: 'transparent', borderTop: '1px solid #E5E5E5' }}></div>
                      <div style={{
                        backgroundColor: '#E8F0FE',
                        borderTop: '1px solid #E5E5E5'
                      }}></div>
                    </div>

                    {/* Feature Rows */}
                    {category.rows.map((row, rowIndex) => (
                      <div key={rowIndex} style={{
                        display: 'grid',
                        gridTemplateColumns: '280px 280px 280px 296px',
                        gap: '0px',
                        justifyContent: 'center',
                        width: '100%',
                        backgroundColor: 'transparent',
                        borderRadius: '0'
                      }}>
                        <div style={{
                          padding: '16px 24px',
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#121212',
                          backgroundColor: 'transparent'
                        }}>
                          {row.feature}
                        </div>
                        <div style={{
                          padding: '16px 24px',
                          textAlign: 'center',
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          color: '#121212',
                          backgroundColor: 'transparent'
                        }}>
                          {row.basic}
                        </div>
                        <div style={{
                          padding: '16px 24px',
                          textAlign: 'center',
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                          fontWeight: (row as any).bold ? 700 : 500,
                          color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : (row as any).grey ? '#6B7280' : '#121212',
                          backgroundColor: 'transparent'
                        }}>
                          {row.premium}
                        </div>
                        <div style={{
                          padding: '16px 24px',
                          textAlign: 'center',
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontSize: '16px',
                          fontWeight: (row as any).bold ? 700 : 500,
                          color: (row as any).highlight ? '#2563EB' : (row as any).grey ? '#6B7280' : '#121212',
                          backgroundColor: '#E8F0FE',
                          borderRadius: categoryIndex === comparisonData.length - 1 && rowIndex === category.rows.length - 1 ? '0 0 24px 24px' : '0'
                        }}>
                          {row.premiumPlus}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CallToActionSection />
        <PartnersSection
          title="We partner with the best startup accelerators and venture firms"
          customHeadingStyle={{
            fontSize: '33px', // Increased by 1px from original 32px
            marginTop: '-12px' // Move up by 12px
          }}
        />
        <section style={{
          backgroundColor: '#F4EEE4',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}>
          <div className="padding-global">
            <div className="container-large">
              <h2 style={{
                fontFamily: '"Dmserifdisplay Regular", sans-serif',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '60px',
                lineHeight: '63px',
                color: 'rgb(18, 18, 18)',
                textAlign: 'left',
                marginBottom: '48px'
              }}>
                Have questions?
              </h2>

              <div style={{
                backgroundColor: '#FFFEFB',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                {faqData.map((faq, index) => (
                  <div key={index} style={{
                    borderBottom: index < faqData.length - 1 ? '1px solid #f0f0f0' : 'none'
                  }}>
                    <button
                      onClick={() => toggleAccordion(index)}
                      style={{
                        width: '100%',
                        padding: '24px 32px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <h3 style={{
                        fontFamily: '"Dmserifdisplay Regular", sans-serif',
                        fontWeight: 400,
                        fontSize: '26px',
                        lineHeight: '27px',
                        color: 'rgb(18, 18, 18)',
                        margin: '0',
                        flex: 1
                      }}>
                        {faq.question}
                      </h3>
                      <div style={{
                        marginLeft: '16px',
                        flexShrink: 0
                      }}>
                        {openAccordion === index ? (
                          <ChevronUp size={24} color="rgb(18, 18, 18)" />
                        ) : (
                          <ChevronDown size={24} color="rgb(18, 18, 18)" />
                        )}
                      </div>
                    </button>

                    {openAccordion === index && (
                      <div style={{
                        padding: '0 32px 24px 32px'
                      }}>
                        <p style={{
                          fontFamily: '"Opensans Medium", sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(45, 45, 45)',
                          margin: '0',
                          textAlign: 'left'
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <CookieConsent />

      <style>{`
        @keyframes carouselScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${580 * 6 + 24 * 5}px); }
        }

        .journey-carousel-card {
          animation: cardFadeSlide 3s infinite;
        }

        @keyframes cardFadeSlide {
          0%, 83.33% { 
            transform: translateY(0px);
            opacity: 1;
          }
          91.66% { 
            transform: translateY(-30px);
            opacity: 0;
          }
          100% { 
            transform: translateY(30px);
            opacity: 0;
          }
        }

        .journey-carousel-card:nth-child(1) { animation-delay: 0s; }
        .journey-carousel-card:nth-child(2) { animation-delay: 0.5s; }
        .journey-carousel-card:nth-child(3) { animation-delay: 1s; }
        .journey-carousel-card:nth-child(4) { animation-delay: 1.5s; }
        .journey-carousel-card:nth-child(5) { animation-delay: 2s; }
        .journey-carousel-card:nth-child(6) { animation-delay: 2.5s; }

        @media (max-width: 768px) {
          .journey-carousel {
            flex-direction: column;
            animation: none;
          }
          
          .journey-carousel-card {
            width: 100% !important;
            max-width: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default PlatformPageDesktop;
