import React from "react";

const Signs = props => {
  return (
    <button
      id={props.id}
      className="col-xs-2 btn btn-warning digit"
      value={props.sign}
      onClick={props.handleClick}
    >
      {props.sign}
    </button>
  );
};

export default Signs;
