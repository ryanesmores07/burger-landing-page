import React from "react"
import styled from "styled-components"

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  width: 70%;

  margin: 5rem auto;
  text-align: center;
  color: var(--clr-primary-1);

  &:hover {
    transform: skewY(3deg);
    transition: all 0.1s linear;
  }

  h2 {
    text-transform: uppercase;
  }
`

export default Title
