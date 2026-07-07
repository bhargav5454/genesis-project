"use client";

import { useParams, notFound } from 'next/navigation';
import React, { useEffect } from 'react';
import Link from 'next/link';

import { ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LegalsOrderSection from '@/components/LegalsOrderSection';
import { blogPosts } from '@/data/blogData';

const DynamicBlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const blogPost = blogPosts.find(post => post.slug === slug);

  useEffect(() => {
    if (blogPost) {
      // Set document title
      document.title = `${blogPost.title} | SuLe Hub`;
      
      // Set meta title
      let metaTitle = document.querySelector('meta[name="title"]');
      if (!metaTitle) {
        metaTitle = document.createElement('meta');
        metaTitle.setAttribute('name', 'title');
        document.head.appendChild(metaTitle);
      }
      const originalTitle = metaTitle.getAttribute('content');
      metaTitle.setAttribute('content', blogPost.title);
      
      // Set meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      const originalDescription = metaDescription.getAttribute('content');
      metaDescription.setAttribute('content', blogPost.description);

      // Set Open Graph meta tags
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      const originalOgTitle = ogTitle.getAttribute('content');
      ogTitle.setAttribute('content', blogPost.title);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      const originalOgDescription = ogDescription.getAttribute('content');
      ogDescription.setAttribute('content', blogPost.description);

      let ogImage = document.querySelector('meta[property="og:image"]');
      if (!ogImage) {
        ogImage = document.createElement('meta');
        ogImage.setAttribute('property', 'og:image');
        document.head.appendChild(ogImage);
      }
      const originalOgImage = ogImage.getAttribute('content');
      if (blogPost.image) {
        ogImage.setAttribute('content', `${window.location.origin}${typeof blogPost.image === 'string' ? blogPost.image : blogPost.image?.src}`);
      }

      // Set Twitter Card meta tags
      let twitterTitle = document.querySelector('meta[name="twitter:title"]');
      if (!twitterTitle) {
        twitterTitle = document.createElement('meta');
        twitterTitle.setAttribute('name', 'twitter:title');
        document.head.appendChild(twitterTitle);
      }
      const originalTwitterTitle = twitterTitle.getAttribute('content');
      twitterTitle.setAttribute('content', blogPost.title);

      let twitterDescription = document.querySelector('meta[name="twitter:description"]');
      if (!twitterDescription) {
        twitterDescription = document.createElement('meta');
        twitterDescription.setAttribute('name', 'twitter:description');
        document.head.appendChild(twitterDescription);
      }
      const originalTwitterDescription = twitterDescription.getAttribute('content');
      twitterDescription.setAttribute('content', blogPost.description);

      let twitterImage = document.querySelector('meta[name="twitter:image"]');
      if (!twitterImage) {
        twitterImage = document.createElement('meta');
        twitterImage.setAttribute('name', 'twitter:image');
        document.head.appendChild(twitterImage);
      }
      const originalTwitterImage = twitterImage.getAttribute('content');
      if (blogPost.image) {
        twitterImage.setAttribute('content', `${window.location.origin}${typeof blogPost.image === 'string' ? blogPost.image : blogPost.image?.src}`);
      }
      
      // Cleanup function to restore original meta tags
      return () => {
        if (originalTitle) metaTitle.setAttribute('content', originalTitle);
        if (originalDescription) metaDescription.setAttribute('content', originalDescription);
        if (originalOgTitle) ogTitle.setAttribute('content', originalOgTitle);
        if (originalOgDescription) ogDescription.setAttribute('content', originalOgDescription);
        if (originalOgImage) ogImage.setAttribute('content', originalOgImage);
        if (originalTwitterTitle) twitterTitle.setAttribute('content', originalTwitterTitle);
        if (originalTwitterDescription) twitterDescription.setAttribute('content', originalTwitterDescription);
        if (originalTwitterImage) twitterImage.setAttribute('content', originalTwitterImage);
      };
    }
  }, [blogPost]);

  if (!blogPost) {
    notFound();
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar />
      
      {/* Back button and date */}
      <div style={{
        height: '64px',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '140px'
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px'
        }}>
          <Link 
            href="/blog" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              color: 'rgb(102, 102, 102)',
              fontFamily: 'Open Sans, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            <ChevronLeft size={16} />
            Back to blog
          </Link>
          <span style={{
            fontFamily: 'Open Sans, sans-serif',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            color: 'rgb(102, 102, 102)'
          }}>
            {blogPost.date} • {blogPost.readTime}
          </span>
        </div>
      </div>

      {/* Featured image */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '48px',
        padding: '0 24px'
      }}>
        <img 
          src={typeof blogPost.image === 'string' ? blogPost.image : blogPost.image?.src}
          alt={blogPost.title}
          style={{
            maxWidth: '900px',
            width: '100%',
            height: 'auto',
            borderRadius: '16px'
          }}
        />
      </div>

      {/* Content container */}
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{
          maxWidth: '900px',
          width: '100%',
          padding: '0 24px'
        }}>
          {/* Title */}
          <h1 style={{
            fontFamily: 'DM Serif Display, serif',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '38px',
            color: 'rgb(18, 18, 18)',
            margin: 0,
            marginBottom: '24px'
          }}>
            {blogPost.title}
          </h1>



          {/* Blog content */}
          {blogPost.content}
        </div>
      </div>

      {/* Get your legals in order section */}
      <div style={{ marginTop: '80px' }}>
        <LegalsOrderSection />
      </div>

      <Footer />
    </div>
  );
};

export default DynamicBlogPostPage;
