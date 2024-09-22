// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bootcamps">Bootcamps</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav-links">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
