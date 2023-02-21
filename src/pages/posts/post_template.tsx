/* you page component */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import type { PageProps } from 'gatsby'
import Layout from '@/components/Layout'

// types generated from a code generator such as `gatsby-plugin-graphql-codegen`
// import type { BlogQuery } from '@graphql'

const Blog: React.FC<PageProps<any>> = ({ data }) => {
  console.log('data', data)

  return (
    <Layout>
      {/* <h1>{title}</h1> */}
      {/* <MDXRenderer>{body}</MDXRenderer> */}
    </Layout>
  )
}

// export const pageQuery = graphql`
//   query Blog($id: String!) {
//     mdx(id: { eq: $id }) {
//       frontmatter {
//         title
//       }
//       body
//     }
//   }
// `

export default Blog
