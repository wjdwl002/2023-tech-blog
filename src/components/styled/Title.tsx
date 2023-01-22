import styled from '@emotion/styled'
import React from 'react'
import tw from 'twin.macro'

export const StyledTitle = ({ title }: { title: string }) => {
  return (
    <div>
        <Deco title={title} className='gradient'/>
        <Title>
            {title}
        </Title>
    </div>)
}

const Title = tw.span`
text-[1.4rem] font-bold
`
const Deco = styled.div((props: { title: string }) => [
  tw`
    h-[3px] mb-[6px]`,
  {
    width: `${props.title.length * 14}px`
  //     boxShadow: '0 0 20px 10px #fff,  0 0 40px 20px #9796f0, 0 0 50px 30px #BA5370'
  }
])
