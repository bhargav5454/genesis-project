import Link from 'next/link';

import React from 'react'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const NotFoundPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <div className="section">
          <div className="padding-global">
            <div className="padding-section-large">
              <div className="container-large">
                <div className="_404-flexbox">
                  <div className="_404-flexbox-left">
                    <img src="/images/Standing.png" loading="lazy" width="204" alt="" className="_404-image" />
                  </div>
                  <div className="_404-flexbox-right">
                    <h1>Page not found</h1>
                    <div className="text-size-medium">Sorry this page doesn't exist. We suggest going back to the homepage.</div>
                    <Link href="/" className="button w-button">Back to homepage</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFoundPage
