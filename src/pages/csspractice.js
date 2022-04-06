import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import logo from "../../static/logo.svg"

const csspractice = () => {
  return (
    <Wrapper>
      <header>
        <div className="container row">
          <a className="logo" href="#">
            <img src={logo} alt="logosss" />
          </a>
          <nav className="nav">
            <ul className="nav-list nav-primary">
              <li className="nav-item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="nav-list nav-secondary">
              <li className="nav-item">
                <a href="#" className="nav__link">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link btn">
                  Sign up
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero-container">
        <div className="hero">
          <h1>responsive layouts dont have to be a struggle</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            excepturi aliquam aperiam placeat repudiandae quidem harum nihil
            perspiciatis exercitationem nulla asperiores iste quibusdam qui eum,
            numquam ea omnis. Ullam sequi non enim
          </p>
          <button>I WANT TO LEARN</button>
        </div>
        <StaticImage
          className="image"
          src="../assets/images/hero.jpg"
          alt="hero"
        />
      </section>

      <div className="flex-container">
        <div className="flex-item1">
          <h1>quality designs made custom, on demand, just for you</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            vel, placeat sint eum facilis, nesciunt eos illum vero ea
            aspernatur, harum maiores odio distinctio animi dicta tempora
            eligendi nostrum deleniti officia iusto dolorem. Fuga maxime qui
            laudantium? Labore ratione ex obcaecati, veritatis officiis quam,
            aspernatur, aliquam officia nisi quasi facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            libero vitae nobis similique deleniti neque, sunt excepturi
            distinctio, laudantium, officia exercitationem optio vel! Excepturi
            optio at tenetur architecto, delectus ipsa!
          </p>
        </div>
        <div className="flex-item2">
          <h1>cheap</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
            adipisci est, optio maxime voluptatibus dicta quis voluptate
            explicabo placeat.
          </p>
          <h1>quick</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
            adipisci est, optio maxime voluptatibus dicta quis voluptate
            explicabo placeat.
          </p>
          <h1>quality</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odio
            adipisci est, optio maxime voluptatibus dicta quis voluptate
            explicabo placeat.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: #136c72;
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  border: 1px solid black;

  color: white;

  * {
    box-sizing: border-box;
  }
  a {
    color: #fff;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    color: white;
  }

  img {
    max-width: 100%;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container {
    padding: 1rem 5rem;
  }

  .logo {
    margin-right: 2rem;
  }

  .nav {
    background-color: #136c72;
    /* width: 100%; */
    flex-grow: 1;

    display: flex;

    justify-content: space-between;

    .nav-list {
      display: flex;

      align-items: center;
      width: 30%;

      & > * {
        flex: auto;
      }
    }

    .nav-primary {
      /* border: 1px solid pink; */
      margin: 0 auto;
    }
  }

  .hero-container {
    display: flex;
    background: #23424a;
    width: 100%;
    padding: 8rem 5rem;
    justify-content: space-between;

    .hero {
      width: 60%;
    }

    .image {
      width: 35%;

      /* object-fit: cover; */
    }
  }

  .btn {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: #23424a;
    font-weight: 900;
    background-color: #38cfd9;
    padding: 0.75em 2em;
    border-radius: 100px;
  }

  .flex-container {
    background-color: white;
    padding: 3rem;
    display: flex;
    gap: 3rem;
    justify-content: center;

    & {
      h1 {
      }
      p {
      }
    }

    .flex-item1 {
      width: 60%;
      h1 {
        color: #136c72;
      }
      p {
        color: black;
      }
    }

    .flex-item2 {
      background-color: #136c72;
      padding: 2rem;
      text-align: center;
      width: 35%;
      /* margin: 3rem; */
    }
  }
`

/* INSTRUCTIONS
 *
 * 1) Keep the text inside .intro-content
 *    in the same place, but have the background
 *    extend from one side of the viewport
 *    to the other, no matter how wide or narrow
 *    the browser is.
 *
 * 2) Limit the maximum width of the text in the
 *    bottom area.
 *
 * You may modify the HTML if needed
 * (you probably should for this challenge)
 *
 */
export default csspractice
