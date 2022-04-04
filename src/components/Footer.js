import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="logo-section">
          <div className="logo-info">
            <p>
              <strong>BoogerBurger </strong>
              is a fast food delivery service with the fastest service
            </p>
          </div>
        </section>
        <section className="page-section">
          <div className="page-section-info">
            <h3>page</h3>
            <ul>
              <Link to="/">About us</Link>
            </ul>
            <ul>
              <Link to="/">Career</Link>
            </ul>
            <ul>
              <Link to="/">Pricing</Link>
            </ul>
            <ul>
              <Link to="/">Blog</Link>
            </ul>
          </div>
        </section>
        <section className="service-section">
          <div className="service-section-info">
            <h3>our service</h3>
            <ul>
              <Link to="/">Help center</Link>
            </ul>
            <ul>
              <Link to="/">FAQ</Link>
            </ul>
            <ul>
              <Link to="/">Transaction</Link>
            </ul>
            <ul>
              <Link to="/">Delivery</Link>
            </ul>
          </div>
        </section>
        <section className="subscribe-section">
          <div className="sub-info">
            <h3>Get latest deals and promos</h3>
            <input className="input" type="email"></input>
            <button className="btn">Subscribe</button>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: var(--clr-grey-9);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  .container {
    /* width: 90%; */
    max-width: 80vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1% repeat(auto-fit, minmax(10%, 1fr)) 1%;
    padding: 3rem 0;
    place-items: center;
    place-content: center;
    font-size: 1.5rem;
    align-items: start;
    justify-items: center;
    grid-gap: 3rem;

    & > * {
      /* padding: 0 2rem; */
      /* flex: 1; */
    }

    @media (max-width: 520px) {
      font-size: 2rem;
    }

    @media (max-width: 1053px) {
      /* display: flex;
    align-items: flex-start; */
    }
  }

  .logo-section {
    /* padding: 2rem 3rem; */
    grid-column: 2 / 3;
    @media (max-width: 520px) {
      grid-column: 1 / -1;
      text-align: center;
    }
  }

  .page-section {
    grid-column: 3 / 4;
    @media (max-width: 520px) {
      grid-column: 2 / span 2;
    }
  }

  .service-section {
    grid-column: 4 /5;
    @media (max-width: 520px) {
      grid-column: 5 / span 2;
    }
  }

  .subscribe-section {
    grid-column: 5 / 6;
    @media (max-width: 520px) {
      grid-column: 1 / -1;
    }
  }

  h3 {
    font-size: 2rem;
  }

  input {
    width: 50%;
    padding: 0.5rem;
  }
`
export default Footer
