"use client";

import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

// Global image cache to persist loaded images across component instances
const imageCache = new Set<string>();

// Preload an image and cache it
export const preloadImage = (src: string): Promise<void> => {
  if (imageCache.has(src)) {
    return Promise.resolve();
  }
  
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = () => {
      resolve(); // Resolve anyway to not block transitions
    };
    img.src = src;
  });
};

// Check if an image is already cached
export const isImageCached = (src: string): boolean => {
  return imageCache.has(src);
};

// Preload multiple images
export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(() => imageCache.has(src));
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If already cached, show immediately
    if (imageCache.has(src)) {
      setIsLoaded(true);
      return;
    }

    setIsLoaded(false);
    
    // Preload the image
    const img = new Image();
    img.src = src;
    img.onload = () => {
      imageCache.add(src);
      requestAnimationFrame(() => {
        setIsLoaded(true);
      });
    };

    return () => {
      img.onload = null;
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      style={{
        ...style,
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
      }}
    />
  );
};

export default LazyImage;
