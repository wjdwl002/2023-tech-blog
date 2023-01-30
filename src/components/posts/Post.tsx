import styled from '@emotion/styled'
import React from 'react'
import tw from 'twin.macro'
import { useTheme, IThemeType } from '@/context/ThemeContext'
import { toStringByFormatting } from '@/utils/date'

interface INodeType {
  id: string
  title: string
  createdAt: string
  properties: {
    Tags: {
      value: any[]
    }
  }
}

export const PostContainer = (post: { node: INodeType }) => {
  const theme = useTheme()
  const { node } = post
  console.log(node)

  return <PostDiv key={node?.id}>
    <PostTitle>
    {node?.title}
    <DateHolder theme={theme}>
      {toStringByFormatting(new Date(node.createdAt))}
    </DateHolder>
    </PostTitle>
      <TagContainer>
      {node?.properties?.Tags?.value.map((tag, idx) =>
        <TagHolder theme={theme} key={idx}>{tag.name}</TagHolder>
      )}

    </TagContainer>
    <hr style={{ marginTop: '40px' }}/>
  </PostDiv>
}

const PostDiv = tw.div`
my-[40px]
`

const PostTitle = tw.div`
text-[1.2rem] text-left  font-bold
pl-[4px]
flex justify-between items-center
`

const DateHolder = styled.span((props: { theme: IThemeType }) => [
  tw`
text-[0.5rem] font-normal
`,
  {
    color: props.theme.themeColorset.textColor
  }
])

const TagContainer = tw.div`
w-full mt-[10px]
flex gap-[8px]
`

const TagHolder = styled.span((props: { theme: IThemeType }) => [
  tw`text-[10px] font-bold px-[12px] py-[4px] rounded-[10px]`,
  {
    backgroundColor: props.theme.themeColorset.subPointColor,
    color: props.theme.themeColorset.pointColor
  }
])
