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
              Joung Jiwon
              <DescDiv style={{ marginTop: '30px' }}>
                사용자의 경험을 생각하는 프론트엔드 개발자입니다.
              </DescDiv>
              <DescDiv>
                Frontend developer, always paying attention to a great user experience.
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
  w-full h-[100vh]
  relative top-[-80px]
  flex justify-center items-center p-0 m-0`
])

const MainDiv = styled.div([
  tw`
  fixed z-[1]
  w-[calc(100%-100px)] h-[60%] left-0 top-[40%] ml-[100px] pl-[10%]
  text-[2.5rem] text-left text-white font-bold
  flex flex-col justify-around
  `
])

const Section = styled.section((props: { theme: IThemeType }) => [
  tw`
  relative w-[cal(100%-100px)] h-fit
  p-[80px]
  z-[10]
  `,
  {
    color: props.theme.themeColorset.textColor,
    backgroundColor: props.theme.themeColorset.bgColor
  }
])

const DescDiv = tw.div`
text-[0.8rem] font-normal
mt-[5px]
`

const ContactDiv = tw.div`
text-[0.5rem] font-normal
flex justify-start gap-[20px]
`
