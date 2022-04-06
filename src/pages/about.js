import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Title from "../components/Title"
import Sidebar from "../components/Sidebar"
import { useGlobalContext } from "../context"

const About = () => {
  const { items, isSidebarOpen } = useGlobalContext()
  return (
    <>
      {isSidebarOpen && <Sidebar />}
      <Wrapper>
        <div className="container">
          <Title title="Company Profile" />
          <div className="grid-container">
            <h2>Company Name:</h2>
            <h3>BoogerBurger Japan Co., Ltd.</h3>
            <h2>Home page:</h2>
            <a href="https://boogerburger.netlify.app/">
              https://boogerburger.netlify.app/
            </a>
            <h2>Location:</h2>
            <h3>
              Shinjuku Island Tower, 6-5-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo
              163-1339
            </h3>
            <h2>Date of establishment:</h2>
            <h3>
              July 01, 2002 (newly established at the time of transition to the
              holding company system)
            </h3>
            <h2>Capital:</h2>
            <h3>100 million yen</h3>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.article`
  /* background-color: pink; */
  width: 80vw;
  padding-bottom: 5vh;
  margin: 0 auto;

  @media (max-width: 1100px) {
    width: 90%;
  }

  .grid-container {
    background-color: var(--clr-grey-9);
    display: grid;
    grid-template-columns: 20% 1fr;
    align-items: center;
    grid-gap: 2rem 4rem;
    padding: 2rem;
    border: 1px solid black;
    justify-content: space-between;

    h2 {
      font-weight: bold;
      font-size: 2vmin;
    }
    h3 {
      /* font-weight: 600; */
      font-size: 1.6vmin;
      font-weight: 400;
    }

    a {
      font-size: 1.5rem;
    }

    @media (max-width: 890px) {
      h2 {
        font-weight: bold;
        font-size: 1.7vmin;
      }
      h3 {
        font-weight: 400;
        font-size: 1.3vmin;
      }

      a {
        font-size: 1rem;
      }
    }
    @media (max-width: 600px) {
      h2 {
        font-weight: bold;
        font-size: 1.8vmin;
      }
      h3 {
        font-weight: 400;
        font-size: 1.5vmin;
      }

      a {
        font-size: 1rem;
      }
    }
    @media (max-width: 390px) {
      padding: 1rem;
      grid-gap: 1rem;
      h2 {
        font-weight: bold;
        font-size: 1.5vmin;
      }
      h3 {
        font-weight: 400;
        font-size: 1vmax;
      }

      a {
        font-size: 0.8rem;
      }
    }
  }
`

export default About
