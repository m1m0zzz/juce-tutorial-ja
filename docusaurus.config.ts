import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JUCE日本語版チュートリアル',
  tagline: 'JUCEを始めよう',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://m1m0zzz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/juce-tutorial-ja/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm1m0zzz', // Usually your GitHub org/user name.
  projectName: 'juce-tutorial-ja', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/m1m0zzz/juce-tutorial-ja/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JUCE日本語版チュートリアル',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/m1m0zzz/juce-tutorial-ja',
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
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'JUCE',
          items: [
            {
              label: 'Tutorials',
              href: 'https://juce.com/learn/tutorials/',
            },
            {
              label: 'Documentation',
              href: 'https://juce.com/learn/documentation/',
            },
            {
              label: 'Forum',
              href: 'https://forum.juce.com/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'repo',
              href: 'https://github.com/m1m0zzz/juce-tutorial-ja',
            },
            {
              label: 'JUCE GitHub',
              href: 'https://github.com/juce-framework/JUCE',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Raw Material Software Limited. translation: mimoz`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
