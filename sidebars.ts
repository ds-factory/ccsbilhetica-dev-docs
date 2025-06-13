export const sidebars = {
  tutorialSidebar: [
    'intro',
    'setup/windows-wsl-docker',
    'ci-cd/github-actions',
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