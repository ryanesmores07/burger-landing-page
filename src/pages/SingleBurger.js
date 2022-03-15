import React from "react"
import { useGlobalContext } from "../context"

const SingleBurger = () => {
  const { loading } = useGlobalContext()
  console.log(loading)
  return (
    <div>
      <h4>single burger</h4>
    </div>
  )
}

export default SingleBurger
