import React from "react";

const Button = ({ btnName, btnFunction }) => {
  return (
    <button type="button" onClick={btnFunction}>
      {btnName}
    </button>
  );
};

export default Button;
