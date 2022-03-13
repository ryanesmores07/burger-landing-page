import React from "react"
import styled from "styled-components"

const gridpractice = () => {
  return (
    <Container>
      <div className="item item-1">Orange</div>
      <div className="item item-2">Green</div>
      <div className="item item-3">Violet</div>
      <div className="item item-4">Pink</div>
      <div className="item item-5">Blue</div>
      <div className="item item-6">Brown</div>
      <div className="item item-7">Purple</div>
      <div className="item item-8">Gold</div>
    </Container>
  )
}

export default gridpractice

const Container = styled.section`
  background-color: #eee;
  width: 1000px;
  /* height: 80vh; */
  margin: 3rem auto;
  display: grid;
  grid-template-rows: repeat(2, minmax(150px, min-content));
  grid-template-columns: max-content 1fr 1fr min-content;

  .item {
    padding: 10px;
    font-size: 30px;
    font-family: sans-serif;
    color: white;

    &-1 {
      background-color: orange;
    }

    &-2 {
      background-color: green;
    }
    &-3 {
      background-color: violet;
    }
    &-4 {
      background-color: pink;
    }
    &-5 {
      background-color: blue;
    }
    &-6 {
      background-color: brown;
    }
    &-7 {
      background-color: purple;
    }
    &-8 {
      background-color: gold;
    }
  }
`
