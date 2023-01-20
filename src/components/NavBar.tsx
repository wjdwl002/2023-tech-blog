
import * as React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { useStaticQuery, graphql } from 'gatsby'
import { useTheme } from '@/context/ThemeContext'
import { IThemeType } from '../context/ThemeContext'
import { useLocation } from '@reach/router'

export interface NavBarProps {
  height: string
  index: boolean
}

interface IMenuLink {
  name: string
  link: string
}

const NavBar = ({ height, index = false }: NavBarProps) => {
  const theme = useTheme()
  const location = useLocation()

  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                menuLinks{
                    name
                    link
                }
            }
        }
    }
    `)
  const { menuLinks } = data.site.siteMetadata

  return (<NavDiv
      index={index}
      theme={theme}
      style={{ height }}>
        <FlexDiv style={{ width: '-webkit-fill-available' }}>
            <Hr style={{ display: index ? 'relative' : 'none' }}/>
        </FlexDiv>
        <FlexDiv>
            {menuLinks.map((e: IMenuLink) => (
                <MenuBtn key={e?.name} theme={theme} style={{ color: location.pathname.slice(0, -1) === e.link ? theme.themeColorset.pointColor : theme.themeColorset.textColor }}>
                  <a href={e?.link}>
                  {e?.name}
                  </a>
                </MenuBtn>
            ))
            }
        </FlexDiv>

    </NavDiv>)
}

export default NavBar
const NavDiv = styled.div((props: { theme: IThemeType, index: boolean }) => [
  tw`
    h-[140px] bg-transparent
    absolute flex justify-between
    pr-[30px] pl-[100px]
    `,
  {
    width: props.index ? '-webkit-fill-available' : 'calc(100% - 30px)',
    paddingLeft: props.index & 0,
    backgroundColor: props.index ? 'transparent' : props.theme.themeColorset.baseColor,
    boxShadow: '10px 10px 20px 10px rgba(0,0,0,0.05)'
  }
])

const FlexDiv = styled.div([
  tw`flex gap-[10px]`
])

const MenuBtn = styled.button((props: { theme: IThemeType }) => [
  tw`
  w-fit
  bg-transparent border-none 
  text-[16px] font-bold whitespace-pre`,
  { color: props.theme.themeColorset.textColor }
])

const Hr = styled.hr([
  tw`
    w-[calc(100vw - 450px)] absolute top-[30px]
    border-white border-[1px] opacity-50
    z-1
    `
])
