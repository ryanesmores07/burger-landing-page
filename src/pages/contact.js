import React from "react"
import styled from "styled-components"
import Title from "../components/Title"
import Sidebar from "../components/Sidebar"
import { useGlobalContext } from "../context"

const Contact = () => {
  const { items, isSidebarOpen } = useGlobalContext()

  return (
    <>
      {isSidebarOpen && <Sidebar />}
      <Wrapper>
        <Title title="Contact" />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
`
export default Contact
