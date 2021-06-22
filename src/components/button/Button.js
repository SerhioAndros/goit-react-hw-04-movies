import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ btnName, btnFunction }) => {
  return (
    <button className={styles.Button} type="button" onClick={btnFunction}>
      {btnName}
    </button>
  );
};

Button.defaultProps = {
  btnName: "Just BTN",
};

Button.propTypes = {
  btnName: PropTypes.string,
  btnFunction: PropTypes.func.isRequired,
};

export default Button;
