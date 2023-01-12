import * as React from "react"
import NavBar from "@/components/NavBar.tsx"
import SideBar from "@/components/SideBar.tsx"

export interface LayoutProps  { 
    children: React.ReactNode
 }

const Layout = ({children}:LayoutProps) => {
    return (<div>
        <NavBar height="80px"></NavBar>
        <SideBar></SideBar>
        {children}
    </div>)
}

export default Layout;