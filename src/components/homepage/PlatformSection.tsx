"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface PlatformSectionProps {
  title: string;
  description: string;
  listItems?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageRight?: boolean;
  backgroundColor?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  hasVideo?: boolean;
  videoPath?: string;
  videoPoster?: string;
  noRadius?: boolean;
  showDesktopOnly?: boolean;
  tabletImageSrc?: string;
  tabletImageSrcSet?: string;
  tabletImageSizes?: string;
  isSmartLegalSection?: boolean;
  customHeadingClass?: string;
  customDescriptionClass?: string;
  customSectionClass?: string;
}

const PlatformSection = ({
  title,
  description,
  listItems,
  imageSrc,
  imageAlt = "",
  imageRight = false,
  backgroundColor = "",
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  hasVideo = false,
  videoPath = "",
  videoPoster = "",
  noRadius = false,
  showDesktopOnly = false,
  tabletImageSrc = "",
  tabletImageSrcSet = "",
  tabletImageSizes = "",
  isSmartLegalSection = false,
  customHeadingClass = "",
  customDescriptionClass = "",
  customSectionClass = ""
}: PlatformSectionProps) => {

  return (
    <div className={`section ${backgroundColor} ${customSectionClass || ""}`}>
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="section-platform-grid">
              {!imageRight && (
                <div id="w-node-_5f0292c2-c850-007b-9d8a-c4defa339c85-10389a4d" className={`section-platform-grid-left ${noRadius ? 'no-radius' : ''} ${isSmartLegalSection ? 'large-image' : ''}`}>
                  {hasVideo ? (
                    <div className="section_platform-video">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{backgroundImage: `url('${videoPoster}')`}}
                        className="w-background-video"
                      >
                        <source src={videoPath} type="video/mp4" />
                        <source src={videoPath.replace('.mp4', '.webm')} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <>
                      <img src={imageSrc} loading="lazy" alt={imageAlt} className={`section-platform-image ${showDesktopOnly ? 'show-desktop' : ''}`} style={isSmartLegalSection ? {maxWidth: '110%'} : {}} />
                      {tabletImageSrc && (
                        <img
                          src={tabletImageSrc}
                          loading="lazy"
                          sizes={tabletImageSizes}
                          srcSet={tabletImageSrcSet}
                          alt={imageAlt}
                          className="section-platform-image show-tablet"
                        />
                      )}
                    </>
                  )}
                </div>
              )}
              <div className="section-platform-grid-right">
                <div className="section-platform_content">
                  <div className="section-platform_header" style={isSmartLegalSection ? {marginBottom: '4px'} : {}}>
                    <h2 className={`heading-style-h3 ${isSmartLegalSection ? 'smart-legal-heading' : ''} ${customHeadingClass}`}>{title}</h2>
                    <div className={`text-size-regular text-color-dark-grey ${isSmartLegalSection ? 'smart-legal-description' : ''} ${customDescriptionClass}`}>{description}</div>
                  </div>
                  {listItems && listItems.length > 0 && (
                    <ul role="list" className={`${isSmartLegalSection ? 'smart-legal-list' : 'list_component'}`} style={{listStyle: 'none', padding: 0}}>
                      {listItems.map((item, index) => (
                        <li key={index} 
                            className={`${isSmartLegalSection ? 'smart-legal-list-item' : 'list_item'}`}
                            style={isSmartLegalSection ? {
                              fontFamily: "'Open Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: '20px',
                              lineHeight: '24px',
                              color: 'rgb(18, 18, 18)',
                              margin: '5px 0',
                            } : {
                              position: 'relative',
                              paddingLeft: '20px',
                              marginBottom: '5px'
                            }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {(primaryButtonText || secondaryButtonText) && (
                  <div className={`button-group ${isSmartLegalSection ? 'smart-legal-buttons' : ''}`}>
                    {primaryButtonText && (
                      primaryButtonLink?.startsWith("http") ? (
                        <a href={primaryButtonLink} className={`button w-button ${isSmartLegalSection ? 'find-out-more' : ''}`} 
                           target="_blank" rel="noopener noreferrer" 
                           style={{ height: '56px', fontSize: '17px' }}>
                          {primaryButtonText}
                        </a>
                      ) : (
                        <Link href={primaryButtonLink || "/"} 
                              className={`button w-button ${isSmartLegalSection ? 'find-out-more' : ''}`}
                              style={{ height: '56px', fontSize: '17px' }}>
                          {primaryButtonText}
                        </Link>
                      )
                    )}
                    {secondaryButtonText && (
                      secondaryButtonLink?.startsWith("http") ? (
                        <a href={secondaryButtonLink} 
                           className={`button-secondary w-button ${isSmartLegalSection ? 'free-legal-health' : ''}`} 
                           target="_blank" rel="noopener noreferrer"
                           style={{ height: '56px', fontSize: '17px' }}>
                          {secondaryButtonText}
                        </a>
                      ) : (
                        <Link href={secondaryButtonLink || "/"} 
                              className={`button-secondary w-button ${isSmartLegalSection ? 'free-legal-health' : ''}`}
                              style={{ height: '56px', fontSize: '17px' }}>
                          {secondaryButtonText}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
              {imageRight && (
                <div id="w-node-_1d57df26-f8ea-3041-176d-3c5adae99356-10389a4d" className={`section-platform-grid-left ${noRadius ? 'no-radius' : ''}`}>
                  {hasVideo ? (
                    <div className="section_platform-video">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{backgroundImage: `url('${videoPoster}')`}}
                        className="w-background-video"
                      >
                        <source src={videoPath} type="video/mp4" />
                        <source src={videoPath.replace('.mp4', '.webm')} type="video/webm" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <>
                      <img src={imageSrc} loading="lazy" alt={imageAlt} className={`section-platform-image ${showDesktopOnly ? 'show-desktop' : ''}`} />
                      {tabletImageSrc && (
                        <img
                          src={tabletImageSrc}
                          loading="lazy"
                          sizes={tabletImageSizes}
                          srcSet={tabletImageSrcSet}
                          alt={imageAlt}
                          className="section-platform-image show-tablet"
                        />
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
