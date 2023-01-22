import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
)

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'esthevely',
    siteUrl: 'https://www.yourdomain.tld',
    menuLinks: [
      {
        name: 'ABOUT ME',
        link: '/'
      },
      {
        name: 'PROJECTS',
        link: 'projects'
      },
      {
        name: 'POSTS',
        link: '/posts'
      }
    ]
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        sourceMap: true,
        autoLabel: 'dev-only',
        labelFormat: '[local]',
        cssPropOptimization: true
      }
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be omitted or customized
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public']
        // Any additional eslint-webpack-plugin options below
        // …
      }
    },
    {
      resolve: 'gatsby-source-notion-api',
      options: {
        token: 'secret_AS07AQ7hON2NDBnrG7dWNR5NQOo7m73IGljQEy4DgvA',
        databaseId: '6b43ee0378c14b7f961504cf0a290fe6',
        propsToFrontmatter: true,
        lowerTitleLevel: true
      }
    }
  ]
}

export default config
