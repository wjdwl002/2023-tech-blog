import * as React from 'react'
import NavBar from '@/components/NavBar.tsx'
import SideBar from '@/components/SideBar.tsx'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { ThemeProvider } from '@/context/ThemeContext.tsx'
import { useTheme } from '@/context/ThemeContext'

export interface LayoutProps {
  children: React.ReactNode
  index: boolean
}

const Layout = ({ children, index }: LayoutProps) => {
  const theme = useTheme()

  return (<ThemeProvider>
      <div className={theme.themeMode}>
          <NavBar height="80px" index={index}></NavBar>
              <FlexDiv>
                  <SideBarDiv>
                      <SideBar></SideBar>
                  </SideBarDiv>
                  <ContentDiv>
                      {children}
                  </ContentDiv>
              </FlexDiv>
          </div>
    </ThemeProvider>)
}

export default Layout

const FlexDiv = styled.div([
  tw`flex`
])

const SideBarDiv = styled.div([
  tw`fixed`,
  'width: 100px'
])

const ContentDiv = styled.section([
  tw`w-[calc(100%-100px)] min-h-[100vh] h-[100%] ml-[100px] mt-[80px]`
])
