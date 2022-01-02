import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MdAddShoppingCart } from "react-icons/md"

const Menu = ({ item, index }) => {
  const { name, price, rating, image } = item
  return (
    <MenuContainer>
      <div className="container">
        <GatsbyImage image={getImage(image)} alt="name" className="img" />
        <div className="overlay">
          <div className="text">
            <h2>{name}</h2>
            <h4>⭐️{rating}</h4>
            <h3>💲{price}</h3>
            <Link to="" className="icon">
              <MdAddShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </MenuContainer>
  )
}

const MenuContainer = styled.article`
  text-align: center;
  border: 1px solid red;
  position: relative;

  .container {
    /* width: 50%; */
  }

  .img {
    /* max-width: 100%;
    width: 20rem;
    height: 20rem; */
    display: block;
    width: 100%;
    height: 20rem;
  }

  .container:hover .img {
    transition: all 0.5s ease;
    opacity: 0.5;
  }

  .overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: transparent;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: all 0.5s ease;
  }

  .container:hover .overlay {
    bottom: 0;
    height: 100%;
    background: rgba(255, 216, 168, 0.5);
  }

  .text {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    line-height: 0;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);

    h4 {
      font-size: 2rem;
    }
    h3 {
      font-size: 3rem;
    }
  }

  .icon {
    font-size: 3rem;
    border-radius: 50%;
    border-radius: 1px solid #fff;
    cursor: pointer;
  }
`

export default Menu
