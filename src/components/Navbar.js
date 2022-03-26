import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="grid-container">
        {/* <div className="logo"> */}
        <StaticImage
          src="../../static/burger.png"
          alt="logo"
          className="logo"
        />
        {/* </div> */}
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
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  .grid-container {
    /* margin-top: 3rem; */
    background-color: blue;
    display: grid;
    padding: 3rem 2rem;
    background-color: transparent;
    /* grid-template-columns: repeat(2, minmax(15rem, 1fr)); */
    grid-template-columns: 10% 1fr 10%;
    justify-items: center;
    align-items: end;

    /* @media (max-width: 600px) {
      display: block;
    } */
  }

  .nav-links {
    display: flex;

    h3 {
      font-size: 2rem;
    }

    .link {
      margin: 0 2.5rem;
      font-size: 3rem;
    }

    & a:hover {
      color: var(--clr-primary-5);
      box-shadow: 0px 2px var(--clr-primary-5);
    }
  }

  .logo {
    margin-left: 5rem;
    width: 7rem;

    @media (max-width: 600px) {
    }
  }
`

export default Navbar

{
  /* <div className="btn-login">
        <button className="btn">Login</button>
      </div> */
}

// .btn-login {
//     margin-right: 14rem;
//   }

//   .btn {
//     border-radius: 50px;
//     padding: 1rem 2rem;
//     font-size: 1.5rem;
//   }
