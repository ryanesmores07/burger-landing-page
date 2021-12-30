import React from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <Container>
      <SectionCenter>
        <Navbar />
        {children}
      </SectionCenter>
    </Container>
  )
}

export default Layout

const Container = styled.main`
  background-color: var(--clr-primary-8);

  /* height: 100vh; */
  padding: 3rem;
`

const SectionCenter = styled.section`
  background-color: var(--clr-primary-10);
  border-radius: 30px;
  border: 0.1rem solid red;
  width: 90vw;
  height: 90vh;
  margin: 0 auto;
  position: relative;
`
