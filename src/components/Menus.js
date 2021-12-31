import React from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Menus = ({ data }) => {
  console.log(data)
  return (
    <MenuContainer>
      <div className="grid-container">
        <div className="heading">
          <h2>A special burger in a special mood</h2>
        </div>
        <div className="menu-list">
          {data.map((item, index) => {
            return <Menu item={item} key={index} />
          })}
        </div>
      </div>
    </MenuContainer>
  )
}

const MenuContainer = styled.section`
  margin: 3rem 6rem;
  padding: 0 2rem;

  .grid-container {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  .heading {
    grid-row: 1 /2;
  }

  .menu-list {
    grid-row: 2/3;
  }
`
export default Menus
