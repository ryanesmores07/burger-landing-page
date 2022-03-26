import React, { useState, useEffect, FC } from "react"

import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SingleBurg from "../pages/menu/SingleBurg"
import { Router as MyRouter } from "@reach/router"

const Burger = ({ name, description, image, ingredients, id }) => {
  const [items, setItems] = useState()
  // console.log(useParams)

  const getId = id => {
    // console.log(id)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://ryan-burger-api.herokuapp.com/burgers/`
      )
      const data = await response.json()

      return setItems(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    // <pre>{JSON.stringify(items, null, 2)}</pre>
    <>
      <Link to={`/menu/${id + 1}`}>
        <img
          className="img-burger"
          src={image}
          alt="burger"
          path="/app/single-burger/"
          onClick={() => getId(id)}
        />
      </Link>

      <div className="burger-info">
        <h3>{name}</h3>
      </div>
    </>
  )
}

const Wrapper = styled.article`
  .img-burger {
    object-fit: cover;
    width: 25rem;
    height: 25rem;
    border: 0.3rem solid;
    margin: 0 auto;
    cursor: pointer;
    /* opacity: 0.5; */

    &:hover {
      transition: all 0.3s ease;
      opacity: 0.5;
    }
  }

  .burger-info {
    text-align: center;
    align-self: start;
  }
`

export default Burger
