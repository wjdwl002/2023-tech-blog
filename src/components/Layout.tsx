import * as React from 'react'
import NavBar from '@/components/NavBar.tsx'
import SideBar from '@/components/SideBar.tsx'
import styled from '@emotion/styled'
import tw from 'twin.macro'

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
}

const Layout = ({ children }: LayoutProps) => {
  return (<div>
        <NavBar height="80px"></NavBar>
        <FlexDiv>
            <SideBarDiv>
                <SideBar></SideBar>
            </SideBarDiv>
            <ContentDiv>
                {children}

            </ContentDiv>
        </FlexDiv>
    </div>)
}

export default Layout
