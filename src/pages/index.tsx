import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '@/components/Layout.tsx'
import styled from '@emotion/styled'
import '@/assets/index.scss'
import tw from 'twin.macro'

const Gradient = styled.div([
  tw`
  w-full h-[100vh]
  flex justify-center items-center p-0 m-0`
])

const Hr = styled.hr([
  tw`
  w-[60%] absolute top-[70px] left-[120px]
  border-white border-[1px] opacity-50
  z-1
  `
])

const MainDiv = styled.div([
  tw`
  w-[50%] h-[20%] 
  text-[80px] text-left text-white font-bold
  `
])

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
    <Hr/>
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
