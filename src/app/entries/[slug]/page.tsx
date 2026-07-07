"use client";


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';

import { ArrowLeft, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import LegalsOrderSection from '@/components/LegalsOrderSection';

const GlossaryDetailPage = () => {
  const { slug } = useParams();
  const navigate = useRouter();
  const [activeSection, setActiveSection] = useState('definition');

  // All glossary data to find the entry by slug
  const glossaryData = {
    A: [
      {
        term: "Assets Under Management",
        definition: "Assets under management (or \"AUM\") is equal to the market value of investments that either an institution or individual manages on behalf of its clients.",
        slug: "assets-under-management",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda11d98492a0385e514c0_undraw_transfer_money_re_6o1h.svg"
      },
      {
        term: "Asset Deal",
        definition: "During mergers and acquisitions (M&As), buyers may choose to purchase a company's underlying assets instead of its stock (shares). These transactions are called asset deals.",
        slug: "asset-deal",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda16b98492a0385e56085_undraw_takeout_boxes_ap54.svg"
      },
      {
        term: "Articles of Association",
        definition: "A document that sets out the rules and regulations governing the management of a company, including its internal affairs and shareholder rights.",
        slug: "articles-of-association",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda1bea4b861c194ce2f09_undraw_contract_re_ves9%20%281%29.svg"
      },
      {
        term: "Arm's Length Transaction",
        definition: "An arm's length transaction is a business deal where the buyers and sellers act independently. Neither party influences the other. Normally, the parties will have no pre-existing relationship, and both parties will have equal access to information relating to the deal.",
        slug: "arms-length-transaction",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda282621b9c7155498506_undraw_circuit_board_re_1b79.svg"
      },
      {
        term: "Anti-dilution",
        definition: "A protective provision for investors that adjusts their equity ownership percentage in the event of a future funding round at a lower valuation, ensuring their stake is not reduced unfairly. Anti-dilution provisions can come in various forms, such as full ratchet or weighted average adjustments.",
        slug: "anti-dilution",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda31b048e43078ab2bdbf_undraw_google_docs_re_evm3.svg"
      },
      {
        term: "Angel Investor",
        definition: "An angel investor is a type of individual investor who provides funding to up-and-coming startups in return for equity in the company.",
        slug: "angel-investor",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda39b758c4856573481bb_undraw_investment_re_rpk5%20%281%29.svg"
      },
      {
        term: "Advance Subscription Agreement (ASA)",
        definition: "An agreement for future equity, allowing investors to invest in a company now and receive shares in a future funding round.",
        slug: "advance-subscription-agreement",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64edb84840bda49a8ee7a64b_undraw_personal_file_re_5joy.svg"
      },
      {
        term: "Accredited Investor",
        definition: "An accredited investor is a legal entity or natural person allowed to trade unregistered and unregulated securities. Generally, only investors registered with a governing financial organisation can sell or publicly exchange securities such as stocks and bonds.",
        slug: "accredited-investor",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64edb8e0d46773d39b413f86_undraw_businessman_9hq8.svg"
      },
      {
        term: "Accelerator",
        definition: "An accelerator is an organisation that provides capital (usually a seed investment), mentorship, and networking connections to startups. Y Combinator, the first seed accelerator, is a well-known example.",
        slug: "accelerator",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64edb91a1db8e181acde7836_undraw_to_the_stars_re_wq2x.svg"
      },
      {
        term: "Articles of Association",
        definition: "A document that sets out the rules and regulations governing the management of a company, including its internal affairs and shareholder rights.",
        slug: "articles-of-association-2",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64abda19b94f8c858038eeeb_Name%3DContractReview%2C%20People%3D1.png"
      },
      {
        term: "Anti-dilution",
        definition: "A protective provision for investors that adjusts their equity ownership percentage in the event of a future funding round at a lower valuation, ensuring their stake is not reduced unfairly. Anti-dilution provisions can come in various forms, such as full ratchet or weighted average adjustments.",
        slug: "anti-dilution-2",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64abda3273a24480c01006a7_Name%3DReport%2C%20People%3D1.png"
      },
      {
        term: "Advance Subscription Agreement (ASA)",
        definition: "An agreement for future equity, allowing investors to invest in a company now and receive shares in a future funding round.",
        slug: "advance-subscription-agreement-2",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64abda490f3bcdc561125bfc_Name%3DConversation%2C%20People%3D2.png"
      },
      {
        term: "Acceleration Clause",
        definition: "A provision that allows for the acceleration of vesting (of shares) or other benefits in the event of specific circumstances, such as a change of control or termination.",
        slug: "acceleration-clause",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64abda5d5987b89fabe95a25_Name%3DMoneyCall%2C%20People%3D1.png"
      }
    ],
    B: [
      {
        term: "Business Model Canvas",
        definition: "A business model canvas is a planning tool typically consisting of a single page that outlines the essential building blocks necessary to bring a business (or a product or service) to market.",
        slug: "business-model-canvas",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ed9da9eaa13ef152cfb0b4_undraw_mind_map_re_nlb6.svg"
      },
      {
        term: "Burn Rate",
        definition: "Burn rate is the rate at which a business spends money. It's typically used by new businesses to track how much they spend in venture capital funding before creating their own positive cash flows. It is a measurement of negative monthly cash flow.",
        slug: "burn-rate",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ed9ea966a9dca43392121e_undraw_printing_invoices_-5-r4r%20%281%29.svg"
      },
      {
        term: "Bridge Loan",
        definition: "Bridge loans, also known as swing loans or bridge financing, are short-term financing options for companies that need funds temporarily until long-term financing becomes available. Essentially, they \"bridge\" the gap between a company's immediate need for funds and access to funds from long-term financing. A type of bridge financing is an ASA or CLN.",
        slug: "bridge-loan",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ed9efd90c429b84e005bd3_undraw_golden_gate_bridge_re_e8tc.svg"
      },
      {
        term: "Boot-strapped",
        definition: "Bootstrapped is a term used to describe a company that has been built from the ground up with little to no outside capital.",
        slug: "boot-strapped",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ed9f6566a9dca4339341bf_undraw_stepping_up_g6oo.svg"
      },
      {
        term: "Board of Directors",
        definition: "A group of individuals appointed to oversee the management, day-to-day running and direction of a company.",
        slug: "board-of-directors",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ed9fb97355f94fdf66097a_undraw_team_page_re_cffb.svg"
      },
      {
        term: "Blind Pool",
        definition: "A blind pool describes when a limited partnership raises funds from investors without telling them where the money will be invested.",
        slug: "blind-pool",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda03966a9dca43394b06c_undraw_pool_bk6q.svg"
      },
      {
        term: "Bear Hug",
        definition: "A bear hug is an acquisition strategy where one company offers to purchase another at a much higher price than that company's valuation. It's sometimes viewed as a hostile takeover, but it's more beneficial for shareholders than most hostile takeovers would be.",
        slug: "bear-hug",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eda0836743aea7aa3d029a_undraw_teddy_bear_hns1.svg"
      },
      {
        term: "Board of Directors",
        definition: "A group of individuals appointed to oversee the management, day-to-day running and direction of a company.",
        slug: "board-of-directors-2",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64abd9f773a24480c00fbf33_Name%3DAdvice%2C%20People%3D2.png"
      }
    ],
    C: [
      {
        term: "Crossover Investors",
        definition: "Crossover investors are concerned more with short-term gains than long-term returns on their investments.",
        slug: "crossover-investors",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ece13956221b4331e684f7_undraw_business_chat_re_gg4h.svg"
      },
      {
        term: "Convertible Loan Note (CLN)",
        definition: "A debt instrument that can be converted into equity shares at a future date, typically during a funding round or upon certain events.",
        slug: "convertible-loan-note",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64ece38f7470037a9a50fa19_undraw_receipt_re_fre3.svg"
      },
    ],
    D: [
      {
        term: "Due Diligence",
        definition: "The process a company / organisation carries out involves investigating and evaluating a potential investment or business opportunity, including reviewing financial statements, legal documents, and other relevant information.",
        slug: "due-diligence",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eca76dba2dfba53b2453bd_undraw_blogging_re_kl0d.svg"
      },
    ],
    E: [
      {
        term: "Exit",
        definition: "An 'exit' is when a founder leaves a startup. For many founders, this is something they've planned for from day one, perhaps even hoping to build a unicorn company. They created the startup with the plan of cashing out at some point by selling ownership of the company either to investors or to another company.",
        slug: "exit",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64eca2eb6ccc16349fbd3a9d_undraw_businessman_re_mlee.svg"
      },
    ],
    F: [],
    G: [],
    H: [],
    "I-J-K": [
      {
        term: "Key Man Clause",
        definition: "In an investment context, a key man clause is a contractual clause that prohibits an investment firm from making new investments in certain situations.",
        slug: "key-man-clause",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64e5c9636a8b70ba1060b65f_undraw_security_re_a2rk.svg"
      },
    ],
    L: [
      {
        term: "Liquidation Preference",
        definition: "A term in preferred stock that specifies the order in which proceeds are distributed to shareholders in the event of a liquidation, dissolution, or sale of the company (i.e., when the company is sold or closed).",
        slug: "liquidation-preference",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64e5c63380fb1558b25ebc34_undraw_credit_card_payment_re_o911.svg"
      },
    ],
    M: [],
    N: [],
    O: [
      {
        term: "Option Pool",
        definition: "A reserved number of shares set aside for future issuance to employees, advisors, and other service providers as part of an equity incentive plan.",
        slug: "option-pool",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64e5b85389f1d15a73fdba24_undraw_vault_re_s4my.svg"
      },
    ],
    "P-Q-R": [
      {
        term: "PaaS",
        definition: "PaaS, or Platform as a Service, gives developers and companies the ability to create, host, and deploy applications through the cloud. Both the hardware and the application software platform are provided as part of PaaS, hosted on the PaaS provider's platform.",
        slug: "paas",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/64e5b7aaa4df9d3e62bdd2a4_undraw_progressive_app_m-9-ms.svg"
      },
    ],
    S: [
      {
        term: "Synergies",
        definition: "Financial synergies refer to the value created when two companies join together. If the two entities join up and create more value than when they operated separately, it's considered synergy.",
        slug: "synergies",
        image: "https://cdn.prod.website-files.com/652f7edff7a635d01a6ae274_undraw_share_link_re_54rx.svg"
      },
    ],
    "T-U-V": [
      {
        term: "Vulture Fund",
        definition: "A vulture fund is made up of investors who profit from distressed securities. The group may be formed as a hedge fund or private equity group.",
        slug: "vulture-fund",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/652f8e949102fa6ee8060632_undraw_connected_re_lmq2.svg"
      },
    ],
    "W-X": [
      {
        term: "Weighted Average",
        definition: "A weighted average assigns importance to values before calculating their average by multiplying each value by its predetermined \"weight\" and then dividing the total by the sum of the weights.",
        slug: "weighted-average",
        image: "https://cdn.prod.website-files.com/6482181daf8419aa99c7e4f3/652f90e3d966372259a05faa_undraw_data_report_re_p4so.svg"
      },
    ],
    Y: [],
    Z: []
  };

  // Find the entry by slug
  let currentEntry = null;
  for (const letterGroup of Object.values(glossaryData)) {
    const found = letterGroup.find(entry => entry.slug === slug);
    if (found) {
      currentEntry = found;
      break;
    }
  }

  // Get 3 random entries for "People also read" section
  const getRandomEntries = () => {
    const allEntries = Object.values(glossaryData).flat();
    const otherEntries = allEntries.filter(entry => entry.slug !== slug);
    const shuffled = otherEntries.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const truncateDefinition = (definition: string, wordLimit: number = 16) => {
    const words = definition.split(' ');
    if (words.length <= wordLimit) return definition;
    return words.slice(0, wordLimit).join(' ') + '…';
  };

  const handleCardClick = (entrySlug: string) => {
    navigate.push(`/entries/${entrySlug}`);
  };

  if (!currentEntry) {
    return (
      <div className="page-wrapper">
        <Navbar />
        <main className="main-wrapper">
          <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
            <div className="padding-global">
              <div className="container-large">
                <div className="text-align-center">
                  <h1>Entry not found</h1>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    );
  }

  const randomEntries = getRandomEntries();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['definition', 'share', 'related'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-wrapper">
      <Navbar />
      
      <main className="main-wrapper">
        {/* Top Section with Title and Description */}
        <section className="section" style={{ paddingTop: '140px', paddingBottom: '60px' }}>
          <div className="padding-global">
            <div className="container-large">
              <div style={{
                maxWidth: '856px',
                margin: '0 auto'
              }}>
                {/* Back Button */}
                <button
                  onClick={() => navigate.push('/legal-glossary')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#347AE9',
                    marginBottom: '32px',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <ArrowLeft size={20} />
                  Back to glossary
                </button>

                {/* Title */}
                <h1 style={{
                  fontFamily: 'DM Serif Display, serif',
                  fontSize: '48px',
                  lineHeight: '56px',
                  fontWeight: 400,
                  color: '#121212',
                  marginBottom: '24px',
                  textAlign: 'left'
                }}>
                  {currentEntry.term}
                </h1>

                {/* Full Description */}
                <p style={{
                  fontFamily: 'Open Sans, sans-serif',
                  fontSize: '18px',
                  lineHeight: '32px',
                  fontWeight: 400,
                  color: '#2D2D2D',
                  marginBottom: 0,
                  textAlign: 'left'
                }}>
                  {currentEntry.definition}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three Column Layout */}
        <section className="section" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
          <div className="padding-global">
            <div className="container-large">
              <div style={{
                display: 'grid',
                gridTemplateColumns: '240px 1fr 300px',
                gap: '48px',
                alignItems: 'start'
              }}>
                {/* Left: Sticky Table of Contents */}
                <div style={{
                  position: 'sticky',
                  top: '120px'
                }}>
                  <h3 style={{
                    fontFamily: 'Open Sans, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    marginBottom: '16px'
                  }}>
                    Table of Contents
                  </h3>
                  <nav>
                    <ol className="glossary-toc" style={{
                      listStyleType: 'none',
                      paddingLeft: '0',
                      margin: 0,
                      fontSize: '11px',
                      color: '#999'
                    }}>
                      <li style={{ 
                        marginBottom: '8px',
                        paddingLeft: '6px'
                      }}>
                        <a 
                          href="#definition"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('definition')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            display: 'block',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '14px',
                            color: activeSection === 'definition' ? '#347AE9' : '#2D2D2D',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            background: activeSection === 'definition' ? 'rgba(52, 122, 233, 0.1)' : 'transparent',
                            transition: 'all 0.2s',
                            marginLeft: '-6px',
                            cursor: 'pointer'
                          }}>
                          Definition
                        </a>
                      </li>
                      <li style={{ 
                        marginBottom: '8px',
                        paddingLeft: '6px'
                      }}>
                        <a 
                          href="#share"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('share')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            display: 'block',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '14px',
                            color: activeSection === 'share' ? '#347AE9' : '#2D2D2D',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            background: activeSection === 'share' ? 'rgba(52, 122, 233, 0.1)' : 'transparent',
                            transition: 'all 0.2s',
                            marginLeft: '-6px',
                            cursor: 'pointer'
                          }}>
                          Share
                        </a>
                      </li>
                      <li style={{ 
                        paddingLeft: '6px'
                      }}>
                        <a 
                          href="#related"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('related')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            display: 'block',
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '14px',
                            color: activeSection === 'related' ? '#347AE9' : '#2D2D2D',
                            textDecoration: 'none',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            background: activeSection === 'related' ? 'rgba(52, 122, 233, 0.1)' : 'transparent',
                            transition: 'all 0.2s',
                            marginLeft: '-6px',
                            cursor: 'pointer'
                          }}>
                          Related Terms
                        </a>
                      </li>
                    </ol>
                  </nav>
                </div>

                {/* Middle: Main Content */}
                <div style={{
                  maxWidth: '680px'
                }}>
                  <div id="definition" style={{ marginBottom: '48px' }}>
                    <h2 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '32px',
                      lineHeight: '40px',
                      fontWeight: 400,
                      color: '#121212',
                      marginBottom: '24px'
                    }}>
                      What is {currentEntry.term}?
                    </h2>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '16px',
                      lineHeight: '28px',
                      color: '#2D2D2D',
                      marginBottom: '24px'
                    }}>
                      {currentEntry.definition}
                    </p>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '24px',
                      color: '#AFAFAF',
                      fontStyle: 'italic'
                    }}>
                      This glossary provides an overview of some key legal terms for startups. It's essential to consult with a legal professional to ensure a comprehensive understanding of these terms and their implications for your specific situation.
                    </p>
                  </div>

                  <div id="share" style={{ marginBottom: '48px' }}>
                    <h3 style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#121212',
                      marginBottom: '16px'
                    }}>
                      Share this term
                    </h3>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        style={{
                          background: 'none',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          padding: '12px',
                          color: '#2D2D2D',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#347AE9';
                          e.currentTarget.style.color = '#347AE9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#E5E5E5';
                          e.currentTarget.style.color = '#2D2D2D';
                        }}
                      >
                        <span>In</span>
                      </button>
                      
                      <button
                        style={{
                          background: 'none',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          padding: '12px',
                          color: '#2D2D2D',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => window.open(`https://www.facebook.com/sharing/sharer.php?u=${window.location.href}`, '_blank')}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#347AE9';
                          e.currentTarget.style.color = '#347AE9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#E5E5E5';
                          e.currentTarget.style.color = '#2D2D2D';
                        }}
                      >
                        <span>FB</span>
                      </button>
                      
                      <button
                        style={{
                          background: 'none',
                          border: '1px solid #E5E5E5',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          padding: '12px',
                          color: '#2D2D2D',
                          transition: 'all 0.2s'
                        }}
                        onClick={() => window.open(`https://TwitterIcon.com/intent/tweet?url=${window.location.href}&text=${currentEntry.term}`, '_blank')}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#347AE9';
                          e.currentTarget.style.color = '#347AE9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#E5E5E5';
                          e.currentTarget.style.color = '#2D2D2D';
                        }}
                      >
                        <span>X</span>
                      </button>
                    </div>
                  </div>

                  <div id="related">
                    <h3 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '28px',
                      lineHeight: '36px',
                      fontWeight: 400,
                      color: '#121212',
                      marginBottom: '24px'
                    }}>
                      Related Terms
                    </h3>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}>
                      {randomEntries.map((entry, index) => (
                        <div
                          key={index}
                          onClick={() => handleCardClick(entry.slug)}
                          style={{
                            padding: '20px',
                            background: '#FFFFFF',
                            border: '1px solid rgba(52, 122, 233, 0.25)',
                            borderRadius: '12px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(52, 122, 233, 0.4)';
                            e.currentTarget.style.transform = 'translateX(4px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(52, 122, 233, 0.25)';
                            e.currentTarget.style.transform = 'translateX(0)';
                          }}
                        >
                          <h4 style={{
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '16px',
                            fontWeight: 600,
                            color: '#121212',
                            marginBottom: '8px'
                          }}>
                            {entry.term}
                          </h4>
                          <p style={{
                            fontFamily: 'Open Sans, sans-serif',
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#808080',
                            margin: 0
                          }}>
                            {truncateDefinition(entry.definition)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Sticky Component */}
                <div style={{
                  position: 'sticky',
                  top: '120px'
                }}>
                  <div style={{
                    padding: '24px',
                    background: '#F5FCFF',
                    border: '1px solid rgba(52, 122, 233, 0.25)',
                    borderRadius: '12px'
                  }}>
                    <h4 style={{
                      fontFamily: 'DM Serif Display, serif',
                      fontSize: '24px',
                      fontWeight: 400,
                      color: '#121212',
                      lineHeight: '32px',
                      marginBottom: '16px'
                    }}>
                      Get your legals in order
                    </h4>
                    <p style={{
                      fontFamily: 'Open Sans, sans-serif',
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: '#2D2D2D',
                      marginBottom: '20px'
                    }}>
                      Sign up to our platform to streamline your legal tasks, get personalised step-by-step guidance, on-demand access to lawyers and access a wide range of templates and resources
                    </p>
                    <a
                      href="/signup"
                      style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: '#347AE9',
                        color: '#FFFFFF',
                        fontFamily: 'Open Sans, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        borderRadius: '9999px',
                        transition: 'background 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#2B68C4'}
                      onMouseLeave={(e) => e.currentTarget.style.background = '#347AE9'}
                    >
                      Sign up for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Get your legals in order section */}
      <LegalsOrderSection />

      <Footer />
      <CookieConsent />

      <style jsx>{`
        @media (max-width: 1200px) {
          div[style*="gridTemplateColumns: '240px 1fr 300px'"] {
            grid-template-columns: 1fr !important;
          }
          
          div[style*="position: 'sticky'"] {
            position: static !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GlossaryDetailPage;
