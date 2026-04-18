import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LYNX Onboarding',
  tagline: 'A clean, portable onboarding hub for the LYNX Real Estate Group',
  favicon: 'img/lynx-mark.svg',
  url: 'https://Bhallarnav.github.io',
  baseUrl: '/LYNX-Onboarding-Setup/',
  trailingSlash: false,
  organizationName: 'Bhallarnav',
  projectName: 'LYNX-Onboarding-Setup',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/lynx-mark.svg',
    navbar: {
      title: 'LYNX Onboarding',
      logo: {
        alt: 'LYNX',
        src: 'img/lynx-mark.svg',
      },
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        {to: '/docs/module-1/team-values', label: 'Start Here', position: 'left'},
        {
          href: 'https://github.com/Bhallarnav/LYNX-Onboarding-Setup/tree/main/lynx-docusaurus-repo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: '/docs/intro'},
            {label: 'Module 1', to: '/docs/module-1/team-values'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'GitHub', href: 'https://github.com/Bhallarnav/LYNX-Onboarding-Setup/tree/main/lynx-docusaurus-repo'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LYNX Real Estate Group. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
