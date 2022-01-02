import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <FooterContainer>
      <section className="logo-section">
        <StaticImage
          src="../../static/burger.png"
          alt="footer_logo"
          className="logo"
        />
        <div className="logo-info">
          <p>
            BoogerBurger is a fast food delivery service with the fastest
            service
          </p>
        </div>
      </section>
      <section className="page-section">
        <h3>page</h3>
        <ul>
          <li>About us</li>
        </ul>
        <ul>
          <li>Career</li>
        </ul>
        <ul>
          <li>Pricing</li>
        </ul>
        <ul>
          <li>Blog</li>
        </ul>
      </section>
      <section className="service-section">
        <h3>our service</h3>
        <ul>
          <li>Help center</li>
        </ul>
        <ul>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Transaction</li>
        </ul>
        <ul>
          <li>Delivery</li>
        </ul>
      </section>
      <section className="subscribe-section">
        <h3>Get latest deals and promos</h3>
        <input className="input" type="text"></input>
        <button className="btn">Subscribe</button>
      </section>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  margin-top: 10rem;
  background-color: var(--clr-grey-9);
  /* background-color: transparent; */
  display: grid;
  position: relative;
  grid-template-columns: 7% repeat(4, 1fr) 7%;
  padding: 3rem;
  place-items: center;
  font-size: 1.5rem;
  align-items: center;
  justify-items: start;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  .logo-section {
    /* padding: 2rem 3rem; */
    grid-column: 2 / 3;

    .logo {
      margin-bottom: 2rem;
      width: 5rem;
    }

    .logo-info {
      width: 15rem;
    }
  }

  .page-section {
    grid-column: 3 / 4;
  }

  .service-section {
    grid-column: 4 /5;
  }

  .subscribe-section {
    transform: translateY(-2.3rem);
    grid-column: 5 / 6;
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
