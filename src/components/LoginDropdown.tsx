"use client";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface LoginDropdownProps {
  variant?: 'lawfirms' | 'default';
  isMobile?: boolean;
}

const LoginDropdown = ({ variant = 'default', isMobile = false }: LoginDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isLawFirms = variant === 'lawfirms';
  const borderColor = isLawFirms ? '#1C1C1C' : '#347AE9';
  const textColor = isLawFirms ? '#1C1C1C' : '#347AE9';

  const firstHref = isLawFirms ? 'https://venture.sule.io' : 'https://perfect-afternoon-22.authkit.app/';
  const firstLabel = isLawFirms ? 'Law Firm Login' : 'Founders Login';
  const secondHref = isLawFirms ? 'https://perfect-afternoon-22.authkit.app/' : 'https://venture.sule.io';
  const secondLabel = isLawFirms ? 'Founders Login' : 'Law Firm Login';

  // Mobile: render inline links instead of a dropdown
  if (isMobile) {
    const buttonStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      padding: isLawFirms ? '16px 32px' : '12px 24px',
      border: `2px solid ${borderColor}`,
      color: textColor,
      backgroundColor: isLawFirms ? '#FFFFFF' : 'transparent',
      borderRadius: isLawFirms ? '100px' : '24px',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      fontFamily: isLawFirms ? '"Geist", sans-serif' : undefined,
      height: isLawFirms ? '52px' : '48px',
      cursor: 'pointer',
      width: '100%',
    };

    const mobileOptionStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px 24px',
      color: '#1C1C1C',
      backgroundColor: '#F9FAFB',
      borderRadius: isLawFirms ? '100px' : '24px',
      border: '1px solid #E5E7EB',
      textDecoration: 'none',
      fontSize: '15px',
      fontWeight: '500',
      fontFamily: '"Geist", sans-serif',
      height: '44px',
      width: '100%',
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
        <button onClick={() => setIsOpen(!isOpen)} style={buttonStyle}>
          <span>{isLawFirms ? 'Log In' : 'Log in'}</span>
          <ChevronDown
            size={16}
            style={{
              transition: 'transform 0.2s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </button>
        {isOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <a href={firstHref} style={mobileOptionStyle}>{firstLabel}</a>
            <a href={secondHref} style={mobileOptionStyle}>{secondLabel}</a>
          </div>
        )}
      </div>
    );
  }

  // Desktop: dropdown behavior
  const buttonStyle: React.CSSProperties = {
    border: `2px solid ${borderColor}`,
    color: textColor,
    borderRadius: '24px',
    padding: '12px 28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    backgroundColor: isLawFirms ? '#FFFFFF' : 'transparent',
    height: '50px',
    fontFamily: isLawFirms ? '"Geist", sans-serif' : undefined,
    cursor: 'pointer',
    position: 'relative' as const,
  };

  const dropdownStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '8px',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
    border: '1px solid #E5E7EB',
    minWidth: '200px',
    zIndex: 9999,
    overflow: 'hidden',
  };

  const itemStyle: React.CSSProperties = {
    display: 'block',
    padding: '12px 20px',
    color: '#1C1C1C',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: '"Geist", sans-serif',
    transition: 'background-color 0.15s ease',
    whiteSpace: 'nowrap',
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={buttonStyle}
      >
        <span>{isLawFirms ? 'Log In' : 'Log in'}</span>
        <ChevronDown
          size={16}
          style={{
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {isOpen && (
        <div style={dropdownStyle}>
          <a
            href={firstHref}
            style={itemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            onClick={() => setIsOpen(false)}
          >
            {firstLabel}
          </a>
          <div style={{ height: '1px', backgroundColor: '#E5E7EB' }} />
          <a
            href={secondHref}
            style={itemStyle}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#F5F5F5')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            onClick={() => setIsOpen(false)}
          >
            {secondLabel}
          </a>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
