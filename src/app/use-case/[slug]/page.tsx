"use client";


import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';


import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const UseCasePage = () => {
  const { useCase } = useParams();
  
  useEffect(() => {
    // Capitalize and format the slug for the title
    const formatTitle = (slug: string) => {
      return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    };
    
    document.title = `${formatTitle((useCase as string) || '')} | Use Cases | SuLe Hub`;
  }, [useCase]);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-medium">
                <header>
                  <h1 className="heading-style-h1">{(useCase as string)?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
                </header>
                
                <div className="rich-text margin-top margin-large">
                  <p className="text-size-medium">
                    This is the use case content for "{useCase}". 
                    In a production environment, this content would be dynamically loaded 
                    based on the use case slug from a database or CMS.
                  </p>
                  
                  <h2 className="heading-style-h3 margin-top margin-large">The Challenge</h2>
                  <p className="text-size-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at sem vel nibh fringilla ultricies. 
                    Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl euismod nisl.
                  </p>
                  
                  <h2 className="heading-style-h3 margin-top margin-large">The Solution</h2>
                  <p className="text-size-medium">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Ut non enim eleifend, fermentum dui aliquam, ultricies sem. Maecenas sollicitudin leo a risus eleifend faucibus.
                  </p>
                  
                  <h2 className="heading-style-h3 margin-top margin-large">The Outcome</h2>
                  <p className="text-size-medium">
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                    Cras eu dui vitae magna vestibulum volutpat eget sed arcu. Praesent id finibus turpis.
                  </p>
                </div>
                
                <div className="margin-top margin-xlarge">
                  <a href="/detail-use-cases" className="button-secondary w-button">View All Use Cases</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="section background-color-floral-s1">
          <div className="padding-global">
            <div className="padding-section-medium">
              <div className="container-small text-align-center">
                <h2 className="heading-style-h3">Need similar legal support?</h2>
                <div className="margin-top margin-medium">
                  <p className="text-size-medium">
                    Contact our team to learn how we can help with your specific legal needs.
                  </p>
                  <div className="margin-top margin-medium">
                    <a href="/register-interest" className="button w-button">Get Started</a>
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

export default UseCasePage;
