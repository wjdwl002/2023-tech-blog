import * as React from 'react'
import NavBar from '@/components/NavBar.tsx'
import SideBar from '@/components/SideBar.tsx'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { ThemeProvider } from '@/context/ThemeContext.tsx'

const FlexDiv = styled.div([
  tw`flex`
])

const SideBarDiv = styled.div([
  tw`fixed`,
  'width: 100px'
])

const ContentDiv = styled.div([
  'width: calc(100% - 100px)'
])
export interface LayoutProps {
  children: React.ReactNode
  index: boolean
}

const Layout = ({ children, index }: LayoutProps) => {
  return (<ThemeProvider>
        <NavBar height="80px" index={index}></NavBar>
        <FlexDiv>
            <SideBarDiv>
                <SideBar></SideBar>
            </SideBarDiv>
            <ContentDiv>
                {children}

            </ContentDiv>
        </FlexDiv>
    </ThemeProvider>)
}

export default Layout
