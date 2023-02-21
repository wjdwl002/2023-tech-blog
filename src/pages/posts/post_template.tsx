/* you page component */
import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import type { PageProps } from 'gatsby'
import Layout from '@/components/Layout'
import ReactMarkdown from 'react-markdown'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { INotionType } from '@/pages/posts'

// types generated from a code generator such as `gatsby-plugin-graphql-codegen`
// import type { BlogQuery } from '@graphql'

const Blog: React.FC<PageProps<any>> = ({ pageContext }: INotionType) => {
  const { title, markdownString, createdAt, properties: { Tags: { value: tags } } } = pageContext

  const parseMarkdown = (str: string) => {
    return trimString(str)
  }
  const trimString = (str: string) => {
    return str.substring(str.indexOf('>'), str.length)
  }

  return (
    <Layout>
      <MainDiv>
        <h1 style={{ textAlign: 'center' }}>{title}</h1>
        <div>{createdAt}</div>
        <hr style={{ height: '1px', width: '100%' }}/>
        <ReactMarkdown
          components={{
          }}>
          {parseMarkdown(markdownString)}
        </ReactMarkdown>
      </MainDiv>
    </Layout>
  )
}

export default Blog

const MainDiv = styled.div([
  tw`
  overflow-x-hidden
  w-[calc(100%-200px)] px-[100px] mr-[0px] pt-[80px] pb-[180px]
  flex justify-center flex-col
  `
])
