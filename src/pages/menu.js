import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Menu = () => {
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const response = await fetch(
      "https://ryan-burger-api.herokuapp.com/burgers"
    )
    const burgers = await response.json()

    return setItems(burgers)
  }
  useEffect(() => {
    const fetch = fetchData()
  }, [])
  // console.log(items[0])

  return (
    <MenuContainer>
      {items.map((item, index) => {
        const { name, description, image, ingredients } = item
        console.log(item.image)
        return (
          <div className="menu-card" key={index}>
            <img src={item.image} alt="burger" className="img-burger" />
          </div>
        )
      })}
    </MenuContainer>
  )
}

const MenuContainer = styled.section`
  /* background-color: pink; */
  /* height: 100vh; */
  padding: 3rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-content: center;

  grid-gap: 3rem;

  .menu-card {
    /* background-color: yellow; */

    width: 100%;
    display: grid;

    align-content: center;
    justify-content: center;

    .img-burger {
      object-fit: cover;
      position: relative;
      width: 25rem;
      height: 25rem;
      border: 0.3rem solid;
    }

    &:hover .img-burger {
      transition: all 0.3s ease;
      opacity: 0.5;
    }
`

export default Menu
