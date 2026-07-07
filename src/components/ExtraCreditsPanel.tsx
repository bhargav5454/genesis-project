"use client";

import React, { useState } from 'react';

type PlanTier = 'Free' | 'Premium' | 'Premium+';

interface CreditPack {
  id: string;
  name: string;
  shortName: string;
  credits: number;
  hours: number;
  validity: string;
  basePrice: number;
}

const PACKS: CreditPack[] = [
  { id: 'starter', name: 'Starter Pack', shortName: 'Starter', credits: 200, hours: 1, validity: '3 months', basePrice: 300 },
  { id: 'growth', name: 'Growth Pack', shortName: 'Growth', credits: 2000, hours: 10, validity: '18 months', basePrice: 2700 },
  { id: 'business', name: 'Business Pack', shortName: 'Business', credits: 6000, hours: 30, validity: '24 months', basePrice: 7650 },
  { id: 'enterprise', name: 'Enterprise Pack', shortName: 'Enterprise', credits: 12000, hours: 60, validity: '36 months', basePrice: 14400 },
];

const PLAN_DISCOUNT: Record<PlanTier, number> = {
  Free: 0,
  Premium: 0.05,
  'Premium+': 0.1,
};

const PLAN_SAVINGS: Record<PlanTier, Record<string, number>> = {
  Free: { starter: 0, growth: 300, business: 1350, enterprise: 3600 },
  Premium: { starter: 15, growth: 435, business: 1732, enterprise: 4320 },
  'Premium+': { starter: 30, growth: 570, business: 2115, enterprise: 5040 },
};

const formatPrice = (n: number) => `£${n.toLocaleString('en-GB')}`;

const ORIGINAL_PRICES: Record<string, number> = {
  starter: 300,
  growth: 3000,
  business: 9000,
  enterprise: 18000,
};

const SLIDER_STYLES = `
.extra-credits-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; background: #E5E7EB; border-radius: 999px; outline: none; border: none; padding: 0; cursor: pointer; }
.extra-credits-slider::-webkit-slider-runnable-track { height: 4px; background: #E5E7EB; border-radius: 999px; border: none; }
.extra-credits-slider::-moz-range-track { height: 4px; background: #E5E7EB; border-radius: 999px; border: none; }
.extra-credits-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: #347AE9; border: none; margin-top: -6px; cursor: pointer; }
.extra-credits-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: #347AE9; border: none; cursor: pointer; }
.extra-credits-slider:focus { outline: none; }
`;

interface Props {
  isMobile: boolean;
  onClose?: () => void;
}

const ExtraCreditsPanel: React.FC<Props> = ({ isMobile }) => {
  const [selectedId, setSelectedId] = useState<string>('starter');
  const [hovered, setHovered] = useState<string | null>(null);
  const [plan, setPlan] = useState<PlanTier>('Free');

  const selectedPack = PACKS.find((p) => p.id === selectedId) ?? PACKS[0];
  const discount = PLAN_DISCOUNT[plan];
  const finalPrice = Math.round(selectedPack.basePrice * (1 - discount));
  const selectedSavings = PLAN_SAVINGS[plan][selectedPack.id] ?? 0;

  return (
    <div
      style={{
        maxWidth: '960px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '28px',
        border: '1px solid #ECECEC',
        boxShadow: '0 20px 60px -20px rgba(15, 23, 42, 0.12)',
        overflow: 'hidden',
      }}
    >
      <style>{SLIDER_STYLES}</style>
      {/* Centered plan toggle */}
      <div
        style={{
          padding: isMobile ? '16px 16px 4px' : '20px 32px 4px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            backgroundColor: '#F3F4F6',
            borderRadius: '999px',
            padding: '4px',
            gap: '2px',
          }}
        >
          {(['Free', 'Premium', 'Premium+'] as PlanTier[]).map((tier) => {
            const isActive = plan === tier;
            return (
              <button
                key={tier}
                type="button"
                onClick={() => setPlan(tier)}
                style={{
                  border: 'none',
                  cursor: 'pointer',
                  padding: '6px 18px',
                  borderRadius: '999px',
                  backgroundColor: isActive ? '#0B0B0F' : 'transparent',
                  color: isActive ? '#FFFFFF' : '#121212',
                  fontFamily: '"Opensans Medium", sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  transition: 'background-color 0.15s ease, color 0.15s ease',
                }}
              >
                {tier}
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured selected pack */}
      <div style={{ padding: isMobile ? '12px 16px' : '12px 32px 6px' }}>
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #ECECEC',
            borderRadius: '20px',
            padding: isMobile ? '16px' : '18px 24px',
          }}
        >
          {/* Top row: pack name + credits */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              gap: '16px',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <div
                style={{
                  fontFamily: '"Opensans Bold", sans-serif',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#4A5568',
                  textTransform: 'uppercase',
                }}
              >
                {selectedPack.shortName} Pack
              </div>
              {selectedSavings > 0 && (
                <span
                  style={{
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    color: '#0F7A4F',
                    backgroundColor: '#E6F6EE',
                    padding: '3px 8px',
                    borderRadius: '999px',
                  }}
                >
                  Save {formatPrice(selectedSavings)}
                </span>
              )}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontFamily: '"Opensans Bold", sans-serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#121212',
                }}
              >
                {selectedPack.credits.toLocaleString('en-GB')}
              </span>
              <span
                style={{
                  fontFamily: '"Opensans Medium", sans-serif',
                  fontSize: '14px',
                  color: '#6B7280',
                  marginLeft: '6px',
                }}
              >
                credits
              </span>
            </div>
          </div>

          <div style={{ height: '1px', backgroundColor: '#E5E7EB', marginBottom: '14px' }} />

          {/* Price + hours row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '14px',
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: '"Dmserifdisplay Regular", serif',
                  fontSize: isMobile ? '32px' : '38px',
                  color: '#121212',
                  letterSpacing: '-0.02em',
                }}
              >
                {formatPrice(finalPrice)}
              </span>
              {selectedSavings > 0 && (
                <span
                  style={{
                    fontFamily: '"Opensans Medium", sans-serif',
                    fontSize: '15px',
                    color: '#9CA3AF',
                    textDecoration: 'line-through',
                    marginLeft: '10px',
                  }}
                >
                  {formatPrice(ORIGINAL_PRICES[selectedPack.id])}
                </span>
              )}
              <span
                style={{
                  fontFamily: '"Opensans Medium", sans-serif',
                  fontSize: '14px',
                  color: '#6B7280',
                  marginLeft: '6px',
                }}
              >
                +VAT
              </span>
              {discount > 0 && (
                <span
                  style={{
                    fontFamily: '"Opensans Medium", sans-serif',
                    fontSize: '13px',
                    color: '#347AE9',
                    marginLeft: '10px',
                  }}
                >
                  {Math.round(discount * 100)}% off
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: '"Opensans Medium", sans-serif',
                fontSize: '15px',
                color: '#4A5568',
              }}
            >
              ≈ {selectedPack.hours} lawyer {selectedPack.hours === 1 ? 'hour' : 'hours'}
            </div>
          </div>

          {/* Slider */}
          <input
            type="range"
            className="extra-credits-slider"
            min={0}
            max={PACKS.length - 1}
            step={1}
            value={PACKS.findIndex((p) => p.id === selectedId)}
            onChange={(e) => setSelectedId(PACKS[Number(e.target.value)].id)}
          />

          <div
            style={{
              position: 'relative',
              height: '16px',
              marginTop: '8px',
              fontFamily: '"Opensans Bold", sans-serif',
              fontSize: '11px',
              letterSpacing: '0.08em',
              color: '#4A5568',
              textTransform: 'uppercase',
            }}
          >
            {PACKS.map((p, i) => {
              const isFirst = i === 0;
              const isLast = i === PACKS.length - 1;
              return (
                <div
                  key={p.id}
                  style={{
                    position: 'absolute',
                    left: isLast ? undefined : isFirst ? '0%' : `${(i / (PACKS.length - 1)) * 100}%`,
                    right: isLast ? '0%' : undefined,
                    transform: isFirst || isLast ? 'none' : 'translateX(-50%)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.shortName}
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: '10px',
              fontFamily: '"Opensans Medium", sans-serif',
              fontSize: '13px',
              color: '#6B7280',
            }}
          >
            Valid for {selectedPack.validity}
          </div>
        </div>
      </div>

      {/* All packs */}
      <div style={{ padding: isMobile ? '12px 16px' : '8px 32px 16px' }}>
        <div
          style={{
            fontFamily: '"Opensans Bold", sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#4A5568',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}
        >
          All Packs
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: '10px',
          }}
        >
          {PACKS.map((pack) => {
            const isSelected = selectedId === pack.id;
            const isHovered = hovered === pack.id;
            const packSavings = PLAN_SAVINGS[plan][pack.id] ?? 0;
            return (
              <button
                key={pack.id}
                type="button"
                onClick={() => setSelectedId(pack.id)}
                onMouseEnter={() => setHovered(pack.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  border: `1.5px solid ${isSelected ? '#347AE9' : '#ECECEC'}`,
                  backgroundColor: isSelected ? '#F2F7FE' : isHovered ? '#FAFAFA' : '#FFFFFF',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease, border-color 0.15s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', marginBottom: '4px' }}>
                  <div
                    style={{
                      fontFamily: '"Opensans Bold", sans-serif',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: isSelected ? '#347AE9' : '#4A5568',
                      textTransform: 'uppercase',
                    }}
                  >
                    {pack.shortName}
                  </div>
                  {packSavings > 0 && (
                    <span
                      style={{
                        fontFamily: '"Opensans Bold", sans-serif',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#0F7A4F',
                        backgroundColor: '#E6F6EE',
                        padding: '2px 6px',
                        borderRadius: '999px',
                      }}
                    >
                      Save {formatPrice(packSavings)}
                    </span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: '"Opensans Bold", sans-serif',
                    fontSize: '17px',
                    fontWeight: 700,
                    color: '#121212',
                    marginBottom: '4px',
                  }}
                >
                  {pack.credits.toLocaleString('en-GB')}
                </div>
                <div
                  style={{
                    fontFamily: '"Opensans Medium", sans-serif',
                    fontSize: '12px',
                    color: '#6B7280',
                  }}
                >
                  {pack.hours} {pack.hours === 1 ? 'hr' : 'hrs'} · {pack.validity.replace(' months', 'mo').replace(' month', 'mo')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer explanatory text */}
      <div
        style={{
          padding: isMobile ? '0 16px 14px' : '0 32px 16px',
          fontFamily: '"Opensans Medium", sans-serif',
          fontSize: '12px',
          color: '#6B7280',
        }}
      >
        Subscription credits used first. Pack validity: 3–36 months.
      </div>
    </div>
  );
};

export default ExtraCreditsPanel;