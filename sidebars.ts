export const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Setup',
      items: [
        'setup/windows-wsl-docker',
        'setup/api-docker'
      ],
    },
    {
      type: 'category',
      label: 'Git',
      items: ['git/workflow'],
    },
    {
      type: 'category',
      label: 'CI/CD',
      items: ['ci-cd/github-actions'],
    },
    {
      type: 'category',
      label: 'Projetos',
      items: [
        'projects/overview',
        'projects/api-backend',
        'projects/backoffice',
        'projects/web',
        'projects/pos'
      ],
    },
  ],
};