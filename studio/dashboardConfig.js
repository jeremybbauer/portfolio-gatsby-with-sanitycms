export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f92f430a1f9f40108003463',
                  title: 'Sanity Studio',
                  name: 'portfolio-gatsby-with-sanitycms-studio',
                  apiId: 'f518061c-68fe-4b17-adfb-823ddea7fd3b'
                },
                {
                  buildHookId: '5f92f4302252cf009ba91d1d',
                  title: 'Portfolio Website',
                  name: 'portfolio-gatsby-with-sanitycms',
                  apiId: 'b59d0479-a388-42e7-9bf0-48b0007a32a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jeremybbauer/portfolio-gatsby-with-sanitycms',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-gatsby-with-sanitycms.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
