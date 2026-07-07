"use client";


import React, { useState } from 'react'

const ProtectedPage = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would validate the password against some backend
    setError(true)
  }
  
  return (
    <div className="utility-page_component">
      <div className="utility-page_wrapper w-form">
        <form onSubmit={handleSubmit} className="utility-page_form">
          <img 
            alt="" 
            width="106" 
            src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg" 
            className="utility-page_image" 
          />
          <h3>Protected Page</h3>
          <input 
            className="form_input w-input" 
            autoFocus={true} 
            maxLength={256} 
            name="pass" 
            placeholder="Enter your password" 
            type="password" 
            id="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            data-wait="Please wait..." 
            type="submit" 
            className="button w-button" 
            value="Submit" 
          />
          {error && (
            <div className="form_message-error w-form-fail">
              <div>Incorrect password. Please try again.</div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default ProtectedPage
