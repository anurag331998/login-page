import React from "react";
const Button = (props) => {
  return (
    <button className={props.className} type={props.type} >
      <span >{props.name}</span>
    </button>
  );
};

export default Button;