"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import NavbarLogo from './NavbarLogo'
import LoginDropdown from './LoginDropdown'
import { lawFirmsFeatures } from '@/data/lawFirmsFeatures'
import { lawFirmsAudiences } from '@/data/lawFirmsAudiences'
import megaMenuFeatureImage from '@/assets/lawfirms/mega-menu-feature.png'

const Navbar = ({ bannerHeight = 0, showStroke = false, variant = 'default', isHidden = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuClosing, setIsMenuClosing] = useState(false)
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false)
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false)
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false)
  const [isAudiencesDropdownOpen, setIsAudiencesDropdownOpen] = useState(false)
  const [isMobilePlatformOpen, setIsMobilePlatformOpen] = useState(false)
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false)
  const [isMobileFeaturesOpen, setIsMobileFeaturesOpen] = useState(false)
  const [isMobileAudiencesOpen, setIsMobileAudiencesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Close dropdowns when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (isPlatformDropdownOpen || isResourcesDropdownOpen || isFeaturesDropdownOpen || isAudiencesDropdownOpen) {
        const navbarElement = document.querySelector('.navbar_component')
        const megaMenuElement = document.querySelector('.mega-menu-overlay')
        if (navbarElement && megaMenuElement && 
            !navbarElement.contains(event.target as Node) && 
            !megaMenuElement.contains(event.target as Node)) {
          setIsPlatformDropdownOpen(false)
          setIsResourcesDropdownOpen(false)
          setIsFeaturesDropdownOpen(false)
          setIsAudiencesDropdownOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isPlatformDropdownOpen, isResourcesDropdownOpen, isFeaturesDropdownOpen, isAudiencesDropdownOpen])

  useEffect(() => {
    // Prevent scrolling when mega menu is open
    if (isPlatformDropdownOpen || isResourcesDropdownOpen || isFeaturesDropdownOpen || isAudiencesDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPlatformDropdownOpen, isResourcesDropdownOpen, isFeaturesDropdownOpen, isAudiencesDropdownOpen]);

  useEffect(() => {
    // Close mobile menu on scroll with animation
    const handleScrollClose = () => {
      if (isMenuOpen && !isMenuClosing) {
        setIsMenuClosing(true);
        setTimeout(() => {
          setIsMenuOpen(false);
          setIsMenuClosing(false);
          setIsMobilePlatformOpen(false);
          setIsMobileResourcesOpen(false);
        }, 200);
      }
    };

    if (isMenuOpen) {
      window.addEventListener('scroll', handleScrollClose);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isMenuOpen, isMenuClosing]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Reset mobile dropdowns when closing menu
    if (isMenuOpen) {
      setIsMobilePlatformOpen(false)
      setIsMobileResourcesOpen(false)
    }
  }

  const togglePlatformDropdown = () => {
    setIsPlatformDropdownOpen(!isPlatformDropdownOpen)
    if (!isPlatformDropdownOpen) {
      setIsResourcesDropdownOpen(false)
    }
  }

  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
    if (!isResourcesDropdownOpen) {
      setIsPlatformDropdownOpen(false)
    }
  }

  const toggleMobilePlatform = () => {
    setIsMobilePlatformOpen(!isMobilePlatformOpen)
    if (!isMobilePlatformOpen) {
      setIsMobileResourcesOpen(false)
    }
  }

  const toggleMobileResources = () => {
    setIsMobileResourcesOpen(!isMobileResourcesOpen)
    if (!isMobileResourcesOpen) {
      setIsMobilePlatformOpen(false)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not on its children
    if (e.target === e.currentTarget) {
      setIsPlatformDropdownOpen(false)
      setIsResourcesDropdownOpen(false)
      setIsFeaturesDropdownOpen(false)
      setIsAudiencesDropdownOpen(false)
    }
  }

  const handleExplorePlatform = () => {
    setIsPlatformDropdownOpen(false)
    navigate.push('/platform')
    // Scroll to top or a specific section if already on platform page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false)
    setIsMobilePlatformOpen(false)
    setIsMobileResourcesOpen(false)
    setIsMobileFeaturesOpen(false)
    setIsMobileAudiencesOpen(false)
  }

  return (
    <>
      <div className={`navbar w-nav ${scrolled ? 'navbar-scrolled' : ''} ${isPlatformDropdownOpen || isResourcesDropdownOpen ? 'mega-menu-open' : ''}`} style={{ 
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        top: `${bannerHeight}px`,
        left: 0,
        right: 0,
        zIndex: 1010,
        transform: isHidden ? `translateY(calc(-100% - ${bannerHeight}px))` : 'translateY(0)',
        transition: 'transform 0.3s ease-in-out, top 0.3s ease-in-out',
      }}>
        <div className="navbar_component" style={{ backgroundColor: '#FFFFFF', boxShadow: 'none', position: 'relative', zIndex: 1010, borderBottom: showStroke ? '1px solid #E5E7EB' : 'none' }}>
          <div className="padding-global">
            <div className="container-large navbar-container" style={{ padding: '14px 20px 14px 20px' }}>
                <Link href={variant === 'lawfirms' ? '/' : '/for-startups'} className="brand-wrapper w-nav-brand" style={{ marginLeft: variant === 'lawfirms' ? '8px' : '0', position: 'relative', zIndex: 1002 }}>
                  <NavbarLogo variant={variant === 'lawfirms' ? 'lawfirms' : 'default'} />
                </Link>
              
              <nav role="navigation" className="nav-menu w-nav-menu desktop-nav" style={{ position: 'relative', zIndex: 1002 }}>
                {variant === 'lawfirms' ? (
                  <div className="navbar-links-container" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div className="navbar_menu-dropdown w-dropdown" style={{ position: 'relative', zIndex: 1002 }}>
                      <div
                        className="navbar_dropdwn-toggle w-dropdown-toggle"
                        onClick={() => { setIsFeaturesDropdownOpen((v) => !v); setIsAudiencesDropdownOpen(false); }}
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', zIndex: 1002 }}
                      >
                        <div style={{
                          color: '#1C1C1C',
                          fontFamily: '"Geist", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          paddingTop: '4px',
                          paddingBottom: '4px',
                          borderBottom: isFeaturesDropdownOpen ? '2px solid #1C1C1C' : '2px solid transparent',
                        }}>Features</div>
                        <div className="dropdown-chevron" style={{ marginLeft: '4px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="navbar_menu-dropdown w-dropdown" style={{ position: 'relative', zIndex: 1002 }}>
                      <div
                        className="navbar_dropdwn-toggle w-dropdown-toggle"
                        onClick={() => { setIsAudiencesDropdownOpen((v) => !v); setIsFeaturesDropdownOpen(false); }}
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', zIndex: 1002 }}
                      >
                        <div style={{
                          color: '#1C1C1C',
                          fontFamily: '"Geist", sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          paddingTop: '4px',
                          paddingBottom: '4px',
                          borderBottom: isAudiencesDropdownOpen ? '2px solid #1C1C1C' : '2px solid transparent',
                        }}>Who is this for</div>
                        <div className="dropdown-chevron" style={{ marginLeft: '4px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Link href="/for-law-firms/who-we-are" style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#1C1C1C',
                      textDecoration: 'none',
                      position: 'relative',
                      zIndex: 1002,
                      fontFamily: '"Geist", sans-serif',
                      fontSize: '16px',
                      fontWeight: 500,
                      lineHeight: 'normal',
                      padding: 0,
                    }}>
                      <div style={{ paddingTop: '4px', paddingBottom: '4px', borderBottom: '2px solid transparent' }}>About us</div>
                    </Link>
                  </div>
                ) : (
                  <div className="navbar-links-container" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <div className="navbar_menu-dropdown w-dropdown" style={{ position: 'relative', zIndex: 1002 }}>
                      <div 
                        className="navbar_dropdwn-toggle w-dropdown-toggle" 
                        onClick={togglePlatformDropdown} 
                        style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', position: 'relative', zIndex: 1002 }}
                      >
                        <div className="nav-chip-flexbox" style={{ display: 'flex', alignItems: 'center' }}>
                          <div className="text-weight-semibold" style={{ color: '#1C1C1C' }}>Platform</div>
                        </div>
                        <div className="dropdown-chevron" style={{ marginLeft: '4px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Link href="/who-we-are" className="nav-link w-nav-link" style={{ color: '#1C1C1C', textDecoration: 'none', position: 'relative', zIndex: 1002 }}>About us</Link>
                    <div className="navbar_menu-dropdown w-dropdown" style={{ position: 'relative', zIndex: 1002 }}>
                      <div className="navbar_dropdwn-toggle w-dropdown-toggle" onClick={toggleResourcesDropdown} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <div className="text-weight-semibold" style={{ color: '#1C1C1C' }}>Resources</div>
                        <div className="dropdown-chevron" style={{ marginLeft: '4px' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="navbar-button-wrapper" style={{ display: 'flex', gap: '8px', marginLeft: variant === 'lawfirms' ? '0' : '32px', marginRight: '0', position: 'relative', zIndex: 1002 }}>
                  {variant === 'lawfirms' ? (
                    <>
                      <LoginDropdown variant="lawfirms" />
                      <a href="https://calendly.com/startup-legals/law-firm-demo" target="_blank" rel="noopener noreferrer" className="button is-small w-button" style={{ 
                        backgroundColor: '#1C1C1C', 
                        color: 'white',
                        borderRadius: '24px',
                        padding: '12px 28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: '500',
                        height: '50px',
                        minWidth: '160px',
                        whiteSpace: 'nowrap',
                        fontFamily: '"Geist", sans-serif',
                      }}>Book a Demo</a>
                    </>
                  ) : (
                    <>
                      <LoginDropdown variant="default" />
                      <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-small w-button" style={{ 
                        backgroundColor: '#347AE9', 
                        color: 'white',
                        borderRadius: '24px',
                        padding: '12px 28px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: '500',
                        height: '50px',
                        minWidth: '160px',
                        whiteSpace: 'nowrap'
                      }}>Sign up for free</a>
                    </>
                  )}
                </div>
              </nav>

              {/* Mobile Menu Button */}
              <div className="menu-button w-nav-button mobile-menu-button" onClick={toggleMenu} style={{ display: 'none', position: 'relative', zIndex: 1002 }}>
                {isMenuOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black" />}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mobile-nav-menu" style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1001,
            maxHeight: `calc(100vh - 76px - ${bannerHeight}px)`,
            overflowY: 'auto',
            padding: '20px',
            opacity: isMenuClosing ? 0 : 1,
            transform: isMenuClosing ? 'translateY(-10px)' : 'translateY(0)',
            transition: 'opacity 0.2s ease-out, transform 0.2s ease-out'
          }}>
            {/* Law Firms Mobile Menu - About Us link + buttons */}
            {variant === 'lawfirms' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '8px 0' }}>
                <div>
                  <div
                    onClick={() => setIsMobileFeaturesOpen((v) => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 0',
                      cursor: 'pointer',
                      borderBottom: '1px solid #E5E7EB',
                    }}
                  >
                    <span style={{
                      color: '#1C1C1C',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: '"Geist", sans-serif',
                    }}>Features</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none" style={{
                      transform: isMobileFeaturesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  {isMobileFeaturesOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '12px 0 4px' }}>
                      {lawFirmsFeatures.map((f) => (
                        <Link
                          key={f.slug}
                          href={`/for-law-firms/features/${f.slug}`}
                          onClick={handleMobileLinkClick}
                          style={{
                            color: '#1C1C1C',
                            textDecoration: 'none',
                            fontFamily: '"Geist", sans-serif',
                            fontSize: 15,
                            fontWeight: 500,
                            padding: '6px 0',
                          }}
                        >
                          {f.navTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <div
                    onClick={() => setIsMobileAudiencesOpen((v) => !v)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 0',
                      cursor: 'pointer',
                      borderBottom: '1px solid #E5E7EB',
                    }}
                  >
                    <span style={{
                      color: '#1C1C1C',
                      fontSize: '16px',
                      fontWeight: 500,
                      fontFamily: '"Geist", sans-serif',
                    }}>Who is this for</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 25 25" fill="none" style={{
                      transform: isMobileAudiencesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  {isMobileAudiencesOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '12px 0 4px' }}>
                      {lawFirmsAudiences.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/for-law-firms/audiences/${a.slug}`}
                          onClick={handleMobileLinkClick}
                          style={{
                            color: '#1C1C1C',
                            textDecoration: 'none',
                            fontFamily: '"Geist", sans-serif',
                            fontSize: 15,
                            fontWeight: 500,
                            padding: '6px 0',
                          }}
                        >
                          {a.navTitle}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link 
                  href="/for-law-firms/who-we-are" 
                  onClick={handleMobileLinkClick}
                  style={{ 
                    color: '#1C1C1C',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: '"Geist", sans-serif',
                    padding: '12px 0',
                    borderBottom: '1px solid #E5E7EB',
                  }}
                >
                  About Us
                </Link>
                <LoginDropdown variant="lawfirms" isMobile />
                <a 
                  href="https://calendly.com/startup-legals/law-firm-demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleMobileLinkClick}
                  style={{ 
                    backgroundColor: '#1C1C1C', 
                    color: 'white',
                    borderRadius: '100px',
                    padding: '16px 32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    fontFamily: '"Geist", sans-serif',
                    height: '52px',
                  }}
                >
                  Book a Demo
                </a>
              </div>
            ) : (
              <>
            {/* Platform Dropdown */}
            <div style={{ marginBottom: '16px' }}>
              <div 
                onClick={toggleMobilePlatform}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid #E5E7EB'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontWeight: '600', color: '#1C1C1C', fontSize: '16px' }}>Platform</span>
                </div>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 25 25" 
                  fill="none"
                  style={{ 
                    transform: isMobilePlatformOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                </svg>
              </div>
              
              {isMobilePlatformOpen && (
                <div style={{ 
                  padding: '16px 0', 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  marginTop: '8px',
                  border: '1px solid #E5E7EB'
                }}>
                  {/* Get started section */}
                  <div style={{ marginBottom: '24px', padding: '0 16px' }}>
                    <h3 style={{ 
                      fontFamily: '"DM Serif Display", serif',
                      fontWeight: 400,
                      fontSize: '20px',
                      lineHeight: '22px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '12px'
                    }}>Get started</h3>
                    <p style={{ 
                      fontFamily: '"Open Sans", sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '18px',
                      color: 'rgb(102, 102, 102)',
                      marginBottom: '16px'
                    }}>
                      Sign up for free today to streamline your legal tasks, get personalised guidance, and access expert lawyers and resources.
                    </p>
                    <a 
                      href="https://hub.sule.io/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        
                        marginBottom: '12px',
                        padding: '10px 20px',
                        backgroundColor: '#347AE9',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'white',
                        minHeight: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      Sign up free
                    </a>
                    <Link 
                      href="/pricing" 
                      onClick={handleMobileLinkClick}
                      style={{
                        
                        color: '#000',
                        textDecoration: 'none',
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 700,
                        fontSize: '16px',
                        marginTop: '16px',
                        paddingTop: '8px',
                        paddingBottom: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>Explore Pricing</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 25" fill="none" style={{ marginLeft: '4px' }}>
                          <path d="M9.70697 17.5742L15.414 11.8672L9.70697 6.16016L8.29297 7.57416L12.586 11.8672L8.29297 16.1602L9.70697 17.5742Z" fill="currentColor"></path>
                      </svg>
                      </div>
                    </Link>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 16px 24px' }}></div>

                  {/* Platform cards - Updated mobile styling */}
                  <div style={{ padding: '0 16px' }}>
                    {/* Explore the platform - Clean section heading style */}
                    <div 
                      style={{ 
                        marginBottom: '20px',
                        cursor: 'pointer',
                        padding: '0'
                      }}
                      onClick={() => {
                        navigate.push('/platform')
                        handleMobileLinkClick()
                      }}
                    >
                      <div style={{ 
                        width: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        marginBottom: '12px',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src="/images/Frame-1244831516.svg" 
                          alt="Platform interface" 
                          style={{
                            width: '100%',
                            height: 'auto',
                            
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <h4 style={{ 
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '6px',
                        color: '#1C1C1C'
                      }}>
                        Explore the platform
                      </h4>
                      <p style={{ 
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '12px',
                        color: '#505050'
                      }}>
                        Streamline your legal tasks, handle contracts, stay compliant, and more with our product.
                      </p>
                    </div>

                    {/* Connect with a lawyer - Clean section heading style */}
                    <Link 
                      href="/legal-consultation" 
                      onClick={handleMobileLinkClick}
                      style={{ 
                        textDecoration: 'none',
                        
                        padding: '0'
                      }}
                    >
                      <div style={{ 
                        width: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        marginBottom: '12px',
                        overflow: 'hidden'
                      }}>
                        <img 
                          src="/images/Frame-1244831519.svg" 
                          alt="Connect with lawyer" 
                          style={{
                            width: '100%',
                            height: 'auto',
                            
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      <h4 style={{ 
                        fontFamily: '"Open Sans", sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '6px',
                        color: '#1C1C1C'
                      }}>
                        Connect with a lawyer now
                      </h4>
                      <p style={{ 
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: '12px',
                        color: '#505050'
                      }}>
                        Get direct legal support from our trusted lawyers through our platform.
                      </p>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* About Us */}
            <Link 
              href="/who-we-are" 
              onClick={handleMobileLinkClick}
              style={{
                
                padding: '12px 0',
                color: '#1C1C1C',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                borderBottom: '1px solid #E5E7EB'
              }}
            >
              About us
            </Link>

            {/* Resources Dropdown */}
            <div style={{ marginBottom: '16px' }}>
              <div 
                onClick={toggleMobileResources}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 0',
                  cursor: 'pointer',
                  borderBottom: '1px solid #E5E7EB'
                }}
              >
                <span style={{ fontWeight: '600', color: '#1C1C1C', fontSize: '16px' }}>Resources</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 25 25" 
                  fill="none"
                  style={{ 
                    transform: isMobileResourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.8982 16.0228C12.6785 16.2425 12.3224 16.2425 12.1027 16.0228L6.36788 10.2879C6.14821 10.0682 6.14821 9.71213 6.36788 9.49246L6.63305 9.22726C6.85271 9.00758 7.20887 9.00758 7.42854 9.22726L12.5005 14.2992L17.5724 9.22726C17.7921 9.00758 18.1482 9.00758 18.3679 9.22726L18.6331 9.49246C18.8527 9.71213 18.8527 10.0682 18.6331 10.2879L12.8982 16.0228Z" fill="currentColor"></path>
                </svg>
              </div>
              
              {isMobileResourcesOpen && (
                <div style={{ 
                  padding: '16px 0', 
                  backgroundColor: 'white', 
                  borderRadius: '8px', 
                  marginTop: '8px',
                  border: '1px solid #E5E7EB'
                }}>
                  {/* Free legal health check card */}
                  <div style={{ 
                    padding: '0 20px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ 
                      width: '100%',
                      height: 'auto',
                      borderRadius: '12px',
                      marginBottom: '16px',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src="/images/Frame-1244831516_1.svg" 
                        alt="Free legal health check" 
                        style={{
                          width: '100%',
                          height: 'auto',
                          
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    
                    <h3 style={{ 
                      fontFamily: '"Dmserifdisplay Regular", sans-serif',
                      fontWeight: 400,
                      fontSize: '22px',
                      lineHeight: '24px',
                      color: 'rgb(18, 18, 18)',
                      marginBottom: '8px',
                      margin: '0 0 8px 0'
                    }}>
                      Free legal health check
                    </h3>
                    
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '18px',
                      color: 'rgb(102, 102, 102)',
                      marginBottom: '16px',
                      margin: '0 0 16px 0'
                    }}>
                      Check your company's health for free
                    </p>
                    
                    <a 
                      href="https://hub.sule.io/quiz" 
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        
                        width: '100%',
                        height: '40px',
                        padding: '0 20px',
                        backgroundColor: '#347AE9',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        fontFamily: '"Opensans Bold", sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '18px',
                        color: 'white',
                        cursor: 'pointer',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                      }}
                    >
                      Free health check
                    </a>
                  </div>

                  {/* Divider */}
                  <div style={{ height: '1px', backgroundColor: '#E5E7EB', margin: '0 20px 20px' }}></div>

                  {/* Free resources section */}
                  <div style={{ padding: '0 20px' }}>
                    <h4 style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      color: 'rgb(102, 102, 102)',
                      fontSize: '14px',
                      lineHeight: '18px',
                      marginBottom: '16px',
                      margin: '0 0 16px 0'
                    }}>
                      Free resources
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <Link 
                          href="/due-diligence-checklist" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          Due diligence checklist
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Our guide to due diligence.
                        </p>
                      </div>
                      
                      <div>
                        <Link 
                          href="/investment-readiness-checklist" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          Investment readiness checklist
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Our guide to investment readiness.
                        </p>
                      </div>

                      <div>
                        <Link 
                          href="/ip-audit-checklist" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          IP Audit Checklist
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Protect your intellectual property assets.
                        </p>
                      </div>
                      
                      <div>
                        <Link 
                          href="/legal-glossary" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          Legal Glossary
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Straight to the point explanations of commonly used terms.
                        </p>
                      </div>

                      <div>
                        <Link 
                          href="/blog" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          Explore our blog
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Legal insights and startup guidance.
                        </p>
                      </div>

                      <div>
                        <Link 
                          href="/news" 
                          onClick={handleMobileLinkClick}
                          style={{ 
                             
                            color: '#1C1C1C', 
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '700',
                            fontFamily: '"Opensans Bold", sans-serif',
                            marginBottom: '4px'
                          }}
                        >
                          News and Updates
                        </Link>
                        <p style={{ 
                          fontFamily: '"Open Sans", sans-serif',
                          fontSize: '12px',
                          color: '#666',
                          margin: 0,
                          lineHeight: '16px'
                        }}>
                          Company announcements and product updates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Buttons */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <LoginDropdown variant="default" isMobile />
              <a 
                href="https://perfect-afternoon-22.authkit.app/sign-up" 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  backgroundColor: '#347AE9',
                  color: 'white',
                  borderRadius: '24px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  height: '48px'
                }}
              >
                Sign up for free
              </a>
            </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Features mega menu (lawfirms variant) */}
      {isFeaturesDropdownOpen && (
        <div className="mega-menu-overlay" style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: `${76 + bannerHeight}px`,
          backgroundColor: '#FFFEFB',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          width: '100%',
          zIndex: 1009,
          padding: '40px 0 56px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          animation: 'fadeIn 0.2s ease-out',
          maxHeight: `calc(100vh - ${76 + bannerHeight}px)`,
          overflowY: 'auto',
        }}>
          <div className="container-large" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 40 }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#7A7468',
                  marginBottom: 12,
                }}>Features</div>
                <h3 style={{
                  fontFamily: '"Hedvig Letters Serif", serif',
                  fontSize: 26,
                  lineHeight: 1.2,
                  color: '#1C1C1C',
                  margin: '0 0 12px',
                  fontWeight: 400,
                }}>What SuLe does for your firm.</h3>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#3F3F3F',
                  margin: 0,
                }}>Deal-ready document packs, generated from a single set of inputs.</p>
                <img
                  src={megaMenuFeatureImage.src}
                  alt="Lawyer in consultation with a client"
                  style={{
                    marginTop: 'auto',
                    paddingTop: 24,
                    width: '100%',
                    height: 160,
                    objectFit: 'cover',
                    borderRadius: 10,
                    
                  }}
                />
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 14,
              }}>
                {[...lawFirmsFeatures].map((f: any) => {
                  const cardContent = (
                    <>
                      <div style={{
                        fontFamily: '"Hedvig Letters Serif", serif',
                        fontSize: 16,
                        lineHeight: 1.25,
                        color: '#1C1C1C',
                        marginBottom: 6,
                        fontWeight: 400,
                      }}>{f.navTitle}</div>
                      <div style={{
                        fontFamily: '"Geist", sans-serif',
                        fontSize: 13,
                        lineHeight: 1.55,
                        color: '#9A9A9A',
                      }}>{f.navDescription}</div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        marginTop: 'auto',
                        paddingTop: 12,
                        fontFamily: '"Geist", sans-serif',
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#1C1C1C',
                      }}>
                        See more
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </div>
                    </>
                  );

                  return (
                    <Link
                      key={f.slug}
                      href={`/for-law-firms/features/${f.slug}`}
                      onClick={() => setIsFeaturesDropdownOpen(false)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        padding: '16px 18px',
                        borderRadius: 10,
                        border: '1px solid #E5E1D8',
                        backgroundColor: '#FFFFFF',
                        textDecoration: 'none',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      {cardContent}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Audiences mega menu (lawfirms variant) */}
      {isAudiencesDropdownOpen && (
        <div className="mega-menu-overlay" style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: `${76 + bannerHeight}px`,
          backgroundColor: '#FFFEFB',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
          width: '100%',
          zIndex: 1009,
          padding: '40px 0 56px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          animation: 'fadeIn 0.2s ease-out',
          maxHeight: `calc(100vh - ${76 + bannerHeight}px)`,
          overflowY: 'auto',
        }}>
          <div className="container-large" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 40 }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 13,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#7A7468',
                  marginBottom: 12,
                }}>Who is this for</div>
                <h3 style={{
                  fontFamily: '"Hedvig Letters Serif", serif',
                  fontSize: 26,
                  lineHeight: 1.2,
                  color: '#1C1C1C',
                  margin: '0 0 12px',
                  fontWeight: 400,
                }}>Built for the firms that handle these deals.</h3>
                <p style={{
                  fontFamily: '"Geist", sans-serif',
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: '#3F3F3F',
                  margin: 0,
                }}>SuLe powers the law firms drafting venture equity rounds and venture debt facilities — from term sheet through to closing.</p>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 14,
              }}>
                {lawFirmsAudiences.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/for-law-firms/audiences/${a.slug}`}
                    onClick={() => setIsAudiencesDropdownOpen(false)}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'stretch',
                      gap: 16,
                      height: '100%',
                      padding: '16px 18px',
                      borderRadius: 10,
                      border: '1px solid #E5E1D8',
                      backgroundColor: '#FFFFFF',
                      textDecoration: 'none',
                      transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0, textAlign: 'left' }}>
                    <div style={{
                      fontFamily: '"Hedvig Letters Serif", serif',
                      fontSize: 16,
                      lineHeight: 1.25,
                      color: '#1C1C1C',
                      marginBottom: 6,
                      fontWeight: 400,
                    }}>{a.navTitle}</div>
                    <div style={{
                      fontFamily: '"Geist", sans-serif',
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: '#9A9A9A',
                    }}>{a.navDescription}</div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 'auto',
                      paddingTop: 12,
                      fontFamily: '"Geist", sans-serif',
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#1C1C1C',
                    }}>
                      See more
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </div>
                    </div>
                    {a.navImageSrc && (
                      <div style={{
                        flex: '0 0 96px',
                        alignSelf: 'stretch',
                        borderRadius: 8,
                        overflow: 'hidden',
                        backgroundColor: '#F3EFE6',
                      }}>
                        <img
                          src={a.navImageSrc}
                          alt=""
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Platform mega menu content */}
      {isPlatformDropdownOpen && (
        <div className="mega-menu-overlay" style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: `${76 + bannerHeight}px`,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          width: '100%',
          zIndex: 1009,
          padding: '40px 0 60px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          animation: 'fadeIn 0.2s ease-out',
          minHeight: '400px',
          maxHeight: `calc(100vh - ${76 + bannerHeight}px)`,
          overflowY: 'auto'
        }}>
          <div className="container-large">
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              height: '100%',
              marginTop: '20px'
            }}>
              {/* Left column: Get started with updated typography */}
              <div>
                <h3 style={{ 
                  fontFamily: '"DM Serif Display", serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '26px',
                  lineHeight: '27px',
                  color: 'rgb(18, 18, 18)',
                  marginBottom: '16px'
                }}>Get started</h3>
                <p style={{ 
                  fontFamily: '"Open Sans", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '21px',
                  color: 'rgb(102, 102, 102)',
                  marginBottom: '24px'
                }}>
                  Sign up for free today to streamline your legal tasks, get personalised guidance, and access expert lawyers and resources.
                </p>
                <a 
                  href="https://hub.sule.io/" 
                  className="button is-small w-button" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    
                    marginBottom: '16px',
                    width: '160px',
                    height: '45px',
                    padding: '12px 24px',
                    backgroundColor: '#347AE9',
                    borderRadius: '24px',
                    textDecoration: 'none',
                    fontFamily: '"Open Sans Bold", sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: 'rgb(255, 255, 255)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    zIndex: 1003,
                    position: 'relative'
                  }}
                >
                  Sign up free
                </a>
                <Link href="/pricing" className="button is-link is-icon w-inline-block" style={{
                  
                  width: 'fit-content',
                  color: '#347AE9',
                  textDecoration: 'none',
                  fontFamily: '"Open Sans", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '18px',
                  
                  textAlign: 'left',
                  cursor: 'pointer',
                  zIndex: 1003,
                  position: 'relative',
                  marginTop: '48px',
                  marginLeft: '0',
                  marginRight: '0',
                  marginBottom: '0',
                  paddingLeft: '0',
                  paddingRight: '0',
                  paddingTop: '0',
                  paddingBottom: '0'
                }}
                onClick={() => setIsPlatformDropdownOpen(false)}
                >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>Explore Pricing</div>
                    <div className="icon-embed-xsmall" style={{ marginLeft: '8px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 25" fill="none">
                        <path d="M9.70697 17.5742L15.414 11.8672L9.70697 6.16016L8.29297 7.57416L12.586 11.8672L8.29297 16.1602L9.70697 17.5742Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Middle column: Explore the platform */}
              <div>
                <div style={{ 
                  width: '400px',
                  height: '230px', 
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src="/images/navbar-platform-dropdown.svg" 
                    alt="Platform interface" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div 
                  style={{ 
                    textDecoration: 'none',
                    cursor: 'pointer',
                    zIndex: 1003,
                    position: 'relative',
                    display: 'block'
                  }}
                  onClick={handleExplorePlatform}
                >
                  <h3 style={{ 
                    fontFamily: 'OpenSans, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    marginBottom: '8px',
                    color: '#1C1C1C'
                  }}>
                    Explore the platform
                  </h3>
                  <p style={{ 
                    fontFamily: 'OpenSans, sans-serif',
                    fontSize: '14px',
                    color: '#505050'
                  }}>
                    Streamline your legal tasks, handle contracts, stay compliant, and more with our product.
                  </p>
                </div>
              </div>
              
              {/* Right column: Connect with a lawyer */}
              <div>
                <div style={{ 
                  width: '400px',
                  height: '230px', 
                  borderRadius: '12px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/navbar-lawyer-dropdown.svg" 
                    alt="Connect with lawyer" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <Link 
                  href="/legal-consultation" 
                  style={{ 
                    textDecoration: 'none',
                    cursor: 'pointer',
                    zIndex: 1003,
                    position: 'relative',
                    display: 'block'
                  }}
                  onClick={() => setIsPlatformDropdownOpen(false)}
                >
                  <h3 style={{ 
                    fontFamily: 'OpenSans, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    marginBottom: '8px',
                    color: '#1C1C1C'
                  }}>
                    Connect with a lawyer now
                  </h3>
                  <p style={{ 
                    fontFamily: 'OpenSans, sans-serif',
                    fontSize: '14px',
                    color: '#505050'
                  }}>
                    Get direct legal support from our trusted lawyers through our platform.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources mega menu content */}
      {isResourcesDropdownOpen && (
        <div className="mega-menu-overlay" style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: `${76 + bannerHeight}px`,
          backgroundColor: '#FFFFFF',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          width: '100%',
          zIndex: 1009,
          padding: '40px 0 60px',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          animation: 'fadeIn 0.2s ease-out',
          minHeight: '400px',
          maxHeight: `calc(100vh - ${76 + bannerHeight}px)`,
          overflowY: 'auto'
        }}>
          <div className="container-large">
            <div style={{ 
              display: 'flex',
              gap: '40px',
              height: '100%',
              marginTop: '20px'
            }}>
              {/* Left promotional section */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: 'auto'
              }}>
                {/* Image with increased size and rounded corners */}
                <div style={{ 
                  width: '340px',
                  height: '200px', 
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRadius: '12px'
                }}>
                  <img 
                    src="/images/navbar-legal-health-check.svg" 
                    alt="Free legal health check" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                {/* Heading */}
                <h3 style={{ 
                  fontFamily: '"Dmserifdisplay Regular", sans-serif',
                  fontWeight: 400,
                  fontSize: '26px',
                  lineHeight: '27px',
                  color: 'rgb(18, 18, 18)',
                  marginBottom: '8px',
                  margin: '0 0 8px 0'
                }}>
                  Free legal health check
                </h3>
                
                {/* Subtext */}
                <p style={{ 
                  fontFamily: '"Opensans Medium", sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '24px',
                  color: 'rgb(102, 102, 102)',
                  marginBottom: '16px',
                  margin: '0 0 16px 0'
                }}>
                  Check your company's health for free
                </p>
                
                {/* Button with expanded width */}
                <a 
                  href="https://hub.sule.io/quiz" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    minWidth: '180px',
                    height: '45px',
                    padding: '0 24px',
                    backgroundColor: '#347AE9',
                    borderRadius: '91px',
                    textDecoration: 'none',
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '25px',
                    color: 'white',
                    cursor: 'pointer',
                    border: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Free health check
                </a>
              </div>

              {/* Vertical divider */}
              <div style={{
                width: '1px',
                height: '320px',
                backgroundColor: '#E0E0E0',
                margin: '0 20px',
                flexShrink: 0
              }}></div>

              {/* Right grid section */}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}>
                {/* Section title */}
                <h4 style={{ 
                  fontFamily: '"Opensans Medium", sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  color: 'rgb(102, 102, 102)',
                  fontSize: '14px',
                  lineHeight: '21px',
                  marginBottom: '24px',
                  margin: '0 0 24px 0'
                }}>
                  Free resources
                </h4>
                
                {/* Two-column grid of resource cards */}
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '20px 24px',
                  flex: 1
                }}>
                  {/* Card 1: Due diligence checklist - LEFT COLUMN */}
                  <Link 
                    href="/due-diligence-checklist" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    <h4 style={{ 
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'black',
                      marginBottom: '4px',
                      margin: '0 0 4px 0'
                    }}>
                      Due diligence checklist
                    </h4>
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '20px',
                      color: '#666',
                      margin: '0'
                    }}>
                      Our guide to due diligence.
                    </p>
                  </Link>

                  {/* Card 2: Legal Glossary - RIGHT COLUMN */}
                  <Link 
                    href="/legal-glossary" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    <h4 style={{ 
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'black',
                      marginBottom: '4px',
                      margin: '0 0 4px 0'
                    }}>
                      Legal Glossary
                    </h4>
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '20px',
                      color: '#666',
                      margin: '0'
                    }}>
                      Straight to the point explanations of commonly used terms.
                    </p>
                  </Link>

                  {/* Card 3: Investment readiness checklist - LEFT COLUMN */}
                  <Link 
                    href="/investment-readiness-checklist" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                     <h4 style={{ 
                       fontFamily: '"Opensans Bold", sans-serif',
                       fontWeight: 700,
                       fontSize: '16px',
                       color: 'black',
                       marginBottom: '4px',
                       margin: '0 0 4px 0'
                     }}>
                       Investment readiness checklist
                     </h4>
                     <p style={{ 
                       fontFamily: '"Opensans Medium", sans-serif',
                       fontWeight: 500,
                       fontSize: '15px',
                       lineHeight: '20px',
                       color: '#666',
                       margin: '0'
                     }}>
                      Our guide to investment readiness.
                    </p>
                  </Link>

                  {/* Card 4: Blog - RIGHT COLUMN */}
                  <Link 
                    href="/blog" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    <h4 style={{ 
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'black',
                      marginBottom: '4px',
                      margin: '0 0 4px 0'
                    }}>
                      Explore our blog
                    </h4>
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '20px',
                      color: '#666',
                      margin: '0'
                    }}>
                      Legal insights and startup guidance.
                    </p>
                  </Link>

                  {/* Card 5: IP Audit Checklist - LEFT COLUMN */}
                  <Link 
                    href="/ip-audit-checklist" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    <h4 style={{ 
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'black',
                      marginBottom: '4px',
                      margin: '0 0 4px 0'
                    }}>
                      IP Audit Checklist
                    </h4>
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '20px',
                      color: '#666',
                      margin: '0'
                    }}>
                      Protect your intellectual property assets.
                    </p>
                  </Link>

                  {/* Card 6: News and Updates - RIGHT COLUMN */}
                  <Link 
                    href="/news" 
                    style={{ 
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'block'
                    }}
                    onClick={() => setIsResourcesDropdownOpen(false)}
                  >
                    <h4 style={{ 
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                      color: 'black',
                      marginBottom: '4px',
                      margin: '0 0 4px 0'
                    }}>
                      News and Updates
                    </h4>
                    <p style={{ 
                      fontFamily: '"Opensans Medium", sans-serif',
                      fontWeight: 500,
                      fontSize: '15px',
                      lineHeight: '20px',
                      color: '#666',
                      margin: '0'
                    }}>
                      Company announcements and product updates.
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital,wght@0,400&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800&display=swap');
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .mega-menu-open {
            position: relative;
            z-index: 1002;
          }

          @media (max-width: 768px) {
            .navbar_component {
              overflow: hidden !important;
              max-width: 100vw !important;
            }

            .padding-global {
              overflow: hidden !important;
              max-width: 100% !important;
            }

            .navbar-container {
              max-width: 100% !important;
              overflow: hidden !important;
            }

            .logo {
              height: 24px !important;
              width: auto !important;
            }
            
            .logo-lawfirms {
              height: 32px !important;
              width: auto !important;
            }
            
            .mobile-menu-button {
              display: block !important;
            }
            
            .desktop-nav {
              display: none !important;
            }

            .navbar-container {
              display: flex !important;
              align-items: center !important;
              justify-content: space-between !important;
              height: auto !important;
              min-height: 56px !important;
              padding: 12px 16px 8px 16px !important;
              box-sizing: border-box !important;
              margin-top: 0 !important;
            }

            .brand-wrapper {
              display: flex !important;
              align-items: center !important;
              height: auto !important;
              min-height: 0 !important;
              margin-left: 0 !important;
              padding: 0 !important;
              line-height: 0 !important;
            }

            .brand-wrapper > div {
              height: auto !important;
              min-height: 0 !important;
              display: flex !important;
              align-items: center !important;
            }

            .brand-wrapper img.logo {
              display: block !important;
              line-height: 0 !important;
            }

            .brand-wrapper img.logo:not(.logo-lawfirms) {
              transform: translateY(1px) !important;
            }

            .menu-button {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              height: auto !important;
              padding: 0 !important;
              line-height: 0 !important;
            }

            .mobile-menu-button.w-nav-button {
              padding: 0 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              line-height: 0 !important;
            }

            .mobile-menu-button svg {
              display: block !important;
            }
          }

          @media (min-width: 769px) {
            .mobile-nav-menu {
              display: none !important;
            }
          }

          /* Animation keyframes */
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Mega menu mobile responsiveness */
          @media (max-width: 768px) {
            .mega-menu-overlay {
              display: none !important;
            }
          }

          @media (max-width: 991px) and (min-width: 769px) {
            .mega-menu-overlay {
              padding: 30px 0 40px !important;
              min-height: 350px !important;
            }
            
            .mega-menu-overlay .container-large > div {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .mega-menu-overlay .container-large > div > div {
              padding: 0 16px !important;
            }
          }

          /* Improved z-index hierarchy */
          .navbar_component {
            position: relative;
            z-index: 1010 !important;
          }

          .mega-menu-overlay {
            z-index: 1009 !important;
          }

          /* Glassy desktop mega menu */
          @media (min-width: 769px) {
            .mega-menu-overlay {
              background-color: rgba(255, 254, 251, 0.35) !important;
              backdrop-filter: blur(28px) saturate(160%) !important;
              -webkit-backdrop-filter: blur(28px) saturate(160%) !important;
            }
          }

          /* Prevent layout shift */
          .mega-menu-overlay * {
            box-sizing: border-box;
          }
        `
      }} />
    </>
  )
}

export default Navbar
