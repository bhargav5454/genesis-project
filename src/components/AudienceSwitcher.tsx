"use client";
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface AudienceSwitcherProps {
  isHidden?: boolean;
  style?: React.CSSProperties;
}

const AudienceSwitcher = ({ isHidden = false, style }: AudienceSwitcherProps) => {
  const navigate = useRouter();
  const location = usePathname();
  
  const isStartups = location.startsWith('/for-startups');
  
  const handleLawFirmsClick = () => {
    if (location !== '/') {
      navigate.push('/');
    }
  };
  
  const handleStartupsClick = () => {
    if (location !== '/for-startups') {
      navigate.push('/for-startups');
    }
  };

  return (
    <div className="audience-switcher-wrapper" style={{
      backgroundColor: '#FFFEFB',
      width: '100%',
      paddingTop: '10px',
      paddingBottom: '8px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1020,
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.3s ease-in-out',
      ...style,
    }}>
      <style>{`
        @media (max-width: 768px) {
          .audience-switcher-wrapper {
            padding-top: 10px !important;
            padding-bottom: 6px !important;
            height: 44px !important;
            box-sizing: border-box !important;
          }
          .audience-switcher-wrapper > .padding-global {
            padding: 0 0 0 0 !important;
          }
          .audience-switcher-wrapper .audience-switcher-container {
            padding: 0 16px !important;
            justify-content: flex-start !important;
            margin: 0 !important;
            max-width: none !important;
          }
          .audience-switcher-wrapper button {
            padding: 4px 12px !important;
            font-size: 11px !important;
          }
        }
      `}</style>
      <div className="padding-global">
        <div className="audience-switcher-container container-large" style={{ 
          display: 'flex', 
          justifyContent: 'flex-start',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {/* Toggle container - no frame */}
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            {/* For Law Firms Button */}
            <button
              onClick={handleLawFirmsClick}
              style={{
                padding: '5px 14px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: !isStartups ? '#484848' : '#EEECE6',
                color: !isStartups ? '#FFFFFF' : '#1c1c1c',
                fontFamily: '"Geist", sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              For Law Firms
            </button>
            
            {/* For Startups Button */}
            <button
              onClick={handleStartupsClick}
              style={{
                padding: '5px 14px',
                borderRadius: '100px',
                border: 'none',
                backgroundColor: isStartups ? '#484848' : '#EEECE6',
                color: isStartups ? '#FFFFFF' : '#1c1c1c',
                fontFamily: '"Geist", sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
            >
              For Startups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceSwitcher;
