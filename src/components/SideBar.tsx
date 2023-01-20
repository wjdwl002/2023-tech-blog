import * as React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { useTheme } from '@/context/ThemeContext'
import { IThemeType } from '../context/ThemeContext'

const SideBar = () => {
  const theme = useTheme()

  return (<SideDiv theme={theme}>
    <FlexDiv>
      <a onClick={() => theme.toggleTheme(theme.themeMode === 'light' ? 'dark' : 'light')}>
        {theme.themeMode === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}
      </a>
      <a href="https://www.instagram.com/esthevely/">
        <InstagramIcon/>
      </a>
      <a href="https://github.com/wjdwl002">
        <GitHubIcon/>
      </a>
    </FlexDiv>
    </SideDiv>)
}

export default SideBar

const SideDiv = styled.div((props: { theme: IThemeType }) => [
  tw`
    w-full h-[100vh] bg-white z-10
    flex flex-col justify-end
    `,
  {
    boxShadow: `10px 10px 20px 10px ${props.theme.themeMode === 'dark' ? 'rgba(50,50,50,0.05)' : 'rgba(0,0,0,0.05)'}`,
    backgroundColor: props.theme.themeColorset.baseColor,
    color: props.theme.themeColorset.textColor
  }
])

const FlexDiv = styled.div([
  tw`
    w-full h-fit py-[40px] 
    flex flex-col gap-[40px] items-center
    `
])
