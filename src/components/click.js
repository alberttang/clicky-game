import React from "react";

const Click = props => (
  <img
    role="img"
    aria-label="click item"
    onClick={() => props.handleClick(props.id)}
    src={`${props.image}`}
    className={`click-item${props.shake ? " shake" : ""}`}
  />
);

export default Click;
