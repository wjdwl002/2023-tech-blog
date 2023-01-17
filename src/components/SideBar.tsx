import * as React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'

const SideDiv = styled.div([
  tw`
    w-full h-[100vh] bg-white z-10
    flex flex-col justify-end
    `,
  { boxShadow: '10px 10px 20px 10px rgba(0,0,0,0.05)' }
])

const FlexDiv = styled.div([
  tw`
    w-full h-fit py-[40px] 
    flex flex-col gap-[40px] items-center
    `
])

const SideBar = () => {
  return (<SideDiv>
    <FlexDiv>
        <InstagramIcon/>
        <GitHubIcon/>
    </FlexDiv>
    </SideDiv>)
}

export default SideBar
