
import React from 'react';

const PartnersSection = () => {
  return (
    <section className="section overflow-hidden">
      <div className="padding-global">
        <div className="padding-top">
          <div className="container-large">
            <div className="text-align-center">
              <h2 className="heading-style-h4">We partner with the best startup accelerators and venture firms</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-bottom padding-section-small">
        <div className="margin-top margin-xlarge">
          <div className="logos-marquee">
            <div className="logos-collection w-dyn-list">
              <div role="list" className="logos-container w-dyn-items">
                <div role="listitem" className="logos-wrapper w-dyn-item">
                  <img alt="" loading="lazy" src="" className="startup-logo w-dyn-bind-empty" />
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
