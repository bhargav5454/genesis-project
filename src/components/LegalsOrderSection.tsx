
import React from 'react';

const LegalsOrderSection = () => {
  return (
    <div className="section">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="section-platform-grid">
              <div className="section-platform-grid-right">
                <div className="section-platform_content">
                  <div className="section-platform_header">
                    <h2 
                      className="legals-order-heading"
                      style={{
                        fontFamily: "DM Serif Display, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "60px",
                        lineHeight: "63px",
                        color: "rgb(18, 18, 18)",
                        marginBottom: "8px"
                      }}
                    >
                      Get your legals in order
                    </h2>
                    <div 
                      className="legals-order-description"
                      style={{
                        fontFamily: "Open Sans Medium, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "21px",
                        color: "rgb(45, 45, 45)",
                        marginBottom: "-16px"
                      }}
                    >
                      Sign up to our platform to streamline your legal tasks, get personalised step-by-step guidance, on-demand access to lawyers and access a wide range of templates and resources
                    </div>
                  </div>
                </div>
                <div className="button-group" style={{ marginTop: 0, position: "relative", top: "-24px" }}>
                  <a 
                    href="https://perfect-afternoon-22.authkit.app/sign-up"
                    className="button w-button"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ height: '56px', fontSize: '17px' }}
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              <div id="w-node-_1d57df26-f8ea-3041-176d-3c5adae99356-10389a4d" className="section-platform-grid-left no-radius">
                <img 
                  src="/images/Frame-2131328690.svg" 
                  loading="lazy" 
                  alt="" 
                  className="section-platform-image" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalsOrderSection;
