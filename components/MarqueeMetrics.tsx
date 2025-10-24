'use client';

import { useEffect, useRef } from 'react';

const metrics = [
  { label: 'AI Launches in 90 Days', value: '41' },
  { label: 'Pipeline ROI', value: '318%' },
  { label: 'Human Hours Saved', value: '34k' },
  { label: 'Customer NPS After AI', value: '+28' },
  { label: 'Global Teams Served', value: '68' },
  { label: 'Avg. Time to First Insight', value: '17 min' }
];

export function MarqueeMetrics() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animation: number;
    let offset = 0;

    const tick = () => {
      offset -= 0.4;
      marquee.style.transform = `translateX(${offset}px)`;

      if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
      }

      animation = window.requestAnimationFrame(tick);
    };

    animation = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animation);
  }, []);

  return (
    <div
      aria-hidden
      style={{
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '18px',
        border: '1px solid rgba(255,255,255,0.12)',
        background:
          'linear-gradient(90deg, rgba(99,102,241,0.18), rgba(168,85,247,0.15))',
        padding: '0.9rem 0'
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: 'flex',
          gap: '3rem',
          whiteSpace: 'nowrap',
          paddingLeft: '3rem'
        }}
      >
        {[...metrics, ...metrics].map((metric, index) => (
          <div
            key={`${metric.label}-${index}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.2rem',
              minWidth: 'fit-content'
            }}
          >
            <span
              style={{
                fontSize: '1.35rem',
                fontWeight: 600,
                fontFamily: 'var(--font-grotesk, var(--font-inter))'
              }}
            >
              {metric.value}
            </span>
            <span style={{ fontSize: '0.82rem', letterSpacing: '0.08em' }}>
              {metric.label.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
