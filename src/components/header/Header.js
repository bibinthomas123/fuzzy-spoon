import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import useSound from "use-sound";
import click from "../assests/Sounds/Trail Swoosh.mp3";

function Header() {
  const [play] = useSound(click, {
    volume: 0.1,
  });
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to={"/"} onClick={play} className="nav__logo">
          Bibin thomas
        </NavLink>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                to={"/"}
                onClick={play}
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
                onClick={play}
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
                onClick={play}
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
                onClick={play}
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
                onClick={play}
                className={({ isActive }) => {
                  return isActive ? "nav__link active-link" : "nav__link";
                }}
              >
                <i className="uil uil-scenery nav__icon" /> portfolio
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to={"/contact"}
                onClick={play}
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
