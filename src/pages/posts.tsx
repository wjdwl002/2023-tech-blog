import React from 'react'
import type { PageProps } from 'gatsby'
import Layout from '@/components/Layout'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const Posts: React.FC<PageProps> = () => {
  return (
    <Layout>
      <MainDiv>
        <div></div>
      </MainDiv>
    </Layout>
  )
}

export default Posts

const MainDiv = styled.div([
  tw`
  w-[50%] h-[20%] 
  text-[80px] text-left text-white font-bold
  `
])
