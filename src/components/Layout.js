import React, { useContext } from "react"
import "../assets/css/main.css"
import styled from "styled-components"
import { Footer, Navbar, Sidebar } from "../components"
import { AppProvider, AppContext } from "../context"
import { useGlobalContext } from "../context"

const Layout = ({ children }) => {
  // const { items } = useGlobalContext()
  return (
    <Container>
      <SectionCenter>
        <AppProvider>
          <Navbar />
          {/* <Sidebar /> */}

          {children}
          <Footer />
        </AppProvider>
      </SectionCenter>
    </Container>
  )
}

export default Layout

const Container = styled.main`
  background-color: var(--clr-primary-3);
  /* width: 100%; */
  padding: 3rem;
  @media (max-width: 390px) {
    padding: 1rem;
    width: 100%;
  }
`

const SectionCenter = styled.section`
  background-color: #fff;
  border-radius: 30px;
  max-width: 100%;
  width: 100vw;

  z-index: 10;

  margin: 0 auto;
`
