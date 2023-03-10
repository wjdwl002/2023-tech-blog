import React from 'react'
import { PageProps } from 'gatsby'
import Layout from '@/components/Layout'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const Posts: React.FC<PageProps> = () => {
  return (
    <Layout>
      <MainDiv>
        <FlexDiv>
          <h2>
            POSTS
          </h2>
          <ProjectsContainer>
            <hr/>
          </ProjectsContainer>
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

const ProjectsContainer = tw.div`
mt-[40px]
`
