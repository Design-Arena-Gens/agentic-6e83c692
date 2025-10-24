import type { CSSProperties } from "react";
import Link from "next/link";
import { InsightSwitcher } from "../components/InsightSwitcher";
import { MarqueeMetrics } from "../components/MarqueeMetrics";
import { PricingMatrix } from "../components/PricingMatrix";

const leadershipQuotes = [
  {
    name: "Nia Calderon",
    role: "Chief Product Officer, Halo Networks",
    quote:
      "Aurora compressed our roadmap by six months. Every feature ship now begins with an AI brief and ends with human stories we can put in front of the board."
  },
  {
    name: "Dr. Malik Osei",
    role: "Head of Innovation, Northwind Health",
    quote:
      "We needed safe, compliant automation yesterday. Aurora orchestrated triage, claims, and patient outreach in one privacy-first stack."
  },
  {
    name: "Katie Duval",
    role: "Revenue Operations, Signal Eight",
    quote:
      "Demand predictions used to take weeks. Now sales gets next-best action alerts before the day starts."
  }
];

const operatingPrinciples = [
  {
    title: "Human-centered intelligence",
    description:
      "AI should augment decision makers, not replace them. We co-design workflows with cross-functional teams so trust and adoption scale together.",
    signals: ["Ethical guardrails", "Explainable insights", "Inclusive datasets"]
  },
  {
    title: "Data gravity, respected",
    description:
      "Keep data where it belongs. Aurora federates across your stack while honoring residency, governance, and lineage.",
    signals: ["Zero data copies", "Fine-grained permissions", "Observability built-in"]
  },
  {
    title: "Rapid iteration loops",
    description:
      "Measure impact in production, not slide decks. Launch in weeks with release cadences tuned to your risk tolerance.",
    signals: ["Shadow mode pilots", "A/B experimentation", "Continuous evaluation"]
  }
];

export default function Home() {
  return (
    <>
      <header
        className="container"
        style={{
          padding: "3.8rem 0 2.4rem",
          display: "flex",
          flexDirection: "column",
          gap: "3rem"
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.5rem"
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: "1.1rem",
              letterSpacing: "0.18em"
            }}
          >
            AURORA
          </span>

          <div
            style={{
              display: "flex",
              gap: "1.4rem",
              alignItems: "center",
              fontSize: "0.95rem"
            }}
          >
            <Link href="#capabilities">Capabilities</Link>
            <Link href="#principles">Principles</Link>
            <Link href="#stories">Stories</Link>
            <Link href="#pricing">Plans</Link>
            <Link href="#contact" className="secondary-button">
              Talk with us
            </Link>
          </div>
        </nav>

        <div className="grid-split">
          <div>
            <div className="tag">AI innovation for real-world teams</div>
            <h1
              style={{
                margin: "1.4rem 0 1.2rem",
                fontSize: "clamp(3rem, 6vw, 4.8rem)",
                lineHeight: 1.05,
                fontFamily: "var(--font-grotesk, var(--font-inter))"
              }}
            >
              Architect, deploy, and scale AI that your teams actually use.
            </h1>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
                maxWidth: "64ch"
              }}
            >
              Aurora Intelligence is the embedded AI partner for product, data,
              and operations leaders. We discover the highest-leverage workflows,
              orchestrate compliant automation, and deliver outcomes you can
              present to the board with confidence.
            </p>

            <div className="button-row" style={{ marginTop: "2rem" }}>
              <Link href="#contact" className="primary-button">
                Launch your AI initiative
              </Link>
              <Link href="#blueprint" className="secondary-button">
                Download the Aurora blueprint
              </Link>
            </div>
          </div>

          <div
            className="glass-card"
            style={{
              padding: "1.8rem",
              display: "grid",
              gap: "1.1rem",
              alignSelf: "flex-start"
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "1.35rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.75)"
              }}
            >
              Impact Snapshots
            </h2>
            <div style={{ display: "grid", gap: "1rem" }}>
              {leadershipQuotes.map((item) => (
                <blockquote
                  key={item.name}
                  style={{
                    margin: 0,
                    background: "rgba(255,255,255,0.04)",
                    padding: "1.1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    lineHeight: 1.55
                  }}
                >
                  “{item.quote}”
                  <footer
                    style={{
                      marginTop: "0.75rem",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.7)"
                    }}
                  >
                    {item.name} · {item.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main style={{ display: "flex", flexDirection: "column", gap: "4.8rem" }}>
        <section className="container" id="blueprint">
          <MarqueeMetrics />
        </section>

        <section className="container section-anchor" id="capabilities">
          <div className="divider" />
          <div className="grid-split">
            <div>
              <div className="tag">Capabilities</div>
              <h2 className="section-heading">
                One AI operating system. Infinite launch vectors.
              </h2>
              <p className="section-subheading">
                From whiteboard strategy to production-grade agents, Aurora
                Intelligence delivers the railways, guardrails, and growth playbook
                your organization needs to wield AI responsibly.
              </p>
              <div className="pill-group">
                <span className="pill">AI product R&amp;D</span>
                <span className="pill">Predictive analytics</span>
                <span className="pill">Generative experience design</span>
                <span className="pill">Responsible AI governance</span>
                <span className="pill">LLM fine-tuning</span>
              </div>
            </div>

            <InsightSwitcher />
          </div>
        </section>

        <section className="container section-anchor" id="principles">
          <div className="divider" />
          <div className="tag">Operating System</div>
          <h2 className="section-heading">
            Principles that make AI tangible, trusted, and unstoppable.
          </h2>
          <div className="card-grid">
            {operatingPrinciples.map((principle) => (
              <article key={principle.title} className="glass-card">
                <h3
                  style={{
                    margin: "0 0 0.8rem",
                    fontSize: "1.6rem",
                    fontFamily: "var(--font-grotesk, var(--font-inter))"
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "var(--muted)",
                    lineHeight: 1.6
                  }}
                >
                  {principle.description}
                </p>
                <div className="pill-group">
                  {principle.signals.map((signal) => (
                    <span key={signal} className="pill">
                      {signal}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-anchor" id="stories">
          <div className="divider" />
          <div className="tag">Proof in production</div>
          <h2 className="section-heading">
            From concept to compounding impact — the Aurora journey.
          </h2>
          <div className="timeline">
            <article className="timeline-node">
              <h3
                style={{
                  margin: "0 0 0.4rem",
                  fontSize: "1.45rem"
                }}
              >
                Discover: Strategic AI blueprint (Weeks 1-3)
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                Audit your workflows, data stack, and decision velocity. We map
                revenue and efficiency opportunities, then co-design an AI roadmap
                aligned to measurable outcomes.
              </p>
              <div className="pill-group">
                <span className="pill">Executive workshops</span>
                <span className="pill">Process instrumentation</span>
                <span className="pill">Value thesis</span>
              </div>
            </article>

            <article className="timeline-node">
              <h3
                style={{
                  margin: "0 0 0.4rem",
                  fontSize: "1.45rem"
                }}
              >
                Build: Pilot to production (Weeks 4-10)
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                Rapidly ship AI-powered experiences with human-in-the-loop reviews,
                experimentation frameworks, and governance guardrails that keep the
                compliance team close.
              </p>
              <div className="pill-group">
                <span className="pill">Shadow mode releases</span>
                <span className="pill">Realtime observability</span>
                <span className="pill">Model evaluation suite</span>
              </div>
            </article>

            <article className="timeline-node">
              <h3
                style={{
                  margin: "0 0 0.4rem",
                  fontSize: "1.45rem"
                }}
              >
                Scale: AI as a competitive moat (Quarter 2+)
              </h3>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.65 }}>
                Expand agent networks, unlock self-optimizing workflows, and route
                every decision through a trusted intelligence layer that compounds
                value.
              </p>
              <div className="pill-group">
                <span className="pill">Change management</span>
                <span className="pill">AI-enabled KPIs</span>
                <span className="pill">Always-on co-pilots</span>
              </div>
            </article>
          </div>
        </section>

        <section className="container section-anchor" id="pricing">
          <div className="divider" />
          <div className="tag">Plans &amp; Partnerships</div>
          <h2 className="section-heading">Choose your growth velocity.</h2>
          <p className="section-subheading">
            Whether you&apos;re validating your first AI use case or orchestrating
            global automation, Aurora meets your team where you are and compounds
            value from there.
          </p>
          <PricingMatrix />
        </section>

        <section className="container section-anchor" id="contact">
          <div className="divider" />
          <div className="glass-card" style={{ padding: "3rem" }}>
            <div className="tag">Let&apos;s co-create</div>
            <h2
              className="section-heading"
              style={{ marginBottom: "1.5rem", maxWidth: "20ch" }}
            >
              Your AI transformation begins with one conversation.
            </h2>
            <p
              className="section-subheading"
              style={{ marginBottom: "2rem", maxWidth: "60ch" }}
            >
              Tell us about your goals, data stack, and success metrics. We&apos;ll
              bring tailored opportunities, deployment timelines, and an executive
              primer your stakeholders will love.
            </p>
            <form
              style={{
                display: "grid",
                gap: "1.2rem",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))"
              }}
            >
              <label style={{ display: "grid", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.9rem" }}>Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Jordan Lee"
                  style={inputStyle}
                  required
                />
              </label>
              <label style={{ display: "grid", gap: "0.5rem" }}>
                <span style={{ fontSize: "0.9rem" }}>Work email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  style={inputStyle}
                  required
                />
              </label>
              <label
                style={{
                  display: "grid",
                  gap: "0.5rem",
                  gridColumn: "1 / -1"
                }}
              >
                <span style={{ fontSize: "0.9rem" }}>Top AI objective</span>
                <textarea
                  name="objective"
                  placeholder="Describe the workflow, customer journey, or decision you want to transform..."
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </label>
              <div style={{ gridColumn: "1 / -1" }}>
                <button type="submit" className="primary-button">
                  Send briefing
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <p>
          © {new Date().getFullYear()} Aurora Intelligence. Built with human + AI
          collaboration. <Link href="#capabilities">Explore capabilities</Link>.
        </p>
      </footer>
    </>
  );
}

const inputStyle: CSSProperties = {
  padding: "0.85rem 1rem",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(9,11,29,0.45)",
  color: "rgba(255,255,255,0.92)",
  fontSize: "1rem"
};
