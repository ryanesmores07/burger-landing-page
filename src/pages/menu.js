import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Title } from "../components"
import { useGlobalContext } from "../context"

const Menu = () => {
  // const [items, setItems] = useState([])

  // const fetchData = async () => {
  //   const response = await fetch(
  //     "https://ryan-burger-api.herokuapp.com/burgers"
  //   )
  //   const burgers = await response.json()

  //   return setItems(burgers)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])
  // console.log(items[0])

  const { items } = useGlobalContext()

  return (
    <>
      <Title title="Full burger menu" />
      <MenuContainer>
        {items.map((item, index) => {
          const { name, description, image, ingredients, id } = item

          return (
            <Link to={`/menu/singleburger/${id}`} key={id}>
              <div className="menu-card" key={index}>
                <img src={item.image} alt="burger" className="img-burger" />
                <div className="burger-info">
                  <h2>{name}</h2>
                </div>
              </div>
            </Link>
          )
        })}
      </MenuContainer>
    </>
  )
}

const MenuContainer = styled.section`
  /* background-color: pink; */
  /* height: 100vh; */
  padding: 3rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-content: center;
  align-content: center;
  grid-gap: 3rem;

  .menu-card {
    /* background-color: yellow; */
    width: 100%;

    display: grid;
    align-content: start;
    justify-content: center;

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
  }
`

export default Menu
