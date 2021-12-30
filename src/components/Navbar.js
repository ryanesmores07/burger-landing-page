import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <NavContainer>
      <div className="logo">
        <StaticImage src="../../static/burger.png" alt="logo" className="img" />
      </div>

      <section className="center">
        <div className="nav-links">
          {links.map(link => {
            const { id, text, url } = link
            return (
              <Link className="link" to={url} key={id}>
                {text}
              </Link>
            )
          })}
        </div>
      </section>
      <div className="btn-login">
        <button className="btn">Login</button>
      </div>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  margin-top: 3rem;
  display: flex;
  padding: 1rem 2rem;
  background-color: transparent;
  text-align: center;
  justify-content: end;

  .center {
    /* display: flex; */
    /* justify-content: center; */
    margin-right: 2rem;
    margin: 0 auto;
    font-size: 2rem;
    align-self: center;
  }

  .logo {
    padding-left: 10rem;
  }

  .btn-login {
    align-self: center;
    padding: 1rem 2rem;
    padding-right: 8rem;
  }

  .img {
    width: 8rem;
  }

  .link {
    margin-right: 2.5rem;
  }
  .nav-links {
    font-size: 2rem;

    align-self: center;
  }
  .nav-links a:hover {
    color: var(--clr-primary-5);
    box-shadow: 0px 2px var(--clr-primary-5);
  }

  .btn {
    border-radius: 50px;
    padding: 1rem 2rem;
    font-size: 1.5rem;
  }
`

export default Navbar
