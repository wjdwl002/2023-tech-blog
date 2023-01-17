import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '@/components/Layout.tsx'
import styled from '@emotion/styled'
import '@/assets/index.scss'
import tw from 'twin.macro'

const Gradient = styled.div([
  tw`
  w-full h-[100vh] ml-[100px]
  flex justify-center items-center p-0 m-0`
])

const MainDiv = styled.div([
  tw`
  w-[50%] h-[20%] 
  text-[80px] text-left text-white font-bold
  `
])

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Layout index={true}>
        <Gradient className='gradient'>
          <MainDiv>
            I AM A ..
          </MainDiv>
        </Gradient>
      </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
