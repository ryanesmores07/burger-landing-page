import React from "react"
import { useParams, Link } from "react-router-dom"
const url = "https://ryan-burger-api.herokuapp.com/burgers"

const SingleBurger = () => {
  const { id } = useParams()
  return (
    <div>
      <h4>{id}</h4>
    </div>
  )
}

export default SingleBurger
