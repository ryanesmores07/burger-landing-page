import React, { useEffect, useState } from "react"

const Menu = () => {
  const [items, setItems] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://my-burger-api.herokuapp.com/burgers/")
    const burgers = await response.json()

    return setItems(burgers)
  }
  useEffect(() => {
    const fetch = fetchData()
  }, [])
  console.log(items)

  return <div>Menu</div>
}

export default Menu
