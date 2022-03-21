import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import { Link, useParams } from "react-router-dom"

interface Props extends RouteComponentProps<{ id: string }> {}

const SoloBurger: React.FC<Props> = ({ id }) => {
  const [items, setItems] = useState()

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://ryan-burger-api.herokuapp.com/burgers/${id}`
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
    <>
      <h1>SOLOBURGER</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
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

export default SoloBurger
/*
{datas.map((data, index) => {
        const { name, description, image, ingredients, id } = data
        return (
          <>
            <img
              className="img-burger"
              src={image}
              alt="burger"
              path="/app/single-burger/"
              onClick={() => getId(id)}
            />
            <div className="burger-info">
              <h3>{name}</h3>
            </div>
          </>
        )
      })}

      <h1>SOLOBURGER</h1>
      <pre>{JSON.stringify(items, null, 2)}</pre>
*/
