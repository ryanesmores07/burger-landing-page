import React from "react"
import "../assets/css/main.css"
import styled from "styled-components"
import { Footer, Navbar } from "../components"
import { AppProvider } from "../pages/context"

const Layout = ({ children }) => {
  return (
    <Container>
      <SectionCenter>
        <AppProvider>
          <Navbar />
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
  display: block;
  /* background-color: var(--clr-grey-10); */
  background-color: #fff;
  border-radius: 30px;
  /* border: 0.1rem solid red; */
  width: 90vw;
  z-index: 10;

  margin: 0 auto;
`
