// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config();
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VGDevs',
  tagline: 'A community managed collection on all things game development.',
  // @ts-ignore
  url: process.env.URL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/VGD_dark.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vgdevs', // Usually your GitHub org/user name.
  projectName: 'vgdevs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      ({
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          }
          return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
        },
        editCurrentVersion: true,
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        remarkPlugins: [require('mdx-mermaid')],
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/VGDevs/vgdevs-com/tree/master/web',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/VGDevs/vgdevs-com/tree/master/web/',
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        hideOnScroll: true,
        logo: {
          alt: 'VGDevs Logo',
          src: 'img/VGD.svg',
          srcDark: 'img/VGD_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            to: '/community/welcome',
            label: 'Community',
            position: 'left',
            activeBaseRegex: `/community/`,
          },
          {
            to: 'https://github.com/VGDevs/VGDevs-UnityTools',
            label: 'UnityTools',
            position: 'left',
          },
          //{
          //  type: 'localeDropdown',
          //  position: 'right',
          //},
          {
            href: 'https://github.com/VGDevs/vgdevs-com',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Community',
                to: '/community',
              },
              {
                label: 'Create your own Article',
                to: '/community/how-to-collaborate/',
              },
              {
                label: 'Join our Discord (soon™️)',
                href: '#',
              },
              {
                label: 'Contact us on Twitter',
                href: 'https://twitter.com/EduardoU24',
              }
            ]
          },
          {
            title: 'Emoji Meaning',
            items: [
              {
                label: '🌱 Sproud\'s Articles are friendly to newcomers',
                to: '/docs/tags/🌱-starters',
              },
              {
                label: '📗 Green Books are for those learning about the topic.',
                to: '/docs/tags/📗-basics',
              },
              {
                label: '📘 Blue Books are for those more confident about the topic.',
                to: '/docs/tags/📘-advanced',
              },
              {
                label: '📙 Orange Books asumme a level of expertise on the topic.',
                to: '/docs/tags/📙-experts',
              },
              {
                label: '📖 Open Books are MUST reads for everyone.',
                to: '/docs/tags/📖-mustread',
              }
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VGDevs. Add your own content on <a href="https://github.com/VGDevs/vgdevs-com" target="_new">GitHub.</a><br>Built with ❤️ on <a href="https://docusaurus.io/" target="_new">Docusaurus</a>, served by <a href="https://railway.app?referralCode=jZcOjs" target="_new">Railway</a>`,
      },
      prism: {
        defaultLanguage: 'csharp',
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments:
        [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'code-block-error-line',
          },
        ]
      },
    }),
};

module.exports = config;
