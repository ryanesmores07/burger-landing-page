import React, { useState, useEffect, useContext } from "react"
import { RouteComponentProps } from "@reach/router"
import styled from "styled-components"
import Title from "../components/Title"
import Loading from "../components/Loading"
import Sidebar from "../components/Sidebar"
import { useGlobalContext } from "../context"

interface Props extends RouteComponentProps<{ id: string }> {}

const SoloBurger: React.FC<Props> = ({ id }) => {
  const { isSidebarOpen } = useGlobalContext()
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
        {isSidebarOpen && <Sidebar />}
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
                        <h3 className="ingredients-list">✅ {ingredient}</h3>
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
  width: 100%;
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 850px) {
    max-width: 90%;
  }

  .grid-container {
    /* background-color: lightblue; */
    /* height: 20rem; */
    display: grid;
    place-items: center;
    place-content: center;
    /* background-color: var(--clr-grey-10); */

    grid-template-columns: repeat(2, minmax(25rem, 1fr));
    align-items: center;

    @media (max-width: 520px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .img-burger {
    object-fit: cover;
    width: 70vw;
    height: 60vh;
    padding: 10rem 0;
    cursor: pointer;

    @media (max-width: 850px) {
      width: 90vw;
      height: 40vh;
    }

    @media (max-width: 520px) {
      max-height: 50vh;
      padding: 0;
    }

    &:hover {
      transition: all 0.3s ease;
      opacity: 0.5;
    }
  }

  .burger-info {
    /* background-color: pink; */
    /* height: 100%; */
    padding: 5rem 2rem;
    display: grid;
    grid-row-gap: 1rem;
    margin: 2rem 1rem;

    @media (max-width: 520px) {
      padding: 0 2rem;

      h2 {
        font-size: 5vw;
        margin-bottom: 0.5rem;
      }
      h3 {
        font-size: 2vw;
      }
    }

    @media (min-width: 1250px) {
      h2 {
        font-size: 4vw;
        margin-bottom: 0;
      }
      h3 {
        font-size: 1.5vw;
      }
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
