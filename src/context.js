import React, { useState, useContext, useEffect } from "react"
import { useCallback } from "react"
import links from "./constants/links"

const url = "https://ryan-burger-api.herokuapp.com/burgers"
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [linkz, setLinkz] = useState(links)

  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      const items = data.forEach(item => {})
      return setItems(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{ items, isSidebarOpen, showSidebar, hideSidebar, linkz }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
