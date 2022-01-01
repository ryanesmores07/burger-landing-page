import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menu = ({ item, index }) => {
  const { name, price, rating, image } = item
  return (
    <MenuContainer>
      <GatsbyImage image={getImage(image)} alt="name" className="img" />
      <h2>{name}</h2>
      <h4>{rating}</h4>
      <h3>{price}</h3>
    </MenuContainer>
  )
}

const MenuContainer = styled.article`
  text-align: center;
  border: 1px solid red;

  .img {
    width: 10rem;
  }
`

export default Menu
