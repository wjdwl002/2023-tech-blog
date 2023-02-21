import { INotionType } from '@/pages/posts'
import { useStaticQuery, Reporter } from 'gatsby'
import path, { resolve } from 'path'

// types generated from a code generator such as `gatsby-plugin-graphql-codegen`
import type { BlogsQuery } from '@graphql'
import { slugify } from './src/utils/slugify'

exports.createPages = async ({
  graphql,
  actions: { createNode, createPage }
}) => {
  const allPostQuery = await graphql(`
    {
      allNotion(
        sort: {
          createdAt: DESC
        }
      ) {
        edges{
          node{
            id
            title
            createdAt
            markdownString
            properties{
              Tags{
                value{
                  name
                }
              }
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = allPostQuery.data.allNotion
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/pages/posts/post_template.tsx'
  )

  const generatePostPage = ({
    node: {
      id, title, createAt, markdownString, properties
    }
  }: { node: INotionType }) => {
    const pageOptions = {
      path: path.join('/post/', slugify(title)),
      component: PostTemplateComponent,
      context: {
        id,
        title,
        createAt,
        markdownString,
        properties
      }
    }

    createPage(pageOptions)
  }

  posts.forEach(generatePostPage)
}
