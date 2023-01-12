import * as React from "react";
import styled from "@emotion/styled";
import tw from 'twin.macro';
import { Link, useStaticQuery, graphql } from 'gatsby'

const NavDiv = styled.div([
    tw`
    h-[140px] bg-transparent
    absolute flex justify-between
    mx-[30px]
    `,
    `width: -webkit-fill-available;`
    
])

const FlexDiv = styled.div([
    tw`flex gap-[10px]`
])

const MenuBtn = styled.button([
    tw`bg-transparent border-none text-white text-[16px] font-bold`
])


export interface NavBarProps{
    height: string;
}

const NavBar = ({height}: NavBarProps) => {
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
    const {menuLinks} = data.site.siteMetadata;

    console.log(data);
    

    return (<NavDiv style={{"height": height}}>
        <FlexDiv>
        </FlexDiv>
        <FlexDiv>
            {menuLinks.map((e:Object)=> (<MenuBtn key={e?.name}>
                {e?.name}
            </MenuBtn>))
            }
        </FlexDiv>

    </NavDiv>)

}

export default NavBar;