import type { FeatureContent } from './lawFirmsFeatures';
import ventureEquityNav from '@/assets/lawfirms/audience-venture-equity-nav.png';
import ventureDebtNav from '@/assets/lawfirms/audience-venture-debt-nav.png';
import capTableBuiltIn from '@/assets/lawfirms/audience-cap-table-builtin.png';
import yourPrecedents from '@/assets/lawfirms/audience-your-precedents.png';
import equityRound from '@/assets/lawfirms/audience-equity-round.png';
import audience1Hero from '@/assets/lawfirms/audience-1-hero.png';
import audience2Hero from '@/assets/lawfirms/audience-2-hero.png';
import cpChecklist from '@/assets/lawfirms/audience-cp-checklist.png';
import cpChecklistMobile from '@/assets/lawfirms/audience-cp-checklist-mobile.png';
import securityInSync from '@/assets/lawfirms/audience-security-in-sync.png';
import securityInSyncMobile from '@/assets/lawfirms/audience-security-in-sync-mobile.png';

export const lawFirmsAudiences: FeatureContent[] = [
  {
    slug: 'audience-1',
    navTitle: 'Take more venture equity deals',
    navDescription: "Equity rounds, CLNs, ASAs, SAFEs and share issues — drafted from your precedents and modelled against the cap table.",
    navImageSrc: ventureEquityNav,
    pageTitle: 'Take more venture equity deals | SuLe for Law Firms',
    headline: 'Take more venture equity deals',
    subheadline:
      "Equity rounds, CLNs, ASAs, SAFEs and share issues — drafted from your precedents and modelled against the cap table.",
    heroImageAlt: 'Editorial photo of a lawyer reviewing on a laptop',
    heroImageSrc: audience1Hero,
    sections: [
      {
        title: 'The full equity round, end to end.',
        body:
          "Subscription agreements, shareholders agreements, articles, disclosure letter, board minutes, shareholder resolutions, disclosure letters and ancillary documents — drafted in your firm's house style from one set of inputs.",
        imageAlt: 'Two lawyers working together',
        imageSrc: equityRound,
        imageLayout: 'single',
      },
      {
        title: 'Cap table built in',
        body:
          'Model the round (equity investments, convertibles, option pool) and allotments, share class definitions and shareholder lists flow straight into every document.',
        imageAlt: 'Cap table UI',
        imageSrc: capTableBuiltIn,
        imageLayout: 'single',
      },
      {
        title: 'Your precedents',
        body:
          "Configured around your firm's existing precedents or industry standard documents. Defined terms, numbering, drafting tone and editorial control — all yours.",
        imageAlt: "Top-down shot of a generated subscription agreement with the firm's letterhead and footer visible",
        imageSrc: yourPrecedents,
        imageLayout: 'single',
      },
    ],
    faqs: [
      {
        question: 'What round sizes is this for?',
        answer:
          'Start-ups through to Series B+. Early stage deals delivered efficiently. Later-stage and growth rounds supported with the right precedents.',
      },
      {
        question: 'US SAFEs and YC forms?',
        answer:
          'Yes — pre-money and post-money YC SAFEs supported, alongside UK-style advance subscription agreements and convertible loan notes. You choose the structure that works for your deal.',
      },
      {
        question: 'BVCA-compliant packs?',
        answer:
          'Yes. Full-length documents based on the BVCA documents - automated so that your first draft takes minutes rather than hours. Shorter form documents are available for early stage investments.',
      },
      {
        question: 'What about associate training?',
        answer:
          'Junior lawyers review and negotiate clean first drafts — moving from administrative work to legal work, faster.',
      },
    ],
  },
  {
    slug: 'audience-2',
    navTitle: 'Venture debt deals, drafted in hours',
    navDescription:
      'Loan agreements, warrants, debentures and security documents — generated from your precedents and managed through to post-closing.',
    navImageSrc: ventureDebtNav,
    pageTitle: 'Venture debt deals, drafted in hours | SuLe for Law Firms',
    headline: 'Venture debt deals, drafted in hours.',
    subheadline:
      'Loan agreements, warrants, debentures and security documents — generated from your precedents and managed through to post-closing.',
    heroImageAlt: 'A group of lawyers having a meeting at the office',
    heroImageSrc: audience2Hero,
    sections: [
      {
        title: 'The document set',
        body:
          'Loan agreements, warrant instruments, debentures, share charges, intercreditor and subordination agreements, board resolutions, shareholder resolutions and ancillary documents — drafted from your precedents in one workflow.',
        imageAlt: 'Grid of document thumbnails',
        imageLayout: 'grid-2x3',
        gridLabels: [
          'Loan Agreements',
          'Warrant Instruments',
          'Debentures',
          'Share Charges',
          'Intercreditor and Subordination Agreements',
          'Board Resolutions',
          'Shareholder Resolutions',
          'Ancillary Documents',
        ],
      },
      {
        title: 'CP checklist',
        body:
          'Conditions precedent checklist automatically generated from the loan agreement, with responsible parties, deadlines and status tracked alongside the matter.',
        imageAlt: 'Clean checklist UI with CPs, status, responsible party and deadlines',
        imageSrc: cpChecklist,
        mobileImageSrc: cpChecklistMobile,
        imageLayout: 'single',
      },
      {
        title: 'Security in sync',
        body:
          'Defined terms, secured liabilities and facility references stay consistent across the loan, debenture, intercreditor and warrant — automatically.',
        imageAlt: 'One defined term highlighted across fragments of three different documents',
        imageSrc: securityInSync,
        mobileImageSrc: securityInSyncMobile,
        imageLayout: 'single',
      },
    ],
    faqs: [
      {
        question: 'What facility types?',
        answer: 'Venture debt and growth debt — configured around your precedents.',
      },
      {
        question: 'Warrants alongside the loan?',
        answer:
          'Yes. Warrant terms pull through from the term sheet alongside the loan economics.',
      },
      {
        question: 'Can the conditions precedent checklist be shared with other parties?',
        answer: 'Yes, the conditions is fully exportable.',
      },
      {
        question: 'Multi-jurisdictional security?',
        answer:
          'UK security fully supported. Foreign-law documents stay with local counsel — tracked through the CP checklist.',
      },
      {
        question: 'Setup timeline?',
        answer:
          'We move quickly and can provide SuLe precedents or work with you to automate your firm\'s precedents.',
      },
    ],
  },
];

export const getAudienceBySlug = (slug: string): FeatureContent | undefined =>
  lawFirmsAudiences.find((a) => a.slug === slug);
