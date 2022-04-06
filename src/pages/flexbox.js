import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import moduleName from "../assets/images/Flexbox practice photos/image-01.jpg"

const flexbox = () => {
  return (
    <Wrapper>
      <main className="hero-layout">
        <h2 style={{ fontWeight: 300 }}>lorem ipsum sit</h2>
        <h1>Responsive Layouts don't have to be a struggle</h1>
      </main>
      <div className="center-layout center">
        <h2 style={{ marginBottom: "3rem" }}>quality designs</h2>
        <div className="center-flex">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            vivamus arcu felis bibendum ut tristique. Arcu dui vivamus arcu
            felis. Sociis natoque penatibus et magnis dis.
          </p>
          <p>
            Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
            amet luctus venenatis. Turpis in eu mi bibendum neque egestas congue
            quisque egestas. Pellentesque sit amet porttitor eget dolor morbi
            non.
          </p>
        </div>
      </div>
      <div className="made-custom-layout">
        <div className="text-area">
          <h2>made custom for you</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <StaticImage
          className="image1"
          src="../assets/images/Flexbox practice photos/image-01.jpg"
          alt="image 1"
        />
      </div>
      <div
        className="made-custom-layout"
        style={{ backgroundColor: "#824936" }}
      >
        <StaticImage
          className="image1"
          src="../assets/images/Flexbox practice photos/image-02.jpg"
          alt="image 2"
        />
        <div className="text-area">
          <h2>Created with care</h2>
          <p>
            Felis donec et odio pellentesque diam volutpat. Aliquam purus sit
            amet luctus venenatis. Turpis in eu mi bibendum neque egestas congue
            quisque egestas. Pellentesque sit amet porttitor eget dolor morbi
            non.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: #f3eed9;
  width: 100%;
  border: 1px solid black;

  .hero-layout {
    width: 60%;

    /* padding: 10vh 17vw; */
    min-height: 66rem;

    display: flex;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;
  }

  .center-layout {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 30rem;
    padding: 3rem;
    justify-content: center;
    color: #824936;

    .center-flex {
      display: flex;
      font-size: 1.5rem;
      width: 80%;
      gap: 5rem;
      justify-content: space-between;
    }
  }

  .made-custom-layout {
    p {
      color: #fff;
      font-size: 1.5rem;
    }
    display: flex;
    color: #fff;
    background-color: #222c2a;
    justify-content: center;
    gap: 5rem;
    padding: 5rem 7rem;

    align-items: flex-start;

    .text-area {
      width: 40%;
    }

    .image1 {
      width: 40%;
    }
  }
`

export default flexbox
