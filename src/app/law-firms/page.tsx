"use client";

import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const DetailLawFirmsPage = () => {
  useEffect(() => {
    document.title = 'Law Firms - SuLe Hub';
  }, []);

  const lawFirmLogos = [
    { src: "/lovable-uploads/d6a4a7f7-7440-44ff-9c2a-d900c24ff7e7.png", alt: "Ashurst" },
    { src: "/lovable-uploads/5c76e8f3-1195-4986-afa2-28d159cc2cdc.png", alt: "Orrick" },
    { src: "/lovable-uploads/9aa2eb95-8c77-4774-909c-9674f064f38f.png", alt: "Clifford Chance" },
    { src: "/lovable-uploads/2d75cdc1-0f8e-4044-a34d-4e32718b386a.png", alt: "Goodwin" },
    { src: "/lovable-uploads/73558916-eb63-4212-b177-593cfa4da0b9.png", alt: "PwC" },
    { src: "/lovable-uploads/bb495dc5-19ca-48b8-9073-03ea933cc7f5.png", alt: "Taylor Rose" },
    { src: "/lovable-uploads/1fc398dc-5650-47ce-9f22-c64d1960590b.png", alt: "Bird & Bird" }
  ];

  const lawFirms = [
    {
      name: "Smith & Associates",
      expertise: "Startup Law, Intellectual Property",
      description: "Specializing in helping startups establish solid legal foundations and protect their innovations."
    },
    {
      name: "Legal Partners LLP",
      expertise: "Corporate Law, Venture Capital",
      description: "Expert guidance for growing businesses seeking investment and navigating complex corporate structures."
    },
    {
      name: "Tech Law Solutions",
      expertise: "Technology Law, Data Protection",
      description: "Focused on the unique legal challenges facing technology startups and digital businesses."
    },
    {
      name: "Global Legal Advisors",
      expertise: "International Business, Compliance",
      description: "Supporting businesses expanding globally with comprehensive cross-border legal services."
    }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <header className="section_home-header">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="home-header_component">
                  <div className="w-layout-grid home-header_content-wrapper">
                    <div className="home-header_content-left">
                      <h1 className="heading-style-h1">Our Law Firm Network</h1>
                    </div>
                    <div className="home-header_content-right">
                      <p className="text-size-medium">
                        SuLe Hub partners with established law firms to provide specialized legal expertise when you need it.
                        Our network includes firms with diverse specializations to meet all your business legal needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Law Firm Logos Section */}
        <section className="section background-color-floral-s2">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="text-align-center" style={{ marginBottom: '3rem' }}>
                  <h2 className="heading-style-h3">Our lawyers have worked at some of the best law firms</h2>
                </div>
                
                {/* Sliding Marquee from Right to Left */}
                <div className="relative overflow-hidden" style={{ height: '120px' }}>
                  <div 
                    className="flex animate-marquee-rtl"
                    style={{
                      width: 'max-content',
                      animation: 'marquee-rtl 25s linear infinite'
                    }}
                  >
                    {/* First set of logos */}
                    {lawFirmLogos.map((logo, index) => (
                      <div 
                        key={`first-${index}`}
                        className="flex-shrink-0 flex justify-center items-center"
                        style={{ margin: '0 60px', minWidth: '200px', height: '120px' }}
                      >
                        <img 
                          alt={logo.alt} 
                          loading="lazy" 
                          src={logo.src} 
                          style={{
                            maxHeight: '80px',
                            width: 'auto',
                            maxWidth: '200px',
                            opacity: 0.8,
                            filter: 'grayscale(100%)',
                            objectFit: 'contain'
                          }}
                          draggable={false}
                        />
                      </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {lawFirmLogos.map((logo, index) => (
                      <div 
                        key={`second-${index}`}
                        className="flex-shrink-0 flex justify-center items-center"
                        style={{ margin: '0 60px', minWidth: '200px', height: '120px' }}
                      >
                        <img 
                          alt={logo.alt} 
                          loading="lazy" 
                          src={logo.src} 
                          style={{
                            maxHeight: '80px',
                            width: 'auto',
                            maxWidth: '200px',
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
                
                <style jsx>{`
                  @keyframes marquee-rtl {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-large">
                <div className="grid-2-columns">
                  {lawFirms.map((firm, index) => (
                    <div key={index} className="law-firm-card padding-medium background-color-floral-s2">
                      <h3 className="heading-style-h4">{firm.name}</h3>
                      <div className="chip-card margin-top margin-small">{firm.expertise}</div>
                      <p className="text-size-regular margin-top margin-medium">{firm.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small">
                <h2 className="heading-style-h3">How We Work With Law Firms</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Our platform seamlessly connects you with the right legal expertise when you need specialized support.
                    We handle the initial assessment of your needs and match you with the most appropriate legal partner
                    from our network, ensuring you get targeted assistance without the usual complexity of finding and
                    vetting law firms yourself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default DetailLawFirmsPage;
