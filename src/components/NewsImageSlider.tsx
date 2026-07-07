"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsImageSliderProps {
  images: { src: string | any; alt?: string }[];
  autoPlayInterval?: number;
}

const NewsImageSlider: React.FC<NewsImageSliderProps> = ({
  images,
  autoPlayInterval = 5000,
}) => {
  const [index, setIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const total = images.length;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => {
        const next = (i + delta + total) % total;
        return next;
      });
      setProgressKey((k) => k + 1);
    },
    [total]
  );

  const goTo = useCallback((i: number) => {
    setIndex(i);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (total <= 1) return;
    timerRef.current = setTimeout(() => go(1), autoPlayInterval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, progressKey, total, autoPlayInterval, go]);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => go(1), autoPlayInterval);
  };

  if (total === 0) return null;

  return (
    <div style={{ marginTop: '32px', marginBottom: '32px' }}>
      <div
        ref={containerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 10',
          borderRadius: '6px',
          overflow: 'hidden',
          backgroundColor: '#f0f0f2',
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt || ''}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === index ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }}
          />
        ))}

        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              style={{
                position: 'absolute',
                top: '50%',
                left: '12px',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              style={{
                position: 'absolute',
                top: '50%',
                right: '12px',
                transform: 'translateY(-50%)',
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ChevronRight size={20} />
            </button>

            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '6px',
                alignItems: 'center',
              }}
            >
              {images.map((_, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to image ${i + 1}`}
                    style={{
                      position: 'relative',
                      width: isActive ? '32px' : '8px',
                      height: '4px',
                      borderRadius: '2px',
                      border: 'none',
                      padding: 0,
                      backgroundColor: 'rgba(255,255,255,0.4)',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      transition: 'width 0.3s ease',
                    }}
                  >
                    {isActive && (
                      <span
                        key={progressKey}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          height: '100%',
                          width: '100%',
                          backgroundColor: '#fff',
                          borderRadius: '2px',
                          animation: `progressFill ${autoPlayInterval}ms linear forwards`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      <style>{`
        @keyframes progressFill {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </div>
  );
};

export default NewsImageSlider;
