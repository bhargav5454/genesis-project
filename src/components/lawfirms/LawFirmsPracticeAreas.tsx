import React from 'react';
import practice1 from '@/assets/lawfirms/practice-1.svg';
import practice2 from '@/assets/lawfirms/practice-2.svg';
import practice3 from '@/assets/lawfirms/practice-3.png';

interface PracticeCard {
  title: string;
  description: string;
  image: string;
}

const cards: PracticeCard[] = [
  {
    title: 'For your venture equity practice',
    description:
      'Produce top quality transaction documents and ancillary documents efficiently - whether you are advising on an equity round, CLN, ASA, SAFE or a stand-alone share issue. Generate and model cap tables. Manage signing and completion processes.',
    image: practice1,
  },
  {
    title: 'For your venture debt practice',
    description:
      'Produce loan agreements, warrant instruments, debentures, security documents and ancillary documents based on your preferred precedents. Automate conditions precedent, signing and post-closing checklists.',
    image: practice2,
  },
  {
    title: 'For transactional lawyers',
    description:
      'We empower transactional lawyers to deliver transactions better. We bring together the technology needed to empower you to work efficiently, keep your transaction moving and delight your clients - from term sheet through to post-completion.',
    image: practice3,
  },
];

const LawFirmsPracticeAreas = () => {
  return (
    <section
      style={{
        backgroundColor: '#FFFEFB',
        paddingTop: '40px',
        paddingBottom: '80px',
      }}
    >
      <div className="padding-global">
        <div
          className="container-large"
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}
        >
          <h2
            style={{
              fontFamily: '"Hedvig Letters Serif", serif',
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 40px)',
              lineHeight: 1.2,
              color: '#121212',
              margin: '0 0 40px 0',
              textAlign: 'center',
            }}
          >
            What We Do
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: '24px',
            }}
            className="practice-areas-grid"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                style={{
                  backgroundColor: '#EAEAEA',
                  borderRadius: '12px',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Hedvig Letters Serif", serif',
                    fontWeight: 400,
                    fontSize: '20px',
                    lineHeight: 1.2,
                    color: '#121212',
                    margin: 0,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Geist, sans-serif',
                    fontSize: '14px',
                    lineHeight: 1.55,
                    color: '#6B6B6B',
                    margin: 0,
                  }}
                >
                  {card.description}
                </p>
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    marginTop: 'auto',
                    width: '100%',
                    height: '320px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .practice-areas-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LawFirmsPracticeAreas;