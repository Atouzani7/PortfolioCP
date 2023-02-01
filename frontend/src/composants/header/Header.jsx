import "./Header.scss";
import { NavLink } from "react-router-dom";
import logo from "@assets/logo.svg";

export default function Header() {
  const activeStyle = {
    textDecorationLine: "none",
  };

  return (
    <div className="headerLook">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <NavLink
          to="/"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li className="nav-option">Accueil</li>
        </NavLink>
        <NavLink
          to="/skills"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Compétences</li>
        </NavLink>
        <NavLink
          to="/book"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Portfolio</li>
        </NavLink>
        <NavLink
          to="/contact"
          className="nav-links"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Contactez-moi</li>
        </NavLink>
      </ul>
    </div>
  );
}
