"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import { ChevronDown, MessageSquare, Shield, FileText, Users, Rocket } from 'lucide-react';

const SuleLandingPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Sule - Online Legal Services | Expert Lawyers at Your Fingertips';
  }, []);

  const services = [
    {
      title: "Online Legal Advice",
      description: "Get expert legal guidance through secure video consultations with qualified solicitors.",
      icon: MessageSquare,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Partnership Setup", 
      description: "Structure your business partnerships with comprehensive legal documentation and advice.",
      icon: Shield,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Contract Reviews",
      description: "Professional contract analysis and review to protect your interests and minimize risks.",
      icon: FileText,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Employment Law",
      description: "Navigate employment regulations, contracts, and workplace legal requirements confidently.",
      icon: Users,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Startup Support",
      description: "Complete legal support for startups from incorporation to investment rounds and beyond.",
      icon: Rocket,
      color: "bg-red-50 text-red-600"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Tell us your legal need",
      description: "Share your legal requirement through our simple online form."
    },
    {
      number: "2", 
      title: "Get matched with expert lawyers",
      description: "We connect you with the right legal expert based on your specific needs."
    },
    {
      number: "3",
      title: "Consult via chat or video", 
      description: "Have a secure consultation at a time that works for you."
    },
    {
      number: "4",
      title: "Resolve and relax",
      description: "Receive your legal advice, documents, or ongoing support as needed."
    }
  ];

  const whySuleReasons = [
    {
      title: "Quick Access",
      description: "Connect with qualified solicitors immediately, no waiting for appointments or lengthy office visits."
    },
    {
      title: "Fixed Transparent Pricing",
      description: "Know exactly what you'll pay upfront with no hidden fees, surprise charges, or billable hour anxiety."
    },
    {
      title: "Fully Digital Experience", 
      description: "Everything happens online - from consultation to document delivery, built for the modern world."
    },
    {
      title: "Wide Service Range",
      description: "From startup law to employment issues, we cover all your legal needs in one platform."
    },
    {
      title: "Trusted by Startups",
      description: "Tailored services and pricing designed specifically for growing businesses and entrepreneurs."
    }
  ];

  const testimonials = [
    {
      quote: "Sule helped us navigate our first investment round with clarity and speed. The online consultations saved us weeks compared to traditional law firms.",
      name: "James Mitchell",
      position: "Founder, TechStart Solutions",
      logo: null
    },
    {
      quote: "The transparent pricing and expert advice from ex-Magic Circle lawyers gave us confidence in our legal decisions without breaking the bank.",
      name: "Sarah Chen",
      position: "Co-founder, GreenTech Innovations",
      logo: null
    },
    {
      quote: "From partnership agreements to employment contracts, Sule has been our go-to for all legal needs. Fast, reliable, and startup-friendly.",
      name: "David Kumar",
      position: "CEO, Digital Marketing Pro",
      logo: null
    },
    {
      quote: "The digital-first approach and quick turnaround times have been game-changing for our fast-moving startup environment.",
      name: "Emma Thompson",
      position: "Founder, FinTech Solutions",
      logo: null
    }
  ];

  const faqs = [
    {
      question: "Is Sule a law firm?",
      answer: "Sule is a legal technology platform that connects you with qualified solicitors from established law firms. All legal advice is provided by regulated solicitors with extensive experience, including many from Magic Circle firms."
    },
    {
      question: "Can I get urgent legal help?",
      answer: "Yes, our platform is designed to provide quick access to legal expertise when you need it most. Many of our solicitors can accommodate urgent consultations within 24-48 hours."
    },
    {
      question: "Is it suitable for businesses and individuals?",
      answer: "Absolutely. Our services cater to both businesses of all sizes and individuals seeking legal guidance. We have specialized expertise for startups, SMEs, and personal legal matters."
    },
    {
      question: "How much does it cost?",
      answer: "We offer transparent, fixed pricing with no hidden fees. Prices vary by service type and complexity. Contact us for a free quote tailored to your specific needs."
    },
    {
      question: "Are the consultations secure?",
      answer: "Yes, all consultations are conducted through secure, encrypted platforms that meet legal industry standards for confidentiality and data protection."
    },
    {
      question: "What if I need ongoing legal support?",
      answer: "We provide ongoing legal support tailored to your needs, from one-off consultations to comprehensive legal partnerships and retainer arrangements."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        {/* Hero Section */}
        <section className="section section_home-header">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="home_header-wrapper">
                  <div className="margin-bottom margin-large">
                    <div className="text-align-center">
                      <div className="margin-bottom margin-small">
                        <h1 className="heading-style-h1">
                          Lawyer Services Reimagined:<br />
                          <span className="text-color-brand">Online Legal Expertise</span><br />
                          at Your Fingertips
                        </h1>
                      </div>
                      <p className="text-size-medium text-color-grey">
                        Affordable, on-demand, from ex-Magic Circle lawyers. Delivered entirely online.
                      </p>
                    </div>
                  </div>
                  <div className="margin-bottom margin-medium">
                    <div className="text-align-center">
                      <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-icon w-inline-block">
                        <div className="text-size-regular text-weight-semibold">Start Your Free Legal Match</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="section overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="section-platform_content">
                  <div className="section-platform_header">
                    <div className="max-width-large align-center">
                      <p className="text-size-medium text-color-grey">
                        Sule is a digital-first solution that revolutionizes how individuals and businesses access legal services. We've replaced the traditional law firm model with an innovative platform that connects you directly with experienced solicitors from top-tier firms, delivering expert legal guidance through secure digital consultations that fit your schedule and budget.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Legal Services Section - Redesigned with Modern Cards */}
        <section className="section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h2">Our Legal Services</h2>
                    </div>
                    <p className="text-size-medium text-color-grey">
                      Comprehensive legal support designed for modern businesses and individuals
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
                        <div className="flex flex-col items-start h-full">
                          <div className={`p-4 rounded-lg mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent size={32} className="transition-all duration-300" />
                          </div>
                          <h3 className="heading-style-h5 mb-4 text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-size-regular text-color-grey leading-relaxed flex-grow">
                            {service.description}
                          </p>
                          <div className="mt-6 w-full">
                            <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="margin-top margin-large">
                  <div className="text-align-center">
                    <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-icon w-inline-block">
                      <div className="text-size-regular text-weight-semibold">Explore Our Services</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h2">How It Works</h2>
                    </div>
                    <p className="text-size-medium text-color-grey">
                      Get legal help in four simple steps
                    </p>
                  </div>
                </div>
                <div className="w-layout-grid grid-4-columns">
                  {steps.map((step, index) => (
                    <div key={index} className="card-step">
                      <div className="margin-bottom margin-small">
                        <div className="step-number">{step.number}</div>
                        <h3 className="heading-style-h5">{step.title}</h3>
                      </div>
                      <p className="text-size-regular text-color-grey">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Sule Section */}
        <section className="section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h2">Why Sule?</h2>
                    </div>
                    <p className="text-size-medium text-color-grey">
                      The modern way to access legal expertise
                    </p>
                  </div>
                </div>
                <div className="why-sule-accordion">
                  {whySuleReasons.map((reason, index) => (
                    <div key={index} className="accordion-item">
                      <button
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                      >
                        <h3 className="heading-style-h5">{reason.title}</h3>
                        <ChevronDown 
                          size={20} 
                          style={{ 
                            transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }} 
                        />
                      </button>
                      {openAccordion === index && (
                        <div className="accordion-content">
                          <p className="text-size-regular text-color-grey">
                            {reason.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="margin-top margin-medium">
                  <div className="text-align-center">
                    <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-icon w-inline-block">
                      <div className="text-size-regular text-weight-semibold">Start Your Free Legal Match</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section" style={{ backgroundColor: '#F4EEE4' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h2">What Our Clients Say</h2>
                    </div>
                    <p className="text-size-medium text-color-grey">
                      Trusted by founders and businesses across the UK
                    </p>
                  </div>
                </div>
                <div className="w-layout-grid grid-2-columns">
                  {testimonials.slice(0, 4).map((testimonial, index) => (
                    <div key={index} className="card-testimonial">
                      <div className="margin-bottom margin-medium">
                        <p className="text-size-medium text-weight-medium">"{testimonial.quote}"</p>
                      </div>
                      <div className="testimonial-author">
                        <div className="testimonial-author-info">
                          <div className="text-weight-semibold">{testimonial.name}</div>
                          <div className="text-size-small text-color-grey">{testimonial.position}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section" style={{ backgroundColor: '#FFF9E9' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="margin-bottom margin-large">
                  <div className="text-align-center">
                    <div className="margin-bottom margin-xsmall">
                      <h2 className="heading-style-h2">Frequently Asked Questions</h2>
                    </div>
                    <p className="text-size-medium text-color-grey">
                      Everything you need to know about Sule
                    </p>
                  </div>
                </div>
                <div className="faq-accordion">
                  {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                      <button
                        className="faq-header"
                        onClick={() => toggleFaq(index)}
                      >
                        <h3 className="heading-style-h6">{faq.question}</h3>
                        <ChevronDown 
                          size={20} 
                          style={{ 
                            transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }} 
                        />
                      </button>
                      {openFaq === index && (
                        <div className="faq-content">
                          <p className="text-size-regular text-color-grey">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="text-align-center">
                  <div className="margin-bottom margin-medium">
                    <h2 className="heading-style-h2">
                      Get Trusted Online Lawyer Advice — Fast, Affordable, and Fully Online
                    </h2>
                    <p className="text-size-medium text-color-grey">
                      Connect with experienced solicitors from top-tier firms and get the legal support you need to move your business forward with confidence.
                    </p>
                  </div>
                  <div className="margin-bottom margin-small" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <a href="https://perfect-afternoon-22.authkit.app/sign-up" className="button is-icon w-inline-block">
                      <div className="text-size-regular text-weight-semibold">Start Now</div>
                    </a>
                    <a href="/platform" className="button-secondary w-button">Learn More</a>
                  </div>
                  <p className="text-size-small text-color-grey">
                    Free legal matching • Transparent pricing • Secure consultations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default SuleLandingPage;
