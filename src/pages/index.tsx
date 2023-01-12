import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "@/components/Layout.tsx";
import styled from "@emotion/styled";
import "@/assets/index.scss";

const Container = styled.div`
width: 100%;
height: 100vh;
padding: 0;
margin: 0;
background: #BA5370; 
background: -webkit-linear-gradient(to right, #F4E2D8, #BA5370);
background: linear-gradient(to right top, #F4E2D8, #BA5370); 
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container>
    
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
