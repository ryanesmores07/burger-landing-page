import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const csspractice = () => {
  return (
    <Wrapper>
      <header>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="">HOME</a>
            </li>
            <li className="nav-item">
              <a href="">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="">CONTACT</a>
            </li>
            <li className="nav-item">
              <a href="">SIGN IN</a>
            </li>
            <li className="nav-item">
              <button>SIGN UP</button>
            </li>
          </ul>
        </nav>
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
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  border: 1px solid black;

  color: white;
  /* padding: 50px 10rem; */
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

  .nav {
    background-color: #136c72;
    width: 100%;

    .nav-list {
      display: flex;
      padding: 1rem 5rem;
      align-items: center;
      width: 60%;

      & > * {
        flex: auto;
      }
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

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 25px;
    color: #23424a;
    font-weight: 700;
    background-color: #38cfd9;
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
