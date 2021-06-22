import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const style = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: 25,
  color: "white",
  textDecoration: "none",
};
const styleActive = {
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: 25,
  color: "darkblue",
  textDecoration: "none",
};
const Navigation = () => {
  return (
    <div className={styles.HeaderBar}>
      <nav>
        <ul className={styles.List}>
          <li className={styles.ListItem}>
            <NavLink exact to="/" style={style} activeStyle={styleActive}>
              Homepage
            </NavLink>
          </li>
          <li className={styles.ListItem}>
            <NavLink to="/movies" style={style} activeStyle={styleActive}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
