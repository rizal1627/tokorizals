import { ReactNode } from "react";
import Footer from "./footer/footer"
import Navbar from "./navbar/navbar"

interface LayoutProps {
  children : ReactNode;
}

export default function Layout(props: LayoutProps) {
  const {children} = props
    return (
      <>
        <Navbar/>
        {children}
        <Footer/>
      </>
      )
  }