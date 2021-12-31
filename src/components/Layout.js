import React from "react"
import "../assets/css/main.css"
import Navbar from "./Navbar"
import styled from "styled-components"
import Content from "./Content"

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
  background-color: var(--clr-grey-5);

  padding: 3rem;
`

const SectionCenter = styled.section`
  display: block;
  background-color: var(--clr-grey-10);
  border-radius: 30px;
  border: 0.1rem solid red;
  width: 90vw;

  margin: 0 auto;
`
