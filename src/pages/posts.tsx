import React from 'react'
import { graphql, PageProps, useStaticQuery } from 'gatsby'
import Layout from '@/components/Layout'
import tw from 'twin.macro'
import styled from '@emotion/styled'
import { PostContainer } from '../components/posts/Post'

const Posts: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
  query {
    allNotion {
      edges {
        node {
          id
          title
          createdAt
          properties{
            Tags{
              value {
                name
              }
            }
          }
        }
      }
    }
  }
  `)

  console.log(data)
  const { allNotion } = data
  const { edges } = allNotion

  return (
    <Layout>
      <MainDiv>
        <FlexDiv>
          <h2>
            POSTS
          </h2>
          <PostsContainer>
            <hr/>
            {edges.map((node: any) =>
              <PostContainer key={node.node.id} node={node.node}/>
            )}
          </PostsContainer>
        </FlexDiv>
      </MainDiv>
    </Layout>
  )
}

export default Posts

const MainDiv = styled.div([
  tw`
  ml-[100px] mt-[80px]
  flex justify-center
  `
])

const FlexDiv = styled.div([tw`
  w-[80%] mt-[40px]
  text-center
`])

const PostsContainer = tw.div`
mt-[40px]
`
