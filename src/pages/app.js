import React from "react"
import SoloBurger from "../modules/SoloBurger"
import { Router } from "@reach/router"
import GridPractice from "../modules/gridpractice"
import Burger from "../components/Burger"
// import { BrowserRouter as Route, Switch } from "react-router-dom"

const RouterOne = () => {
  return (
    <Router>
      <SoloBurger path="/menu/:id" />
    </Router>
  )
}

export default RouterOne
