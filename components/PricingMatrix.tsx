import type { ReactNode } from 'react';

type Tier = {
  name: string;
  price: string;
  description: string;
  highlight?: boolean;
  features: string[];
  cta: ReactNode;
};

const tiers: Tier[] = [
  {
    name: 'Launchpad',
    price: '$0',
    description:
      'Experiment with AI workflows, deploy a starter agent, and explore Aurora OS with your team.',
    features: [
      '1 production AI agent',
      'Up to 25k requests / month',
      'Core integrations (Slack, Notion, HubSpot)',
      'Governance dashboard',
      'Community deployment playbooks'
    ],
    cta: <a className="secondary-button" href="#contact">Start in sandbox</a>
  },
  {
    name: 'Scale',
    price: '$1,290',
    description:
      'Production-grade AI for growth teams that need velocity, observability, and compliance.',
    highlight: true,
    features: [
      'Unlimited AI agent personas',
      'Generative & predictive pipelines',
      'Bring-your-own LLM support',
      'Fine-tuning studio & vector search',
      'SOC2 + GDPR compliance toolkit',
      'Dedicated solution architect',
      'Priority inference capacity'
    ],
    cta: (
      <a className="primary-button" href="https://cal.com/aurora/30">
        Book a design sprint
      </a>
    )
  },
  {
    name: 'Enterprise Lab',
    price: 'Custom',
    description:
      'Partner with Aurora Research to codify AI strategy across product, GTM, and operations.',
    features: [
      'On-prem & private cloud deployment',
      'LLMOps with custom guardrails',
      'Real-time decision intelligence hub',
      'Shadow mode pilot programs',
      'Executive enablement & training',
      '24/7 war-room support',
      'Co-innovation roadmap (quarterly)'
    ],
    cta: <a className="secondary-button" href="#contact">Launch innovation lab</a>
  }
];

export function PricingMatrix() {
  return (
    <div className="card-grid">
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className="glass-card"
          style={{
            borderColor: tier.highlight ? 'rgba(99, 102, 241, 0.5)' : undefined,
            boxShadow: tier.highlight
              ? '0 32px 90px rgba(99, 102, 241, 0.45)'
              : undefined,
            transform: tier.highlight ? 'translateY(-4px)' : undefined
          }}
        >
          <div style={{ marginBottom: '1.2rem' }}>
            <div className="badge">{tier.name}</div>
          </div>
          <h3
            style={{
              fontSize: '2rem',
              margin: 0,
              fontFamily: 'var(--font-grotesk, var(--font-inter))'
            }}
          >
            {tier.price}
          </h3>
          <p
            style={{
              margin: '0.5rem 0 1.5rem',
              color: 'var(--muted)',
              lineHeight: 1.6
            }}
          >
            {tier.description}
          </p>
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'grid',
              gap: '0.7rem'
            }}
          >
            {tier.features.map((feature) => (
              <li key={feature} style={{ display: 'flex', gap: '0.6rem' }}>
                <span
                  aria-hidden
                  style={{
                    width: '0.7rem',
                    height: '0.7rem',
                    borderRadius: '999px',
                    background:
                      'linear-gradient(135deg, rgba(99,102,241,0.8), rgba(168,85,247,0.8))',
                    marginTop: '0.35rem'
                  }}
                />
                <span style={{ color: 'rgba(255,255,255,0.85)' }}>{feature}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1.8rem' }}>{tier.cta}</div>
        </article>
      ))}
    </div>
  );
}
