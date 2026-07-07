"use client";


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CookiePolicyPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <div className="section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="max-w-4xl mx-auto policy-content">
                  <h1 className="text-3xl font-bold mb-8 text-center">SuLe Cookie Policy</h1>

                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                    <p className="mb-4">This Cookie Policy was published on February 24, 2026.</p>
                    <p className="mb-4">Please read this cookie policy carefully as it contains important information on who we are and how we use cookies and other similar storage and access technologies on our website. This policy should be read together with our privacy policy (available on our website) which sets out how and why we collect, store, use and share personal information generally, as well as your rights in relation to your personal information and details of how to contact us and supervisory authorities if you have a complaint.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Who we are</h2>
                    <p className="mb-4">This website is operated by SuLe Hub Limited, a company incorporated in England and Wales under company number 14829079, whose registered office address is at Capital Office, 124-128 City Road, London, United Kingdom, EC1V 2NX. We provide a legal tech and professional services platform for startups and growing businesses, providing business support, legal resources, and access to our specialist legal professionals.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Our website</h2>
                    <p className="mb-4">This cookie policy relates to your use of our websites: www.sule.io and www.sulehub.com</p>
                    <p className="mb-4">Throughout our website, we may link to other websites owned and operated by certain trusted third parties to make additional products and services, resources or information available to you. These other third party websites may also use cookies or similar technologies in accordance with their own separate policies. For privacy information relating to these other third party websites, please consult their policies as appropriate.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Cookies</h2>
                    <p className="mb-4">A cookie is a small text file which is placed onto your device (e.g., computer, smartphone, or another electronic device) when you use our website. However, "cookies" is often used as a blanket term for various technologies. In this policy, when we say "cookies," we include other similar technologies such as:</p>
                    <div className="mb-4 space-y-2">
                      <p>· <strong>Pixels and tags:</strong> Small blocks of code on a webpage that allow websites to do things like read and place cookies. We use these to transmit information to partners like Meta and Google.</p>
                      <p>· <strong>Local storage:</strong> A technology that allows a website to store data on your device locally, which persists even after you close your browser window.</p>
                    </div>
                    <p className="mb-4">We use these technologies on our website to help us recognise you and your device and store some information about your preferences or past actions.</p>
                    <p className="mb-4">For further information on our use of cookies, including a detailed list of your information which we and others may collect through cookies, please see below.</p>
                    <p className="mb-6">For further information on cookies, including how to control and manage them, visit the guidance on cookies published by the UK Information Commissioner's Office, or <a href="https://allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="underline">www.allaboutcookies.org</a>.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Consent to use cookies and changing settings</h2>
                    <p className="mb-4">We do not need your consent to place cookies that are "Strictly Necessary" for the website to function (for example, to remember your items in a shopping basket or to ensure the security of the site). These are always active.</p>
                    <p className="mb-4">For all other types of cookies (such as Analytics, Marketing, or Third-Party cookies), we will ask for your explicit consent before placing them on your device. We request this consent via our cookie banner when you first visit our website.</p>
                    <p className="mb-4">You can withdraw any consent to the use of cookies or other similar technologies or manage any other such preferences by:</p>
                    <div className="mb-4 space-y-2">
                      <p>· <strong>Using our Cookie Settings tool:</strong> Click on the icon located on our websites (at the bottom of any page on our websites). This tool allows you to toggle specific categories of cookies (e.g., "Marketing" or "Analytics") on or off.</p>
                      <p>· <strong>Using your browser settings:</strong> you can also adjust your browser settings to block cookies generally. However, please note that if you block "Strictly Necessary" cookies, parts of our website may not function correctly.</p>
                    </div>
                    <p className="mb-6">If you update your preferences, it may be necessary to refresh the page for the updated settings to take effect.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Our use of cookies</h2>
                    <p className="mb-4">We use different types of cookies to run our website:</p>
                    <div className="mb-4 space-y-2">
                      <p>· <strong>Session cookies:</strong> these allow us to link your actions during a single browser session (e.g., remembering items in a shopping cart). These expire and are deleted when you close your browser.</p>
                      <p>· <strong>Persistent cookies:</strong> these are stored on your device between browsing sessions. They allow us to remember your preferences or actions across multiple visits (e.g., keeping you logged in or tracking how you interact with our site over time).</p>
                      <p>· <strong>First-party cookies:</strong> these are set by the website you are visiting — our websites.</p>
                      <p>· <strong>Third-party cookies:</strong> these are set by a domain other than the one you are visiting (e.g., by Google or Facebook) to provide functionality like analytics or advertising.</p>
                    </div>
                    <p className="mb-6">This information helps us to understand how our website is used, to improve our services, and to support our marketing and analytics efforts. Some of this data will be aggregated or statistical, which means that we will not be able to identify you individually.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Cookie Information</h2>
                    <div className="mb-6 overflow-x-auto">
                      <table className="w-full border-collapse border border-muted text-sm">
                        <thead>
                          <tr className="bg-muted/30">
                            <th className="border border-muted p-3 text-left font-bold">Name / Provider</th>
                            <th className="border border-muted p-3 text-left font-bold">Category</th>
                            <th className="border border-muted p-3 text-left font-bold">Purpose</th>
                            <th className="border border-muted p-3 text-left font-bold">Consent Required?</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td className="border border-muted p-3">Session Management (First Party) (Cookie Name: session-id)</td><td className="border border-muted p-3">Strictly Necessary</td><td className="border border-muted p-3">Functionality: This is a technology set directly by our website. It assigns a unique token to your browsing session so that our servers can distinguish you from other visitors as you navigate between pages (e.g., ensuring your account state or preferences are remembered).</td><td className="border border-muted p-3">No (Strictly Necessary)</td></tr>
                          <tr><td className="border border-muted p-3">Shopify Payments</td><td className="border border-muted p-3">Strictly Necessary</td><td className="border border-muted p-3">Payments: These technologies are essential to enable you to complete a transaction.</td><td className="border border-muted p-3">No (Strictly Necessary)</td></tr>
                          <tr><td className="border border-muted p-3">Affirm (Provider: Shopify, Affirm)</td><td className="border border-muted p-3">Necessary</td><td className="border border-muted p-3">Purchase on our website. They securely transmit payment information and facilitate the checkout process.</td><td className="border border-muted p-3">Necessary</td></tr>
                          <tr><td className="border border-muted p-3">Amazon Pay (Provider: Amazon)</td><td className="border border-muted p-3">Strictly Necessary</td><td className="border border-muted p-3">Payments: Enables you to log in and pay using your Amazon account details to complete a purchase on the website.</td><td className="border border-muted p-3">Strictly Necessary</td></tr>
                          <tr><td className="border border-muted p-3">Kustomer Chat (Provider: Kustomer)</td><td className="border border-muted p-3">Functional</td><td className="border border-muted p-3">Customer Support: Used to facilitate the live chat functionality on our website. It persists your chat session so you can navigate the site without losing your conversation history.</td><td className="border border-muted p-3">Essential for requested service</td></tr>
                          <tr><td className="border border-muted p-3">Google Analytics 4 (Cookie Names: _ga, _ga_[ID])</td><td className="border border-muted p-3">Analytics</td><td className="border border-muted p-3">Performance: A web analytics service provided by Google. It shows us how visitors found and explored our site, how we can enhance their experience, and provides behaviour metrics (e.g., time on site).</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">Shopify Analytics (Provider: Shopify)</td><td className="border border-muted p-3">Analytics</td><td className="border border-muted p-3">Performance: Used by our e-commerce platform to measure store performance and analyse visitor navigation patterns.</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">Microsoft Clarity & Advertising (Cookie Name: MUID)</td><td className="border border-muted p-3">Marketing</td><td className="border border-muted p-3">Heatmaps & Ads: Allows us to view heatmaps of user interactions. The MUID cookie also synchronizes your unique ID across Microsoft domains to build a profile of your interests for advertising.</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">Facebook / Meta Platforms</td><td className="border border-muted p-3">Marketing</td><td className="border border-muted p-3">Advertising: Enables us to measure the effectiveness of Facebook advertising and show you personalized ads (remarketing) based on your visits to our site.</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">Google Ads & DoubleClick (Provider: Google)</td><td className="border border-muted p-3">Marketing</td><td className="border border-muted p-3">Advertising: Used to track conversion rates from Google Ads and to display personalized advertisements to you on other websites across the Google ad network.</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">SailThru (Provider: SailThru)</td><td className="border border-muted p-3">Marketing</td><td className="border border-muted p-3">Personalization: Used for analytics relating to marketing campaigns and to personalize your experience on the website based on your usage history.</td><td className="border border-muted p-3">Yes</td></tr>
                          <tr><td className="border border-muted p-3">Back in Stock (Provider: Back in Stock)</td><td className="border border-muted p-3">Marketing</td><td className="border border-muted p-3">Enables you to use the "Back in Stock" notification functionality. While functional, it may track user interest in specific products for marketing purposes.</td><td className="border border-muted p-3">Yes</td></tr>
                        </tbody>
                      </table>
                    </div>

                    <h2 className="text-xl font-bold mt-8 mb-4">Third party access to the cookies</h2>
                    <p className="mb-4">The cookies we use will only be accessed by us and those third parties named in the cookie settings tool (for example, analytics and marketing providers) for the purposes referred to in this cookie policy. These cookies are primarily accessed by the third-party providers named in the table above (e.g., Microsoft, Google) for the purposes listed. Please note that these providers may process this data in accordance with their own privacy policies, which may include sharing data within their own advertising networks.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">How to turn off all cookies and the consequences of doing so</h2>
                    <p className="mb-4">If you do not want to accept any cookies, you may be able to change your browser settings so that cookies (including those which are essential to the services requested) are not accepted. If you do this, please be aware that you may lose some of the functionality of our website.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">How to contact us</h2>
                    <p className="mb-4">Please contact us if you have any questions about this cookie policy or the information that we hold about you. Our contact details are:</p>
                    <p className="mb-1"><strong>Email:</strong> support@sule.io or hello@sulehub.com</p>
                    <p className="mb-6"><strong>Post:</strong> SuLe Hub Limited, Capital Office, 124-128 City Road, London, EC1V 2NX.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Do you need extra help?</h2>
                    <p className="mb-6">If you would like this notice in another format (for example: audio, large print, braille), please contact us using the contact details above.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Changes to this policy</h2>
                    <p className="mb-4">We may change this policy from time to time. When we do, we will inform you via our website and/or the cookie banner or other cookie settings tool deployed on our website.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
