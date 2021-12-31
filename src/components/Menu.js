import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menu = ({ item, index }) => {
  const { name, price, rating, image } = item
  return (
    <MenuContainer>
      <GatsbyImage image={getImage(image)} alt="name" className="img" />
    </MenuContainer>
  )
}

const MenuContainer = styled.article`
  width: 30rem;
  display: grid;
  grid-template-rows: repeat(5, 1fr);

  .img {
    width: 10rem;
  }
`

export default Menu
