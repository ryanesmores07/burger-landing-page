import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <NavContainer>
      <section className="center">
        <StaticImage src="../../static/burger.png" alt="logo" className="img" />
        {links.map(link => {
          const { id, text, url } = link
          return (
            <Link to={url} key={id}>
              {text}
            </Link>
          )
        })}
      </section>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  background-color: pink;
  text-align: center;
  .center {
    margin: 0 auto;
    font-size: 2rem;
  }

  .img {
    width: 10rem;
  }
`

export default Navbar
