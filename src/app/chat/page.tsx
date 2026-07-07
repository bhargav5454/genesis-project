"use client";

import React, { useState, useEffect, Suspense } from "react";


import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

const BE_URL = process.env.NEXT_PUBLIC_BE_APP_URL || '';

const ChatContent = () => {
  const searchParams = useSearchParams();
  const question = searchParams.get("q") || "";
  const questionType = searchParams.get("type") || "AI_FAQ";
  const isFromStartups = searchParams.get("from") === "startups";
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMessageExpanded, setIsMessageExpanded] = useState(false);
  const [suleAnswer, setSuleAnswer] = useState("");
  const [answerKey, setAnswerKey] = useState("");
  const [answerType, setAnswerType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchAnswer = async () => {
      if (!question) {
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(BE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question, type: questionType }),
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch answer");
        }

        const data = await response.json();
        setSuleAnswer(data.answer || data.message || "");
        setAnswerKey(data.key || "");
        setAnswerType(data.type || "");
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return; // Ignore aborted requests
        }
        console.error("Error fetching answer:", err);
        setError("Failed to get an answer. Please try again.");
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchAnswer();

    return () => {
      abortController.abort();
    };
  }, [question, questionType]);

  const renderAnswerContent = () => {
    // Split answer into headline (first line) and body (rest)
    const [headline, ...restLines] = suleAnswer.split("\n");
    const bodyText = restLines.join("\n");

    // Visual line count using CSS line-clamp (works with text wrapping)
    const visibleLineCount = isMobile ? 2 : 3;
    const bodyVisibleLines = Math.max(visibleLineCount - 1, 1); // total minus headline

    return (
      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        <img
          src="/images/sule-icon.png"
          alt="SuLe"
          style={{
            width: "36px",
            height: "36px",
            marginTop: "-6px",
            objectFit: "contain",
            opacity: 1,
            alignSelf: "flex-start",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column", position: "relative" }}>
          {/* Headline on its own line with spacing below */}
          <h3
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "20px",
              lineHeight: "1.4",
              color: "#1a1a1a",
              fontWeight: 700,
              marginBottom: "8px",
              marginTop: 0,
            }}
          >
            {headline.replace(/^#{1,6}\s*/, '')}
          </h3>

          {/* Body text - using fixed height for accurate visual line counting without ellipsis */}
          <div
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#1a1a1a",
              overflow: "hidden",
              height: `${bodyVisibleLines * 24}px`, // 15px * 1.6 = 24px per line
            }}
          >
            {bodyText}
          </div>

          {/* Blurred content - shows remaining text with progressive blur */}
          <div
            style={{
              overflow: "hidden",
              position: "relative",
              marginTop: "0px",
            }}
          >
            {/* Multiple blur layers for progressive effect */}
            {[0, 1, 2, 3].map((index) => {
              const startBlur = isMobile ? 1.5 : 0.5;
              const blurStep = isMobile ? 1.2 : 0.8;
              const blurAmount = startBlur + index * blurStep;
              const maxBlur = isMobile ? 4 : 5;
              const lineHeight = 24; // ~15px * 1.6

              return (
                <div
                  key={index}
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#1a1a1a",
                    filter: `blur(${Math.min(blurAmount, maxBlur)}px)`,
                    userSelect: "none",
                    pointerEvents: "none",
                    display: "-webkit-box",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical" as const,
                    overflow: "hidden",
                    // One visual line per layer
                    height: `${lineHeight}px`,
                  }}
                >
                  {/* Skip the visible headline + visible body lines */}
                  <span
                    style={{
                      display: "block",
                      marginTop: `-${(visibleLineCount + index) * lineHeight}px`,
                    }}
                  >
                    {suleAnswer}
                  </span>
                </div>
              );
            })}
            {/* Gradient fade overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "60px",
                background: "linear-gradient(to bottom, transparent 0%, #FFFEFC 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderCTACard = () => {
    const faqKeyData = btoa(JSON.stringify({ key: answerKey, type: answerType }))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    const signupUrl = `https://hub.sule.io/auth/signup?faqkey=${faqKeyData}`;

    return (
      <div
        style={{
        backgroundColor: "#FAF5EF",
        borderRadius: "16px",
        padding: "32px 24px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <h2
        style={{
          fontFamily: "DM Serif Display, serif",
          fontSize: "24px",
          fontWeight: 400,
          color: "#1a1a1a",
          margin: 0,
        }}
      >
        Turn complex legal into simple steps.
      </h2>
      <p
        style={{
          fontFamily: "Open Sans, sans-serif",
          fontSize: "14px",
          color: "#666",
          margin: 0,
          maxWidth: "400px",
          lineHeight: "1.5",
        }}
      >
        Sign up to access the full answer — and discover how SuLe can power your growth.
      </p>
      <a
        href={signupUrl}
        style={{
          backgroundColor: "#347AE9",
          color: "#fff",
          border: "none",
          borderRadius: "24px",
          padding: "12px 28px",
          fontFamily: "Open Sans, sans-serif",
          fontSize: "15px",
          fontWeight: 600,
          cursor: "pointer",
          marginTop: "4px",
          transition: "background-color 0.2s ease",
          textDecoration: "none",
          display: "inline-block",
        }}
      >
      Sign up for free
      </a>
      {(
        <a
          href="https://perfect-afternoon-22.authkit.app/"
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            color: "#347AE9",
            background: "none",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            marginTop: "4px",
          }}
        >
          Log in
        </a>
      )}
    </div>
    );
  };

  const renderAnswer = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: "24px",
        }}
      >
        {/* Answer area - naturally sized to content so CTA sits directly underneath */}
        <div
          style={{
            width: "100%",
          }}
        >
          {renderAnswerContent()}
        </div>
        {/* CTA Card - immediately follows answer with small gap */}
        <div
          style={{
            marginTop: isMobile ? "16px" : "24px",
          }}
        >
          {renderCTACard()}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFFEFC",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar showStroke={true} />

      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "140px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Chat area */}
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* User message bubble - right aligned */}
          {question && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fafafa",
                  border: "none",
                  borderRadius: "12px",
                  padding: "14px 18px",
                  maxWidth: "80%",
                  fontFamily: "Open Sans, sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.5",
                  color: "#1a1a1a",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  maxHeight: isMessageExpanded ? (isMobile ? "12vh" : "16vh") : "none",
                  overflowY: isMessageExpanded ? "auto" : "hidden",
                }}
              >
                {!isMessageExpanded ? (
                  <div>
                    <div
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: "hidden",
                      }}
                    >
                      {question}
                    </div>
                    {question.length > (isMobile ? 100 : 200) && (
                      <button
                        onClick={() => setIsMessageExpanded(true)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#347AE9",
                          fontSize: "13px",
                          fontFamily: "Open Sans, sans-serif",
                          cursor: "pointer",
                          padding: "4px 0 0 0",
                          fontWeight: 500,
                        }}
                      >
                        Show more
                      </button>
                    )}
                  </div>
                ) : (
                  <div>
                    <div>{question}</div>
                    <button
                      onClick={() => setIsMessageExpanded(false)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#347AE9",
                        fontSize: "13px",
                        fontFamily: "Open Sans, sans-serif",
                        cursor: "pointer",
                        padding: "4px 0 0 0",
                        display: "block",
                        fontWeight: 500,
                      }}
                    >
                      Show less
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Loading spinner, Error, or Answer */}
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  border: "3px solid #E5E7EB",
                  borderTop: "3px solid #347AE9",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
            </div>
          ) : error ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "20px",
                fontFamily: "Open Sans, sans-serif",
                fontSize: "15px",
                color: "#EF4444",
              }}
            >
              {error}
            </div>
          ) : suleAnswer ? (
            renderAnswer()
          ) : null}
        </div>

        {/* Bottom chat input - only visible while loading */}
        {isLoading && (
          <div
            style={{
              position: "fixed",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "720px",
              padding: "0 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #afafaf",
                borderRadius: "24px",
                padding: "10px 18px",
              }}
            >
              <input
                type="text"
                placeholder="Message..."
                style={{
                  flex: 1,
                  border: "none",
                  background: "transparent",
                  fontSize: "15px",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#1a1a1a",
                  outline: "none",
                }}
              />
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "32px",
                  height: "32px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src="/images/send-icon.png" alt="Send" style={{ width: "16px", height: "16px", opacity: 0.5 }} />
              </button>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const ChatPage = () => <Suspense fallback={<div>Loading...</div>}><ChatContent /></Suspense>;
export default ChatPage;
