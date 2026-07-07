
"use client";
import Link from 'next/link';


import React, { useState } from 'react'


const RegisterInterestPage = () => {
  const [email, setEmail] = useState('')
  const [businessStage, setBusinessStage] = useState('')
  const [businessSector, setBusinessSector] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !businessStage) {
      setError(true)
      return
    }
    
    // Simulate successful submission
    setSubmitted(true)
    setError(false)
  }
  
  return (
    <div className="page-wrapper">
      <div className="main-wrapper">
        <div className="section height-85vh">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="section-register-flexbox">
                  <div className={`section-register-flexbox-left ${submitted ? 'hide' : ''}`}>
                    <div className="section-register-max-width">
                      <h2 className="text-weight-light">Get expert legal support now - without the cost. </h2>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="text-size-large">We want to help you with the next stages of your legal journey. Complete our form and access free legal perks such as a free term sheet review, free investment readiness review or legal consultation. </div>
                    </div>
                  </div>
                  <div className={`section-register-flexbox-left ${!submitted ? 'hide' : ''}`}>
                    <div className="section-register-max-width">
                      <h2 className="text-weight-light">Thank you</h2>
                    </div>
                    <div className="margin-top margin-medium">
                      <div className="text-size-large">We'll keep you updated on our progress and reach out soon to schedule your consultation.</div>
                    </div>
                    <div className="margin-top margin-medium">
                      <Link href="/legal-glossary" className="button w-button">Browse legal glossary</Link>
                    </div>
                  </div>
                  <div className="section-register-flexbox-right">
                    <div className="register-form-block w-form">
                      {!submitted ? (
                        <form onSubmit={handleSubmit} className="register-form">
                          <input 
                            className="form-text-field w-input" 
                            maxLength={256} 
                            name="Email-address" 
                            placeholder="Email address" 
                            type="email" 
                            id="Email-address" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <input 
                            className="form-text-field w-input" 
                            maxLength={256} 
                            name="Business-stage-Idea-pre-seed-etc" 
                            placeholder="Business stage (Idea, pre-seed, etc)" 
                            type="text" 
                            id="Business-stage-Idea-pre-seed-etc" 
                            required 
                            value={businessStage}
                            onChange={(e) => setBusinessStage(e.target.value)}
                          />
                          <input 
                            className="form-text-field w-input" 
                            maxLength={256} 
                            name="Business-sector-optional" 
                            placeholder="Business sector (optional)" 
                            type="text" 
                            id="Business-sector-optional" 
                            value={businessSector}
                            onChange={(e) => setBusinessSector(e.target.value)}
                          />
                          <input 
                            type="submit" 
                            data-wait="Please wait..." 
                            className="register-submit w-button" 
                            value="Register your interest" 
                          />
                          <div className="margin-top margin-xsmall">
                            <div className="text-size-regular form-description">Unlock beta pricing when you register your interest today</div>
                          </div>
                        </form>
                      ) : (
                        <div className="register-form-success">
                          <img 
                            src="/images/Group-1385-1.png" 
                            loading="lazy" 
                            srcSet="/images/Group-1385-1-p-500.png 500w, /images/Group-1385-1.png 926w" 
                            sizes="100vw" 
                            alt="" 
                            className="form-success-image" 
                          />
                        </div>
                      )}
                      {error && (
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterInterestPage
