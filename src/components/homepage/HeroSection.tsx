"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRouter, usePathname } from 'next/navigation';

const legalPlaceholders = [
  "Can a lawyer review our shareholders' agreement?",
  "I need legal advice on our seed round documents.",
  "Can someone check our new investor term sheet?",
  "I need a lawyer to review our founder agreement.",
  "Can you get a lawyer to look at our Articles?",
  "Can a lawyer review this SaaS customer contract?",
  "Can someone check our contractor agreement for IP ownership?",
  "I need a lawyer to review our first employment contract.",
  "Can a lawyer look over our NDA before we use it?",
  "Can someone review our website terms and privacy policy?",
  "I need a lawyer's view on a tricky investor clause.",
  "Can a lawyer check this loan note we're about to sign?"
];

const sulePlaceholders = [
  "What's the difference between Articles and a shareholders' agreement?",
  "What is a cap table, in simple terms?",
  "What does 'pre-emption' mean for our shares?",
  "What is drag-along and tag-along?",
  "What does a director legally have to do in a UK start-up?",
  "We've just raised a round, what should we update next?",
  "Who owns the code if a freelancer builds our MVP?",
  "What's the difference between a trade mark and a company name?",
  "Can we safely use open-source code in our app?",
  "What's the difference between an employee and a freelancer?",
  "What is an ASA or SAFE?",
  "What should a founder look for in an NDA?"
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [mode, setMode] = useState<'sule' | 'legal'>('sule');
  const [needsScroll, setNeedsScroll] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const navigate = useRouter();
  
  const currentPlaceholders = mode === 'sule' ? sulePlaceholders : legalPlaceholders;
  const currentPlaceholder = currentPlaceholders[placeholderIndex % currentPlaceholders.length];
  
  const { ref: sectionRef } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: bottomRef } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect: type in, pause, delete out, then next
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      if (!isDeleting) {
        // Typing in
        if (charIndex < currentPlaceholder.length) {
          setDisplayedPlaceholder(currentPlaceholder.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, 25);
        } else {
          // Finished typing, pause then start deleting
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 1500);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          charIndex--;
          setDisplayedPlaceholder(currentPlaceholder.slice(0, charIndex));
          timeout = setTimeout(type, 25);
        } else {
          // Finished deleting, move to next placeholder
          setPlaceholderIndex(prev => prev + 1);
        }
      }
    };
    
    type();
    
    return () => clearTimeout(timeout);
  }, [currentPlaceholder, placeholderIndex]);

  // Reset placeholder index when mode changes
  useEffect(() => {
    setDisplayedPlaceholder('');
    setPlaceholderIndex(Math.floor(Math.random() * currentPlaceholders.length));
  }, [mode]);

  const scrollThreshold = typeof window !== 'undefined' ? window.innerHeight * 0.5 : 500;
  const scrollProgress = Math.min(scrollY / scrollThreshold, 1);
  const contentOpacity = Math.max(1 - scrollProgress * 1.5, 0);
  const contentTransform = `translateY(-${scrollProgress * 40}px)`;
  const imageScale = 1 + scrollProgress * 0.1;
  const imageTranslate = `-${scrollProgress * 70}px`;
  const imageOpacity = 0.7 + scrollProgress * 0.3;

  const suggestions = [
    'Incorporate my business',
    'Draft a contract',
    'Review a document',
    'Get compliance advice',
    'Protect my IP'
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  const location = usePathname();

  const handleSend = async () => {
    const trimmedValue = inputValue.trim();
    if (!trimmedValue) return;
    const questionType = mode === 'sule' ? 'AI_FAQ' : 'LEGAL_ADVICE';
    const fromParam = location.startsWith('/for-startups') ? '&from=startups' : '';
    navigate.push(`/chat?q=${encodeURIComponent(trimmedValue)}&type=${questionType}${fromParam}`);
  };

  const isButtonDisabled = !inputValue.trim();

  return (
    <>
      <header
        ref={sectionRef}
        className="section_home-header" 
        style={{ 
          backgroundColor: '#FFFEFC',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '32px',
          paddingTop: '140px',
          paddingBottom: '48px',
          minHeight: 'auto',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Content section */}
        <div 
          className="padding-global"
          style={{ 
            position: 'relative', 
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            paddingTop: '16px',
            paddingBottom: '16px',
            opacity: contentOpacity,
            transform: contentTransform,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            marginBottom: '32px'
          }}
        >
          <div className="container-large" style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            padding: '0 24px'
          }}>
            <div className="home-header_content" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              maxWidth: '800px',
              margin: '0 auto',
              marginTop: '10px'
            }}>
              {/* Reduced headline */}
              <h1 className="heading-style-h1 dm-serif" style={{ 
                fontFamily: 'DM Serif Display, serif',
                color: '#000000',
                fontSize: '48px',
                lineHeight: '1.15',
                marginBottom: '16px',
                marginTop: '-70px',
                fontWeight: 'normal'
              }}>
                Complete legal support,<br />
                for startups
              </h1>
              
              {/* Reduced subtext */}
              <p className="text-size-medium" style={{ 
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.5',
                color: 'rgb(80, 80, 80)',
                maxWidth: '680px',
                marginBottom: '80px'
              }}>
                Spend less time understanding legal and more time making money for your business.
              </p>
              
              {/* Chat Input Container */}
              <div 
                className="chat-input-container"
                style={{
                  width: '100%',
                  maxWidth: '720px',
                  backgroundColor: '#F9F7F3',
                  borderRadius: '16px',
                  padding: '18px 20px',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.04)',
                  marginBottom: '20px'
                }}
              >
                {/* Top row: Input + Send Button */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '28px',
                  position: 'relative'
                }}>
                  {/* SuLe icon */}
                  <img 
                    className="chatbox-logo"
                    src="/images/sule-icon.png" 
                    alt="SuLe" 
                    style={{
                      width: '20px',
                      height: 'auto',
                      opacity: 0.7,
                      flexShrink: 0,
                      marginTop: '-28px'
                    }}
                  />
                  
                  {/* Text input wrapper */}
                  <div className="textarea-wrapper" style={{ flex: 1, position: 'relative', marginTop: '0px' }}>
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(e) => {
                        const value = e.target.value;
                      if (value.length <= 500) {
                          setInputValue(value);
                          // Check if scroll is needed and scroll to bottom
                          setTimeout(() => {
                            if (textareaRef.current) {
                              const shouldScroll = value.length > 0 && 
                                textareaRef.current.scrollHeight > 46;
                              setNeedsScroll(shouldScroll);
                              if (shouldScroll) {
                                textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
                              } else {
                                textareaRef.current.scrollTop = 0;
                              }
                            }
                          }, 0);
                        }
                      }}
                      onPaste={(e) => {
                        e.preventDefault();
                        const pastedText = e.clipboardData.getData('text');
                        const currentLength = inputValue.length;
                        const remainingSpace = 500 - currentLength;
                        const textToAdd = pastedText.slice(0, remainingSpace);
                        const newValue = inputValue + textToAdd;
                        setInputValue(newValue);
                        // Check if scroll is needed and scroll to bottom
                        setTimeout(() => {
                          if (textareaRef.current) {
                            const shouldScroll = newValue.length > 0 && 
                              textareaRef.current.scrollHeight > 46;
                            setNeedsScroll(shouldScroll);
                            if (shouldScroll) {
                              textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
                            }
                          }
                        }, 0);
                      }}
                      placeholder={displayedPlaceholder}
                      className="hero-textarea"
                      rows={1}
                      style={{
                        width: '100%',
                        border: 'none',
                        background: 'transparent',
                        fontSize: '15px',
                        fontFamily: 'Open Sans, sans-serif',
                        color: '#1a1a1a',
                        outline: 'none',
                        padding: '0',
                        resize: 'none',
                        overflowY: needsScroll ? 'auto' : 'hidden',
                        overflowX: 'hidden',
                        height: '46px',
                        minHeight: '46px',
                        maxHeight: '46px',
                        lineHeight: '23px'
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSend();
                        }
                      }}
                    />
                  </div>
                  
                  {/* Send button - desktop */}
                  <button
                    className="send-button-desktop"
                    onClick={handleSend}
                    disabled={isButtonDisabled}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: isButtonDisabled ? '#9CA3AF' : '#347AE9',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '7px 14px',
                      fontSize: '13px',
                      fontWeight: 500,
                      fontFamily: 'Inter, sans-serif',
                      cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.2s ease',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                      opacity: isButtonDisabled ? 0.6 : 1
                    }}
                    onMouseEnter={(e) => !isButtonDisabled && (e.currentTarget.style.backgroundColor = '#2B68C4')}
                    onMouseLeave={(e) => !isButtonDisabled && (e.currentTarget.style.backgroundColor = '#347AE9')}
                  >
                    {mode === 'sule' ? 'Ask SuLe' : 'Get legal advice'}
                    <img src="/images/send-icon.png" alt="Send" style={{ width: '12px', height: '12px' }} />
                  </button>
                </div>
                
                {/* Mobile character counter - above divider, shows at 400+ characters */}
                <div className="mobile-char-counter" style={{
                  display: 'none',
                  fontSize: '11px',
                  fontFamily: 'Inter, sans-serif',
                  color: inputValue.length >= 500 ? '#EF4444' : '#6B7280',
                  marginBottom: '12px',
                  visibility: inputValue.length >= 400 ? 'visible' : 'hidden',
                  textAlign: 'left'
                }}>
                  {inputValue.length}/500
                </div>
                
                {/* Horizontal divider */}
                <div className="chat-divider" style={{
                  width: '100%',
                  height: '1px',
                  backgroundColor: 'rgba(0, 0, 0, 0.06)',
                  marginBottom: '12px'
                }} />
                
                {/* Bottom row: Character counter + Toggle + Mobile Send */}
                <div className="bottom-row" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  {/* Character counter - desktop only, shows at 400+ characters */}
                  <div className="char-counter" style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, sans-serif',
                    color: inputValue.length >= 500 ? '#EF4444' : '#6B7280',
                    visibility: inputValue.length >= 400 ? 'visible' : 'hidden'
                  }}>
                    {inputValue.length}/500
                  </div>
                  <div 
                    className="mode-toggle"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      backgroundColor: '#FFFFFF',
                      borderRadius: '8px',
                      padding: '4px',
                      border: '1px solid rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    <button
                      onClick={() => setMode('legal')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: mode === 'legal' ? '#F9F7F3' : 'transparent',
                        color: mode === 'legal' ? '#1a1a1a' : '#6B7280',
                        fontSize: '12px',
                        fontWeight: 500,
                        fontFamily: 'Inter, sans-serif',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minWidth: '110px'
                      }}
                    >
                      <img src="/images/legal-advice-icon.png" alt="Legal" style={{ width: '16px', height: 'auto' }} />
                      Legal Advice
                    </button>
                    <button
                      onClick={() => setMode('sule')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: mode === 'sule' ? '#F9F7F3' : 'transparent',
                        color: mode === 'sule' ? '#1a1a1a' : '#6B7280',
                        fontSize: '12px',
                        fontWeight: 500,
                        fontFamily: 'Inter, sans-serif',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        minWidth: '110px'
                      }}
                    >
                      <img src="/images/sule-icon-dark.png" alt="SuLe" style={{ width: '20px', height: 'auto' }} />
                      Ask SuLe
                    </button>
                  </div>
                  
                  {/* Send button - mobile only */}
                  <button
                    className="send-button-mobile"
                    onClick={handleSend}
                    disabled={isButtonDisabled}
                    style={{
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: isButtonDisabled ? '#9CA3AF' : '#347AE9',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      padding: '0',
                      cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
                      transition: 'background-color 0.2s ease',
                      flexShrink: 0,
                      opacity: isButtonDisabled ? 0.6 : 1
                    }}
                    onMouseEnter={(e) => !isButtonDisabled && (e.currentTarget.style.backgroundColor = '#2B68C4')}
                    onMouseLeave={(e) => !isButtonDisabled && (e.currentTarget.style.backgroundColor = '#347AE9')}
                  >
                    <img src="/images/send-icon.png" alt="Send" style={{ width: '16px', height: '16px' }} />
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div style={{ 
          flex: '0 0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <img 
            src="/images/Desktop---86.svg" 
            alt="SuLe platform preview" 
            className="home-header_image" 
            style={{ 
              display: 'block',
              width: '85%',
              maxWidth: '1250px',
              height: 'auto',
              transform: `translateY(${imageTranslate}) scale(${imageScale})`,
              opacity: imageOpacity,
              transition: 'transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1), opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1)',
              willChange: 'transform, opacity',
              position: 'relative',
              zIndex: 2,
              background: 'none',
              boxShadow: 'none',
              border: 'none',
              borderRadius: '0',
              mixBlendMode: 'normal'
            }}
          />
        </div>

        <div ref={bottomRef} style={{ position: 'absolute', bottom: '0', height: '1px', width: '100%' }}></div>
      </header>

      {/* Placeholder fade and mobile-specific styles */}
      <style>{`
        .hero-textarea::placeholder {
          transition: opacity 0.15s ease-out;
        }
        .hero-textarea.placeholder-visible::placeholder {
          opacity: 0.6;
        }
        .hero-textarea.placeholder-hidden::placeholder {
          opacity: 0;
        }
        
        @media (max-width: 768px) {
          .section_home-header {
            background-color: #FFFEFB !important;
            padding-top: 24px !important;
            padding-bottom: 32px !important;
            margin-bottom: 0 !important;
          }
          
          .padding-global {
            padding: 0 16px 0 16px !important;
            margin-bottom: 16px !important;
          }
          
          .container-large {
            max-width: 100% !important;
            padding: 0 !important;
          }
          
          .home-header_content {
            max-width: 100% !important;
          }
          
          .heading-style-h1 {
            font-size: 44px !important;
            line-height: 1.15 !important;
            margin-bottom: 20px !important;
            margin-top: 0 !important;
          }
          
          .text-size-medium {
            font-size: 13px !important;
            line-height: 1.4 !important;
            max-width: 320px !important;
            margin-bottom: 48px !important;
          }
          
          .chat-input-container {
            padding: 10px 18px 24px 18px !important;
            height: 190px !important;
            max-height: 190px !important;
            min-height: 190px !important;
            overflow: hidden !important;
          }
          
          .chat-input-container input,
          .chat-input-container textarea {
            font-size: 14px !important;
          }
          
          .chat-input-container textarea::placeholder {
            font-size: 15px !important;
          }
          
          /* Make textarea grow downward on mobile */
          .chat-input-container .input-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          
          .chat-input-container .input-row > div:first-child {
            width: 100% !important;
          }
          
          .chat-input-container textarea {
            height: 69px !important;
            min-height: 69px !important;
            max-height: 69px !important;
            resize: none !important;
          }
          
          .textarea-wrapper {
            height: 48px !important;
            min-height: 48px !important;
            max-height: 48px !important;
          }
          
          .chatbox-logo {
            margin-top: -24px !important;
          }
          
          /* Hide desktop send button on mobile */
          .send-button-desktop {
            display: none !important;
          }
          
          /* Show mobile send button */
          .send-button-mobile {
            display: flex !important;
          }
          
          /* Bottom row layout for mobile */
          .bottom-row {
            justify-content: space-between !important;
          }
          
          /* Show mobile character counter */
          .mobile-char-counter {
            display: block !important;
          }
          
          /* Hide desktop character counter on mobile */
          .char-counter {
            display: none !important;
          }
          
          .mode-toggle {
            width: auto !important;
            justify-content: flex-start !important;
            height: 40px !important;
            padding: 4px !important;
            box-sizing: border-box !important;
          }
          
          .mode-toggle button {
            height: 32px !important;
            padding: 0 10px !important;
          }
          
          .suggestion-pills {
            gap: 8px !important;
          }
          
          .suggestion-pills button {
            padding: 8px 14px !important;
            font-size: 13px !important;
          }
          
          .home-header_image {
            width: 90% !important;
            max-width: 324px !important;
            border-radius: 8px !important;
            margin-top: 20px !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
        
        @media (max-width: 480px) {
          .heading-style-h1 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
