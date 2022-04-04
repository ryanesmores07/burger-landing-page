import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Title } from "../components"
import { useGlobalContext } from "../context"
import Burger from "../components/Burger"
import SoloBurger from "../modules/SoloBurger"
import Sidebar from "../components/Sidebar"
import { Router as MyRouter } from "@reach/router"

const Menu = () => {
  const { items, isSidebarOpen } = useGlobalContext()

  return (
    <>
      {isSidebarOpen && <Sidebar />}

      <Title title="Full burger menu" />
      <MenuContainer>
        {items.map((item, index) => {
          const { name, description, image, ingredients, id } = item

          return (
            <Link to={`/menu/${id}`} key={id}>
              <div className="menu-card" key={index}>
                <img src={item.image} alt="burger" className="img-burger" />
                <div className="burger-info">
                  <h3>{name}</h3>
                </div>
              </div>
            </Link>
            // <section className="menu-card">
            //   <Burger key={item.id} {...item}></Burger>
            // </section>
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
  grid-template-columns: repeat(auto-fit, minmax(15rem, 10%));
  justify-content: center;
  align-content: center;
  grid-gap: 3rem;

  @media (max-width: 390px) {
    /* grid-template-columns: 1fr 1fr; */
  }

  .menu-card {
    /* background-color: yellow; */
    width: 100%;

    display: grid;
    align-content: start;
    justify-content: center;

    @media (max-width: 640px) {
      h3 {
        font-size: 3rem;
      }
    }

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

      @media (max-width: 390px) {
        width: 100vw;
        height: 20vh;
        margin-bottom: 1rem;
      }
    }

    .burger-info {
      text-align: center;
      align-self: start;
      @media (max-width: 390px) {
        h3 {
          font-size: 2rem;
        }
      }
    }
  }
`

export default Menu

/*


<MyRouter>
      <SoloBurger items={items} path="/menu/solo-burger" />
    </MyRouter>

    <section className="menu-card">
              <Burger key={item.id} {...item}></Burger>
            </section>
*/
