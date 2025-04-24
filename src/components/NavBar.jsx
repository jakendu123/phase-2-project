import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar bg-body-tertiary mx-1">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        GLOBEN AID
      </NavLink>
      <div className=" d-flex justify-content-end">
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
      </div>
    </nav>
  );
}
