import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <section className="logo-section">
          {/* <StaticImage
          src="../../static/burger.png"
          alt="footer_logo"
          className="logo"
        /> */}
          <div className="logo-info">
            <p>
              <span>BoogerBurger</span> is a fast food delivery service with the
              fastest service
            </p>
          </div>
        </section>
        <section className="page-section">
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
        </section>
        <section className="service-section">
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
        </section>
        <section className="subscribe-section">
          <h3>Get latest deals and promos</h3>
          <input className="input" type="text"></input>
          <button className="btn">Subscribe</button>
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
  grid-template-columns: 3% repeat(auto-fit, minmax(10%, 1fr)) 3%;
  padding: 3rem;
  place-items: center;
  place-content: center;
  font-size: 1.5rem;
  align-items: start;
  justify-items: center;
  gap: 3rem;
 
 
  @media (max-width: 1053px) {
    /* display: flex;
    align-items: flex-start; */
    }
  
  @media (max-width: 390px) {
    grid-template-columns: 1fr;
    
    }

}

  & > * {
      padding: 0 2rem;
      flex: 1;
      @media (max-width: 545px) {
      }

  @media (max-width: 475px) {
    flex-basis: 50%;
  }

  span {
    font-weight: bold;
  }

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
