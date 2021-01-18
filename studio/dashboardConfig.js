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
                  buildHookId: '6005f24b685d26fab1d72548',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zwed4uzo',
                  apiId: 'fbd14881-25cf-4fdf-b3f3-6811cfe58f29'
                },
                {
                  buildHookId: '6005f24b0c5c78d2867c8022',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p5sb1hu5',
                  apiId: '63d39966-0b3d-45bc-8b1c-0064095594af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DeepGoel/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p5sb1hu5.netlify.app',
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
