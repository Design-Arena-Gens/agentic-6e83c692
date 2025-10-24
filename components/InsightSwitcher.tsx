'use client';

import { useMemo, useState } from 'react';

type Insight = {
  id: string;
  label: string;
  headline: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
};

const insights: Insight[] = [
  {
    id: 'predictive',
    label: 'Predictive Intelligence',
    headline: 'Forecast demand with adaptive scenario engines',
    description:
      'Blend historical context with real-time signals to anticipate what your customers crave next. Our probabilistic pipelines recalibrate forecasts every hour, so your roadmap always reflects reality.',
    metrics: [
      { label: 'Forecast Accuracy', value: '+37%' },
      { label: 'Scenario Refresh Rate', value: '60 min' },
      { label: 'Signal Sources', value: '140+' }
    ]
  },
  {
    id: 'copilot',
    label: 'Generative Co-Pilot',
    headline: 'Brief, iterate, and launch in hours — not sprints',
    description:
      'Spin up launch assets, technical specs, and stakeholder summaries in a single workspace. Aurora Co-Pilot learns your brand voice on day one and delivers production-ready content with guardrails.',
    metrics: [
      { label: 'Production Speed', value: '6× faster' },
      { label: 'Brand Consistency', value: '99.2%' },
      { label: 'Review Cycles Saved', value: '3 per sprint' }
    ]
  },
  {
    id: 'automation',
    label: 'Process Automation',
    headline: 'Operationalize AI workflows across every system',
    description:
      'Deploy orchestration bots that collaborate with your tools, teams, and data lakes. Hyper-personalize customer journeys, accelerate support, and eliminate repetitive work within weeks.',
    metrics: [
      { label: 'Hours Automated', value: '420/week' },
      { label: 'Integration Coverage', value: '50+ apps' },
      { label: 'Employee Satisfaction', value: '+22 pts' }
    ]
  }
];

export function InsightSwitcher() {
  const [activeTab, setActiveTab] = useState<Insight['id']>('predictive');

  const activeInsight = useMemo(
    () => insights.find((insight) => insight.id === activeTab) ?? insights[0],
    [activeTab]
  );

  return (
    <section className="glass-card" style={{ padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.8rem',
          marginBottom: '1.8rem'
        }}
      >
        {insights.map((insight) => {
          const isActive = insight.id === activeTab;
          return (
            <button
              key={insight.id}
              type="button"
              onClick={() => setActiveTab(insight.id)}
              className="secondary-button"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '999px',
                borderColor: isActive ? 'rgba(99, 102, 241, 0.6)' : undefined,
                background: isActive
                  ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.28))'
                  : undefined,
                boxShadow: isActive
                  ? '0 12px 30px rgba(99, 102, 241, 0.28)'
                  : undefined,
                transform: isActive ? 'translateY(-2px)' : undefined
              }}
            >
              {insight.label}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: 'grid',
          gap: '1.5rem'
        }}
      >
        <div>
          <h3
            style={{
              fontSize: '1.75rem',
              margin: '0 0 0.6rem',
              fontFamily: 'var(--font-grotesk, var(--font-inter))'
            }}
          >
            {activeInsight.headline}
          </h3>
          <p
            style={{
              color: 'var(--muted)',
              margin: 0,
              lineHeight: 1.65,
              maxWidth: '68ch'
            }}
          >
            {activeInsight.description}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))'
          }}
        >
          {activeInsight.metrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-card"
              style={{
                padding: '1.1rem 1.25rem',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none'
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontSize: '0.82rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                {metric.label}
              </span>
              <span
                style={{
                  display: 'block',
                  marginTop: '0.35rem',
                  fontSize: '1.55rem',
                  fontWeight: 600
                }}
              >
                {metric.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
