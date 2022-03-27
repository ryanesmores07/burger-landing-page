import React from "react"
import styled from "styled-components"

const csspractice = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="intro-content">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aspernatur distinctio laudantium dolores. Nulla
            quibusdam reprehenderit eum sit minus aliquid!
          </p>
        </div>
      </div>

      <h2>more content D:</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        mollitia adipisci magnam voluptatibus repellendus fuga ut repellat
        exercitationem eaque amet, omnis aliquam fugiat laudantium id dicta at?
        Consectetur iure porro illum laudantium excepturi a laborum!
      </p>
      <p>
        Sit magni soluta porro fugit placeat eius itaque, accusamus quisquam
        voluptates reiciendis pariatur, vitae molestiae. Minima, quos
        reprehenderit autem animi, nisi necessitatibus eligendi quis modi,
        facilis ipsam nihil odit quaerat! Nisi doloribus harum culpa ipsam!
      </p>
      <p>
        Sint corporis animi repudiandae. Aliquid illum, tenetur magnam provident
        molestiae rem doloremque aspernatur quia reiciendis est facilis enim
        praesentium officia sequi qui debitis exercitationem quaerat hic quos
        recusandae. Architecto repudiandae aperiam tempora iste saepe error.
      </p>
      <p>
        Provident aut suscipit aspernatur doloribus illum assumenda cupiditate
        perferendis dolores! Obcaecati omnis magnam ipsam voluptas ipsa eos
        explicabo quisquam architecto similique, sunt repellendus animi a
        doloribus ab deserunt. Dicta neque nostrum modi, illum debitis dolorem.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }

  .container {
    /* width: 100vw; */
    /* max-width: 750px; */
    margin: 0 auto;
    background: #23424a;
    color: white;
    padding: 50px 0;
  }

  .intro-content {
    width: 50%;
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
