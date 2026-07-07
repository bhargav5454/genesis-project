import React from 'react';

export interface NewsPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: string;
  readTime: string;
  image: string | any;
  imagePosition?: string;
  content: React.ReactNode;
}

import ventureForwardCover from '@/assets/news/venture-forward-cover.png';
import richardBloomfieldCover from '@/assets/news/richard-bloomfield-clo.jpeg';
import aiFounderPitchCover from '@/assets/news/ai-founder-pitch-roundtable-night.png';
import aiPitchNight1 from '@/assets/news/ai-pitch-night-1.jpg';
import aiPitchNight2 from '@/assets/news/ai-pitch-night-2.jpg';
import aiPitchNight3 from '@/assets/news/ai-pitch-night-3.jpg';
import aiPitchNight4 from '@/assets/news/ai-pitch-night-4.jpg';
import aiPitchNightTeam from '@/assets/news/ai-pitch-night-team.jpg';
import londonSummerGrowthMixer from '@/assets/news/london-summer-growth-mixer.png';
import legaltechLaunchpad2026 from '@/assets/news/legaltech-launchpad-2026.png';
import NewsImageSlider from '@/components/NewsImageSlider';

export const newsPosts: NewsPost[] = [
  {
    slug: 'su-le-wins-2nd-place-legaltech-launchpad-2026',
    title: 'SuLe Wins 2nd Place at LegalTech Launchpad 2026',
    subtitle: 'LegalTech Launchpad 2026 - 2nd Place',
    description: 'SuLe finished in second place at LegalTechTalk\'s LegalTech Launchpad 2026, with CEO Patricia Wing pitching on the Discovery Stage.',
    date: '19 June 2026',
    readTime: '3 min read',
    image: legaltechLaunchpad2026,
    imagePosition: 'center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          Thirty companies, one stage, and some of the sharpest minds in the legal technology industry watching. LegalTechTalk's LegalTech Launchpad brings together a wide field of legal technology companies each year, from early-stage products to more established platforms, and asks them to make their case in front of an audience that knows the sector well. SuLe's CEO Patricia Wing took to the Discovery Stage on 19th June, and SuLe finished in second place!
        </p>
        <p style={{ marginBottom: '24px' }}>
          Patricia pitched SuLe's vision for what venture deals look like when the process is built for the speed the industry demands, addressing a problem that remains stubbornly present across the venture ecosystem: funding rounds that still run largely on email, manual document review, and fragmented communication between founders, lawyers, and investors.
        </p>
        <p style={{ marginBottom: '24px' }}>
          SuLe was named one of the top three finalists and will receive dedicated support from this year's LaunchPad partner PwC UK, including strategic consulting and investment banking coaching.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Congratulations to SmartEsq, Inc., who took home the grand prize! The other companies who shared the Discovery Stage that day - Contractzlab, LexPipe, Contracts.ai, Dealflow, SingleSource Technologies, LegalEngine, HeraldAI, GenC, Casey (Legal AI), Courtroom, Revax, Phaselaw, Litmas AI, Practical Probate, Reversa, Recu, Project Olive Branch, ReVia, HAQQ, Qanooni, Together Alone Ventures, Saga, Lawyered Up, Zubu, LawNeeds Ltd, Juztina, Edenreach, and Tokuma Labs, represented a broad and genuinely strong field. Each company brought real conviction to the stage, and the quality of what was pitched that day was worth acknowledging directly.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Finishing second in a field of 30 companies, and walking away with PwC UK support as part of the prize, is a meaningful outcome. But the value of a day like this goes further than the result. Being on the Discovery Stage at LegalTechTalk puts SuLe's work in front of the legal technology community at a moment when the conversation about how venture funding should operate is accelerating. The connections made on the day, and the conversations that came out of that room, are what we carry forward.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We are grateful to the LegalTechTalk team for the care and professionalism they brought to the entire day.
        </p>
      </>
    ),
  },
  {
    slug: 'london-summer-growth-mixer-sule-connectd',
    title: 'London Summer Growth Mixer with SuLe and Connectd',
    subtitle: 'London Summer Growth Mixer recap',
    description: 'SuLe and Connectd brought together over 100 founders, fractional leaders, investors, and ecosystem partners to the rooftop at Queen of Hoxton on 14th May.',
    date: '14 May 2026',
    readTime: '3 min read',
    image: londonSummerGrowthMixer,
    imagePosition: 'center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          The London Summer Growth Mixer was not a typical networking event. SuLe and Connectd brought together over 100 founders, fractional leaders, investors, and ecosystem partners to the rooftop at Queen of Hoxton on 14th May, with one shared goal: leave with one deal, one introduction, or one story worth telling. The rooftop sold out weeks before the night. A waiting list kept growing right up until the doors opened.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The premise was deliberately simple. Put the right people in the same room, remove the formality that usually surrounds founder events, and let the conversations do the work. The guest list was curated to reflect that. Founders with real traction. Fractional and commercial leaders in growth-stage businesses. Investors actively deploying capital. B2B senior leaders looking for meaningful startup collaborations. No tyre-kickers, and no passive attendees.
        </p>
        <p style={{ marginBottom: '24px' }}>
          By the time the rooftop closed and the party moved downstairs, deals had been started, introductions had been made, and new connections had formed that went well beyond the transactional. Our co-founders were on the dance floor. The DJ was setting the tone. And a room full of serious builders had spent an evening finding each other.
        </p>
        <p style={{ marginBottom: '24px' }}>
          This event would not have been possible without Connectd, whose collaboration and shared vision made it what it was. A particular thank you to Alex Rose for making the partnership happen from the start.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We are also grateful to Dell Technologies for sponsoring the evening. Through the Dell Technologies Startups and Entrepreneurs programme, Dell provides founders and growing businesses with access to tailored IT solutions, exclusive pricing, and a team of specialists equipped to help at every stage of growth. Their support for events like this reflects a genuine commitment to the startup ecosystem.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The waiting list on the night, the conversations that ran past midnight, and the feedback we received in the days that followed all point to the same conclusion - founders are hungry for spaces where the room has been chosen as carefully as the agenda.
        </p>
      </>
    ),
  },
  {
    slug: 'ai-founder-pitch-roundtable-night-sule-brown-rudnick',
    title: 'Inside the AI Founder Pitch & Roundtable Night hosted by SuLe and Brown Rudnick',
    subtitle: 'AI Founder Pitch & Roundtable Night recap',
    description: 'On April 30th, SuLe and Brown Rudnick brought together over 100 founders, investors, lawyers, and operators for an evening centered around meaningful conversation and collaboration within the AI ecosystem.',
    date: '4 May 2026',
    readTime: '4 min read',
    image: aiFounderPitchCover,
    imagePosition: 'center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          On April 30th, SuLe and Brown Rudnick brought together over 100 founders, investors, lawyers, and operators for an evening centered around meaningful conversation and collaboration within the AI ecosystem.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Hosted at Home House Studio, the AI Founder Pitch &amp; Roundtable Night was intentionally designed to move away from the traditional startup event format. Rather than panels or keynote sessions, the evening focused on active participation, founder pitches, and small-group discussions led by investors and senior industry figures.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The event welcomed Seed and Series A founders alongside attendees from firms including MMC Ventures, Syndicate Room, Cloudberry Ventures, Antler, Sie Ventures, Lloyds Banking Group, and Haatch.
        </p>
        <p style={{ marginBottom: '24px' }}>The evening featured:</p>
        <ul style={{ marginBottom: '24px', paddingLeft: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>8 AI founder pitches</li>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>Simultaneous themed roundtable discussions</li>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>Founder-led voting for the top pitches of the night</li>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>Networking over food and drinks</li>
        </ul>
        <p style={{ marginBottom: '24px' }}>
          Each roundtable was deliberately kept intimate to encourage open discussion and meaningful engagement between attendees.
        </p>
        <p style={{ marginBottom: '24px' }}>Congratulations to the founders selected by the room:</p>
        <ul style={{ marginBottom: '24px', paddingLeft: '24px', listStyleType: 'disc' }}>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>First place: Mabel Chu (WPARK)</li>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>Second place: Victoria Peppiatt (Hey Savi)</li>
          <li style={{ marginBottom: '8px', backgroundImage: 'none', paddingLeft: 0, fontFamily: 'inherit', fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>Third place: Hugh Craigie Halkett (stampfree.ai)</li>
        </ul>
        <p style={{ marginBottom: '24px' }}>
          At SuLe, we believe founder events should offer more than surface-level networking. Our goal was to create a space where founders, investors, and advisors could engage in thoughtful, practical conversations and build meaningful connections.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The feedback following the event reinforced exactly that, with many attendees sharing that it was one of the most engaging and well-organised founder events they had attended.
        </p>
        <p style={{ marginBottom: '24px' }}>
          A special thank you to Neil Foster and the team at Brown Rudnick for partnering with us to bring the evening to life, and to everyone who joined and contributed to the discussions throughout the night.
        </p>
        <p style={{ marginBottom: '24px' }}>
          This event marks just the beginning, and we look forward to continuing to create spaces that bring together founders, investors, and industry leaders in a more meaningful way.
        </p>
        <NewsImageSlider
          images={[
            { src: aiPitchNightTeam, alt: 'The SuLe team at the AI Founder Pitch & Roundtable Night' },
            { src: aiPitchNight1, alt: 'Hugh Craigie Halkett pitching stampfree.ai' },
            { src: aiPitchNight2, alt: 'First place winner Mabel Chu (WPARK)' },
            { src: aiPitchNight3, alt: 'Roundtable discussion at the AI Founder Pitch & Roundtable Night' },
            { src: aiPitchNight4, alt: 'Founder pitching to the room at the AI Founder Pitch & Roundtable Night' },
          ]}
        />
      </>
    ),
  },
  {
    slug: 'richard-bloomfield-joins-sule-chief-legal-officer',
    title: 'Richard Bloomfield joins SuLe as Chief Legal Officer and General Counsel',
    subtitle: 'New appointment: Chief Legal Officer & General Counsel',
    description: 'The SuLe Team is pleased to announce that Richard Bloomfield has joined the company as Chief Legal Officer & General Counsel.',
    date: '28 April 2026',
    readTime: '4 min read',
    image: richardBloomfieldCover,
    imagePosition: 'center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          The SuLe Team is pleased to announce that Richard Bloomfield has joined the company as Chief Legal Officer &amp; General Counsel.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Richard brings a wealth of experience from leading international law firms including Goodwin, Bird &amp; Bird, and Herbert Smith Freehills, where he advised founders, startups, scale-ups, and investors on financings, M&amp;A, private equity transactions, and debt facilities. More recently, he led legal at a global MedTech company, further deepening his perspective across both private practice and in-house environments.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Throughout his career, Richard has worked on the transactions that define critical moments in a company's journey - from early-stage financings through to complex restructurings and exits. His experience sits at the intersection of legal precision and real-world execution, with a strong understanding of how transactional work is actually delivered on the ground.
        </p>
        <p style={{ marginBottom: '24px' }}>
          His move into LegalTech reflects a clear conviction: while the legal industry has seen significant innovation in areas such as document review, contract lifecycle management, and legal operations, the day-to-day reality of transactional legal work has remained largely unchanged.
        </p>
        <p style={{ marginBottom: '24px' }}>
          At SuLe, Richard will play a key role in shaping and scaling the company's legal infrastructure across both Founders' Hub and Venture Hub - with a focus on building technology that supports the real workflows of transactional lawyers, enabling high-quality legal work to be delivered more efficiently and at the pace the venture ecosystem demands.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Speaking on the appointment, SuLe CEO Patricia Wing said:
        </p>
        <p style={{ marginBottom: '24px', fontStyle: 'italic' }}>
          "Richard is an exceptional lawyer and someone I've had the privilege of knowing since my early days at Bird &amp; Bird. His experience, judgement, and the way he works with people make him a natural fit for what we're building at SuLe. We're incredibly excited to have him join the team."
        </p>
        <p style={{ marginBottom: '24px' }}>
          Richard Bloomfield added:
        </p>
        <p style={{ marginBottom: '24px', fontStyle: 'italic' }}>
          "Most of my career has been spent working on the transactions that mark key milestones in a company's life. I've seen first-hand how demanding and manual the process can be for legal teams. I believe there is a real opportunity for technology to better support how transactional work is actually done, and that's exactly what we're building at SuLe. I'm excited to be part of this next phase."
        </p>
        <p style={{ marginBottom: '24px' }}>
          This appointment marks an important step in SuLe's growth as it continues to build legal infrastructure designed specifically for the needs of founders, law firms, and investors - combining deep legal expertise with thoughtfully designed technology.
        </p>
      </>
    ),
  },
  {
    slug: 'sule-selected-mountside-ventures-venture-forward-programme',
    title: "SuLe Selected for Mountside Ventures' Venture Forward Programme",
    subtitle: 'Mountside Ventures program recap',
    description: 'SuLe was recently selected to participate in the Venture Forward programme led by Mountside Ventures - an initiative designed to support venture-backed companies in refining their positioning, narrative, and investor readiness.',
    date: '18 March 2026',
    readTime: '5 min read',
    image: ventureForwardCover,
    imagePosition: '20% center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe was recently selected to participate in the Venture Forward programme led by Mountside Ventures - an initiative designed to support venture-backed companies in refining their positioning, narrative, and investor readiness.
        </p>
        <p style={{ marginBottom: '24px' }}>
          With the programme now concluded, it has provided a valuable moment for reflection on how we communicate the work we are building and the direction we are heading as a company.
        </p>
        <p style={{ marginBottom: '24px' }}>
          While such programmes are often associated with pitch refinement and investor presentations, the value of Venture Forward extended far beyond improving slides or delivery. It challenged us to step back and sharpen how we articulate the problems we solve, the infrastructure we are building, and the long-term opportunity behind it.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Several key ideas stood out throughout the programme.
        </p>
        <p style={{ marginBottom: '24px' }}>
          One of the most valuable was understanding the distinction between a compelling, institutional-grade pitch deck and one that fails to sustain investor attention. This difference is not driven by aesthetics alone, but by how clearly the narrative conveys the scale of the opportunity, the credibility of the solution, and the strategic thinking behind growth.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We also refined our elevator pitch, distilling a complex product and vision into something concise, commercially grounded, and memorable. This process required clarity on what truly matters to our audience.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Perhaps most importantly, the programme reinforced the discipline of removing noise and focusing on signal. In fast-moving companies, it is easy to over-communicate. Effective storytelling, however, depends on prioritising what matters and expressing it with precision.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We are immensely grateful to Jonathon Hollis for his thoughtful and direct guidance throughout the programme. His insights helped sharpen both how we present SuLe and how we think about our broader narrative.
        </p>
        <p style={{ marginBottom: '24px' }}>
          As we continue developing SuLe Venture Hub, a white-labelled platform for venture law firms to manage financing transactions more efficiently while preserving firm standards and house styles, this clarity strengthens the work happening behind the scenes.
        </p>
        <p style={{ marginBottom: '24px' }}>
          We would also like to thank the Mountside Ventures team, as well as the founders in the cohort, whose perspectives made the experience especially valuable.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Programmes like Venture Forward serve as a reminder that while building a company requires conviction, it is strengthened by reflection, external perspective, and shared learning.
        </p>
      </>
    ),
  },
  {
    slug: 'draper-university-pitch-competition-winner',
    title: "SuLe's CPO Nilsu Derici Represents SuLe at Draper University. Wins Pitch Competition.",
    subtitle: 'Draper University Pitch Competition - Winner',
    description: 'Nilsu Derici joined Draper University in Silicon Valley, pitched SuLe, and was selected as one of the winners.',
    date: '27 June 2024',
    readTime: '4 min read',
    image: '/images/draper-university-pitch-competition.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          Nilsu Derici, who was our product advisor then, joined Draper University in Silicon Valley after being accepted into the programme with a scholarship.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Draper University is an intensive entrepreneurship programme focused on shaping what it calls "heroes", also known as founders building ambitious, high-impact startups. The programme was founded by Tim Draper, a prominent Silicon Valley venture capitalist known for early investments in companies such as Tesla, Skype, and Coinbase. Draper University brings together entrepreneurs from around the world to learn, build, and challenge conventional thinking around startup growth.
        </p>
        <p style={{ marginBottom: '24px' }}>
          During the programme, Nilsu worked alongside more than 100 entrepreneurs from diverse industries, participating in workshops, hackathons, and hands-on sessions designed to push founders beyond theory and into execution. The curriculum included business, leadership, fundraising, and product-market fit, delivered through an immersive, fast-paced environment.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Nilsu also had the opportunity to attend sessions led by renowned mentors and industry leaders, including Rachel Konrad and Dan Goldin, gaining exposure to perspectives from both the technology and innovation ecosystems. In addition to learning, Nilsu actively contributed to the programme by running hackathons and collaborating closely with fellow founders.
        </p>
        <p style={{ marginBottom: '24px' }}>
          As part of the Draper experience, founders were invited to pitch their startups. Nilsu pitched SuLe during the Draper pitch competition, where she was selected as one of the winners! The pitch focused on SuLe's mission to modernise legal infrastructure for startups and SMEs through accessible, technology-driven solutions.
        </p>
        <p style={{ marginBottom: '24px' }}>
          For SuLe, Draper University marked a significant moment. Nilsu's time in Silicon Valley deepened her involvement with the company and sharpened its product vision, drawing on global perspectives and high-growth startup thinking. Following the programme, she made the decision to bring those insights back to the UK ecosystem, contributing directly to SuLe's next stage of growth.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Shortly after Draper, Nilsu formally joined SuLe as Co-Founder and CPO, having already worked closely with CEO Patricia Wing in the months leading up to the programme. Draper University served as both a catalyst and a confirmation of the shared ambition to build SuLe into a scalable, founder-first legal platform.
        </p>
        <p>
          Nilsu's journey through Draper University reflects SuLe's broader ethos: learning from the best, building with intention, and applying global insights to solve real problems faced by founders closer to home.
        </p>
      </>
    )
  },
  {
    slug: 'connected-britain-award-2024-shortlist',
    title: 'Shortlisted for the Connected Britain Award 2024',
    subtitle: 'Connected Britain Award 2024 – Shortlist | Enterprise Solution of the Year category',
    description: 'SuLe was shortlisted for the Connected Britain Award 2024 under the Enterprise Solution of the Year category.',
    date: '11 September 2024',
    readTime: '2 min read',
    image: '/images/connected-britain-award-2024.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe was shortlisted for the Connected Britain Award 2024 under the Enterprise Solution of the Year category, which recognises organisations delivering scalable and impactful digital solutions across the UK's business and technology landscape.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The Connected Britain Awards celebrate innovation that drives real-world outcomes for enterprises and SMEs. Being shortlisted represents an encouraging early milestone for SuLe and reflects the platform's growing role in modernising legal infrastructure for startups and scaling businesses, particularly those navigating regulatory complexity, commercial growth, and investment readiness.
        </p>
        <p>
          By combining legal expertise with intuitive technology, SuLe aims to support businesses beyond document creation, helping founders make more informed decisions as they grow. While the award itself was highly competitive, the shortlist recognition alone marks an important step in SuLe's journey as it continues to build credibility and impact within the wider UK enterprise ecosystem.
        </p>
      </>
    )
  },
  {
    slug: 'cyber-essentials-certified',
    title: 'SuLe is now Cyber Essentials Certified',
    subtitle: 'SuLe becomes Cyber Essentials certified',
    description: 'SuLe officially achieved the Cyber Essentials certification, marking a significant milestone in security and data protection.',
    date: '17 October 2024',
    readTime: '2 min read',
    image: '/images/cyber-essentials-certified.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          In October 2024, SuLe officially achieved the Cyber Essentials certification, marking a significant milestone in the platform's ongoing commitment to security, data protection, and responsible technology development.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Cyber Essentials is a UK government-backed certification that sets a recognised baseline for cybersecurity, helping organisations protect themselves against the most common forms of cyber threats. Achieving this certification confirms that SuLe has implemented essential technical controls across its systems to reduce risk, protect user data, and maintain platform integrity.
        </p>
        <p style={{ marginBottom: '24px' }}>
          For a legal tech startup handling sensitive legal, commercial, and personal information, this certification represents more than a compliance requirement. It reflects SuLe's deliberate approach to building trust, accountability, and resilience into the core of the platform from an early stage. Cyber Essentials provides users and partners with assurance that industry-recognised security measures are in place, and that cybersecurity is treated as a fundamental part of SuLe's operations.
        </p>
        <p>
          As SuLe continued to expand its client base and work more closely with professional services firms and enterprise partners, Cyber Essentials certification became a critical step in strengthening credibility and supporting long-term growth. While no system can ever be completely immune to cyber risk, this certification demonstrates SuLe's commitment to proactively reducing threats and continuously improving its security posture as the platform evolves.
        </p>
      </>
    )
  },
  {
    slug: 'founders-hub-launch',
    title: "SuLe Launches Founders' Hub to Make Legal Support More Accessible for Startups and SMEs",
    subtitle: "SuLe Founders' Hub launch",
    description: "SuLe has officially launched its Founders' Hub, marking the full release of its smart legal platform for startups and SMEs.",
    date: '28 November 2024',
    readTime: '3 min read',
    image: '/images/founders-hub-launch.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe has officially launched its Founders' Hub, marking the full release of its smart legal platform designed to help startups and SMEs build strong legal foundations from day one.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The Founders' Hub brings together essential legal tools, guidance, and support in one central platform, giving businesses access to fundamental documents such as team agreements, shareholder agreements, and commercial contracts. Documents that would traditionally cost thousands of pounds through traditional legal services are now available at a fraction of the cost, without compromising on quality or reliability.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The launch follows growing demand from SuLe's early users, with over 300 clients placing their trust in the platform prior to the full release. Feedback from this community played a key role in shaping the Founders' Hub, ensuring that the platform reflects the real challenges founders face as they start, scale, and prepare for investment.
        </p>
        <p style={{ marginBottom: '24px' }}>
          At the core of the Founders' Hub is SuLe's legal roadmap, which guides businesses on what legal steps to take and when, based on their size, stage, and structure. Rather than overwhelming founders with unnecessary documents, the roadmap helps prioritise what matters most at each stage of growth, reducing risk while supporting momentum.
        </p>
        <p style={{ marginBottom: '24px' }}>
          In addition to self-serve legal tools, the Founders' Hub also provides access to SuLe's team of expert lawyers for situations that require deeper expertise or tailored advice. This hybrid approach ensures founders are supported not only through documentation, but also through more complex legal decisions as their businesses evolve.
        </p>
        <p>
          The launch of the Founders' Hub reflects SuLe's broader mission to make legal services more accessible, transparent, and affordable for founders and small businesses. By combining technology, clear guidance, and human legal expertise, SuLe aims to remove friction from legal processes and help businesses scale smarter and faster.
        </p>
      </>
    )
  },
  {
    slug: 'tech-impact-awards-2025-nominee',
    title: 'SuLe Nominated for the Tech Impact Awards 2025',
    subtitle: "Tech Impact Awards 2025 – Nominee under the 'Best Tech Inclusion Initiative' category",
    description: 'SuLe was nominated as a finalist for the Tech Impact Awards 2025 under the Best Tech Inclusion Initiative category.',
    date: '2 December 2024',
    readTime: '3 min read',
    image: '/images/tech-impact-awards-2025.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          It's incredibly exciting to share that SuLe was nominated as a finalist for the Tech Impact Awards 2025 under the Best Tech Inclusion Initiative category, which recognises technology-led organisations that actively promote access, inclusion, and meaningful societal impact through innovation.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The nomination placed SuLe alongside a group of highly respected and impactful organisations, including Sky, Mountside Ventures, XR Diversity Initiative, CCP Games, Alzheimer's Society, and Ivy Tech. Being recognised among such a strong cohort of finalists was an honour for the SuLe team and highlighted the growing relevance of inclusive technology within the legal and professional services space.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The Best Tech Inclusion Initiative category celebrates initiatives that go beyond product development to create real-world change. For SuLe, this recognition reflects its ongoing mission to make legal support more accessible for startups and SMEs that are often underserved by traditional legal models. By offering affordable, easy-to-use legal tools alongside educational resources, SuLe aims to reduce barriers that prevent early-stage businesses from building strong legal foundations.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Although SuLe did not take home the award, the category win by Alzheimer's Society underscored the calibre of organisations involved and the importance of technology-driven inclusion across industries. For SuLe, being shortlisted served as a meaningful validation of the work being done to improve access to legal services through technology.
        </p>
        <p>
          The nomination reinforced SuLe's belief that innovation in legal tech should not only focus on efficiency and scale, but also on equity, accessibility, and long-term impact. SuLe remains grateful to the Tech Impact Awards for recognising the role that inclusive innovation plays in shaping the future of technology and entrepreneurship.
        </p>
      </>
    )
  },
  {
    slug: 'enterprise-nation-adviser-awards-2024-shortlist',
    title: 'SuLe Shortlisted for Enterprise Nation 2024 Adviser Awards',
    subtitle: 'Enterprise Nation 2024 Adviser Awards – Shortlist | Legal category',
    description: 'SuLe was shortlisted for the Enterprise Nation 2024 Adviser Awards in the Legal category.',
    date: '6 December 2024',
    readTime: '2 min read',
    image: '/images/enterprise-nation-adviser-awards-2024.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe was shortlisted for the Enterprise Nation 2024 Adviser Awards in the Legal category, recognising advisers and platforms that provide meaningful, practical support to small businesses and entrepreneurs across the UK.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The Enterprise Nation Adviser Awards celebrate individuals and organisations that play a vital role in helping SMEs start, grow, and succeed. SuLe's shortlisting reflects its founder-first approach to legal services, combining clarity, accessibility, and technology to support businesses at different stages of their journey.
        </p>
        <p style={{ marginBottom: '24px' }}>
          For many startups and SMEs, traditional legal services can be complex, costly, and difficult to access. SuLe was built to address this gap by offering affordable legal tools and guidance designed for real-world business needs, helping founders navigate legal decisions with greater confidence and understanding.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The awards ceremony, held at The Shard in London, brought together advisers, ecosystem partners, and business supporters from across the UK. While SuLe did not take home the award, being shortlisted alongside other respected advisers and organisations was a meaningful milestone and a strong validation of the work being done to support the small business community.
        </p>
        <p>
          SuLe is grateful to Enterprise Nation for recognising the importance of accessible legal support and for celebrating the advisers and platforms that help empower entrepreneurs. The recognition also reflects the dedication and collective effort of the wider SuLe team, whose commitment continues to shape the platform and its impact.
        </p>
      </>
    )
  },
  {
    slug: 'new-wave-entrepreneurship-event',
    title: 'SuLe x Roots Funding "The New Wave of Entrepreneurship" Event in London',
    subtitle: 'The New Wave of Entrepreneurship event',
    description: "SuLe co-hosted The New Wave of Entrepreneurship, its first in-person event, in partnership with Roots Funding.",
    date: '31 March 2025',
    readTime: '3 min read',
    image: '/images/new-wave-entrepreneurship-event.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe co-hosted The New Wave of Entrepreneurship, its first in-person event, in partnership with Roots Funding, bringing together founders, investors, and ecosystem leaders to explore how entrepreneurship is evolving in an increasingly complex business landscape.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Held at Barclays Innovation Hub powered by Eagle Labs in London, the event was designed to address the shifting realities faced by modern founders, including new regulatory requirements, the rapid rise of artificial intelligence, changing investor priorities, and evolving consumer behaviour. The evening combined practical insights with meaningful networking, creating a space for honest conversations about what it takes to adapt and thrive in today's environment.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The event featured a diverse panel of experienced speakers from across the startup, funding, and professional services ecosystem, including Abigail Foster, Chris Joannou, Diego Argüello Ron, Vivienne Hsu, Dr Dupe Burgess, Tony Margiotta, Sam Matanle, and Laura Fullerton. Panel discussions focused on topics such as funding readiness, operational resilience, future-focused growth strategies, and the importance of building strong foundations early.
        </p>
        <p style={{ marginBottom: '24px' }}>
          In addition to interactive panel sessions, the event included a Founder Matchboard, designed to encourage meaningful connections between entrepreneurs, investors, and innovators. The format reflected SuLe's belief that strong businesses are built not only through tools and capital, but through access to the right conversations, people, and support networks.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The New Wave of Entrepreneurship event marked an important milestone for SuLe as it continues to expand its role beyond a legal tech platform into an active contributor within the UK startup ecosystem. SuLe is grateful to everyone who attended, shared insights, and helped make the evening a success, as well as to Roots Funding for their partnership and Barclays Innovation Hub powered by Eagle Labs for hosting the event.
        </p>
        <p>
          Following the success of the event, SuLe looks forward to hosting more community-led initiatives that support founders at every stage of their journey.
        </p>
      </>
    )
  },
  {
    slug: 'uk-startup-awards-2025-finalist',
    title: 'SuLe Named Finalist at London UK StartUp Awards 2025',
    subtitle: "UK Startup Awards 2025 – Finalist under the 'Professional services' category",
    description: 'SuLe was named a finalist in the Professional Services category at the London UK StartUp Awards 2025.',
    date: 'April 2025',
    readTime: '2 min read',
    image: '/images/uk-startup-awards-2025.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe was named a finalist in the Professional Services category at the London UK StartUp Awards 2025, recognising innovative businesses delivering impact and value within the UK startup ecosystem.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The UK StartUp Awards celebrate entrepreneurship, innovation, and growth across a wide range of industries. SuLe's finalist position reflects the team's continued commitment to making legal support more accessible and affordable for British SMEs through technology-led solutions.
        </p>
        <p style={{ marginBottom: '24px' }}>
          SuLe was proud to be shortlisted alongside a strong group of finalists, including Catalyst Partners, Nara Solicitors, Pivot, Salmo, and Vizzy, all of whom are contributing meaningfully to the professional services landscape.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The awards ceremony, held in June 2025, brought together founders and teams from across the UK to celebrate innovation and entrepreneurship. While SuLe did not take home the award in this category, the team would like to extend its congratulations to Pivot for winning the Professional Services award.
        </p>
        <p>
          SuLe is grateful to the UK StartUp Awards for the recognition and for highlighting businesses working to support SMEs across the UK. Being named a finalist represents an important milestone in SuLe's journey as it continues to grow, innovate, and support the next generation of British businesses.
        </p>
      </>
    )
  },
  {
    slug: 'webinar-series-launch',
    title: 'SuLe Launches Monthly Webinar Series for Founders and SMEs',
    subtitle: 'SuLe Webinar Series starts',
    description: 'SuLe officially launched its Webinar Series, a monthly educational initiative designed to provide founders with clear, practical legal guidance.',
    date: 'July 2025',
    readTime: '3 min read',
    image: '/images/webinar-series-launch.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe officially launched its Webinar Series, a monthly educational initiative designed to provide founders and small business owners with clear, practical legal guidance without unnecessary complexity.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The decision to formalise the series followed strong engagement from the SuLe community. After hosting earlier sessions, the team received consistent feedback, questions, and follow-up requests from founders seeking accessible legal insights delivered in a straightforward and relatable way. In response, SuLe introduced a recurring webinar programme to support founders at different stages of their business journey.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Each session in the SuLe Webinar Series focuses on real-world legal topics relevant to startups and SMEs, including common red flags, must-know legal considerations, and practical guidance designed to help businesses protect themselves as they grow. The sessions are intentionally structured to avoid legal jargon, prioritising clarity, relevance, and actionable takeaways.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Past webinar topics have included "How to Protect Your Company's Most Valuable Asset: Your IP," "How to Become Legally Investment Ready," and "Year-End Legal Health Check." These sessions reflect the types of questions founders regularly face as they scale, fundraise, and prepare for long-term growth.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The webinar series reflects SuLe's broader mission to make legal support more approachable and preventative, empowering founders to understand legal essentials before issues arise. By offering consistent educational touchpoints, SuLe aims to support better decision-making and reduce the knowledge gap that often leaves early-stage businesses exposed to risk.
        </p>
        <p style={{ marginBottom: '24px' }}>
          To ensure accessibility and ease of participation, SuLe hosts all webinar registrations and updates through its dedicated events page on Luma. Founders and business owners can subscribe to stay informed about upcoming sessions and future topics via <a href="https://lu.ma/sule" target="_blank" rel="noopener noreferrer" style={{ color: '#347AE9', textDecoration: 'underline' }}>lu.ma/sule</a>.
        </p>
        <p>
          SuLe's next webinar will take place on 26 March 2026, titled "How to Not Get Hacked and Remain Legally Bulletproof." The session will focus on cybersecurity awareness and legal preparedness, helping founders better understand how to protect their businesses in an increasingly digital environment. Registration is open here: <a href="https://lu.ma/luxx1b95" target="_blank" rel="noopener noreferrer" style={{ color: '#347AE9', textDecoration: 'underline' }}>lu.ma/luxx1b95</a>.
        </p>
      </>
    )
  },
  {
    slug: 'sule-ai-launch',
    title: 'New Feature: SuLe Launches SuLe AI. Providing Users Lawyer-Vetted Legal Answers in Seconds',
    subtitle: 'Ask SuLe AI – Launch',
    description: "SuLe officially launched SuLe AI, a new AI-powered feature designed to help founders get clear, lawyer-vetted answers to legal questions.",
    date: 'December 2025',
    readTime: '4 min read',
    image: '/images/sule-ai-launch.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe officially launched SuLe AI, a new AI-powered feature on its Founders' Hub designed to help founders get clear, lawyer-vetted answers to legal questions without losing momentum.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The feature was built in response to a recurring pattern observed across the SuLe platform. Founders would encounter a legal question, attempt a quick check, and find themselves stuck navigating conflicting information, delaying decisions, or postponing action altogether. What was meant to be a short clarification often turned into days or weeks of uncertainty.
        </p>
        <p style={{ marginBottom: '24px' }}>
          SuLe AI was developed to address this gap. Unlike generic AI tools, SuLe AI provides lawyer-vetted responses written in plain English, offering founders structured guidance they can understand and act on. The feature allows users to ask legal questions directly within the platform and receive clear explanations within seconds, removing the need to jump between tabs, resources, or external tools.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Where relevant, SuLe AI also guides founders on next steps. This includes identifying when a specific contract or agreement may be required and directing users straight to the appropriate, customisable template within the Founders' Hub. The experience is designed to support decision-making, not overwhelm it.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Following the launch, early usage data revealed a clear pattern in founder concerns. Nearly 40% of questions asked through SuLe AI fell into three core areas: understanding GDPR and cookie compliance for SaaS businesses, choosing the correct agreement when engaging consultants or service providers, and knowing what to include in advisory agreements. These insights reflect a broader trend among growing businesses, where early legal assumptions are often revisited as companies scale, take on new stakeholders, or prepare for investment.
        </p>
        <p style={{ marginBottom: '24px' }}>
          From SuLe's experience working closely with founders, many legal issues do not arise from negligence, but from documents and decisions that no longer reflect a company's current stage. As businesses grow, compliance obligations increase, governance structures evolve, and early agreements can quickly become outdated.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Alongside the feature launch, SuLe also introduced a refreshed user interface to improve clarity, usability, and overall experience. The update reflects SuLe's continued focus on building tools that are not only functional, but intuitive and founder-friendly.
        </p>
        <p>
          SuLe AI represents an important step in SuLe's product roadmap, reinforcing its mission to combine legal expertise with applied technology to help founders move faster, make better decisions, and build stronger legal foundations as they grow.
        </p>
      </>
    )
  },
  {
    slug: 'venture-hub-launch',
    title: 'SuLe Introduces Venture Hub to Modernise How Law Firms Handle Venture Transactions',
    subtitle: 'Venture Hub launch',
    description: "SuLe announces a major expansion with the launch of SuLe Venture Hub, a new solution designed to support law firms working on venture and high-growth transactions.",
    date: '29 January 2026',
    readTime: '4 min read',
    image: '/images/venture-hub-launch.png',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe today announces a major expansion of its platform with the launch of SuLe Venture Hub, a new solution designed to support law firms working on venture and high-growth transactions.
        </p>
        <p style={{ marginBottom: '24px' }}>
          SuLe was originally built to help founders establish strong legal foundations. As the platform evolved, demand emerged from an unexpected direction: law firms began reaching out to explore how SuLe's technology could support their venture work.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Early discussions with senior lawyers at leading firms, including Mishcon de Reya and Brown Rudnick, highlighted a clear industry challenge. Venture deals at the pre-seed and seed stage are often highly manual, time-intensive, and difficult to deliver efficiently at scale. These conversations led to the development of SuLe Venture Hub, a white-labelled platform built specifically for law firms to manage venture financing processes across both equity and venture debt, while preserving individual firm house styles and legal standards.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Traditionally, a typical pre-seed transaction can take up to 40 hours to complete, with the initial stages alone requiring approximately 15 hours. With SuLe Venture Hub, the first stage of this process can be reduced to around one hour, significantly improving efficiency while reducing the risk of manual errors.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The launch of SuLe Venture Hub represents a strategic expansion of SuLe's mission. In addition to supporting startups and growing businesses, the platform now enables law firms to take on more early-stage deals, improve turnaround times, and deliver high-quality legal services more cost-effectively.
        </p>
        <p style={{ marginBottom: '24px' }}>
          By accelerating venture transactions for law firms, SuLe Venture Hub aims to create a positive ripple effect across the UK startup ecosystem, enabling founders to access quality legal support earlier, deals to close faster with fewer errors, and more companies to progress beyond the seed stage.
        </p>
        <p style={{ marginBottom: '24px' }}>
          SuLe extends its thanks to the engineering team for transforming complex venture workflows into a practical, scalable product, and to the wider SuLe team for backing the vision behind this expansion from the outset.
        </p>
        <p>
          Law firms working on venture transactions can learn more about SuLe Venture Hub or book a demo here: <a href="https://calendly.com/startup-legals/law-firm-demo" target="_blank" rel="noopener noreferrer" style={{ color: '#347AE9', textDecoration: 'underline' }}>https://calendly.com/startup-legals/law-firm-demo</a>
        </p>
      </>
    )
  },
  {
    slug: 'brown-rudnick-venture-hub-announcement',
    title: 'SuLe Partners with Brown Rudnick to Support Venture and High-Growth Transactions',
    subtitle: 'Brown Rudnick Venture Hub announcement',
    description: "SuLe announces its collaboration with Brown Rudnick, supporting the firm's lawyers in their work with high-growth and venture-backed companies.",
    date: '30 January 2026',
    readTime: '2 min read',
    image: '/images/brown-rudnick-venture-hub.png',
    imagePosition: '60% center',
    content: (
      <>
        <p style={{ marginBottom: '24px' }}>
          SuLe is proud to announce its collaboration with Brown Rudnick, supporting the firm's lawyers in their work with high-growth and venture-backed companies.
        </p>
        <p style={{ marginBottom: '24px' }}>
          As part of this collaboration, Brown Rudnick is now using SuLe Venture Hub, a white-labelled platform designed to help law firms manage the venture financing process across both equity and venture debt transactions.
        </p>
        <p style={{ marginBottom: '24px' }}>
          The rollout reflects a shared commitment to improving the efficiency, clarity, and scalability of venture transactions. The platform's implementation has been shaped through close collaboration with Neil Foster, co-chair of Brown Rudnick's Global Technology Group.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Commenting on the collaboration, Neil Foster said:
        </p>
        <blockquote style={{ marginBottom: '24px', paddingLeft: '24px', borderLeft: '3px solid #347AE9', fontStyle: 'italic' }}>
          "Brown Rudnick has a strong reputation in the venture ecosystem, and we're delighted to be working with SuLe to leverage its platform, which combines deep venture expertise with faster, smarter, and more transparent deal processes. The increased efficiency enabled by this technology will ensure we continue delivering high-quality service to our clients"
        </blockquote>
        <p>
          SuLe is proud to support Brown Rudnick as the firm continues to evolve how venture transactions are delivered for high-growth businesses.
        </p>
      </>
    )
  }
];
