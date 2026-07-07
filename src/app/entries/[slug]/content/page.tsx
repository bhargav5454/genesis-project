"use client";


import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const EntryContentPage = () => {
  const { entrySlug } = useParams();
  
  useEffect(() => {
    // Capitalize and format the slug for the title
    const formatTitle = (slug: string) => {
      return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    document.title = `${formatTitle((entrySlug as string) || '')} | Legal Glossary | SuLe Hub`;
  }, [entrySlug]);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-medium" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                width: '100%',
                overflowX: 'hidden'
              }}>
                <div className="entry-content">
                  <h1 className="heading-style-h1">{(entrySlug as string)?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
                  
                  <div className="margin-top margin-large">
                    <p className="text-size-medium">
                      This is the entry content page for "{entrySlug}". 
                      In a production environment, this content would be dynamically loaded 
                      based on the entry slug from a database or CMS.
                    </p>
                  </div>
                  
                  <div className="margin-top margin-large">
                    <a href="/legal-glossary" className="button-secondary w-button">Back to Legal Glossary</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small text-align-center">
                <h2 className="heading-style-h3">Need more legal guidance?</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Our team is ready to help with any legal questions you might have about your business.
                  </p>
                  <div className="margin-top margin-medium">
                    <a href="/register-interest" className="button w-button">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default EntryContentPage;
