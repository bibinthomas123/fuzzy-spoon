import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";


function Header() {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to={"/"} className="nav__logo">
          Bibin thomas
        </NavLink>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-estate nav__icon" /> Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/about"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-user nav__icon" /> About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/skills"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-desktop-alt nav__icon" /> Skills
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/service"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-briefcase-alt nav__icon" /> Services
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/portfolio"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-scenery nav__icon" /> Portfolio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/blogs"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-scenery nav__icon" /> Blogs
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/contact"}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-message nav__icon" /> Contact
              </NavLink>
            </li>
          </ul>

          <i className="bx bx-x nav__close" onClick={() => showMenu(!Toggle)} />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
