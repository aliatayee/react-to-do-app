import React from "react"
import { NavLink } from "react-router-dom"
import { BiHomeSmile } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
const Navbar = () => {
    const links = [
        {
          id: 1,
          path: "/",
          text: "Home",
          icon: BiHomeSmile,
        },
        {
          id: 2,
          path: "/about",
          text: "About",
          icon: BiUser,
        },
      ]

  return (
    <nav className="navBar">
    <ul className="nav-container">
      {links.map(link => {
        return (
            <li key={link.id} className="nav-li">
              <NavLink to={link.path} className={({isActive}) => (isActive ? "active-link" : 'link-text')}>
                <link.icon />
              </NavLink>
            </li>
          )
      })}
    </ul>
  </nav>
)
}
export default Navbar