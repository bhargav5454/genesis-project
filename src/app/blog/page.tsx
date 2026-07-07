"use client";


import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import LegalsOrderSection from '@/components/LegalsOrderSection';
import { blogPosts } from '@/data/blogData';

const BlogPage = () => {
  const navigate = useRouter();

  useEffect(() => {
    document.title = 'Blog | SuLe Hub';
  }, []);

  const handleReadMore = (slug: string) => {
    navigate.push(`/blog/${slug}`);
  };

  // Sort blog posts by date (newest to oldest)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="page-wrapper blog-page">
      <Navbar />
      
      <main className="main-wrapper">
        <section className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="margin-bottom margin-large">
                  <h1 
                    style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontWeight: 400,
                      fontSize: '60px',
                      lineHeight: '63px',
                      color: 'rgb(18, 18, 18)',
                      textAlign: 'left',
                      margin: 0
                    }}
                  >
                    Blog
                  </h1>
                  <p 
                    style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontWeight: 500,
                      fontSize: '18px',
                      lineHeight: '27px',
                      color: 'rgb(102, 102, 102)',
                      textAlign: 'left',
                      margin: 0,
                      marginTop: '16px'
                    }}
                  >
                    Stay updated with company news, articles, tips, and insights designed to help founders turn their dreams into reality.
                  </p>
                </div>
                
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '48px'
                  }}
                  className="blog-grid"
                >
                  {sortedBlogPosts.map((post) => (
                    <div key={post.slug} className="blog-card">
                      <img 
                        src={typeof post.image === 'string' ? post.image : post.image?.src}
                        alt={post.title}
                        onClick={() => handleReadMore(post.slug)}
                        style={{
                          width: '100%',
                          aspectRatio: '16/9',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginBottom: '12px',
                          cursor: 'pointer'
                        }}
                      />
                      <div 
                        style={{
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: 'rgb(102, 102, 102)',
                          marginBottom: '8px'
                        }}
                      >
                        {post.date} • {post.readTime}
                      </div>
                      <h3 
                        onClick={() => handleReadMore(post.slug)}
                        style={{
                          fontFamily: 'DM Serif Display, serif',
                          fontWeight: 400,
                          fontSize: '36px',
                          lineHeight: '38px',
                          color: 'rgb(18, 18, 18)',
                          margin: 0,
                          marginBottom: '8px',
                          cursor: 'pointer'
                        }}
                      >
                        {post.title}
                      </h3>
                      <p 
                        onClick={() => handleReadMore(post.slug)}
                        style={{
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 500,
                          fontSize: '18px',
                          lineHeight: '27px',
                          color: 'rgb(102, 102, 102)',
                          margin: 0,
                          marginBottom: '12px',
                          cursor: 'pointer'
                        }}
                      >
                        {post.subtitle}
                      </p>
                      <button 
                        onClick={() => handleReadMore(post.slug)}
                        style={{
                          fontFamily: 'Open Sans, sans-serif',
                          fontWeight: 600,
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#336DFF',
                          backgroundColor: 'transparent',
                          border: '2px solid #336DFF',
                          padding: '8px 14px',
                          borderRadius: '9999px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        Read more <ChevronRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get your legals in order section */}
        <LegalsOrderSection />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default BlogPage;
