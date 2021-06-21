import React from "react";
import PropTypes from "prop-types";

const Button = ({ btnName, btnFunction }) => {
  return (
    <button type="button" onClick={btnFunction}>
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
