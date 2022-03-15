import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"

const url = "https://ryan-burger-api.herokuapp.com/burgers"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      return setItems(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  // console.log(items[0])
  return <AppContext.Provider value={{ items }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
