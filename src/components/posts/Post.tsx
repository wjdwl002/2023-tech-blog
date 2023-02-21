import styled from '@emotion/styled'
import React from 'react'
import tw from 'twin.macro'
import { useTheme, IThemeType } from '@/context/ThemeContext'
import { toStringByFormatting } from '@/utils/date'
import { INotionType } from '@/pages/posts'

export const PostContainer = (post: { node: INotionType }) => {
  // eslint-disable-next-line no-useless-escape
  const reg = /[\{\}\[\]?|*~`!^\-_+<>@\#$%&\\\=\'\"]/gi
  const theme = useTheme()
  const { node } = post
  console.log(node)

  return <PostDiv key={node?.id}>
    <InfoContainer>
      <TagContainer>
      {node?.properties?.Tags?.value.map((tag, idx) =>
        <TagHolder theme={theme} key={idx}>{tag.name}</TagHolder>
      )}
      </TagContainer>
      <DateHolder theme={theme}>
        {toStringByFormatting(new Date(node.createdAt))}
      </DateHolder>
    </InfoContainer>
    <PostTitle>
    {node?.title}
    </PostTitle>
    <PreviewDiv>
      {node.markdownString.substring(
        parseInt(node.markdownString.indexOf('-->')) + 4,
        parseInt(node.markdownString.indexOf('-->')) + 500).replace(reg, '')}
    </PreviewDiv>
    <hr style={{ marginTop: '40px' }}/>
  </PostDiv>
}

const PostDiv = tw.div`
my-[40px]
`
const PreviewDiv = styled.div(
  tw`
  w-[100%] h-[50px] max-h-[50px] 
  overflow-hidden whitespace-normal text-ellipsis
  my-[10px] leading-[1.5rem]
  text-left 
  `,
  {
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical'
  }

)

const InfoContainer = tw.div`
flex justify-between
pb-[12px]
`

const PostTitle = tw.div`
text-[1.2rem] text-left font-bold
pl-[4px]
flex justify-between items-center
`

const DateHolder = styled.span((props: { theme: IThemeType }) => [
  tw`
text-[0.7rem] font-normal
`,
  {
    color: props.theme.themeColorset.textColor
  }
])

const TagContainer = tw.div`
flex gap-[8px]
`

const TagHolder = styled.span((props: { theme: IThemeType }) => [
  tw`text-[0.7rem] font-bold px-[12px] py-[4px] rounded-[10px]`,
  {
    backgroundColor: props.theme.themeColorset.subPointColor,
    color: props.theme.themeColorset.pointColor
  }
])
