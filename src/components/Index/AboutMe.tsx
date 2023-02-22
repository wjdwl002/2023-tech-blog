import React from 'react'
import { StyledTitle } from '@/components/styled/Title'
import tw from 'twin.macro'
import JsonData from '@/content/Index/About-Me-Content.json'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'

const profile = '/src/assets/me.png'

const AboutMe = () => {
  const IntroContent = JsonData.Introduction
  const StudyContent = JsonData.Study
  const LangContent = JsonData.Languages
  const TechContent = JsonData.Tech

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "assets/me.png" }) {
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <div>
        <StyledTitle title="ABOUT ME"></StyledTitle>
        <FlexDiv1>
          <div style={{ width: '40%' }}>
            <div>
              <img src="src/components/Index/me.png" style={{ width: '300px', height: '300px' }}/>
            </div>

            <hr/>
            <IntroDiv>
              <IntroTitle>{IntroContent.title}</IntroTitle>
              {IntroContent.content.map((e: string, idx: number) => (<div key={`intro-${idx}`}>{e}</div>))}
            </IntroDiv>
            <hr/>
          </div>

          <FlexDiv2>
              {/* Study */}
              <div>
                <TitleDiv>{StudyContent.title}</TitleDiv>
                <div>
                  {StudyContent.content.map((e: string, idx: number) => (<ContentLi key={`study-${idx}`}>
                    {e}
                  </ContentLi>))}
                </div>
              </div>

              {/* Language */}
              <div>
                <TitleDiv>{LangContent.title}</TitleDiv>
                <div>
                  {LangContent.content.map((e: string, idx: number) => <ContentLi key={`language-${idx}`}>
                    {e}
                  </ContentLi>)}
                </div>
              </div>

               {/* Tech */}
              <div>
                <TitleDiv>{TechContent.title}</TitleDiv>
                <FlexDiv3>
                  {Object.entries(TechContent.subTitle).map(([title, value], idx) => (
                    <div key={`techCategory-${idx}`} style={{ width: '48%' }}>
                      <SubTitleDiv>{title}</SubTitleDiv>
                      <div>
                        { value.content.map((e: string[], idx: number) => {
                          return (<div style={{ marginTop: '12px' }} key={`techSubCategory-${idx}`}>{
                            e.map((str: string) => (
                              <img style={{ borderRadius: '4px', height: '24px', marginRight: '4px' }} key={`tech-${str}-${idx}`} src={`https://img.shields.io/badge/${str}-D8D9CF?style=for-the-badge&logo=${str}&logoColor=black`}/>))
                            }
                         </div>

                          )
                        })}
                      </div>
                    </div>
                  ))}
                </FlexDiv3>
              </div>
          </FlexDiv2>
        </FlexDiv1>
    </div>
}

const FlexDiv1 = tw.div`
w-[100%] max-w-[1200px] 
flex gap-[30px] justify-between

`

const FlexDiv2 = tw.div`
flex flex-col justify-around gap-[20px]
w-[50%]
`

const FlexDiv3 = tw.div`
w-full flex justify-between
`

const Hr = styled.hr([
  tw`h-[1px] my-[5px]`,
  { background: 'linear-gradient(-45deg, #fffaf8, #BA5370, #9796f0, #23d5ab)' }
])

const IntroDiv = tw.div`
my-[20px] px-[10px] leading-6 text-[0.9rem]
`

const IntroTitle = tw.div`
text-[1.4rem] font-bold text-center
mb-[10px]
`

const TitleDiv = styled.div([
  tw`
  text-[1.4rem] font-bold my-[2px]`,
  {
    display: 'inline'
    // borderRadius: '1em 0 1em 0'
    // 'background-image': 'linear-gradient(-100deg, rgba(186, 83, 112, 0.2), rgba(186, 83, 112, 0.7) 95%, rgba(186, 83, 112, 0.1))'
  }
])

const SubTitleDiv = tw.div`
text-[1rem] font-bold my-[8px]
`

const ContentLi = tw.li`
text-[1rem] ml-[10px] my-[0.8rem]
`

export default AboutMe
