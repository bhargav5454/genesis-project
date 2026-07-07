
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RulesOfAcceptableUsePage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="main-wrapper">
        <div className="section">
          <div className="padding-global">
            <div className="container-large">
              <div className="padding-section-large">
                <div className="max-w-4xl mx-auto policy-content">
                  <h1 className="text-3xl font-bold mb-8 text-center">Rules of Acceptable Use</h1>

                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
                    <h2 className="text-xl font-bold mt-8 mb-4">Who we are and how to contact us</h2>
                    <p className="mb-4">www.sulehub.com (our site) is a site operated by SuLe Hub Limited ("We" or "SuLe"). We are a limited liability company registered in England and Wales under company number 14829079 and have our registered office at Capital Office, 124-128 City Road, London, United Kingdom, EC1V 2NX.</p>
                    <p className="mb-6">To contact us, please email hello@sulehub.com.</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">There are other terms that may apply to you</h2>
                    <p className="mb-4">Our Terms and Conditions also apply to your use of our site.</p>
                    <p className="mb-6">This policy describes specific rules that apply to your use of our site (the "Rules of Acceptable Use").</p>

                    <h2 className="text-xl font-bold mt-8 mb-4">Prohibited uses</h2>
                    <p className="mb-4">When using our site you must not:</p>
                    <div className="mb-4 ml-6 space-y-2">
                      <p className="clause-letter"><span className="num">(a)</span><span>circumvent, disable or otherwise interfere with any security related features of our site;</span></p>
                      <p className="clause-letter"><span className="num">(b)</span><span>give any false or misleading information, impersonate any person or permit any other person to use our site under your name or on your behalf unless such person is authorised by you;</span></p>
                      <p className="clause-letter"><span className="num">(c)</span><span>use our site if we have suspended or banned you from using it;</span></p>
                      <p className="clause-letter"><span className="num">(d)</span><span>advocate, promote or engage in any illegal or unlawful conduct or conduct that causes damage or injury to any person or property;</span></p>
                      <p className="clause-letter"><span className="num">(e)</span><span>modify, interfere, intercept, disrupt or hack our site;</span></p>
                      <p className="clause-letter"><span className="num">(f)</span><span>misuse our site by knowingly introducing viruses, Trojans, worms, logic bombs or other material which would harm any of our site or any user of our site's own equipment;</span></p>
                      <p className="clause-letter"><span className="num">(g)</span><span>collect any data from our site other than in accordance with these Rules of Applicable Use or Terms and Conditions;</span></p>
                      <p className="clause-letter"><span className="num">(h)</span><span>submit or contribute any user content that contains nudity or violence or is abusive, threatening, obscene, misleading, untrue or offensive;</span></p>
                      <p className="clause-letter"><span className="num">(i)</span><span>submit or contribute any user content that you do not own or have the right to use or otherwise infringe the copyright, trademark or other rights of third parties;</span></p>
                      <p className="clause-letter"><span className="num">(j)</span><span>use any user content in violation of any licensing terms specified by the owner;</span></p>
                      <p className="clause-letter"><span className="num">(k)</span><span>submit or contribute any information or commentary about another person without that person's permission;</span></p>
                      <p className="clause-letter"><span className="num">(l)</span><span>threaten, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety or be likely to harass, upset, embarrass, alarm or annoy any other person; or</span></p>
                      <p className="clause-letter"><span className="num">(m)</span><span>use any automated system, including without limitation "robots", "spiders" or "offline readers" to access our site in a manner that send more request messages to our site than a human can reasonably produce in the same period of time.</span></p>
                    </div>

                    <p className="mb-4">Failure to comply with the Rules of Acceptable Use constitutes a serious breach of our Terms of Use, and may result in our taking all or any of the following actions (with or without notice):</p>
                    <div className="mb-4 ml-6 space-y-2">
                      <p className="clause-letter"><span className="num">(n)</span><span>immediate, temporary or permanent withdrawal of your right to use our site;</span></p>
                      <p className="clause-letter"><span className="num">(o)</span><span>immediate, temporary or permanent removal of any user content;</span></p>
                      <p className="clause-letter"><span className="num">(p)</span><span>issuing of a warning to you;</span></p>
                      <p className="clause-letter"><span className="num">(q)</span><span>legal action against you including proceedings for reimbursement of all costs (including, but not limited to, reasonable administrative and legal costs) resulting from the breach;</span></p>
                      <p className="clause-letter"><span className="num">(r)</span><span>disclosure of such information to law enforcement authorities as we reasonably feel is necessary.</span></p>
                    </div>
                    <p className="mb-6">The responses described are not limited, and we may take any other action we reasonably deem appropriate.</p>
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

export default RulesOfAcceptableUsePage;
