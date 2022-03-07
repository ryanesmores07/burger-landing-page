import React from "react"

const fetch = async function () {
  const res = await fetch("https://burgers1.p.rapidapi.com/burgers", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "burgers1.p.rapidapi.com",
      "x-rapidapi-key": "290de77cbemsh0d7151b75db93a9p1a838djsn6de0476c09c3",
    },
  })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
}

const menu = () => {
  fetch()
  return <div>Menu</div>
}

export default menu
