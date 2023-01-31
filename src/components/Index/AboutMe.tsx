import React from 'react'
import { StyledTitle } from '@/components/styled/Title'
import tw from 'twin.macro'
import JsonData from '@/content/Index/About-Me-Content.json'
import styled from '@emotion/styled'

const profile = 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a47fbb51-feb6-4bc5-8481-8818cceec571/KakaoTalk_Image_2022-06-30-14-24-30.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230131T073422Z&X-Amz-Expires=86400&X-Amz-Signature=17fa4c2b71f2c9cbf816e6322a4e144d1d06c88266ee9f2f0d4b35aa1aa574fd&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22KakaoTalk_Image_2022-06-30-14-24-30.png%22&x-id=GetObject'

const AboutMe = () => {
  const StudyContent = JsonData.Study
  const LangContent = JsonData.Languages
  const TechContent = JsonData.Tech

  console.log(StudyContent)

  return <div>
        <StyledTitle title="ABOUT ME"></StyledTitle>
        <FlexDiv1>
          <div style={{ width: '40%' }}>
            <img src={profile} style={{ width: '300px', height: '300px' }}/>
            {/* <hr></hr>
            <hr></hr> */}
          </div>

          <FlexDiv2>
              {/* Study */}
              <div>
                <TitleDiv>{StudyContent.title}</TitleDiv>
                <div>
                  {StudyContent.content.map((e: string, idx: number) => (<ContentLi key={idx}>
                    {e}
                  </ContentLi>))}
                </div>
              </div>

              {/* Language */}
              <div>
                <TitleDiv>{LangContent.title}</TitleDiv>
                <div>
                  {LangContent.content.map((e: string, idx: number) => <ContentLi key={idx}>
                    {e}
                  </ContentLi>)}
                </div>
              </div>

               {/* Tech */}
              <div>
                <TitleDiv>{TechContent.title}</TitleDiv>
                <FlexDiv3>
                  {Object.entries(TechContent.subTitle).map(([title, value], idx) => (
                    <div key={idx} style={{ width: '50%' }}>
                      <SubTitleDiv>{title}</SubTitleDiv>
                      <div>
                        { value.content.map((e: string[], idx: number) => {
                          return (<div style={{ marginTop: '12px' }} key={idx}>{
                            e.map((str: string) => (
                              <img style={{ borderRadius: '4px', height: '24px', marginRight: '4px' }} key={idx} src={`https://img.shields.io/badge/${str}-D8D9CF?style=for-the-badge&logo=${str}&logoColor=black`}/>))
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
flex gap-[30px]

`

const FlexDiv2 = tw.div`
flex flex-col justify-around gap-[20px]
w-[50%]
`

const FlexDiv3 = tw.div`
w-full flex justify-between
`

const Hr = tw.div`
w-[1px]
bg-[rgba(255,255,255,0.2)]
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
