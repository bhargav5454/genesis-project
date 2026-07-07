"use client";

import React, { useEffect } from 'react';
import ogImage from '@/assets/raise-runway-launch-party-og.png';

const RaiseRunwayLaunchPartyPage: React.FC = () => {
  useEffect(() => {
    const title = 'Raise Your Runway Launch Party · 10 June 2026, London | SuLe';
    const description = 'Join SuLe in London on 10 June 2026 for the Raise Your Runway Launch Party — an evening with founders, investors, and operators celebrating the next chapter of startup growth. Register now.';
    const image = `${window.location.origin}${ogImage}`;
    const url = 'https://sule.io/events/raise-runway-launch-party-10-june';

    const prevTitle = document.title;
    document.title = title;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      const prev = el.getAttribute('content');
      el.setAttribute('content', value);
      return prev;
    };

    const prevDesc = setMeta('name', 'description', description);
    const prevOgTitle = setMeta('property', 'og:title', title);
    const prevOgDesc = setMeta('property', 'og:description', description);
    const prevOgImage = setMeta('property', 'og:image', image);
    const prevOgImageW = setMeta('property', 'og:image:width', '1200');
    const prevOgImageH = setMeta('property', 'og:image:height', '630');
    const prevOgImageType = setMeta('property', 'og:image:type', 'image/png');
    const prevOgUrl = setMeta('property', 'og:url', url);
    const prevOgType = setMeta('property', 'og:type', 'event');
    const prevTwCard = setMeta('name', 'twitter:card', 'summary_large_image');
    const prevTwTitle = setMeta('name', 'twitter:title', title);
    const prevTwDesc = setMeta('name', 'twitter:description', description);
    const prevTwImage = setMeta('name', 'twitter:image', image);

    let canonical = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonical?.getAttribute('href') ?? null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    return () => {
      document.title = prevTitle;
      const restore = (attr: string, key: string, prev: string | null) => {
        const el = document.querySelector(`meta[${attr}="${key}"]`);
        if (el && prev) el.setAttribute('content', prev);
      };
      restore('name', 'description', prevDesc);
      restore('property', 'og:title', prevOgTitle);
      restore('property', 'og:description', prevOgDesc);
      restore('property', 'og:image', prevOgImage);
      restore('property', 'og:image:width', prevOgImageW);
      restore('property', 'og:image:height', prevOgImageH);
      restore('property', 'og:image:type', prevOgImageType);
      restore('property', 'og:url', prevOgUrl);
      restore('property', 'og:type', prevOgType);
      restore('name', 'twitter:card', prevTwCard);
      restore('name', 'twitter:title', prevTwTitle);
      restore('name', 'twitter:description', prevTwDesc);
      restore('name', 'twitter:image', prevTwImage);
      if (canonical && prevCanonical) canonical.setAttribute('href', prevCanonical);
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://luma.com/embed/event/evt-dGlhf3yYPljhgRR/simple"
        style={{ border: 'none', width: '100%', height: '100%', display: 'block' }}
        frameBorder="0"
        allow="fullscreen; payment"
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  );
};

export default RaiseRunwayLaunchPartyPage;