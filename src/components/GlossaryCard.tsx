"use client";


import React from 'react';
import { useRouter } from 'next/navigation';


interface GlossaryCardProps {
  title: string;
  description: string;
  slug: string;
}

const GlossaryCard: React.FC<GlossaryCardProps> = ({ title, description, slug }) => {
  const navigate = useRouter();

  const handleClick = () => {
    navigate.push(`/entries/${slug}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: (typeof window !== 'undefined' ? window.innerWidth : 1024) <= 768 ? '100%' : '320px',
        height: '180px',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(52, 122, 233, 0.25)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0px 8px 32px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.borderColor = 'rgba(52, 122, 233, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0px 4px 24px rgba(0, 0, 0, 0.04)';
        e.currentTarget.style.borderColor = 'rgba(52, 122, 233, 0.25)';
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        gap: '12px'
      }}>
        <h3
          style={{
            fontFamily: '"Opensans Medium", sans-serif',
            fontSize: '20px',
            lineHeight: '24px',
            fontWeight: 300,
            fontStyle: 'normal',
            color: 'rgb(18, 18, 18)',
            textAlign: 'left',
            margin: 0,
            width: '100%'
          }}
        >
          {title}
        </h3>
        
        <p
          style={{
            fontFamily: '"Opensans Medium", sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            fontWeight: 500,
            fontStyle: 'normal',
            color: 'rgb(175, 175, 175)',
            textAlign: 'left',
            margin: 0,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            width: '100%'
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default GlossaryCard;
