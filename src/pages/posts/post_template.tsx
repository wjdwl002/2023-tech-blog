/* you page component */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import type { PageProps } from 'gatsby'

// types generated from a code generator such as `gatsby-plugin-graphql-codegen`
// import type { BlogQuery } from '@graphql'

const Blog: React.FC<PageProps<any>> = ({ data }) => {
  // since this page is referred from the createPages API, it's safe to assume the mdx node is there
  console.log('data', data)
  const mdx = data.mdx

  const title = mdx.frontmatter?.title
  const body = mdx.body

  return (
    <div>
      {/* <h1>{title}</h1> */}
      {/* <MDXRenderer>{body}</MDXRenderer> */}
    </div>
  )
}

export const pageQuery = graphql`
  query Blog($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Blog
