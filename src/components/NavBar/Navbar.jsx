import { Link, NavLink } from "react-router-dom"
import Logo from "@/images/logo.png"
import "./navbar.css"
import { links } from "@/router/links"
import { GoThreeBars } from "react-icons/go"
import { MdOutlineClose } from "react-icons/md"
import { useState } from "react"

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
      <div className="container nav__container">
        <Link className="logo" to="/" onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? "show__nav" : "hide__nav"}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index + 'router'}>
                  <NavLink to={path} className={({ isActive }) => isActive ? "active-nav" : ""}
                    onClick={() => setIsNavShowing(prev => !prev)}>
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar