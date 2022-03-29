import React, { useContext } from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"
import { StaticImage } from "gatsby-plugin-image"
import { AppContext } from "../context"

const Navbar = () => {
  const { isSidebarOpen, showSidebar } = useContext(AppContext)

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
        <button className="toggle-btn" onClick={showSidebar}>
          <GoThreeBars />
        </button>
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
    align-items: center;

    @media (max-width: 700px) {
      display: flex;
      justify-content: flex-end;
      padding: 2 0rem 2rem 3rem;
    }
    @media (max-width: 520px) {
    }
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

    @media (max-width: 700px) {
      display: none;
    }
  }

  .logo {
    margin-left: 3rem;
    width: 7rem;

    @media (max-width: 700px) {
      display: none;
    }
  }

  .toggle-btn {
    margin-right: 3rem;
    width: 10vw;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    border-radius: 2rem;
    border: transparent;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      background: var(--clr-primary-3);
    }

    @media (min-width: 701px) {
      display: none;
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
