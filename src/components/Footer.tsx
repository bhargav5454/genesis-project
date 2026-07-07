"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Validate email
    if (!email || !email.includes('@')) {
      setFormError(true);
      return;
    }

    // Here you would typically send the data to an API
    // For now, we'll just simulate a successful submission
    setFormSuccess(true);
    setFormError(false);
    setEmail('');

    // Reset the success message after a few seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  return <div className="footer" style={{
    backgroundColor: '#F4EEE4',
    marginBottom: 0 // Remove extra space below the footer
  }}>
      <div className="padding-global py-0">
        <div className="padding-section-medium">
          <div className="container-large">
            <div className="footer-top" style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '30px',
              padding: '20px 0'
            }}>
              {/* Left column - Header and subtext */}
              <div className="footer_header" style={{
                maxWidth: '500px',
                flex: '1',
                minWidth: '280px'
              }}>
                <h2 className="heading-style-h3" style={{
                  fontFamily: '"DM Serif Display Regular", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '48px',
                  lineHeight: '50px',
                  color: 'rgb(18, 18, 18)',
                  margin: '0 0 8px 0'
                }}>Join our newsletter</h2>
                <div style={{
                  fontFamily: '"Open Sans Medium", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(18, 18, 18)'
                }}>Get free monthly updates on startup funding, events, news and legal tips.</div>
              </div>
              
              {/* Right column - Form */}
              <div className="form_component w-form" style={{
                flex: '1',
                minWidth: '280px',
                maxWidth: '500px'
              }}>
                <form id="newsletter-form" onSubmit={handleSubmit} className="form_form">
                  <div className="form_form-wrapper" style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '10px'
                  }}>
                    <input 
                      className="form_input is-newsletter w-input" 
                      maxLength={256} 
                      name="Email" 
                      placeholder="Enter your email" 
                      type="email" 
                      id="Email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      required={true} 
                      style={{
                        flex: '1',
                        border: '1px solid #D1D1D1' // Light gray border
                      }} 
                    />
                    <button 
                      type="submit" 
                      className="button-secondary is-newsletter w-button" 
                      style={{
                        whiteSpace: 'nowrap',
                        border: '1px solid #347AE9', // Updated to main blue color
                        backgroundColor: 'transparent',
                        color: '#347AE9' // Also updated text color to match border
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                  <div className="text-size-tiny text-color-grey" style={{
                    marginTop: '8px',
                    textAlign: 'right'
                  }}>
                    By subscribing you agree to with our <Link href="/privacy-policy" className="text-color-grey">Privacy Policy</Link>.
                  </div>
                </form>
                {formSuccess && <div className="form_message-success w-form-done" style={{
                  display: 'block'
                }}>
                  <div>Thank you! Your submission has been received!</div>
                </div>}
                {formError && <div className="form_message-error w-form-fail" style={{
                  display: 'block'
                }}>
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>}
              </div>
            </div>
            <div className="footer-divider" style={{
              borderTop: '0.5px solid #000000', // Made the divider thinner (0.5px instead of 1px)
              margin: '24px 0' // Keeping the spacing above and below
            }}></div>
            <div className="footer-bottom" style={{
              paddingTop: '0', // Removed padding since we're using margin in the divider
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '15px' // Reduced vertical spacing between elements
            }}>
              {/* Logo and Altiverse section */}
              <div className="footer_logos-wrapper" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <Link href="/" className="footer-logo w-inline-block">
                  <img src="/images/SuLeLogo.png" loading="lazy" alt="SuLe Logo" className="logo" style={{
                    height: '30px' // Smaller logo
                  }} />
                </Link>
              </div>
              
              {/* Copyright */}
              <div className="text-size-regular align-left" style={{
                marginTop: '0'
              }}>© SuLe Hub Limited.<br />SuLe Hub is a registered trademark of SuLe Hub Limited.</div>
              
              {/* Footer links */}
              <div className="footer-links-wrapper" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                marginTop: '0'
              }}>
                <Link href="/terms-and-conditions" className="footer-link">Terms and Conditions</Link>
                <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
                <Link href="/rules-of-acceptable-use" className="footer-link">Rules of Acceptable Use</Link>
                <Link href="/cookie-policy" className="footer-link">Cookie Policy</Link>
                <Link href="/terms-of-engagement" className="footer-link">Terms of Engagement</Link>
              </div>
              
              {/* Cyber Essentials logo */}
              <div className="align-left" style={{
                marginTop: '0'
              }}>
                <a href="https://www.gov.uk/government/publications/cyber-essentials-scheme-overview" target="_blank" rel="noreferrer" className="footer_link w-inline-block">
                  <img src="/images/image-3.png" loading="lazy" alt="Cyber Essentials" className="footer_ce-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-specific styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .footer {
            margin-top: -48px !important;
          }
          
          .footer-top {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 24px !important;
            padding: 32px 16px !important;
          }
          
          .footer_header {
            max-width: 100% !important;
            min-width: auto !important;
            flex: none !important;
          }
          
          .heading-style-h3 {
            font-family: "Dmserifdisplay Regular", sans-serif !important;
            font-weight: 400 !important;
            font-size: 36px !important;
            line-height: 40px !important;
            color: rgb(18, 18, 18) !important;
            text-align: center !important;
            margin: 0 0 16px 0 !important;
          }
          
          .footer_header div {
            font-family: "Opensans Regular", sans-serif !important;
            font-weight: 400 !important;
            font-size: 14px !important;
            line-height: 18px !important;
            color: rgb(18, 18, 18) !important;
            text-align: center !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          
          .form_component {
            max-width: 100% !important;
            min-width: auto !important;
            flex: none !important;
            width: 100% !important;
          }
          
          .form_form-wrapper {
            flex-direction: column !important;
            gap: 16px !important;
            width: 100% !important;
            max-width: 300px !important;
            margin: 0 auto !important;
          }
          
          .form_input {
            width: 100% !important;
            padding: 12px 20px !important;
            border-radius: 32px !important;
            border: 1px solid #D1D1D1 !important;
            font-size: 16px !important;
            text-align: center !important;
            height: 44px !important;
            box-sizing: border-box !important;
          }
          
          .button-secondary {
            width: 100% !important;
            padding: 12px 20px !important;
            border-radius: 32px !important;
            border: 2px solid #347AE9 !important;
            background-color: transparent !important;
            color: #347AE9 !important;
            font-size: 16px !important;
            font-weight: 500 !important;
            text-align: center !important;
            height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            box-sizing: border-box !important;
          }
          
          .text-size-tiny {
            text-align: center !important;
            font-size: 12px !important;
            line-height: 16px !important;
            color: #666666 !important;
            margin-top: 16px !important;
            max-width: 300px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          
          .text-color-grey {
            color: #666666 !important;
            text-decoration: underline !important;
          }

          /* Footer bottom section - left-aligned on mobile */
          .footer-bottom {
            align-items: flex-start !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .footer_logos-wrapper {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 12px !important;
            width: 100% !important;
          }

          .text-size-regular {
            text-align: left !important;
            font-size: 14px !important;
            line-height: 18px !important;
          }

          .footer-links-wrapper {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 8px !important;
          }

          .footer-link {
            text-align: left !important;
            font-size: 14px !important;
          }

          .align-left {
            text-align: left !important;
          }

          .footer_ce-logo {
            height: 28px !important;
            width: auto !important;
          }
        }
      `}</style>
    </div>;
};

export default Footer;
