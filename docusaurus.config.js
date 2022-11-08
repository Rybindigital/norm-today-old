// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Norm Documentation',
  tagline: 'Norm design system wiki',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'https://github.com/Rybindigital', // Usually your GitHub org/user name.
  projectName: 'norm.today', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Norm Logo',
          src: 'img/norm-logo.svg',
          srcDark: 'img/norm-logo-dark.svg',
          href: '/',
          width: 120,
          height: 40,
        },
        items: [
          {
            to: '/docs/design',
            position: 'left',
            label: 'Design',
          },
          {
            to: '/docs/management',
            position: 'left',
            label: 'Management',
          },
          {
            to: '/docs/guides',
            position: 'left',
            label: 'Guides',
          },
          {
            to: '/docs/about',
            position: 'left',
            label: 'About',
          },
          {
            href: 'https://www.instagram.com/norm.today',
            label: 'Instagram',
            position: 'right',
          },
          {
            href: 'https://www.facebook.com/groups/norm.today',
            label: 'Facebook',
            position: 'right',
          },
          {
            href: 'https://t.me/normtoday',
            label: 'Telegram',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Norm`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
