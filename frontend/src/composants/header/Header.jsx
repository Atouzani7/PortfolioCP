import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo.svg";

export default function Header() {
  const activeStyle = {
    textDecorationLine: "none",
    backgroundColor: "#6d071a",
  };

  return (
    <div className="headerLook">
      <img className="logo" src={logo} alt="logo" />
      <ul className="navbar">
        <NavLink
          to="/"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            <li className="nav-option">Accueil</li>
          </span>
        </NavLink>
        <NavLink
          to="/skills"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            <li>Compétences</li>
          </span>
        </NavLink>
        <NavLink
          to="/book"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            <li>Portfolio</li>
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <span>
            <li>Contact</li>
          </span>
        </NavLink>
      </ul>
    </div>
  );
}
