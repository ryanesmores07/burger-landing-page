import React from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link, graphql } from "gatsby"
import Content from "../components/Content"
import Menus from "../components/Menus"

export default function Home({
  data: {
    info: { nodes: data },
  },
}) {
  return (
    <>
      <Content />
      <Menus data={data} />
    </>
  )
}

export const query = graphql`
  {
    info: allContentfulBurger {
      nodes {
        name
        price
        rating
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
