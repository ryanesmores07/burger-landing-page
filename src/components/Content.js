import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => {
  return (
    <ContentContainer>
      <div className="image-wrapper">
        <StaticImage
          src="../assets/images/hero.jpg"
          alt="delivery"
          className="image-hero"
        />
      </div>

      <section className="grid-container">
        <div className="information">
          <h1>Fastest & cheapest burger delivery service</h1>
          <p>
            Get the best quality and most delicious burgers in the world, you
            can get them all at BoogerBurger
          </p>

          <button className="btn">Order burger</button>
        </div>
        <div className="images">
          <StaticImage
            src="../assets/images/delivery.jpg"
            alt="delivery"
            className="image"
          />
        </div>
      </section>
      <section className="grid-container">
        <div className="images">
          <StaticImage
            src="../assets/images/quality.jpg"
            alt="delivery"
            className="image"
          />
        </div>
        <div className="information">
          <h1>Best quality burgers for everybody</h1>
          <p>
            We prioritize quality in each of our burgers, below are the
            advantages of our burgers:
          </p>
          <ul>
            <li>✓ Better service than others</li>
            <li>✓ Experienced staff</li>
            <li>✓ User friendly app</li>
          </ul>

          <button className="btn">Read more</button>
        </div>
      </section>
      <section className="grid-container">
        <div className="information">
          <h1>Why should you use our service?</h1>
          <p>
            We always provide the best and fastest service for all of our
            customers
          </p>
          <ul>
            <li>🧑‍💻 We provide the fastest service</li>
            <li>🤑 No additional fees for orders</li>
            <li>⚡️ Fast and reliable delivery</li>
          </ul>
        </div>
        <div className="images">
          <StaticImage
            src="../assets/images/service.jpg"
            alt="delivery"
            className="image"
          />
        </div>
      </section>
    </ContentContainer>
  )
}

const ContentContainer = styled.header`
  padding: 5rem 2rem;
  max-width: 100%;

  .image-wrapper {
    background: rgb(2, 0, 36);
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(231, 146, 3, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );

    .image-hero {
      opacity: 0.7;
      @media (min-width: 791px) {
        display: none;
      }
    }
  }

  .grid-container {
    margin: 3rem 6rem;
    /* margin-bottom: 5rem; */
    display: grid;
    grid-template-columns: 7% repeat(2, minmax(20rem, 1fr)) 7%;
    align-items: center;
    justify-items: center;

    @media (max-width: 480px) {
      display: block;
    }

    @media (max-width: 945px) {
      grid-template-columns: 2% repeat(2, 1fr) 2%;
    }

    @media (max-width: 790px) {
      display: block;
    }

    @media (max-width: 600px) {
      margin: 0;
      display: block;
    }
  }

  .information {
    grid-column: 2 / 3;
    font-size: 2rem;

    ul {
      font-size: 1.7rem;
    }

    @media (max-width: 790px) {
      text-align: center;
      margin: 5rem 3rem;
    }
  }

  .images {
    grid-column: 3/ 4;
    justify-self: end;

    @media (max-width: 790px) {
    }

    .image {
      object-fit: cover;

      height: 40vw;
      width: 30vw;

      @media (max-width: 480px) {
        width: 100%;
        height: 100%;
      }

      @media (max-width: 790px) {
        display: none;
      }
    }
  }

  .grid-container:nth-of-type(even) {
    grid-template-columns: 7% repeat(auto-fit, minmax(20rem, 1fr)) 7%;

    @media (max-width: 945px) {
      grid-template-columns: 3% repeat(2, 1fr) 3%;
    }
  }
  .grid-container:nth-of-type(even) .information {
    /* justify-self: center; */
    grid-column: 3/ 4;
  }

  .grid-container:nth-of-type(even) .images {
    justify-self: start;
    grid-column: 2 / 3;

    @media (max-width: 790px) {
      display: block;
    }
  }

  .btn {
    margin-top: 2rem;

    @media (max-width: 790px) {
      font-size: 2rem;
    }
  }
`

export default Content
