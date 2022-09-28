/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import logo from "../assets/img/logo.svg";

const Navbar = ({ navbar }) => {
  const [hideMobileNav, setHideMobileNav] = useState(true)

  return (
    <header className={navbar ? 'flex header-active' : 'flex header-notactive'}>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav flex">
          <div className={hideMobileNav ? "nav-link nav-hide" : "nav-link nav-show"}>
            <FontAwesomeIcon icon={faXmark} className="icon nav-button-close" onClick={() => setHideMobileNav(true)} />
            <a href="#">Home</a>
            <a href="#">Furniture</a>
            <a href="#">Product</a>
            <a href="#">Store</a>
          </div>
          <div className="nav-button">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            <FontAwesomeIcon icon={faBars} className="icon nav-button-mobile" onClick={() => setHideMobileNav(false)} />
          </div>
        </div>
      </header>
  )
}

export default Navbar