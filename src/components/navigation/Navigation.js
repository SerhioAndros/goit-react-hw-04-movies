import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            style={{ color: "black" }}
            activeStyle={{ color: "red" }}
          >
            HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={{ color: "black" }}
            activeStyle={{ color: "red" }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
