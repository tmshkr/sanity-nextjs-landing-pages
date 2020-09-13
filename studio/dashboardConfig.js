export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f5d970db8c30d957f3648a9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ocyf2mti',
                  apiId: 'f04c3dba-1061-4365-90f3-ceb2bf34ba57'
                },
                {
                  buildHookId: '5f5d970d3b4b0e0ac928deea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dsmh13ke',
                  apiId: 'bff7a409-326b-4312-9c81-0269b462ec1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tmshkr/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dsmh13ke.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
