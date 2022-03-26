import React, { useState } from "react"
import people from "../data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"
import styled from "styled-components"
import Title from "../components/Title"

const Reviews = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNumber = number => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const nextPerson = () => {
    setIndex(index => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex(index => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length)
    if (random === index) {
      random = index + 1
    }
    setIndex(checkNumber(random))
  }

  return (
    <ReviewContainer>
      <Title title="review from our happy customers" />

      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight className="icon" />
          </span>
        </div>
        <h2 className="author">{name}</h2>
        {/* <p className="job">{job}</p> */}
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          random review
        </button>
      </article>
    </ReviewContainer>
  )
}

const ReviewContainer = styled.article`
  /* height: 70vh; */
  padding: 3rem;

  display: grid;
  place-items: center;

  .review {
    background: var(--clr-primary-9);
    padding: 1.5rem 2rem;
    border-radius: var(--radius);
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    text-align: center;
    margin: 0 auto;
    place-items: center;
    width: 30%;

    @media (max-width: 630px) {
      width: 50%;
    }
  }

  .img-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1.5rem;

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      background: var(--clr-primary-5);
      position: absolute;
      top: -0.25rem;
      right: -0.5rem;
      border-radius: 50%;
    }
  }

  .person-img {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    position: relative;
  }

  .quote-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 3.5rem;
    height: 3.5rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transform: translateY(25%);
    background: var(--clr-primary-5);
    color: var(--clr-white);

    .icon {
      font-size: 1.7rem;
    }
  }

  .author {
    margin-bottom: 0.25rem;
  }
  /* .job {
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    color: var(--clr-primary-5);
    font-size: 0.85rem;
  } */
  .info {
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }
  .prev-btn,
  .next-btn {
    color: var(--clr-primary-7);
    font-size: 1.25rem;
    background: transparent;
    border-color: transparent;
    margin: 0 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: var(--clr-primary-5);
  }
  .random-btn {
    margin-top: 0.5rem;
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    text-transform: capitalize;
    border-radius: var(--radius);
    transition: var(--transition);
    border-color: transparent;
    cursor: pointer;
  }
  .random-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }
`
export default Reviews
