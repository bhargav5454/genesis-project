"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    personalization: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    if (cookieChoice) {
      setShowBanner(false);
      setCookieSettings(JSON.parse(cookieChoice));
    }
  }, []);

  const handleAllowAll = () => {
    const allAccepted = {
      personalization: true,
      analytics: true,
      marketing: true
    };
    localStorage.setItem('cookieChoice', JSON.stringify(allAccepted));
    setCookieSettings(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleDenyAll = () => {
    const allDenied = {
      personalization: false,
      analytics: false,
      marketing: false
    };
    localStorage.setItem('cookieChoice', JSON.stringify(allDenied));
    setCookieSettings(allDenied);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('cookieChoice', JSON.stringify(cookieSettings));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  const handleCheckboxChange = (setting: keyof typeof cookieSettings) => {
    setCookieSettings({
      ...cookieSettings,
      [setting]: !cookieSettings[setting]
    });
  };

  return (
    <div className="cookie-wrapper">
      {showBanner && (
        <div className="cookie-popup_component">
          <div className="cookie-modal_component">
            <div className="cookie-modal_content-wrap is-small text-colour-black">
              <div className="cookie-modal_title is-small">Cookie Settings</div>
              <div className="cookie-modal_description">
                By clicking "Accept All", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts. View our <Link href="/cookie-policy" className="text-style-link">Cookie Policy</Link> for more information.
              </div>
            </div>
            <div className="cookie-modal_button-wrap is-small">
              <a href="#" className="cookie-modal_button w-inline-block" onClick={(e) => {e.preventDefault(); handleAllowAll();}} style={{ marginBottom: '4px' }}>
                <div className="cookie-modal_button_text">Accept All</div>
              </a>
              <a href="#" className="cookie-modal_button is-secondary w-inline-block" onClick={(e) => {e.preventDefault(); handleDenyAll();}} style={{ marginBottom: '4px' }}>
                <div className="cookie-modal_button_text">Reject All</div>
              </a>
              <a href="#" className="cookie-modal_button is-third w-inline-block" onClick={(e) => {e.preventDefault(); togglePreferences();}}>
                <div className="cookie-modal_button_text">Cookie Settings</div>
              </a>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="cookie-preference_component" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          overflow: 'hidden' // Ensure the component itself doesn't scroll
        }}>
          <div className="cookie-preference_background" onClick={togglePreferences} style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
          }}></div>
          <div className="cookie-preference_wrapper" style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            minHeight: 'auto',
            maxHeight: '680px', // Increased height
            margin: '20px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '24px 24px 0 24px', // Padding on top and sides but not bottom
            zIndex: 1000,
            overflowY: 'auto', // Allow scrolling within the popup if needed
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div className="cookie-modal_title" style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              color: 'rgb(0, 0, 0)',
              marginBottom: '12px'
            }}>Cookie Settings</div>
            
            <div className="cookie-modal_description" style={{
              fontFamily: "'Open Sans Medium', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'rgb(0, 0, 0)',
              marginBottom: '16px'
            }}>
              By clicking "Accept All Cookies", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage and assist in our marketing efforts. View our <Link href="/cookie-policy" className="text-style-link" style={{color: '#347AE9', textDecoration: 'underline'}}>Cookie Policy</Link> for more information.
            </div>
            
            <form className="cookie-modal_form" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              flex: 1,
              paddingBottom: '20px' // Added some space before the button section
            }}>
              <div className="cookie-option" style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                paddingLeft: '36px'
              }}>
                <div className="checkbox-container" style={{
                  position: 'absolute',
                  left: '0',
                  top: '2px'
                }}>
                  <div className="custom-checkbox" style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#347AE9',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div className="check-mark" style={{
                      width: '10px',
                      height: '7px',
                      borderLeft: '2px solid white',
                      borderBottom: '2px solid white',
                      transform: 'rotate(-45deg)',
                      marginBottom: '2px'
                    }}></div>
                  </div>
                </div>
                <div className="option-heading" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '21px',
                  color: 'rgb(0, 0, 0)'
                }}>Strictly Necessary (Always Active)</div>
                <div className="option-description" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgb(0, 0, 0)'
                }}>Cookies required to enable basic website functionality.</div>
              </div>
              
              <div className="cookie-option" style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                paddingLeft: '36px'
              }}>
                <div className="checkbox-container" style={{
                  position: 'absolute',
                  left: '0',
                  top: '2px',
                  cursor: 'pointer'
                }} onClick={() => handleCheckboxChange('personalization')}>
                  <div className="custom-checkbox" style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: cookieSettings.personalization ? '#000000' : 'transparent',
                    border: cookieSettings.personalization ? 'none' : '2px solid #000',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cookieSettings.personalization && (
                      <div className="check-mark" style={{
                        width: '10px',
                        height: '7px',
                        borderLeft: '2px solid white',
                        borderBottom: '2px solid white',
                        transform: 'rotate(-45deg)',
                        marginBottom: '2px'
                      }}></div>
                    )}
                  </div>
                </div>
                <div className="option-heading" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '21px',
                  color: 'rgb(0, 0, 0)'
                }}>Personalisation</div>
                <div className="option-description" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgb(0, 0, 0)'
                }}>Cookies allowing the website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.</div>
              </div>
              
              <div className="cookie-option" style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                paddingLeft: '36px'
              }}>
                <div className="checkbox-container" style={{
                  position: 'absolute',
                  left: '0',
                  top: '2px',
                  cursor: 'pointer'
                }} onClick={() => handleCheckboxChange('analytics')}>
                  <div className="custom-checkbox" style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: cookieSettings.analytics ? '#000000' : 'transparent',
                    border: cookieSettings.analytics ? 'none' : '2px solid #000',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cookieSettings.analytics && (
                      <div className="check-mark" style={{
                        width: '10px',
                        height: '7px',
                        borderLeft: '2px solid white',
                        borderBottom: '2px solid white',
                        transform: 'rotate(-45deg)',
                        marginBottom: '2px'
                      }}></div>
                    )}
                  </div>
                </div>
                <div className="option-heading" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '21px',
                  color: 'rgb(0, 0, 0)'
                }}>Analytics</div>
                <div className="option-description" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgb(0, 0, 0)'
                }}>Cookies helping understand how this website performs, how visitors interact with the site, and whether there may be technical issues.</div>
              </div>
              
              <div className="cookie-option" style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                paddingLeft: '36px',
                marginBottom: '0'
              }}>
                <div className="checkbox-container" style={{
                  position: 'absolute',
                  left: '0',
                  top: '2px',
                  cursor: 'pointer'
                }} onClick={() => handleCheckboxChange('marketing')}>
                  <div className="custom-checkbox" style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: cookieSettings.marketing ? '#000000' : 'transparent',
                    border: cookieSettings.marketing ? 'none' : '2px solid #000',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cookieSettings.marketing && (
                      <div className="check-mark" style={{
                        width: '10px',
                        height: '7px',
                        borderLeft: '2px solid white',
                        borderBottom: '2px solid white',
                        transform: 'rotate(-45deg)',
                        marginBottom: '2px'
                      }}></div>
                    )}
                  </div>
                </div>
                <div className="option-heading" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '21px',
                  color: 'rgb(0, 0, 0)'
                }}>Marketing</div>
                <div className="option-description" style={{
                  fontFamily: "'Open Sans Medium', sans-serif",
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgb(0, 0, 0)'
                }}>Cookies used to deliver advertising that is more relevant to you and your interests.</div>
              </div>
            </form>

            <div className="button-group" style={{ 
              backgroundColor: '#F4EEE4',
              margin: '0 -24px 0 -24px', // Negative margin to extend to edges
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              borderBottomLeftRadius: '20px',
              borderBottomRightRadius: '20px',
            }}>
              <button 
                onClick={(e) => {e.preventDefault(); handleAllowAll();}} 
                className="primary-button"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  backgroundColor: '#347AE9',
                  color: 'white',
                  border: 'none',
                  borderRadius: '24px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  textAlign: 'center',
                  display: 'inline-block'
                }}
              >
                Accept All Cookies
              </button>
              
              <button 
                onClick={(e) => {e.preventDefault(); handleDenyAll();}} 
                className="secondary-button"
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  backgroundColor: 'transparent',
                  color: '#000',
                  border: '2px solid #000',
                  borderRadius: '24px',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  marginBottom: '4px',
                  textAlign: 'center',
                  display: 'inline-block'
                }}
              >
                Reject All Cookies
              </button>
              
              <button 
                onClick={(e) => {e.preventDefault(); handleSaveSettings();}} 
                className="text-button"
                style={{
                  backgroundColor: 'transparent',
                  color: '#000',
                  border: 'none',
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  padding: '4px',
                  textAlign: 'center',
                  display: 'inline-block',
                  margin: '0 auto'
                }}
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
      
      <a href="#" 
         className="cookie-preference-button w-inline-block" 
         onClick={(e) => {e.preventDefault(); togglePreferences();}}
         style={{
           position: 'fixed',
           bottom: '20px',
           right: '20px',
           backgroundColor: 'white',
           borderRadius: '50%',
           width: '42px',
           height: '42px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
           zIndex: 999,
           transition: 'transform 0.3s ease-out',
           transform: 'translateY(0)',
           animation: 'slideUp 0.5s ease-out'
         }}>
        <Cookie size={24} color="black" />
      </a>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
