import React from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menus = ({ data }) => {
  console.log(data)
  return (
    <MenuContainer>
      <div className="heading">
        <h2>A special burger in a special mood</h2>
      </div>
      <div className="menu-list">
        {data.map((item, index) => {
          return <Menu item={item} key={index} />
        })}
      </div>
    </MenuContainer>
  )
}

const MenuContainer = styled.section`
  background-color: var(--clr-grey-9);
  width: 100%;
  margin: 7rem auto;
  padding: 7rem 0;

  .menu-list {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    margin: 1rem 4rem;
  }

  .heading {
    width: 50rem;
    margin-bottom: 3rem;

    h2 {
      text-transform: uppercase;
    }
  }
`
export default Menus
