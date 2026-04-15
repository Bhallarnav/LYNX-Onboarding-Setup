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
    <Layout title="LYNX Onboarding" description="Onboarding docs for the LYNX Real Estate Group">
      <main>
        <section className="hero hero--primary lynxHero">
          <div className="container">
            <p className="lynxEyebrow">LYNX Real Estate Group</p>
            <h1 className="lynxTitle">A polished onboarding hub you fully own.</h1>
            <p className="lynxSubtitle">
              Fast to edit, easy to navigate, GitHub-friendly, and built to preserve the structure and visuals of your onboarding system.
            </p>
            <div className="lynxActions">
              <Link className="button button--lg button--secondary" to="/docs/intro">
                Open the guide
              </Link>
              <Link className="button button--lg button--outline button--secondary" to="/docs/module-1/team-values">
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
                  <p>Open this section in the docs sidebar and work through the playbook step by step.</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
