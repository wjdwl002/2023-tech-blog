import { INotionType } from '@/pages/posts'
import { useStaticQuery, graphql, Reporter } from 'gatsby'
import path, { resolve } from 'path'

// types generated from a code generator such as `gatsby-plugin-graphql-codegen`
import type { BlogsQuery } from '@graphql'
import { slugify } from '@/src/utils/slugify'

exports.sourceNodes = async ({
  actions: { createNode, createPage }
}) => {
  const data = await useStaticQuery(graphql`
  query{
    allNotion(sort:{
      createdAt:DESC
    }){
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

  const { allNotion } = data
  const { edges } = allNotion
  const postsData = edges.map((e: INotionType) => {
    e.slug = slugify(e.title)

    return e
  })

  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/pages/posts/post_template.tsx'
  )

  const generatePostPage = ({
    node: {
      id, title, createAt, markdownString, properties, slug
    }
  }: { node: INotionType }) => {
    const pageOptions = {
      path: slug,
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

  postsData.forEach(generatePostPage)
}
