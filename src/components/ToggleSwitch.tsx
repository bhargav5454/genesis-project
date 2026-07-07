"use client";


import React from 'react';

interface ToggleSwitchProps {
  options: string[];
  selectedOption: string;
  onToggle: (option: string) => void;
  backgroundColor?: string;
  textColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ options, selectedOption, onToggle, backgroundColor = 'rgb(238, 238, 238)', textColor }) => {
  const selectedIndex = options.indexOf(selectedOption);
  
  return (
    <div style={{
      display: 'inline-flex',
      backgroundColor,
      borderRadius: '24px',
      padding: '2px',
      gap: '2px',
      width: '100%',
      height: '48px',
      position: 'relative'
    }}>
      {/* Sliding background indicator */}
      <div
        style={{
          position: 'absolute',
          top: '2px',
          left: selectedIndex === 0 ? '2px' : '50%',
          width: 'calc(50% - 1px)',
          height: 'calc(100% - 4px)',
          backgroundColor: '#F9F7F3',
          borderRadius: '20px',
          transition: 'left 0.3s ease-in-out',
          zIndex: 1
        }}
      />
      
      {options.map((option, index) => (
        <button
          key={option}
          onClick={() => onToggle(option)}
          style={{
            padding: '0 16px',
            borderRadius: '20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: '"Opensans Medium", sans-serif',
            backgroundColor: 'transparent',
            color: index === selectedIndex ? '#121212' : (textColor ?? '#121212'),
            transition: 'color 0.3s ease-in-out',
            flex: 1,
            position: 'relative',
            zIndex: 2
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;
