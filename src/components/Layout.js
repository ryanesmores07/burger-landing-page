import React, { useContext } from "react"
import "../assets/css/main.css"
import styled from "styled-components"
import { Footer, Navbar, Sidebar } from "../components"
import { AppProvider, AppContext } from "../context"
import { useGlobalContext } from "../context"

const Layout = ({ children }) => {
  return (
    <Container>
      <SectionCenter>
        <AppProvider>
          <Navbar />
          <Sidebar />
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

  padding: 3rem;
`

const SectionCenter = styled.section`
  background-color: #fff;
  border-radius: 30px;

  max-width: 90vw;
  z-index: 10;

  margin: 0 auto;
`
