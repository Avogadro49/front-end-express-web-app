// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={[styles.navbar].join(" ")}>
      <div>
        <ul className={[styles.nav_links].join(" ")}>
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
        <ul className={[styles.nav_links].join(" ")}>
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
