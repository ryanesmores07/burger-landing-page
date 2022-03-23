import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import Title from "../components/Title"
import Loading from "../components/Loading"

interface Props extends RouteComponentProps<{ id: string }> {}

const SoloBurger: React.FC<Props> = ({ id }) => {
  const [items, setItems] = useState()

  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://ryan-burger-api.herokuapp.com/burgers/${id}`
      )
      const data = await response.json()
      if (data) {
        setItems(data)
      } else {
        setItems(null)
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (items) {
    const { name, ingredients, description, image } = items
    return (
      <>
        <Title title={name} />
        <Wrapper>
          <div className="grid-container">
            <img className="img-burger" src={image} alt="burger" />

            <div className="burger-info">
              <div className="description">
                <h2>Description</h2>
                <h3>{description}</h3>
              </div>
              <div className="ingredients">
                <h2>Ingredients</h2>
                {ingredients.map(ingredient => {
                  return (
                    <ul>
                      <li>
                        <h3>✅ {ingredient}</h3>
                      </li>
                    </ul>
                  )
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    )
  }

  return <></>
}

const Wrapper = styled.article`
  /* background-color: yellow; */
  height: 70vh;

  .grid-container {
    /* background-color: lightblue; */
    display: grid;
    place-items: center;
    width: 60vw;
    height: 100%;

    margin: 0 auto;
    grid-template-columns: repeat(2, minmax(25rem, 1fr));
    align-items: center;
    justify-items: start;
  }
  .img-burger {
    object-fit: cover;
    width: 100%;
    height: 60vh;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease;
      opacity: 0.5;
    }
  }

  .burger-info {
    /* background-color: pink; */
    /* height: 100%; */
    padding: 1rem 2rem;
    display: grid;
    grid-row-gap: 3rem;
    margin: 2rem 1rem;
    h2 {
      margin-bottom: 1.3rem;
    }
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
