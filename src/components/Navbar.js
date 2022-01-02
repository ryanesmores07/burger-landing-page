import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <NavContainer>
      <div className="logo">
        <StaticImage src="../../static/burger.png" alt="logo" />
      </div>

      <div className="nav-links">
        {links.map(link => {
          const { id, text, url } = link
          return (
            <Link className="link" to={url} key={id}>
              <h3>{text}</h3>
            </Link>
          )
        })}
      </div>

      <div className="btn-login">
        <button className="btn">Login</button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  margin-top: 3rem;
  display: flex;
  padding: 3rem 2rem;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;
    align-content: flex-end;
    align-items: center;
    /* background-color: red; */
    font-size: 2rem;
    .link {
      margin: 0 2.5rem;
    }
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }

  .logo {
    align-self: center;
    margin-left: 14rem;
    width: 7rem;
  }

  .btn-login {
    margin-right: 14rem;
  }

  .btn {
    border-radius: 50px;
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
`

export default Navbar
