import React from "react"
import styled from "styled-components"
import Menu from "../components/Menu"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Menus = ({ data }) => {
  return (
    <MenuContainer>
      <div className="title">
        <h2>A special burger for your special mood</h2>
      </div>
      <div className="grid-container">
        <div className="grid-items">
          {data.map((item, index) => {
            return <Menu item={item} key={index} />
          })}
        </div>
      </div>
      <Link to="/menu" type="button" className="btn">
        See full menu
      </Link>
    </MenuContainer>
  )
}

const MenuContainer = styled.section`
  background-color: var(--clr-grey-10);
  width: 100%;
  display: grid;
  place-items: center;
  margin: 7rem auto;
  padding: 10rem 0;

  .grid-container {
    width: 70%;
    display: grid;
    place-items: center;
    grid-gap: 2rem;
    grid-template-columns: 7% repeat(3, 1fr) 7%;
    margin: 3rem 7%;
  }

  .grid-items {
    grid-column: 2 / 5;
  }
  .title {
    width: 50rem;
    margin: 0 4rem;
    text-align: center;
    color: var(--clr-primary-1);

    &:hover {
      transform: skewY(3deg);
      transition: all 0.1s linear;
    }

    h2 {
      text-transform: uppercase;
    }
  }
`
export default Menus
