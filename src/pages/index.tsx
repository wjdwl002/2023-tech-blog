import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'
import Layout from '@/components/Layout.tsx'
import styled from '@emotion/styled'
import '@/assets/index.scss'
import tw from 'twin.macro'
import { useTheme } from '@/context/ThemeContext'
import { IThemeType } from '../context/ThemeContext'
import AboutMe from '../components/Index/AboutMe'

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme()

  return (
      <Layout index={true}>
        <Gradient className='gradient'>
          <MainDiv>
            <div>
              HI !<br/>
              I AM A WEB DEVELOPER,<br/>
              JOUNG JIWON
              <DescDiv>
                사용자의 경험을 생각하는 프론트엔드 개발자입니다.
              </DescDiv>
            </div>
            <ContactDiv>
              <span>
              010-9655-6301
              </span>
              <span>
              esthevely@gmail.com
              </span>

            </ContactDiv>
          </MainDiv>
        </Gradient>
        <Section theme={theme}>
          <AboutMe/>
        </Section>
      </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const Gradient = styled.div([
  tw`
  w-[calc(100%-100px)] h-[100vh] ml-[100px]
  flex justify-center items-center p-0 m-0`
])

const MainDiv = styled.div([
  tw`
  fixed z-[1]
  w-[80%] h-[60%] top-[40%] ml-[100px] 
  text-[2.5rem] text-left text-white font-bold
  flex flex-col justify-around
  `
])

const Section = styled.section((props: { theme: IThemeType }) => [
  tw`
  relative w-[cal(100%-100px)] h-fit
  py-[80px] ml-[100px] pl-[100px]
  z-[10]
  `,
  {
    color: props.theme.themeColorset.textColor,
    backgroundColor: props.theme.themeColorset.bgColor
  }
])

const DescDiv = tw.p`
text-[0.9rem] font-normal
`

const ContactDiv = tw.div`
text-[0.5rem] font-normal
flex justify-start gap-[20px]
`
