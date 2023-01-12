import * as React from "react";
import styled from "@emotion/styled";
import tw from 'twin.macro';
import { Link, useStaticQuery, graphql } from 'gatsby'

const SideDiv = styled.div([
    tw`
    w-[120px] h-full bg-white
    absolute
    `,
])

const SideBar = () => {
    
    return (<SideDiv>

    </SideDiv>)

}

export default SideBar;