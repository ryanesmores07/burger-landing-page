import React from "react"
import styled from "styled-components"

const csspractice = () => {
  return (
    <Wrapper>
      <section className="yawa">
        <h1>responsive layouts dont have to be a struggle</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          excepturi aliquam aperiam placeat repudiandae quidem harum nihil
          perspiciatis exercitationem nulla asperiores iste quibusdam qui eum,
          numquam ea omnis. Ullam sequi non enim asperiores nesciunt, delectus
          officia facilis impedit tempore nihil est, corrupti, odio culpa sed
          ipsa reprehenderit adipisci mollitia eius numquam exercitationem quam!
          Aspernatur voluptatibus repudiandae deleniti eveniet veniam
          voluptatem, expedita amet dolores molestiae cupiditate aut, distinctio
          incidunt placeat delectus rem dignissimos labore veritatis soluta
          sapiente assumenda. Dolorum, fuga nemo distinctio voluptates quam sit,
          cupiditate aperiam odio ea nam placeat nesciunt tempore doloremque
          corrupti dolores velit labore ullam dignissimos facilis.
        </p>
        <button>I WANT TO LEARN</button>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 80%;
  max-width: 750px;
  margin: 0 auto;
  background: #23424a;
  color: white;
  padding: 50px 10rem;
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
  h1 {
    font-size: 3rem;
  }
  p {
    color: white;
  }

  .yawa {
    width: 50%;
  }

  button {
    font-size: 1.5rem;
    padding: 1rem 2rem;
    border-radius: 25px;
    color: #23424a;
    font-weight: 700;
    background-color: #38cfd9;
  }
`

/* INSTRUCTIONS
 *
 * 1) Keep the text inside .intro-content
 *    in the same place, but have the background
 *    extend from one side of the viewport
 *    to the other, no matter how wide or narrow
 *    the browser is.
 *
 * 2) Limit the maximum width of the text in the
 *    bottom area.
 *
 * You may modify the HTML if needed
 * (you probably should for this challenge)
 *
 */
export default csspractice
