import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

const modules = [
  ['Module 1', 'Welcome to the Team', '/docs/module-1/team-values'],
  ['Module 2', 'Your Tech Stack', '/docs/module-2/follow-up-boss'],
  ['Module 3', 'Working With Buyers', '/docs/module-3/inbound-lead-call'],
  ['Module 4', 'Working With Sellers', '/docs/module-4/pre-listing-prep'],
  ['Module 5', 'Building Your Business', '/docs/module-5/how-leads-work'],
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="LYNX Onboarding"
      description="Onboarding docs for the LYNX Real Estate Group"
    >
      <main>
        <section className="hero hero--primary lynxHero">
          <div className="container">
            <p className="lynxEyebrow">LYNX Real Estate Group</p>
            <h1 className="lynxTitle">LYNX Real Estate Group Onboarding Guide</h1>
            <h2>A note from the team</h2>
            <p className="lynxSubtitle">
              You just finished a course that taught you how not to get sued. That is
              important, but it is not going to help you when a buyer asks, “Should we
              go under asking?” or a seller tells you their neighbour got more for their
              house. That is what this handbook is for.
            </p>
            <p className="lynxSubtitle">
              We built this because we wanted every agent on this team to have the same
              foundation we wished we had when we started. Not theory, but actual
              conversations, actual systems, and the exact way we do things at Lynx.
              Our work is grounded in three things: commitment, honesty, and trust.
            </p>
            <p className="lynxSubtitle">
              Go through this in order in your first month. After that, use it as a
              reference whenever you need it. If something is not clear, ask. That is
              part of being on the team. The only mistake you can make is trying to
              figure everything out on your own instead of using the resources in front
              of you.
            </p>
            <p className="lynxSubtitle">
              Calgary is a competitive market, and we serve it across a wide area, from
              the inner city to Airdrie, Cochrane, Okotoks, Chestermere, and beyond.
              The agents who win here are the ones who show up prepared, follow the
              system, and genuinely care about the people they work with.
            </p>
            <div className="lynxActions">
              <Link className="button button--lg button--secondary" to="/docs/intro">
                Open the guide
              </Link>
              <Link
                className="button button--lg button--outline button--secondary"
                to="/docs/module-1/team-values"
              >
                Start with Module 1
              </Link>
            </div>
          </div>
        </section>

        <section className="container margin-top--xl margin-bottom--xl">
          <div className="row">
            {modules.map(([tag, title, href]) => (
              <div key={href} className="col col--4 margin-bottom--lg">
                <Link to={href} className={clsx('card padding--lg lynxCard')}>
                  <div className="lynxModuleTag">{tag}</div>
                  <h3>{title}</h3>
                  <p>
                    Open this section in the docs sidebar and work through the playbook
                    step by step.
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}