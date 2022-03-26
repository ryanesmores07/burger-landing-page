import React from "react"
import styled from "styled-components"

const csspractice = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="intro-content">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod unde
            rerum, deleniti ea obcaecati sint hic odit dicta tenetur qui ut
            dolorum provident sit, atque, reprehenderit nulla voluptate!
            Officiis, consectetur?
          </p>
          <p>
            Iste ipsa enim delectus porro, ullam repellendus maiores quis rem
            debitis cum, necessitatibus architecto dolor? Velit, ad quaerat
            blanditiis veritatis expedita totam vel voluptatem officiis officia
            ab modi voluptatibus obcaecati.
          </p>
          <p>
            Accusantium minima iusto nobis fuga hic explicabo unde illum,
            perferendis et animi aperiam quaerat, eaque deleniti alias
            blanditiis exercitationem commodi repudiandae ullam consequatur
            incidunt reiciendis repellat officia laboriosam. Esse, modi.
          </p>
          <p>
            Expedita cupiditate iure odit, delectus placeat optio magnam
            assumenda mollitia aspernatur at saepe nisi commodi natus excepturi
            voluptate. Recusandae nisi dolorem, necessitatibus optio aliquam
            repellat. Adipisci, incidunt. Consequuntur, natus nulla.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  /* INSTRUCTIONS
 *
 * 1) Limit the total width of
 *    the .intro-conent to about half
 *    of it's parent
 *
 * 2) Stop the text from overflowing
 *    out the bottom at small screen
 *    widths
 *
 * You may modify the HTML if needed
 *
 */

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }

  .container {
    background: #23424a;
    color: white;
    font-size: 3rem;
    width: 80%;
    margin: 0 auto;

    padding: 2em;
    /* height: 300px; */

    .intro-content {
      width: 50%;
    }
  }
`
export default csspractice
