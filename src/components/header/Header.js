import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [Toggle, showMenu] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <Link to={"/"} className="nav__logo">
          Bibin Thomas
        </Link>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <Link to={"/"} className="nav__link active-link">
                <i className="uil uil-estate nav__icon" /> Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/about"} className="nav__link">
                <i className="uil uil-estate nav__icon" /> About
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/skills"} className="nav__link">
                <i className="uil uil-estate nav__icon" /> Skills
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/service"} className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon" /> Services
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/portfolio"} className="nav__link">
                <i className="uil uil-scenery nav__icon" /> portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link to={"/contact"} className="nav__link">
                <i className="uil uil-message nav__icon" /> Contact
              </Link>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
