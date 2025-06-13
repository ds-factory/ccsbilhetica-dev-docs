import { Config } from '@docusaurus/types';

export default <Config>{
  title: 'CCS Bilhética Docs',
  url: 'https://ds-factory.github.io',
  baseUrl: '/ccsbilhetica-dev-docs/',
  organizationName: 'ds-factory',
  projectName: 'ccsbilhetica-dev-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/ds-factory/ccsbilhetica-dev-docs/edit/main/',
          showLastUpdateTime: true,
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};