import React from 'react';
import shareDistributionImg from '@/assets/lawfirms/share-distribution.png';
import lawOfficeHallwayImg from '@/assets/lawfirms/law-office-hallway.png';
import captable1 from '@/assets/lawfirms/cap-table-hero.png';
import captable2 from '@/assets/lawfirms/captable2.png';
import captable3 from '@/assets/lawfirms/captable3.png';
import workflow1 from '@/assets/lawfirms/workflow-house-style.png';
import questionsYouControl from '@/assets/lawfirms/questions-you-control.png';
import yourPrecedentsIn from '@/assets/lawfirms/your-precedents-in.png';
import brandingIntact from '@/assets/lawfirms/branding-intact.jpg';
import verifiedDataHero from '@/assets/lawfirms/verified-data-hero.png';
import companiesHousePrefill from '@/assets/lawfirms/companies-house-prefill.png';
import termSheetIngestion from '@/assets/lawfirms/term-sheet-ingestion.png';
import capTableCarriedThrough from '@/assets/lawfirms/cap-table-carried-through.png';

export interface FeatureFAQ {
  question: string;
  answer: string;
}

export interface FeatureSection {
  heading?: string;
  title: string;
  body: string;
  imageAlt: string;
  imageLayout?: 'single' | 'grid-2x3';
  gridLabels?: string[];
  imageSrc?: any;
  mobileImageSrc?: any;
  hideImage?: boolean;
  bareImage?: boolean;
}

export interface FeatureContent {
  slug: string;
  navTitle: string;
  navDescription: string;
  navImageSrc?: any;
  pageTitle: string;
  headline: string;
  subheadline: string;
  heroImageAlt: string;
  heroImageSrc?: any;
  sections: FeatureSection[];
  faqs: FeatureFAQ[];
}

export const lawFirmsFeatures: FeatureContent[] = [
  {
    slug: 'equity-deal-drafts',
    navTitle: 'Equity deal drafts in minutes',
    navDescription: 'Equity rounds, ASAs, CLNs, SAFEs and cap tables — full pack from one set of inputs.',
    pageTitle: 'Equity deal drafts in minutes | SuLe for Law Firms',
    headline: 'Equity deal drafts in minutes',
    subheadline:
      "Equity investments, share issues, ASAs, CLNs, SAFEs and cap tables. Based on industry-standard documents or on your firm's own precedents, generated with deal data carried through every document.",
    heroImageAlt: 'UI mockup of a clean drafted document',
    sections: [
      {
        title: 'The full pack',
        body:
          "SuLe's platform drafts the transaction documents and ancillary documents based on your instructions. Subscription agreements, shareholder agreements, articles, board minutes, shareholder resolutions, disclosure letters and more. The whole pack from one set of inputs.",
        imageAlt: 'Grid of document thumbnails',
        imageLayout: 'grid-2x3',
        gridLabels: [
          'Subscription Agreement',
          'Shareholder Agreement',
          'Articles of Association',
          'Board Minutes',
          'Shareholder Resolutions',
          'Disclosure Letter',
        ],
      },
      {
        title: 'One source, every document',
        body:
          'Change a fact once. Defined terms, shareholder details, signature blocks, allotment figures and closing dates flow through the entire pack consistently.',
        imageAlt: 'Two lawyers working together',
        imageLayout: 'single',
        imageSrc: shareDistributionImg,
      },
      {
        heading: 'Your house style, automated.',
        title: 'Your precedents',
        body:
          "We use industry standard documents (such as the BVCA) or we configure SuLe around your firm's existing precedents. Leverage your know-how.",
        imageAlt: 'A law office building',
        imageLayout: 'single',
        imageSrc: lawOfficeHallwayImg,
      },
    ],
    faqs: [
      {
        question: 'What document types do you support?',
        answer:
          'The full investment stack — equity rounds, early stage investments, convertible loan notes (CLNs), advance subscription agreements (ASAs), SAFEs, standalone share issues and option schemes — each with their accompanying ancillary documents so you generate a deal-ready bundle, not just a single document.',
      },
      {
        question: "Do we use SuLe's templates or our own?",
        answer:
          "Your choice. Industry leading documents based on market-standard precedents are available from SuLe or we can automate your firm's own precedents.",
      },
      {
        question: 'How long to set up?',
        answer: 'A few days to get started with SuLe standard precedents.',
      },
      {
        question: 'Are drafts good enough to send?',
        answer:
          "The platform supports lawyers — it doesn't replace them. The difference is what lands on your desk: a complete pack, internally consistent across every document, with defined terms, cross-references, numbers and party details reconciled throughout, and in your firm's house style. So the work that's left is the genuine value-add work that lawyers trained for — judgement calls, commercial nuance, and deal-bespoke drafting.",
      },
    ],
  },
  {
    slug: 'cap-tables',
    navTitle: 'Cap tables that move at deal pace',
    navDescription: 'Import, model the round, export the share register — without rebuilding a spreadsheet every time terms change.',
    pageTitle: 'Cap tables that move at deal pace | SuLe for Law Firms',
    headline: 'Cap tables that move at deal pace',
    subheadline:
      'Import, model the round, export the share register, without rebuilding a spreadsheet every time terms change.',
    heroImageAlt: 'Cap table UI',
    sections: [
      {
        title: 'From Companies House in seconds',
        body:
          'Pull current shareholding straight from Companies House, or upload an existing cap table. Share classes and allotment history map automatically.',
        imageAlt: 'SuLe Cap Table page with the pie chart',
        imageLayout: 'single',
        imageSrc: captable1,
      },
      {
        title: 'Model the round',
        body:
          'Add subscriptions, convert CLNs / ASAs / SAFEs, expand the option pool, and see the impact on issued and fully diluted ownership instantly.',
        imageAlt: 'Add Subscription form mockup',
        imageLayout: 'single',
        imageSrc: captable2,
      },
      {
        title: 'Export ready',
        body:
          'Export a detailed cap table, an investor-friendly ownership summary, or a formal share register — every version timestamped for a clean audit trail.',
        imageAlt: 'Post Round Detailed Cap-Table UI mockup',
        imageLayout: 'single',
        imageSrc: captable3,
        bareImage: true,
      },
    ],
    faqs: [
      {
        question: 'Can we import existing Excel cap tables?',
        answer:
          'Yes, most reasonable formats work out of the box. Unusual ones we structure during setup.',
      },
      {
        question: 'Does it handle CLNs, ASAs and SAFEs?',
        answer:
          'Yes. All convert on the trigger event using the discount, valuation cap, interest rate and conversion terms you specify.',
      },
      {
        question: 'Can clients access their cap table?',
        answer:
          'Yes, with read-only or edit permissions depending on the engagement.',
      },
      {
        question: 'EMI and unapproved options?',
        answer: 'Both supported, with vested vs unvested tracking.',
      },
      {
        question: 'Does the cap table connect to the deal documents?',
        answer: 'Yes. One cap table, every document in sync.',
      },
    ],
  },
  {
    slug: 'your-house-style',
    navTitle: 'Your house style, automated',
    navDescription: 'Upload your precedents. SuLe drafts from them, same formatting, same defined terms, same drafting tone.',
    pageTitle: 'Your house style, automated | SuLe for Law Firms',
    headline: 'Your house style, automated.',
    subheadline:
      'Upload your precedents. SuLe drafts from them, same formatting, same defined terms, same drafting tone.',
    heroImageAlt: 'Documents in your house style UI',
    heroImageSrc: workflow1,
    sections: [
      {
        title: 'Your precedents in',
        body:
          "We map your existing Word precedents directly. No translation, no rewriting — your clause numbering, optionality and defined terms stay intact.",
        imageAlt: 'Reuse Document UI',
        imageLayout: 'single',
        imageSrc: yourPrecedentsIn,
      },
      {
        title: 'Questions you control',
        body:
          'Configure the inputs that shape each document — defaults, conditional logic, the order partners want. The workflow mirrors how your team actually drafts.',
        imageAlt: 'Control the questions that drive the draft UI',
        imageLayout: 'single',
        imageSrc: questionsYouControl,
      },
      {
        title: 'Branding intact',
        body:
          'Letterhead, footer, fonts, numbering — preserved exactly. Clients receive drafts that are visually indistinguishable from partner work.',
        imageAlt: 'Printed document with firm letterhead and footer',
        imageLayout: 'single',
        imageSrc: brandingIntact,
      },
    ],
    faqs: [
      {
        question: 'Who does the setup?',
        answer:
          "SuLe's template team, working with your knowledge management team.",
      },
      {
        question: 'Can different partners use different precedents?',
        answer:
          'Yes — multiple variants are supported per document type.',
      },
      {
        question: 'What if we leave SuLe?',
        answer:
          'Your precedents remain yours. The underlying Word files are always exportable.',
      },
      {
        question: 'Can we start with SuLe-maintained templates?',
        answer:
          'Yes — useful for firms wanting to leverage market-leading precedents across different transaction types, including the latest British Venture Capital Association form documents.',
      },
    ],
  },
  {
    slug: 'verified-data-in',
    navTitle: 'Verified data in. Consistent drafts out.',
    navDescription: 'Companies House, term sheet and cap table feed every document. Associates validate — they don\'t retype.',
    pageTitle: 'Verified data in. Consistent drafts out. | SuLe for Law Firms',
    headline: 'Verified data in. Consistent drafts out.',
    subheadline:
      "Information from the Companies House, deal term sheet and company cap table feed into every document. Associates validate — they don't retype.",
    heroImageAlt: 'Workflows ready for review panel showing Prefilled from Companies House and Prefilled from Term Sheet pills',
    heroImageSrc: verifiedDataHero,
    sections: [
      {
        title: 'Companies House prefill',
        body:
          'Company name, number, registered office, directors, PSCs, share capital information and shareholder lists are pulled in directly from Companies House — no inserting the same details across multiple different documents.',
        imageAlt: '"Add New Client" search field on one side, populated company record on the other.',
        imageLayout: 'single',
        imageSrc: companiesHousePrefill,
      },
      {
        title: 'Term sheet ingestion',
        body:
          'Investment amount, valuation, board composition and key economic terms are extracted from the term sheet and prefilled into the workflow.',
        imageAlt: 'Term sheet on the left with key terms highlighted, SuLe workflow on the right with those same values prefilled.',
        imageLayout: 'single',
        imageSrc: termSheetIngestion,
      },
      {
        title: 'Cap table carried through',
        body:
          'Every shareholder name, share count and percentage in the documents comes from the same cap table. Update one, the other follows.',
        imageAlt: 'Cap table view linked visually to a fragment of a subscription agreement with matching figures.',
        imageLayout: 'single',
        imageSrc: capTableCarriedThrough,
      },
    ],
    faqs: [
      {
        question: 'What data sources do you pull from?',
        answer:
          'Companies House (UK), uploaded term sheets, uploaded cap tables and the deal terms you provide.',
      },
      {
        question: 'What if Companies House is out of date?',
        answer:
          "We show the filing date alongside the data. If filings are out of date, it's easy to edit data pulled from Companies House or upload an Excel cap table.",
      },
      {
        question: 'Do you flag discrepancies?',
        answer:
          'SuLe flags discrepancies between cap tables and Companies House records — allowing issues to be identified and dealt with.',
      },
      {
        question: 'Is client data secure?',
        answer:
          'Data is UK-hosted, encrypted in transit and is subject to strict security requirements and role-based access controls.',
      },
    ],
  },
];

export const getFeatureBySlug = (slug: string): FeatureContent | undefined =>
  lawFirmsFeatures.find((f) => f.slug === slug);
