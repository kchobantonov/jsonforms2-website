module.exports = {
  title: 'JSON Forms',
  tagline: 'More forms. Less code.',
  url: 'https://jsonforms.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eclipsesource',
  projectName: 'jsonforms',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'JSON Forms',
      style: 'dark',
      logo: {
        alt: 'JSON Forms Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'examples/basic',
          label: 'Examples',
          activeBasePath: 'examples',
          position: 'left',
        },
        {
          to: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'news',
          label: 'News',
          position: 'left',
        },
        {
          to: 'support',
          label: 'Professional Support',
          position: 'right',
        },
        {
          href: 'https://github.com/eclipsesource/jsonforms',
          className: 'header-github-link',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/eclipsesource/jsonforms',
            },
            {
              label: 'Spetrum',
              href: 'https://spectrum.chat/jsonforms',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/JSONForms',
            },
            {
              label: 'EcpliseSource Blog',
              href: 'https://eclipsesource.com/blogs/tag/jsonforms/',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Imprint',
              href: 'https://eclipsesource.com/imprint/',
            },
            {
              label: 'Privacy Policy',
              href: 'https://www.iubenda.com/privacy-policy/83048734',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EclipseSource`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/global.scss'),
        },
        docs: false,
        blog: false,
        pages: false,
      },
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
    'docusaurus2-dotenv',
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'content/pages',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs',
        path: 'content/docs',
        routeBasePath: 'docs',
        sidebarPath: require.resolve('./src/sidebars/docs.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'content/examples',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./src/sidebars/examples.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'faq',
        path: 'content/faq',
        routeBasePath: 'faq',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'news',
        path: 'content/news',
        routeBasePath: 'news',
        blogSidebarTitle: 'Latest News',
        showReadingTime: false,
        blogSidebarCount: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/tutorial',
            from: '/docs/tutorial-typescript',
          },
          {
            to: '/docs/integrations/angular',
            from: '/docs/angular',
          },
          {
            to: '/docs/integrations/react',
            from: ['/docs/react', '/docs/integration'],
          },
          {
            to: '/docs/deprecated/redux',
            from: '/docs/redux',
          },
          {
            to: '/docs/deprecated/store',
            from: '/docs/store',
          },
          {
            to: '/docs/deprecated/available-actions',
            from: '/docs/available-actions',
          },
          {
            to: '/docs/tutorial/custom-layouts',
            from: '/docs/custom-layouts',
          },
          {
            to: '/docs/tutorial/custom-renderers',
            from: '/docs/custom-renderers',
          },
          {
            to: '/docs/tutorial/multiple-forms',
            from: '/docs/multiple-forms',
          },
          {
            to: '/examples/basic',
            from: '/examples/person',
          },
          {
            to: '/examples/basic',
            from: '/examples',
          },
          {
            to: '/docs/api',
            from: '/api',
          },
        ],
      },
    ],
  ],
};
