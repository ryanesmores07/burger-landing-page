import React, { useContext } from "react"
import styled from "styled-components"
import links from "../constants/links"
import { Link, graphql } from "gatsby"
import Content from "../components/Content"
import Menus from "../components/Menus"
import Reviews from "../components/Reviews"
import Sidebar from "../components/Sidebar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AppContext } from "../context"

export default function Home({
  data: {
    info: { nodes: data },
  },
}) {
  const { isSidebarOpen } = useContext(AppContext)
  console.log(isSidebarOpen)
  return (
    <>
      <Content />
      {isSidebarOpen && <Sidebar />}

      <Menus data={data} />
      <Reviews />
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
