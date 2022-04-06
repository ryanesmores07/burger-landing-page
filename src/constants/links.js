import React from "react"
import { MdHome, MdRestaurantMenu, MdContactMail } from "react-icons/md"
import { BiCabinet } from "react-icons/bi"

const data = [
  {
    id: 1,
    text: "Home",
    url: "/",
    icon: <MdHome className="icon" />,
  },
  {
    id: 2,
    text: "Menu",
    url: "/menu/",
    icon: <MdRestaurantMenu className="icon" />,
  },
  // {
  //   id: 3,
  //   text: "Contact",
  //   url: "/contact/",
  //   icon: <MdContactMail className="icon" />,
  // },
  {
    id: 4,
    text: "About us",
    url: "/about/",
    icon: <BiCabinet className="icon" />,
  },
  // {
  //   id: 5,
  //   text: "Pricing",
  //   url: "/pricing/",
  // },
]

export default data
