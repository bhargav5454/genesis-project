"use client";


import React, { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import LegalsOrderSection from '@/components/LegalsOrderSection';
import { newsPosts } from '@/data/newsData';

const DynamicNewsPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useRouter();
  
  const post = newsPosts.find(p => p.slug === slug);
  
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | SuLe Hub News`;
    } else {
      document.title = 'News Not Found | SuLe Hub';
    }
  }, [post]);

  if (!post) {
    return (
      <div className="page-wrapper blog-page">
        <Navbar />
        <main className="main-wrapper">
          <section className="section">
            <div className="padding-global">
              <div className="padding-section-large">
                <div className="container-large">
                  <h1 style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '48px',
                    lineHeight: '52px',
                    color: 'rgb(18, 18, 18)',
                    textAlign: 'center',
                    margin: '0 0 24px 0'
                  }}>
                    News Not Found
                  </h1>
                  <p style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '18px',
                    color: 'rgb(102, 102, 102)',
                    textAlign: 'center',
                    marginBottom: '32px'
                  }}>
                    The news article you're looking for doesn't exist.
                  </p>
                  <div style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => navigate.push('/news')}
                      style={{
                        fontFamily: 'Open Sans, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        color: '#347AE9',
                        backgroundColor: 'transparent',
                        border: '2px solid #347AE9',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        cursor: 'pointer'
                      }}
                    >
                      Back to News
                    </button>
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
  }

  return (
    <div className="page-wrapper blog-page">
      <Navbar />
      
      <main className="main-wrapper">
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                {/* Back to News link */}
                <button
                  onClick={() => navigate.push('/news')}
                  style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#347AE9',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '24px',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  ← Back to News
                </button>
                
                {/* Article header */}
                <article style={{ maxWidth: '856px', margin: '0 auto' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <span style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: '16px',
                      color: 'rgb(102, 102, 102)'
                    }}>
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  
                  <h1 style={{
                    fontFamily: 'DM Serif Display, serif',
                    fontWeight: 400,
                    fontSize: '36px',
                    lineHeight: '40px',
                    color: 'rgb(18, 18, 18)',
                    margin: '0 0 24px 0'
                  }}>
                    {post.title}
                  </h1>
                  
                  <img 
                    src={typeof post.image === 'string' ? post.image : post.image?.src}
                    alt={post.title}
                    style={{
                      width: '100%',
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      marginBottom: '32px'
                    }}
                  />
                  
                  {/* Article content */}
                  <div style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: 'rgb(18, 18, 18)'
                  }}>
                    {post.content}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <LegalsOrderSection />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default DynamicNewsPostPage;
