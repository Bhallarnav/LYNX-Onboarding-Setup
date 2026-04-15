import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1 · Welcome to the Team',
      items: [
        'module-1/team-values',
        'module-1/team-structure',
        'module-1/first-30-days',
        'module-1/alberta-licensing',
        'module-1/team-expectations-culture',
      ],
    },
    {
      type: 'category',
      label: 'Module 2 · Your Tech Stack',
      items: [
        'module-2/follow-up-boss',
        'module-2/mls-showingtime',
        'module-2/marketing-tools',
        'module-2/team-communication',
        'module-2/digital-documents-esignatures',
      ],
    },
    {
      type: 'category',
      label: 'Module 3 · Working With Buyers',
      items: [
        'module-3/inbound-lead-call',
        'module-3/buyer-consultation',
        'module-3/showings',
        'module-3/writing-presenting-offer',
        'module-3/offer-to-close',
      ],
    },
    {
      type: 'category',
      label: 'Module 4 · Working With Sellers',
      items: [
        'module-4/pre-listing-prep',
        'module-4/listing-appointment',
        'module-4/listing-launch',
        'module-4/offers-negotiation-listing-side',
        'module-4/seller-communication-cadence',
      ],
    },
    {
      type: 'category',
      label: 'Module 5 · Building Your Business',
      items: [
        'module-5/how-leads-work',
        'module-5/sphere-of-influence',
        'module-5/scripts-objection-handling',
        'module-5/open-houses',
        'module-5/reviews-referrals-staying-in-touch',
      ],
    },
  ],
};

export default sidebars;
