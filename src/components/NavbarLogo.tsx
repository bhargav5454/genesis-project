"use client";
import suleVentureLogo from '@/assets/sule_venture_logo.svg';

const startupsLogo = '/images/SuLeLogo.png';
const lawFirmsLogo = suleVentureLogo;

interface NavbarLogoProps {
  variant: 'default' | 'lawfirms';
}

const NavbarLogo = ({ variant }: NavbarLogoProps) => {
  const currentLogo = variant === 'lawfirms' ? lawFirmsLogo : startupsLogo;

  return (
    <div style={{ 
      minWidth: '78px', 
      height: '41px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'flex-start' 
    }}>
      <img 
        src={currentLogo} 
        alt="SuLe Logo" 
        className={`logo ${variant === 'lawfirms' ? 'logo-lawfirms' : ''}`}
        style={{ 
          height: variant === 'lawfirms' ? '41px' : '28px', 
          width: 'auto',
          maxWidth: 'none'
        }} 
      />
    </div>
  );
};

export default NavbarLogo;
