import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const Content = () => {
  return (
    <ContentContainer>
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
          <h1>Best quality burgers just for you</h1>
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
  margin: 3rem 6rem;
  padding: 0 2rem;

  .grid-container {
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: 7% 1fr 1fr 7%;
    align-items: center;
    justify-items: center;
  }

  .information {
    justify-self: center;
    grid-column: 2 / 3;
    font-size: 2rem;

    ul {
      font-size: 1.7rem;
    }
  }

  .images {
    grid-column: 3/ 4;
    justify-self: end;

    .image {
      height: 30vw;
      width: 50vh;
      border-radius: 30px;
    }
  }

  .grid-container:nth-of-type(even) {
    grid-template-columns: 7% 1fr 1fr 7%;
  }
  .grid-container:nth-of-type(even) .information {
    justify-self: center;
    grid-column: 3/ 4;

    button {
      margin-top: 2rem;
    }
  }

  .grid-container:nth-of-type(even) .images {
    justify-self: start;
    grid-column: 2 / 3;
  }
`

export default Content
