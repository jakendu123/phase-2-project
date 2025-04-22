import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        GLOBEN AID
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}
