import React from "react"
import styled from "styled-components"
import Title from "../components/Title"

const contact = () => {
  return (
    <Wrapper>
      <Title title="Contact" />
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  margin: 0 auto;
`
export default contact
