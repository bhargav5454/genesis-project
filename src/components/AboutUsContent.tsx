import React from 'react';
import LinkedInIcon from '@/assets/LinkedIn.svg';
import patriciaWingFounder from '@/assets/patricia-wing-founder.png';
import nilsuDericiFounder from '@/assets/nilsu-derici-founder.png';
import sulePitchNightTeam from '@/assets/sule-pitch-night-team.jpg';
import huseyinKaplanPhoto from '@/assets/huseyin-kaplan.jpg';
import sebastienBelinPhoto from '@/assets/sebastien-belin.png';
import richardBloomfieldPhoto from '@/assets/richard-bloomfield.jpeg';
import handeBozkirPhoto from '@/assets/hande-bozkir.jpg';
import carlaHendersonPhoto from '@/assets/carla-henderson.jpeg';
import pepperGrossPhoto from '@/assets/pepper-gross.png';
import suleymanUsluPhoto from '@/assets/suleyman-uslu.jpeg';
import berkayOflazPhoto from '@/assets/berkay-oflaz.jpeg';
import jacquelynVanessaPhoto from '@/assets/jacquelyn-vanessa.jpeg';
import faiqaShakeelPhoto from '@/assets/faiqa-shakeel.png';
import danBarrettPhoto from '@/assets/dan-barrett.jpeg';

const AboutUsContent = () => {
  return (
    <>
      {/* About Us Hero Heading Section */}
      <section className="about-us-hero-section" style={{
        backgroundColor: '#FFFEFB',
        paddingTop: '200px',
        paddingBottom: '80px',
      }}>
        <div className="about-us-hero-container" style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          padding: '0 20px',
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          <h1 className="about-us-hero-heading" style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(28px, 5vw, 56px)',
            lineHeight: '1.15',
            color: '#1C1C1C',
            fontWeight: 400,
            margin: 0,
            textAlign: 'left',
          }}>
            About Us
          </h1>
          <div className="about-us-hero-text" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            paddingTop: '40px',
          }}>
            <p style={{
              fontFamily: '"Geist", sans-serif',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              lineHeight: '1.6',
              color: '#1C1C1C',
              fontWeight: 400,
              margin: 0,
            }}>
              SuLe was founded by Patricia Wing, an award-winning corporate lawyer (Orrick; Bird & Bird) who has advised startups and VC funds on many high profile deals, and Nilsu Derici, a serial entrepreneur and digital transformation expert for high-growth startups.
            </p>
            <p style={{
              fontFamily: '"Geist", sans-serif',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              lineHeight: '1.6',
              color: '#1C1C1C',
              fontWeight: 400,
              margin: 0,
            }}>
              They recognised a gap between how fast early-stage companies move and how legal work is often delivered, through repetitive, basic processes that remain manual, fragmented, and costly. SuLe was built to make that work easier to run for founders, and easier to support sustainably for law firms.
            </p>
            <p style={{
              fontFamily: '"Geist", sans-serif',
              fontSize: 'clamp(14px, 1.8vw, 17px)',
              lineHeight: '1.6',
              color: '#1C1C1C',
              fontWeight: 400,
              margin: 0,
            }}>
              Today SuLe has rebuilt legal from the ground up with a tech-first infrastructure that automates and manages end-to-end legal processes.
            </p>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-us-hero-section {
              padding-top: 16px !important;
              padding-bottom: 40px !important;
            }
            .about-us-hero-container {
              display: flex !important;
              flex-direction: column !important;
              gap: 24px !important;
            }
            .about-us-hero-heading {
              font-size: 36px !important;
              line-height: 1.1 !important;
              font-family: "Hedvig Letters Serif", serif !important;
              font-weight: 400 !important;
            }
            .about-us-hero-text p {
              font-size: 16px !important;
              line-height: 1.5 !important;
            }
          }
        `}</style>
      </section>

      {/* Founding Team Section */}
      <section className="founding-team-section" style={{
        backgroundColor: '#FFFEFB',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto',
          padding: '0 20px',
        }}>
          <h2 className="founding-team-heading" style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            lineHeight: '1.15',
            color: '#1C1C1C',
            fontWeight: 400,
            margin: '0 0 64px 0',
            textAlign: 'left',
          }}>
            Founding Team
          </h2>
          
          <div className="founding-team-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '48px',
          }}>
            {/* Patricia Wing */}
            <div className="team-member-block" style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}>
              <div className="team-member-image-frame" style={{
                width: '280px',
                height: '280px',
                borderRadius: '8px',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img 
                  src={patriciaWingFounder.src} 
                  alt="Patricia Wing" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontFamily: '"Geist", sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#1C1C1C',
                  }}>Patricia Wing</span>
                  <a href="https://www.linkedin.com/in/patriciawing/" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={LinkedInIcon.src} alt="LinkedIn" width={20} height={20} />
                  </a>
                </div>
                <span style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#1C1C1C',
                }}>Founder and CEO</span>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#666',
                  lineHeight: '1.5',
                  margin: '8px 0 0 0',
                  maxWidth: '280px',
                }}>
                  Corporate lawyer from two top city firms. Passionate about giving business owners access to gate-kept legal.
                </p>
              </div>
            </div>

            {/* Nilsu Derici */}
            <div className="team-member-block" style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'flex-start',
            }}>
              <div className="team-member-image-frame" style={{
                width: '280px',
                height: '280px',
                borderRadius: '8px',
                flexShrink: 0,
                overflow: 'hidden',
              }}>
                <img 
                  src={nilsuDericiFounder.src} 
                  alt="Nilsu Derici" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingTop: '8px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontFamily: '"Geist", sans-serif',
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#1C1C1C',
                  }}>Nilsu Derici</span>
                  <a href="https://www.linkedin.com/in/nilsuderici/" target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={LinkedInIcon.src} alt="LinkedIn" width={20} height={20} />
                  </a>
                </div>
                <span style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '16px',
                  fontWeight: 400,
                  color: '#1C1C1C',
                }}>Founder and CPO</span>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#666',
                  lineHeight: '1.5',
                  margin: '8px 0 0 0',
                  maxWidth: '280px',
                }}>
                  Crazy about building products people love. Talk to me about philosophy!
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .founding-team-section {
              padding-top: 48px !important;
              padding-bottom: 48px !important;
            }
            .founding-team-heading {
              font-size: 32px !important;
              margin-bottom: 40px !important;
            }
            .founding-team-grid {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
            .team-member-block {
              flex-direction: column !important;
              gap: 16px !important;
            }
            .team-member-image-frame {
              width: 100% !important;
              max-width: 280px !important;
              height: 320px !important;
            }
          }
        `}</style>
      </section>

      {/* Team Photo */}
      <section style={{ backgroundColor: '#FFFEFB', paddingTop: '40px', paddingBottom: '40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <img
            src={sulePitchNightTeam.src}
            alt="SuLe team at Pitch Night"
            style={{ width: '100%', height: 'auto', borderRadius: '6px', display: 'block' }}
          />
        </div>
      </section>

      {/* SuLe Team Section */}
      <section style={{
        padding: '80px 0 120px 0',
        backgroundColor: '#FFFEFB',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
        }}>
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", serif',
            fontSize: '48px',
            fontWeight: 400,
            color: '#1C1C1C',
            textAlign: 'center',
            marginBottom: '60px',
          }} className="sule-team-heading">SuLe Team</h2>
        </div>
        
        {/* Infinite Slider Container */}
        <div 
          className="sule-team-container"
          style={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <div 
            className="sule-team-slider"
            style={{
              display: 'flex',
              gap: '32px',
              width: 'fit-content',
            }}
          >
            {/* First set of cards */}
            {[
              { name: 'Sebastien Belin', role: 'Lead Developer', linkedin: 'https://www.linkedin.com/in/sebastienbelin/', image: sebastienBelinPhoto },
{ name: 'Carla Henderson', role: 'Operations Manager', linkedin: 'https://www.linkedin.com/in/carlavhenderson/', image: carlaHendersonPhoto },
              { name: 'Huseyin Kaplan', role: 'Product Manager', linkedin: 'https://www.linkedin.com/in/huseyinkaplan/', image: huseyinKaplanPhoto },
              { name: 'Jacquelyn Vanessa', role: 'Social Media Manager', linkedin: 'https://www.linkedin.com/in/jacquelyn-vanessa/', image: jacquelynVanessaPhoto },
              { name: 'Pepper Gross', role: 'Marketing Manager', linkedin: 'https://www.linkedin.com/in/pepper-gross/', image: pepperGrossPhoto },
              { name: 'Süleyman Emirhan Uslu', role: 'AI Developer', linkedin: 'https://www.linkedin.com/in/suleymanemirhanuslu/', image: suleymanUsluPhoto },
              { name: 'Berkay Oflaz', role: 'Full-Stack Software Engineer', linkedin: 'https://www.linkedin.com/in/berkayoflaz/', image: berkayOflazPhoto },
              { name: 'Faiqa Shakeel', role: 'Testing Engineer', linkedin: 'https://www.linkedin.com/in/faiqa-shakeel-517b6311a/', image: faiqaShakeelPhoto },
              { name: 'Hande Bozkir', role: "Founder's Associate", linkedin: 'https://www.linkedin.com/in/hande-bozkir-3717961b7/', image: handeBozkirPhoto },
              { name: 'Richard Bloomfield', role: 'Senior Lawyer', linkedin: 'https://www.linkedin.com/in/rsbloomfield/', image: richardBloomfieldPhoto },
            ].map((member, index) => (
              <div key={`first-${index}`} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexShrink: 0,
                width: '240px',
              }}>
                {/* Image */}
                <div style={{
                  width: '240px',
                  height: '240px',
                  backgroundColor: '#E0E0E0',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                }}>
                  {member.image && (
                    <img 
                      src={(member.image as any).src || member.image} 
                      alt={member.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  )}
                </div>
                
                {/* Name with LinkedIn Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px',
                }}>
                  <span style={{
                    fontFamily: '"Geist", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#1C1C1C',
                  }}>{member.name}</span>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={LinkedInIcon.src} alt="LinkedIn" width={18} height={18} />
                  </a>
                </div>
                
                {/* Role */}
                <span style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#666',
                }}>{member.role}</span>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {[
              { name: 'Sebastien Belin', role: 'Lead Developer', linkedin: 'https://www.linkedin.com/in/sebastienbelin/', image: sebastienBelinPhoto },
              { name: 'Carla Henderson', role: 'Operations Manager', linkedin: 'https://www.linkedin.com/in/carlavhenderson/', image: carlaHendersonPhoto },
              { name: 'Huseyin Kaplan', role: 'Product Manager', linkedin: 'https://www.linkedin.com/in/huseyinkaplan/', image: huseyinKaplanPhoto },
              { name: 'Jacquelyn Vanessa', role: 'Social Media Manager', linkedin: 'https://www.linkedin.com/in/jacquelyn-vanessa/', image: jacquelynVanessaPhoto },
              { name: 'Pepper Gross', role: 'Marketing Manager', linkedin: 'https://www.linkedin.com/in/pepper-gross/', image: pepperGrossPhoto },
              { name: 'Süleyman Emirhan Uslu', role: 'AI Developer', linkedin: 'https://www.linkedin.com/in/suleymanemirhanuslu/', image: suleymanUsluPhoto },
              { name: 'Berkay Oflaz', role: 'Full-Stack Software Engineer', linkedin: 'https://www.linkedin.com/in/berkayoflaz/', image: berkayOflazPhoto },
              { name: 'Faiqa Shakeel', role: 'Testing Engineer', linkedin: 'https://www.linkedin.com/in/faiqa-shakeel-517b6311a/', image: faiqaShakeelPhoto },
              { name: 'Hande Bozkir', role: "Founder's Associate", linkedin: 'https://www.linkedin.com/in/hande-bozkir-3717961b7/', image: handeBozkirPhoto },
              { name: 'Richard Bloomfield', role: 'Senior Lawyer', linkedin: 'https://www.linkedin.com/in/rsbloomfield/', image: richardBloomfieldPhoto },
            ].map((member, index) => (
              <div key={`second-${index}`} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexShrink: 0,
                width: '240px',
              }}>
                {/* Image */}
                <div style={{
                  width: '240px',
                  height: '240px',
                  backgroundColor: '#E0E0E0',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                }}>
                  {member.image && (
                    <img 
                      src={(member.image as any).src || member.image} 
                      alt={member.name} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center top',
                      }}
                    />
                  )}
                </div>
                
                {/* Name with LinkedIn Icon */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '4px',
                }}>
                  <span style={{
                    fontFamily: '"Geist", sans-serif',
                    fontSize: '18px',
                    fontWeight: 500,
                    color: '#1C1C1C',
                  }}>{member.name}</span>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={LinkedInIcon.src} alt="LinkedIn" width={18} height={18} />
                  </a>
                </div>
                
                {/* Role */}
                <span style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: '15px',
                  fontWeight: 400,
                  color: '#666',
                }}>{member.role}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .sule-team-slider {
            animation: scroll-team 40s linear infinite;
          }
          @keyframes scroll-team {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .sule-team-container:hover .sule-team-slider {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .sule-team-heading {
              font-size: 36px !important;
              margin-bottom: 40px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutUsContent;
