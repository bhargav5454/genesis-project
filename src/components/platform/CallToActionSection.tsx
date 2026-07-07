
import React from 'react';

const CallToActionSection = () => {
  return (
    <section className="section overflow-hidden">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-small">
            <div className="cta_component">
              <div className="cta_header">
                <h2 className="heading-style-h3">Want to find out more?</h2>
                <div className="text-size-medium">
                  Discover how our platform can streamline your legal tasks, automate compliance checks, and simplify contract management—all in a personalised demo.
                </div>
              </div>
              <a href="/platform" className="button w-button">Find out more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
